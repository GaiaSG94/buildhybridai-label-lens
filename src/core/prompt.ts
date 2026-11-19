import { FIELD_SPECS } from './fields';

/** The on-device pass: read every field of the photo, with a confidence each. */
export function buildReadingPrompt(): string {
  const fields = FIELD_SPECS.map((spec) => {
    const unit = spec.unit ? ` in ${spec.unit}` : '';
    return `  "${spec.key}": {"value": "<${spec.label}${unit}>", "confidence": 0.0-1.0, "why": "<only when unsure>"}`;
  });
  return [
    'Read the packaging label in this photo and extract the fields below.',
    'Answer with JSON only, no markdown, no explanation:',
    '{',
    '  "product": "<product name>",',
    '  "netWeight": "<weight as printed>",',
    '  "fields": {',
    fields.join(',\n'),
    '  }',
    '}',
    'Rules:',
    '- Copy the printed text, do not translate the ingredients.',
    '- Nutrition values are per 100 g when the label says so; keep the number only.',
    '- confidence is your own certainty for that field: lower it when the print is small, blurred or cut off.',
    '- Leave a field out when it is not visible; never invent a value.',
  ].join('\n');
}
