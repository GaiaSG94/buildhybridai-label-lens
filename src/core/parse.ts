import { FIELD_SPECS } from './fields';
import type { RawField, RawReading } from './types';

/** Confidence given to a value the model returned without a score. */
const DEFAULT_CONFIDENCE = 0.6;
/** Confidence given to a value recovered from the tolerant line fallback. */
const LINE_CONFIDENCE = 0.55;

const stripCodeFence = (raw: string): string =>
  raw
    .replace(/^\s*```[a-z]*\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

const asText = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : typeof value === 'number' ? String(value) : '';

/** Read a confidence written as 0.82, "82%", "0,82" or 82. */
export function parseConfidence(value: unknown, fallback = 0): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    const scaled = value > 1 ? value / 100 : value;
    return Math.min(1, Math.max(0, scaled));
  }
  if (typeof value !== 'string') return fallback;
  const match = /-?\d+(?:[.,]\d+)?/.exec(value);
  if (!match) return fallback;
  const parsed = Number(match[0].replace(',', '.'));
  if (!Number.isFinite(parsed)) return fallback;
  const scaled = /%/.test(value) || parsed > 1 ? parsed / 100 : parsed;
  return Math.min(1, Math.max(0, scaled));
}

/** Turn one JSON entry into a field, or null when there is nothing to keep. */
const toRawField = (entry: unknown): RawField | null => {
  if (entry === null || entry === undefined) return null;
  if (typeof entry === 'string' || typeof entry === 'number') {
    const value = asText(entry);
    return value ? { value, confidence: DEFAULT_CONFIDENCE } : null;
  }
  if (typeof entry !== 'object') return null;
  const record = entry as Record<string, unknown>;
  const value = asText(record.value) || asText(record.text);
  if (!value) return null;
  return {
    value,
    confidence: parseConfidence(record.confidence, DEFAULT_CONFIDENCE),
    why: asText(record.why) || asText(record.reason) || undefined,
  };
}

const readJsonReading = (node: Record<string, unknown>): RawReading => {
  const source = (node.fields ?? node) as Record<string, unknown>;
  const fields: Record<string, RawField> = {};
  for (const spec of FIELD_SPECS) {
    const field = toRawField(source[spec.key]);
    if (field) fields[spec.key] = field;
  }
  return {
    product: asText(node.product) || asText(node.productName) || 'Untitled product',
    netWeight: asText(node.netWeight) || asText(node.weight),
    fields,
  };
}

const normalizeKey = (text: string): string => text.toLowerCase().replace(/[^a-z0-9]/g, '');

const specForKey = (key: string) =>
  FIELD_SPECS.find(
    (spec) => normalizeKey(spec.key) === normalizeKey(key) || normalizeKey(spec.label) === normalizeKey(key),
  );

/** Tolerant fallback: one `KEY: value` per line, no confidence in the text. */
const readLineReading = (text: string): RawReading => {
  const fields: Record<string, RawField> = {};
  let product = '';
  let netWeight = '';
  for (const line of text.split(/\r?\n/)) {
    const match = /^\s*([A-Za-z][A-Za-z /&-]*):\s*(.*)$/.exec(line);
    if (!match) continue;
    const value = match[2].trim();
    if (!value) continue;
    const key = normalizeKey(match[1]);
    if (key === 'product' || key === 'productname') product = value;
    else if (key === 'netweight' || key === 'weight') netWeight = value;
    else {
      const spec = specForKey(match[1]);
      if (spec) fields[spec.key] = { value, confidence: LINE_CONFIDENCE };
    }
  }
  return { product: product || 'Untitled product', netWeight, fields };
}

/**
 * Parse what the model returned.
 * Strict JSON first (the prompt asks for it), then a tolerant line fallback so
 * a truncated answer still gives the cloud cross-check something to fix.
 */
export function parseModelOutput(raw: string): RawReading {
  const text = stripCodeFence(raw);
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try {
      const node = JSON.parse(text.slice(start, end + 1)) as Record<string, unknown>;
      return readJsonReading(node);
    } catch {
      // fall through to the tolerant reader
    }
  }
  return readLineReading(text);
}

/** Fields the model did not return at all (they still need a value). */
export function missingKeys(reading: RawReading): string[] {
  return FIELD_SPECS.filter((spec) => !reading.fields[spec.key]?.value).map((spec) => spec.key);
}
