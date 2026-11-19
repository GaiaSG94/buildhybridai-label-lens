import { fieldOf } from '../core/merge';
import type { LabelReading } from '../core/types';

interface Zone {
  key: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  cloud: boolean;
}

const wrap = (text: string, max: number): string[] => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = `${current} ${word}`.trim();
    if (candidate.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.length > 0 ? lines : [''];
};

const text = (x: number, y: number, value: string, attrs: string): string =>
  `<text x="${x}" y="${y}" ${attrs}>${value}</text>`;

const zoneSvg = (zone: Zone): string => {
  const stroke = zone.cloud ? '#e8833a' : '#0f9d58';
  const fill = zone.cloud ? 'url(#hatchSoft)' : 'rgba(15,157,88,.10)';
  const dash = zone.cloud ? ' stroke-dasharray="5 4"' : '';
  const width = zone.label.length * 4.4 + 12;
  return [
    `<rect x="${zone.x}" y="${zone.y}" width="${zone.w}" height="${zone.h}" fill="${fill}" stroke="${stroke}" stroke-width="1.6"${dash}/>`,
    `<g transform="translate(${zone.x},${zone.y - 14})">`,
    `<rect width="${width}" height="13" fill="${zone.cloud ? '#e8833a' : '#0f9d58'}"/>`,
    text(5, 9.6, zone.label, `font-size="7.2" font-weight="700" letter-spacing=".5" fill="${zone.cloud ? '#1a1006' : '#fff'}"`),
    '</g>',
  ].join('');
};

const NUTRITION = [
  ['energy', 'Energy', 'kcal'],
  ['fat', 'Fat', 'g'],
  ['saturates', 'of which saturates', 'g'],
  ['carbohydrate', 'Carbohydrate', 'g'],
  ['sugars', 'of which sugars', 'g'],
  ['fibre', 'Fibre', 'g'],
  ['protein', 'Protein', 'g'],
  ['salt', 'Salt', 'g'],
] as const;

/** The label as a photo stand-in: product, ingredients, nutrition, zones. */
export function labelSvg(reading: LabelReading): string {
  const zones: Zone[] = [];
  const body: string[] = [];
  const value = (key: string): string => fieldOf(reading, key)?.value ?? '';
  const cloud = (key: string): boolean => fieldOf(reading, key)?.provenance === 'cloud';

  body.push('<rect width="400" height="560" rx="4" fill="#f2ede2"/>');
  body.push(text(20, 38, reading.productName.toUpperCase().slice(0, 26), 'font-size="19" font-weight="700" fill="#2a2620"'));
  body.push(text(20, 54, `${reading.netWeight || 'net weight not read'} · demo label`, 'font-size="8.4" fill="#5a544a"'));
  body.push('<line x1="20" y1="64" x2="380" y2="64" stroke="#2a2620" stroke-width="1"/>');

  let y = 76;
  const block = (key: string, label: string, size: number, max: number): number => {
    body.push(text(20, y + 6, label, 'font-size="6.6" font-weight="700" letter-spacing=".6" fill="#6a6459"'));
    const lines = wrap(value(key), max).slice(0, 6);
    lines.forEach((line, index) => {
      body.push(text(20, y + 18 + index * (size + 2.4), line, `font-size="${size}" fill="#2a2620"`));
    });
    const height = 22 + lines.length * (size + 2.4);
    zones.push({ key, label, x: 14, y, w: 372, h: height, cloud: cloud(key) });
    return y + height + 18;
  };

  y = block('ingredients', '01 INGREDIENTS', 8.2, 70);
  y = block('allergens', '02 CONTAINS', 8.6, 68);
  y = block('mayContain', '03 MAY CONTAIN', 8.6, 68);

  const tableTop = y;
  body.push(`<rect x="16" y="${tableTop}" width="368" height="${34 + NUTRITION.length * 17}" fill="none" stroke="#2a2620" stroke-width="1.3"/>`);
  body.push(text(24, tableTop + 14, 'NUTRITION', 'font-size="7" font-weight="700" fill="#2a2620"'));
  body.push(text(372, tableTop + 14, 'per 100 g', 'font-size="7" font-weight="700" text-anchor="end" fill="#2a2620"'));
  body.push(`<line x1="16" y1="${tableTop + 20}" x2="384" y2="${tableTop + 20}" stroke="#2a2620" stroke-width="1.8"/>`);
  NUTRITION.forEach(([key, label, unit], index) => {
    const rowY = tableTop + 34 + index * 17;
    const indent = label.startsWith('of which') ? 32 : 24;
    body.push(text(indent, rowY, label, 'font-size="8" fill="#2a2620"'));
    body.push(text(372, rowY, `${value(key) || '—'}`, 'font-size="8" text-anchor="end" fill="#2a2620"'));
    void unit;
    if (key === 'salt') {
      zones.push({ key, label: '04 SALT', x: 16, y: rowY - 11, w: 368, h: 17, cloud: cloud(key) });
    }
  });
  zones.push({ key: 'nutrition', label: '03 NUTRITION', x: 16, y: tableTop - 2, w: 368, h: 22, cloud: false });
  y = tableTop + 34 + NUTRITION.length * 17 + 18;

  body.push(text(20, y + 4, 'WARNINGS · STORAGE · DATE', 'font-size="6.6" font-weight="700" letter-spacing=".6" fill="#6a6459"'));
  const notes = [
    wrap(value('warnings'), 72)[0] ?? '',
    wrap(value('storage'), 72)[0] ?? '',
    `Best before end: ${value('bestBefore') || '—'}`,
  ];
  notes.forEach((line, index) => body.push(text(20, y + 16 + index * 11, line, 'font-size="8.2" fill="#2a2620"')));
  zones.push({ key: 'notes', label: '05 WARNINGS · 06 DATE', x: 14, y, w: 372, h: 46, cloud: cloud('warnings') });

  return [
    '<svg class="packface" viewBox="0 0 400 560" role="img" aria-label="Demo packaging label">',
    '<defs><pattern id="hatchSoft" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">',
    '<rect width="8" height="8" fill="rgba(232,131,58,.10)"/><rect width="4" height="8" fill="rgba(232,131,58,.34)"/>',
    '</pattern></defs>',
    body.join(''),
    zones.map(zoneSvg).join(''),
    '</svg>',
  ].join('');
}
