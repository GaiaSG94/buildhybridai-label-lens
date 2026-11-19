import { buildReading } from './merge';
import { parseModelOutput } from './parse';
import type { LabelReading } from './types';

const raw = (payload: unknown) => parseModelOutput(JSON.stringify(payload));

const BAR_V1_ON_DEVICE = raw({
  product: 'Oat & hazelnut bar',
  netWeight: '40 g',
  fields: {
    ingredients: {
      value:
        'Oat flakes 42%, roasted hazelnuts 12%, honey 10%, rice syrup, sunflower oil, whole milk powder, soya lecithin (emulsifier), sea salt, natural vanilla flavouring.',
      confidence: 0.94,
    },
    allergens: { value: 'Oats (gluten), hazelnut, milk, soya', confidence: 0.91 },
    energy: { value: '452 kcal', confidence: 0.96 },
    fat: { value: '21 g', confidence: 0.95 },
    saturates: { value: '3.1 g', confidence: 0.93 },
    carbohydrate: { value: '54 g', confidence: 0.94 },
    sugars: { value: '22 g', confidence: 0.92 },
    fibre: { value: '6.8 g', confidence: 0.9 },
    protein: { value: '9.4 g', confidence: 0.91 },
    salt: { value: '0.31 g', confidence: 0.42, why: 'value blurred on the photo' },
    warnings: { value: 'Not suitable for children under 3 years (whole nuts).', confidence: 0.88 },
    storage: { value: 'Store in a cool, dry place.', confidence: 0.9 },
    bestBefore: { value: '03/2027', confidence: 0.86 },
  },
});

const BAR_V1_CROSS_CHECK = raw({
  product: 'Oat & hazelnut bar',
  fields: {
    mayContain: {
      value: 'Peanut, sesame',
      confidence: 0.82,
      why: 'line blurred on the photo · cross-checked in 0.4 s',
    },
    salt: { value: '0.31 g', confidence: 0.79, why: 'value blurred · cross-checked in 0.5 s' },
  },
});

const BAR_V2_ON_DEVICE = raw({
  product: 'Oat & hazelnut bar',
  netWeight: '40 g',
  fields: {
    ingredients: {
      value:
        'Oat flakes 42%, roasted hazelnuts 12%, honey 8%, rice syrup, sunflower oil, whole milk powder, soya lecithin (emulsifier), sea salt, natural vanilla flavouring.',
      confidence: 0.95,
    },
    allergens: { value: 'Oats (gluten), hazelnut, milk, soya', confidence: 0.93 },
    mayContain: { value: 'Sesame', confidence: 0.89 },
    energy: { value: '455 kcal', confidence: 0.96 },
    fat: { value: '21 g', confidence: 0.95 },
    saturates: { value: '3.2 g', confidence: 0.94 },
    carbohydrate: { value: '54 g', confidence: 0.94 },
    sugars: { value: '24 g', confidence: 0.93 },
    fibre: { value: '6.5 g', confidence: 0.91 },
    protein: { value: '9.3 g', confidence: 0.92 },
    salt: { value: '0.42 g', confidence: 0.94 },
    warnings: { value: 'Not suitable for children under 3 years (whole nuts).', confidence: 0.9 },
    storage: { value: 'Store in a cool, dry place.', confidence: 0.91 },
    bestBefore: { value: '07/2027', confidence: 0.9 },
  },
});

const CRACKER_ON_DEVICE = raw({
  product: 'Rye crispbread',
  netWeight: '200 g',
  fields: {
    ingredients: { value: 'Rye flour 68%, water, sea salt, yeast.', confidence: 0.95 },
    allergens: { value: 'Rye (gluten)', confidence: 0.94 },
    mayContain: { value: 'Sesame', confidence: 0.9 },
    energy: { value: '340 kcal', confidence: 0.95 },
    fat: { value: '2.1 g', confidence: 0.94 },
    saturates: { value: '0.4 g', confidence: 0.93 },
    carbohydrate: { value: '68 g', confidence: 0.95 },
    sugars: { value: '1.2 g', confidence: 0.93 },
    fibre: { value: '14 g', confidence: 0.92 },
    protein: { value: '8.5 g', confidence: 0.92 },
    salt: { value: '1.1 g', confidence: 0.93 },
    warnings: { value: 'None.', confidence: 0.88 },
    storage: { value: 'Store dry, away from light.', confidence: 0.9 },
    bestBefore: { value: '11/2027', confidence: 0.89 },
  },
});

/**
 * Fictional demo labels, written by hand for the video: no real product photo,
 * no PII. They run through the same merge as a live reading.
 */
export const DEMO_READINGS: LabelReading[] = [
  buildReading({
    local: BAR_V1_ON_DEVICE,
    crossCheck: BAR_V1_CROSS_CHECK,
    deviceMs: 1800,
    cloudMs: 900,
    deviceSource: 'on_device',
    id: 'demo-bar-v1',
    productKey: 'oat-hazelnut-bar',
    now: Date.parse('2026-11-18T14:02:00Z'),
  }),
  buildReading({
    local: BAR_V2_ON_DEVICE,
    deviceMs: 1650,
    cloudMs: 0,
    deviceSource: 'on_device',
    id: 'demo-bar-v2',
    productKey: 'oat-hazelnut-bar',
    now: Date.parse('2026-11-16T09:41:00Z'),
  }),
  buildReading({
    local: CRACKER_ON_DEVICE,
    deviceMs: 1500,
    cloudMs: 0,
    deviceSource: 'on_device',
    id: 'demo-cracker',
    productKey: 'rye-crispbread',
    now: Date.parse('2026-11-15T18:20:00Z'),
  }),
];

export const demoReading = (id: string): LabelReading | undefined =>
  DEMO_READINGS.find((reading) => reading.id === id);
