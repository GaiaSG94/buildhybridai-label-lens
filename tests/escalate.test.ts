import { describe, expect, it } from 'vitest';
import { buildCrossCheckPrompt, escalateKeys } from '../src/core/escalate';
import { parseModelOutput } from '../src/core/parse';

const reading = (fields: Record<string, { value: string; confidence: number }>) =>
  parseModelOutput(JSON.stringify({ product: 'Test bar', fields }));

const WATCHED = ['allergens', 'mayContain'];

describe('escalateKeys', () => {
  it('sends missing fields to the cloud', () => {
    const keys = escalateKeys(reading({ ingredients: { value: 'Oats', confidence: 0.9 } }), 0.7, WATCHED);
    expect(keys.map((item) => item.key)).toContain('mayContain');
    expect(keys.find((item) => item.key === 'mayContain')?.reason).toBe('not read on device');
  });

  it('sends a field read below the threshold', () => {
    const keys = escalateKeys(reading({ salt: { value: '0.31 g', confidence: 0.42 } }), 0.7, WATCHED);
    expect(keys.find((item) => item.key === 'salt')?.reason).toContain('42%');
  });

  it('keeps a confident field on the device', () => {
    const keys = escalateKeys(reading({ ingredients: { value: 'Oats', confidence: 0.94 } }), 0.7, WATCHED);
    expect(keys.map((item) => item.key)).not.toContain('ingredients');
  });

  it('cross-checks a watched category earlier than the rest', () => {
    const keys = escalateKeys(reading({ allergens: { value: 'Milk', confidence: 0.8 } }), 0.7, WATCHED);
    const allergen = keys.find((item) => item.key === 'allergens');
    expect(allergen?.reason).toContain('watched field');
  });

  it('never sends the same field twice', () => {
    const keys = escalateKeys(
      reading({ salt: { value: '0.31 g', confidence: 0.2 }, allergens: { value: 'Milk', confidence: 0.3 } }),
      0.7,
      WATCHED,
    );
    const names = keys.map((item) => item.key);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe('buildCrossCheckPrompt', () => {
  it('asks for JSON and names only the uncertain fields', () => {
    const prompt = buildCrossCheckPrompt(['salt'], [{ key: 'salt', reason: 'blurred' }], WATCHED);
    expect(prompt).toContain('"fields"');
    expect(prompt).toContain('- salt (Salt, g): blurred');
    expect(prompt).not.toContain('ingredients');
  });
});
