import { fieldOf } from './merge';
import type { LabelReading, StoredReading } from './types';

export interface VersionChange {
  key: string;
  label: string;
  before: string;
  after: string;
  changed: boolean;
}

export interface VersionDiff {
  changes: VersionChange[];
  changedCount: number;
  unchangedCount: number;
}

/** Field-by-field diff of two versions of the same label. */
export function diffVersions(before: LabelReading, after: LabelReading): VersionDiff {
  const keys = new Set<string>([
    ...before.fields.map((field) => field.key),
    ...after.fields.map((field) => field.key),
  ]);
  const changes: VersionChange[] = [];
  for (const key of keys) {
    const old = fieldOf(before, key);
    const next = fieldOf(after, key);
    const beforeValue = old?.value ?? '—';
    const afterValue = next?.value ?? '—';
    changes.push({
      key,
      label: old?.label ?? next?.label ?? key,
      before: beforeValue,
      after: afterValue,
      changed: beforeValue.trim() !== afterValue.trim(),
    });
  }
  const changedCount = changes.filter((change) => change.changed).length;
  return { changes, changedCount, unchangedCount: changes.length - changedCount };
}

/** Newest first, without mutating the input. */
export function sortVersions(readings: readonly LabelReading[]): LabelReading[] {
  return [...readings].sort((left, right) => right.readAt - left.readAt);
}

/**
 * The only shape written to Firestore: extracted text, never the photo.
 * Provenance and latencies are kept so the history can still show LOCAL / CLOUD.
 */
export function toStoredReading(reading: LabelReading): StoredReading {
  return {
    ...reading,
    fields: reading.fields.map((field) => ({ ...field })),
    photoStored: false,
  };
}

/** Guard used by the CI test: no image data may end up in a stored reading. */
export function containsImageData(stored: StoredReading): boolean {
  return JSON.stringify(stored).includes('data:image');
}

/** Parse a timestamp written by Firestore or by the demo data. */
export function readAt(value: unknown): number {
  if (typeof value === 'number') return value;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'string') return Date.parse(value) || 0;
  return 0;
}
