import type { FieldKind } from './types';

/** The 14 allergens listed in EU Regulation 1169/2011, in regulation order. */
export const EU_ALLERGENS: readonly string[] = [
  'cereals containing gluten',
  'crustaceans',
  'eggs',
  'fish',
  'peanuts',
  'soybeans',
  'milk',
  'nuts',
  'celery',
  'mustard',
  'sesame',
  'sulphur dioxide/sulphites',
  'lupin',
  'molluscs',
];

/** Free-text words that map onto a canonical EU 14 allergen. */
const ALLERGEN_SYNONYMS: ReadonlyArray<readonly [string, readonly string[]]> = [
  ['cereals containing gluten', ['gluten', 'wheat', 'rye', 'barley', 'oat', 'oats', 'spelt', 'malt', 'farro']],
  ['crustaceans', ['crustacean', 'crustaceans', 'prawn', 'prawns', 'shrimp', 'shrimps', 'crab', 'lobster', 'crayfish']],
  ['eggs', ['egg', 'eggs', 'albumen', 'albumin', 'mayonnaise', 'meringue']],
  ['fish', ['fish', 'anchovy', 'tuna', 'salmon', 'cod', 'haddock', 'sardine', 'surimi']],
  ['peanuts', ['peanut', 'peanuts', 'peanut oil', 'groundnut', 'arachis']],
  ['soybeans', ['soy', 'soya', 'soybean', 'soybeans', 'soja', 'tofu', 'lecithin']],
  ['milk', ['milk', 'cheese', 'butter', 'whey', 'casein', 'caseinate', 'lactose', 'cream', 'yoghurt', 'yogurt']],
  ['nuts', ['hazelnut', 'hazelnuts', 'almond', 'almonds', 'walnut', 'walnuts', 'cashew', 'pistachio', 'pecan', 'macadamia', 'brazil nut', 'tree nut', 'tree nuts']],
  ['celery', ['celery']],
  ['mustard', ['mustard']],
  ['sesame', ['sesame', 'sesame seed', 'sesame seeds', 'tahini', 'benne']],
  ['sulphur dioxide/sulphites', ['sulphur dioxide', 'sulfur dioxide', 'sulphite', 'sulphites', 'sulfites', 'e220', 'e221', 'e222', 'e223', 'e224', 'e226', 'e227', 'e228']],
  ['lupin', ['lupin', 'lupin flour']],
  ['molluscs', ['mollusc', 'molluscs', 'mussel', 'mussels', 'clam', 'clams', 'oyster', 'oysters', 'squid', 'octopus', 'snail', 'escargot']],
];

export interface FieldSpec {
  key: string;
  label: string;
  category: string;
  kind: FieldKind;
  unit: string;
  /** Number of the read zone on the photo (the numbered thread of the design). */
  zone?: number;
}

/** Every field the app knows, in display order. */
export const FIELD_SPECS: readonly FieldSpec[] = [
  { key: 'ingredients', label: 'Ingredients', category: 'ingredients', kind: 'text', unit: '', zone: 1 },
  { key: 'allergens', label: 'Allergens · EU 14', category: 'allergens', kind: 'text', unit: '', zone: 2 },
  { key: 'mayContain', label: 'May contain', category: 'mayContain', kind: 'text', unit: '', zone: 3 },
  { key: 'energy', label: 'Energy', category: 'nutrition', kind: 'number', unit: 'kcal', zone: 4 },
  { key: 'fat', label: 'Fat', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'saturates', label: 'of which saturates', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'carbohydrate', label: 'Carbohydrate', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'sugars', label: 'of which sugars', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'fibre', label: 'Fibre', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'protein', label: 'Protein', category: 'nutrition', kind: 'number', unit: 'g', zone: 4 },
  { key: 'salt', label: 'Salt', category: 'nutrition', kind: 'number', unit: 'g', zone: 5 },
  { key: 'warnings', label: 'Warnings', category: 'warnings', kind: 'text', unit: '', zone: 6 },
  { key: 'storage', label: 'Storage', category: 'storage', kind: 'text', unit: '' },
  { key: 'bestBefore', label: 'Best before end', category: 'bestBefore', kind: 'text', unit: '' },
];

export const fieldSpec = (key: string): FieldSpec | undefined =>
  FIELD_SPECS.find((spec) => spec.key === key);

/** Categories whose uncertainty triggers a cloud cross-check even above the threshold. */
export const DEFAULT_WATCHED_CATEGORIES: readonly string[] = ['allergens', 'mayContain'];

/** The field put in front in the comparison view. */
export const DEFAULT_CRITICAL_FIELD = 'allergens';

/**
 * Map free text onto canonical EU 14 allergens.
 * Returns the canonical names found, in regulation order.
 */
export function detectAllergens(text: string): string[] {
  const haystack = ` ${text.toLowerCase().replace(/[^a-z0-9/+\-]+/g, ' ')} `;
  const found = new Set<string>();
  for (const [canonical, words] of ALLERGEN_SYNONYMS) {
    if (words.some((word) => haystack.includes(` ${word} `))) {
      found.add(canonical);
    }
  }
  return EU_ALLERGENS.filter((allergen) => found.has(allergen));
}
