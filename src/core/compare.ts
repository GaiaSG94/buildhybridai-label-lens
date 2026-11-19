import { fieldOf } from './merge';
import type { LabelReading, Provenance } from './types';

export interface CompareRow {
  key: string;
  label: string;
  category: string;
  valueA: string;
  valueB: string;
  delta: number | null;
  provenanceA: Provenance | null;
  provenanceB: Provenance | null;
  changed: boolean;
}

export interface Comparison {
  criticalKey: string;
  critical: CompareRow | null;
  rows: CompareRow[];
  changedCount: number;
  sharedCount: number;
}

const normalize = (value: string): string => value.toLowerCase().replace(/\s+/g, ' ').trim();

/** Rows for every field present on either label, aligned by key. */
export function compareLabels(
  first: LabelReading,
  second: LabelReading,
  criticalKey: string,
): Comparison {
  const keys = new Set<string>([
    ...first.fields.map((field) => field.key),
    ...second.fields.map((field) => field.key),
  ]);
  const rows: CompareRow[] = [];
  for (const key of keys) {
    const a = fieldOf(first, key);
    const b = fieldOf(second, key);
    if (!a && !b) continue;
    const delta =
      a?.numeric !== null && a?.numeric !== undefined && b?.numeric !== null && b?.numeric !== undefined
        ? Math.round((b.numeric - a.numeric) * 100) / 100
        : null;
    rows.push({
      key,
      label: a?.label ?? b?.label ?? key,
      category: a?.category ?? b?.category ?? 'other',
      valueA: a?.value ?? '—',
      valueB: b?.value ?? '—',
      delta,
      provenanceA: a?.provenance ?? null,
      provenanceB: b?.provenance ?? null,
      changed: normalize(a?.value ?? '') !== normalize(b?.value ?? ''),
    });
  }
  const order = (row: CompareRow): number =>
    row.key === criticalKey ? 0 : row.category === 'nutrition' ? 2 : 1;
  rows.sort((left, right) => order(left) - order(right) || left.label.localeCompare(right.label));
  const critical = rows.find((row) => row.key === criticalKey) ?? null;
  return {
    criticalKey,
    critical,
    rows,
    changedCount: rows.filter((row) => row.changed).length,
    sharedCount: rows.length,
  };
}

/** Human summary of a delta, e.g. "+0.11 g" or "−2 g". */
export function formatDelta(delta: number | null, unit: string): string {
  if (delta === null) return '';
  const rounded = Math.round(delta * 100) / 100;
  if (rounded === 0) return `= ${unit}`.trim();
  const sign = rounded > 0 ? '+' : '−';
  return `${sign}${Math.abs(rounded)}${unit ? ` ${unit}` : ''}`;
}
