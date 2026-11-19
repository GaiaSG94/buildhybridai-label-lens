import { fieldOf } from '../core/merge';
import type { LabelField, LabelReading } from '../core/types';
import { escapeHtml, formatMs, provenanceTag, zoneTag } from './dom';

/** Motif 2: the proportional hybrid bar. Local is flat green, cloud is hatched. */
export function hybridBar(reading: LabelReading): string {
  const total = Math.max(1, reading.localCount + reading.cloudCount);
  const localFlex = Math.max(1, reading.localCount);
  const cloudFlex = Math.max(1, reading.cloudCount);
  const waiting = total - reading.localCount - reading.cloudCount;
  const waitingSegment = waiting > 0
    ? `<div class="w" style="flex:${waiting}"><b>${waiting}</b><span>waiting<br>not read yet</span></div>`
    : '';
  return [
    '<div class="hbar">',
    `<div class="l" style="flex:${localFlex}"><b class="relief-l">${reading.localCount}</b>`,
    `<span>fields read on device<br>${reading.deviceSource === 'on_device' ? 'Gemini Nano' : 'cloud fallback'} · ${formatMs(reading.deviceMs)}</span></div>`,
    `<div class="c" style="flex:${cloudFlex}"><b class="relief-c">${reading.cloudCount}</b>`,
    `<span>cross-checked<br>cloud · ${formatMs(reading.cloudMs)}</span></div>`,
    waitingSegment,
    '</div>',
    `<div class="hbarnote">${total} fields · total ${formatMs(reading.totalMs)} · photo not stored</div>`,
  ].join('');
}

const reason = (field: LabelField): string =>
  field.provenance === 'cloud' && field.reason ? `<div class="why">${escapeHtml(field.reason)}</div>` : '';

/** One field card: heavy rule, zone tag, label, provenance, value. */
export function fieldCard(key: string, reading: LabelReading): string {
  const field = fieldOf(reading, key);
  if (!field) {
    return `<div class="fb wt">
      <div class="fh"><span class="tag w">${escapeHtml(key)}</span>
      <span class="lbl">not read</span><span class="tag w">READING</span></div>
      <span class="skel"></span></div>`;
  }
  const isCloud = field.provenance === 'cloud';
  return `<div class="fb${isCloud ? ' cl' : ''}">
    <div class="fh">${zoneTag(field.zone, '')}<span class="lbl">${escapeHtml(field.label)}</span>${provenanceTag(field.provenance)}</div>
    <p class="${key === 'ingredients' ? 'ingr' : 'fv'}">${escapeHtml(field.value)}</p>
    ${reason(field)}</div>`;
}

/** Motif 4 + the single red block of the screen: the allergens. */
export function allergenBlock(reading: LabelReading): string {
  const field = fieldOf(reading, 'allergens');
  const traces = reading.traces.length > 0 ? reading.traces.join(', ') : 'none detected';
  const value = field?.value ?? 'not read on device';
  return `<div class="alg">
    <div class="fh">${zoneTag(2, '')}<span class="lbl">Allergens · EU 14</span>
    ${field ? `<span class="tag inv">${field.provenance.toUpperCase()}</span>` : '<span class="tag inv">READING</span>'}</div>
    <p>${escapeHtml(value)}</p>
    <div class="algtr">May contain: ${escapeHtml(traces)}</div>
  </div>`;
}

const NUTRITION_KEYS = [
  ['energy', 'kcal'],
  ['fat', 'g'],
  ['saturates', 'g'],
  ['carbohydrate', 'g'],
  ['sugars', 'g'],
  ['fibre', 'g'],
  ['protein', 'g'],
  ['salt', 'g'],
] as const;

/** Nutrition card: ink header, EU-table rules, provenance per row. */
export function nutritionCard(reading: LabelReading): string {
  const rows = NUTRITION_KEYS.map(([key]) => {
    const field = fieldOf(reading, key);
    const label = field?.label ?? key;
    const indent = key === 'saturates' || key === 'sugars' ? ' s' : '';
    const thick = key === 'energy' ? ' class="thick"' : field?.provenance === 'cloud' ? ' class="cl"' : '';
    const number = field?.numeric ?? '—';
    return `<tr${thick}><td class="k${indent}">${escapeHtml(label)}</td>
      <td class="v">${number}<small>${field?.unit ?? ''}</small></td>
      <td class="p">${field ? provenanceTag(field.provenance) : '<span class="tag w">—</span>'}</td></tr>`;
  });
  const notes = NUTRITION_KEYS.map(([key]) => fieldOf(reading, key))
    .filter((field): field is LabelField => Boolean(field && field.provenance === 'cloud' && field.reason));
  const footnotes = notes
    .map((field) => `<div class="why">${escapeHtml(field.label)} · ${escapeHtml(field.reason ?? '')}</div>`)
    .join('');
  return `<div class="nut">
    <div class="nh">${zoneTag(3, '', 'n')}<span class="lbl">Nutrition · per 100 g</span></div>
    <table>${rows.join('')}</table></div>${footnotes}`;
}
