import { describe, expect, it } from 'vitest';
import {
  containsImageData,
  diffVersions,
  sortVersions,
  toStoredReading,
} from '../src/core/history';
import { DEMO_READINGS } from '../src/core/demo';

const [barV1, barV2] = DEMO_READINGS;

describe('diffVersions', () => {
  const diff = diffVersions(barV1, barV2);

  it('spots the changed fields between two versions', () => {
    const salt = diff.changes.find((change) => change.key === 'salt');
    expect(salt?.changed).toBe(true);
    expect(salt?.after).toContain('0.42');
  });

  it('counts changed and unchanged fields', () => {
    expect(diff.changedCount).toBeGreaterThan(0);
    expect(diff.changedCount + diff.unchangedCount).toBe(diff.changes.length);
  });

  it('returns no change when a version is compared with itself', () => {
    expect(diffVersions(barV1, barV1).changedCount).toBe(0);
  });
});

describe('sortVersions', () => {
  it('sorts newest first without mutating the input', () => {
    const input = [barV2, barV1];
    const sorted = sortVersions(input);
    expect(sorted[0].readAt).toBeGreaterThan(sorted[1].readAt);
    expect(input[0]).toBe(barV2);
  });
});

describe('toStoredReading', () => {
  const stored = toStoredReading(barV1);

  it('keeps the extracted text and the provenance', () => {
    expect(stored.fields.length).toBe(barV1.fields.length);
    expect(stored.photoStored).toBe(false);
    expect(stored.cloudCount).toBe(barV1.cloudCount);
  });

  it('never contains image data', () => {
    const withPhoto = { ...stored, photo: 'data:image/jpeg;base64,AAAA' } as typeof stored;
    expect(containsImageData(stored)).toBe(false);
    expect(containsImageData(withPhoto)).toBe(true);
  });
});
