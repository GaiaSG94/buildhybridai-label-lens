import { describe, expect, it } from 'vitest';
import { missingKeys, parseConfidence, parseModelOutput } from '../src/core/parse';

const json = JSON.stringify({
  product: 'Oat bar',
  netWeight: '40 g',
  fields: {
    ingredients: { value: 'Oat flakes, honey', confidence: 0.94 },
    salt: { value: '0.31 g', confidence: '42%', why: 'blurred' },
    allergens: 'Oats (gluten)',
  },
});

describe('parseModelOutput', () => {
  it('reads the strict JSON shape', () => {
    const reading = parseModelOutput(json);
    expect(reading.product).toBe('Oat bar');
    expect(reading.netWeight).toBe('40 g');
    expect(reading.fields.ingredients.value).toBe('Oat flakes, honey');
    expect(reading.fields.ingredients.confidence).toBe(0.94);
    expect(reading.fields.salt.why).toBe('blurred');
  });

  it('accepts a JSON answer wrapped in a code fence', () => {
    expect(parseModelOutput(`\`\`\`json\n${json}\n\`\`\``).fields.salt.value).toBe('0.31 g');
  });

  it('gives a default confidence to a plain string field', () => {
    expect(parseModelOutput(json).fields.allergens.confidence).toBeCloseTo(0.6);
  });

  it('falls back to KEY: value lines when the JSON is broken', () => {
    const reading = parseModelOutput('PRODUCT: Rye crispbread\nIngredients: Rye flour, water\nSalt: 1.1 g');
    expect(reading.product).toBe('Rye crispbread');
    expect(reading.fields.ingredients.value).toBe('Rye flour, water');
    expect(reading.fields.salt.confidence).toBeCloseTo(0.55);
  });

  it('ignores lines it does not know', () => {
    expect(parseModelOutput('PRODUCT: Bar\nMade in France').fields).toEqual({});
  });

  it('lists the fields that never came back', () => {
    const reading = parseModelOutput(json);
    expect(missingKeys(reading)).toContain('mayContain');
    expect(missingKeys(reading)).not.toContain('salt');
  });
});

describe('parseConfidence', () => {
  it('normalises numbers, percentages and commas', () => {
    expect(parseConfidence(0.82)).toBeCloseTo(0.82);
    expect(parseConfidence(82)).toBeCloseTo(0.82);
    expect(parseConfidence('82%')).toBeCloseTo(0.82);
    expect(parseConfidence('0,82')).toBeCloseTo(0.82);
  });

  it('clamps out-of-range values', () => {
    expect(parseConfidence(150)).toBe(1);
    expect(parseConfidence(-4)).toBe(0);
    expect(parseConfidence('nope', 0.3)).toBe(0.3);
  });
});
