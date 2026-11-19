import { describe, expect, it } from 'vitest';
import { compareLabels, formatDelta } from '../src/core/compare';
import { DEMO_READINGS } from '../src/core/demo';
import { fieldOf } from '../src/core/merge';

const [barV1, barV2, crackers] = DEMO_READINGS;

describe('compareLabels', () => {
  const comparison = compareLabels(barV1, barV2, 'allergens');

  it('puts the critical field first in the rows', () => {
    expect(comparison.critical?.key).toBe('allergens');
    expect(comparison.rows[0]?.key).toBe('allergens');
    expect(comparison.rows.filter((row) => row.key === 'allergens')).toHaveLength(1);
  });

  it('counts the fields that changed', () => {
    expect(comparison.changedCount).toBeGreaterThan(0);
    expect(comparison.critical?.changed).toBe(false);
  });

  it('computes a nutrition delta between the two versions', () => {
    const salt = comparison.rows.find((row) => row.key === 'salt');
    expect(salt?.delta).toBeCloseTo(0.11);
    expect(salt?.valueB).toContain('0.42');
  });

  it('works across two different products', () => {
    const other = compareLabels(barV2, crackers, 'allergens');
    expect(other.rows.find((row) => row.key === 'ingredients')?.changed).toBe(true);
    expect(other.critical?.valueB).toContain('Rye');
  });

  it('keeps the provenance of each side', () => {
    const comparisonV1 = compareLabels(barV1, barV2, 'allergens');
    const salt = comparisonV1.rows.find((row) => row.key === 'salt');
    expect(salt?.provenanceA).toBe('cloud');
    expect(salt?.provenanceB).toBe('local');
    expect(fieldOf(barV1, 'salt')?.provenance).toBe('cloud');
  });
});

describe('formatDelta', () => {
  it('signs and rounds the delta', () => {
    expect(formatDelta(0.11, 'g')).toBe('+0.11 g');
    expect(formatDelta(-2, 'g')).toBe('−2 g');
    expect(formatDelta(0, 'g')).toBe('= g');
    expect(formatDelta(null, 'g')).toBe('');
  });
});
