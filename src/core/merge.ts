import { detectAllergens, FIELD_SPECS } from './fields';
import type { LabelField, LabelReading, RawField, RawReading } from './types';

export interface ReadingInput {
  local: RawReading;
  /** Only the fields the on-device pass was unsure about (see escalate.ts). */
  crossCheck?: RawReading;
  deviceMs: number;
  cloudMs: number;
  deviceSource: 'on_device' | 'in_cloud';
  now?: number;
  id?: string;
  productKey?: string;
}

/** Keep the printed number (comma or dot), ignore the unit and the rest. */
export function toNumber(value: string): number | null {
  const match = /-?\d+(?:[.,]\d+)?/.exec(value);
  if (!match) return null;
  const parsed = Number(match[0].replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : null;
}

const buildField = (key: string, local?: RawField, cloud?: RawField): LabelField | null => {
  const spec = FIELD_SPECS.find((item) => item.key === key);
  if (!spec) return null;
  const cloudValue = cloud?.value?.trim() ?? '';
  const localValue = local?.value?.trim() ?? '';
  if (!localValue && !cloudValue) return null;
  const fromCloud = Boolean(cloudValue) && (!localValue || Boolean(cloud));
  const chosen = fromCloud ? cloud! : local!;
  return {
    key,
    label: spec.label,
    category: spec.category,
    kind: spec.kind,
    value: chosen.value.trim(),
    numeric: spec.kind === 'number' ? toNumber(chosen.value) : null,
    unit: spec.unit,
    confidence: chosen.confidence,
    provenance: fromCloud ? 'cloud' : 'local',
    reason: fromCloud ? cloud?.why ?? 'cross-checked in the cloud' : undefined,
    zone: spec.zone,
  };
}

const slug = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'label';

const newId = (now: number): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `label-${now}-${Math.round(Math.random() * 1e6)}`;

/**
 * Merge the on-device reading with the cloud cross-check into one reading
 * where every field carries its provenance.
 */
export function buildReading(input: ReadingInput): LabelReading {
  const now = input.now ?? Date.now();
  const fields: LabelField[] = [];
  for (const spec of FIELD_SPECS) {
    const field = buildField(spec.key, input.local.fields[spec.key], input.crossCheck?.fields[spec.key]);
    if (field) fields.push(field);
  }
  const value = (key: string): string => fields.find((field) => field.key === key)?.value ?? '';
  const allergens = detectAllergens(`${value('allergens')} ${value('ingredients')}`);
  const traces = detectAllergens(value('mayContain'));
  const localCount = fields.filter((field) => field.provenance === 'local').length;
  const cloudCount = fields.filter((field) => field.provenance === 'cloud').length;
  const productName = input.local.product || 'Untitled product';
  return {
    id: input.id ?? newId(now),
    productKey: input.productKey ?? slug(productName),
    productName,
    netWeight: input.local.netWeight,
    readAt: now,
    fields,
    allergens,
    traces,
    localCount,
    cloudCount,
    deviceMs: Math.round(input.deviceMs),
    cloudMs: Math.round(input.cloudMs),
    totalMs: Math.round(input.deviceMs + input.cloudMs),
    deviceSource: input.deviceSource,
  };
}

/** Field lookup used by the UI (missing keys render as a reading state). */
export function fieldOf(reading: LabelReading, key: string): LabelField | undefined {
  return reading.fields.find((field) => field.key === key);
}
