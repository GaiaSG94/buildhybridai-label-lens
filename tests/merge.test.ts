import { describe, expect, it } from 'vitest';
import { buildReading, fieldOf, toNumber } from '../src/core/merge';
import { parseModelOutput } from '../src/core/parse';

const raw = (fields: Record<string, { value: string; confidence: number }>) =>
  parseModelOutput(JSON.stringify({ product: 'Oat & hazelnut bar', netWeight: '40 g', fields }));

const LOCAL = raw({
  ingredients: { value: 'Oat flakes, hazelnuts, milk powder, soya lecithin', confidence: 0.94 },
  allergens: { value: 'Oats (gluten), hazelnut, milk, soya', confidence: 0.91 },
  salt: { value: '0.31 g', confidence: 0.42 },
  sugars: { value: '22 g', confidence: 0.92 },
});

const CLOUD = raw({
  mayContain: { value: 'Peanut, sesame', confidence: 0.82 },
  salt: { value: '0.31 g', confidence: 0.79 },
});

describe('buildReading', () => {
  const reading = buildReading({
    local: LOCAL,
    crossCheck: CLOUD,
    deviceMs: 1800,
    cloudMs: 900,
    deviceSource: 'on_device',
    now: 1,
    id: 'test-bar',
    productKey: 'oat-bar',
  });

  it('keeps provenance per field', () => {
    expect(fieldOf(reading, 'ingredients')?.provenance).toBe('local');
    expect(fieldOf(reading, 'salt')?.provenance).toBe('cloud');
    expect(fieldOf(reading, 'mayContain')?.provenance).toBe('cloud');
  });

  it('counts local and cloud fields and totals the latencies', () => {
    expect(reading.localCount).toBe(3);
    expect(reading.cloudCount).toBe(2);
    expect(reading.totalMs).toBe(2700);
  });

  it('maps allergens onto the EU 14', () => {
    expect(reading.allergens).toEqual(['cereals containing gluten', 'soybeans', 'milk', 'nuts']);
    expect(reading.traces).toEqual(['peanuts', 'sesame']);
  });

  it('parses nutrition numbers and keeps their unit', () => {
    expect(fieldOf(reading, 'sugars')?.numeric).toBe(22);
    expect(fieldOf(reading, 'sugars')?.unit).toBe('g');
  });

  it('keeps the reason when the cloud answered', () => {
    expect(fieldOf(reading, 'salt')?.reason).toBe('cross-checked in the cloud');
  });

  it('never invents a field that neither pass returned', () => {
    expect(fieldOf(reading, 'fibre')).toBeUndefined();
  });
});

describe('toNumber', () => {
  it('reads the printed number, comma or dot', () => {
    expect(toNumber('0,31 g')).toBeCloseTo(0.31);
    expect(toNumber('452 kcal')).toBe(452);
    expect(toNumber('none')).toBeNull();
  });
});
