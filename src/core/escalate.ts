import { fieldSpec } from './fields';
import { missingKeys } from './parse';
import type { RawReading } from './types';

/** A field sent to the cloud, with the reason shown under the value. */
export interface Escalation {
  key: string;
  reason: string;
}

/** Watched categories are cross-checked a little earlier than the rest. */
const WATCHED_MARGIN = 0.15;

const percent = (value: number): string => `${Math.round(value * 100)}%`;

const reasonFor = (
  raw: RawReading,
  key: string,
  threshold: number,
  watched: readonly string[],
): string | undefined => {
  const spec = fieldSpec(key);
  const field = raw.fields[key];
  if (!spec) return undefined;
  if (!field?.value) return 'not read on device';
  if (watched.includes(spec.category)) {
    const watchedThreshold = Math.min(0.95, threshold + WATCHED_MARGIN);
    if (field.confidence < watchedThreshold) {
      return `watched field read at ${percent(field.confidence)} (needs ${percent(watchedThreshold)})`;
    }
  }
  if (field.confidence < threshold) {
    return `read at ${percent(field.confidence)} on device (needs ${percent(threshold)})`;
  }
  if (field.why) return field.why;
  return undefined;
}

/**
 * Fields that go to the cloud: missing, below the threshold, or a watched
 * category read with less than threshold + margin. Nothing else is sent.
 */
export function escalateKeys(
  raw: RawReading,
  threshold: number,
  watched: readonly string[],
): Escalation[] {
  const escalations: Escalation[] = [];
  for (const key of missingKeys(raw)) {
    if (!fieldSpec(key)) continue;
    escalations.push({ key, reason: 'not read on device' });
  }
  for (const [key, field] of Object.entries(raw.fields)) {
    if (!field.value) continue;
    const reason = reasonFor(raw, key, threshold, watched);
    if (reason) escalations.push({ key, reason });
  }
  return escalations;
}

/** The prompt for the cloud pass: the uncertain fields only, never the read ones. */
export function buildCrossCheckPrompt(keys: string[], escalations: Escalation[], watched: readonly string[]): string {
  const lines = keys.map((key) => {
    const spec = fieldSpec(key);
    const reason = escalations.find((item) => item.key === key)?.reason ?? 'uncertain';
    return `- ${key} (${spec?.label ?? key}, ${spec?.unit || 'text'}): ${reason}`;
  });
  return [
    'You are cross-checking a packaging label photo read on the device.',
    'Read ONLY the fields listed below from the image. Do not repeat fields that are already read.',
    'Answer with JSON only, no markdown:',
    '{"fields":{"<key>":{"value":"...","confidence":0.0-1.0,"why":"one short reason"}}}',
    `Watched categories: ${watched.join(', ')}.`,
    'Fields to read:',
    ...lines,
  ].join('\n');
}
