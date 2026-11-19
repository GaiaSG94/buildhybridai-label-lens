import { describe, expect, it } from 'vitest';
import { detectAllergens, EU_ALLERGENS, FIELD_SPECS } from '../src/core/fields';

describe('detectAllergens', () => {
  it('maps printed words onto the EU 14 list', () => {
    expect(detectAllergens('Oat flakes, hazelnuts, milk powder, soya lecithin')).toEqual([
      'cereals containing gluten',
      'soybeans',
      'milk',
      'nuts',
    ]);
  });

  it('returns the canonical names in regulation order', () => {
    const found = detectAllergens('sesame and egg and fish');
    expect(found).toEqual(['eggs', 'fish', 'sesame']);
  });

  it('recognises the E-numbers of sulphites', () => {
    expect(detectAllergens('preservative E223')).toEqual(['sulphur dioxide/sulphites']);
  });

  it('does not match inside a longer word', () => {
    expect(detectAllergens('buttermilk only')).toEqual([]);
  });

  it('finds nothing in plain text', () => {
    expect(detectAllergens('Rye flour 68%, water, sea salt')).toEqual(['cereals containing gluten']);
    expect(detectAllergens('water and salt')).toEqual([]);
  });
});

describe('FIELD_SPECS', () => {
  it('covers the four categories the design shows', () => {
    const categories = new Set(FIELD_SPECS.map((spec) => spec.category));
    for (const category of ['ingredients', 'allergens', 'nutrition', 'warnings', 'bestBefore']) {
      expect(categories.has(category)).toBe(true);
    }
  });

  it('keeps the EU list at 14 entries', () => {
    expect(EU_ALLERGENS).toHaveLength(14);
  });
});
