import { formatDelta, type CompareRow, type Comparison } from '../core/compare';
import { fieldOf } from '../core/merge';
import type { LabelReading } from '../core/types';
import { el, escapeHtml, formatDate, formatMs, provenanceTag } from './dom';

export interface CompareActions {
  options: LabelReading[];
  onPick(side: 'left' | 'right', id: string): void;
}

const picker = (side: 'left' | 'right', current: LabelReading, options: LabelReading[]): string => {
  const items = options
    .map((option) => `<option value="${escapeHtml(option.id)}"${option.id === current.id ? ' selected' : ''}>
      ${escapeHtml(option.productName)} · ${formatDate(option.readAt, false)}</option>`)
    .join('');
  return `<select class="pick" data-side="${side}">${items}</select>`;
};

const valueCell = (row: CompareRow, side: 'a' | 'b'): string => {
  const value = side === 'a' ? row.valueA : row.valueB;
  const provenance = side === 'a' ? row.provenanceA : row.provenanceB;
  return `<div class="cv${row.changed ? ' chg' : ''}">
    <span class="cvv">${escapeHtml(value)}</span>
    ${provenance ? provenanceTag(provenance) : '<span class="tag w">—</span>'}
  </div>`;
};

const criticalBlock = (critical: CompareRow | null, unit: string): string => {
  if (!critical) return '';
  return `<div class="crit">
    <div class="crithead"><span class="tag n">${escapeHtml(critical.label)}</span>
      <span class="lbl">most critical field · from Remote Config</span>
      ${critical.changed ? '<span class="tag c">DIFFERENT</span>' : '<span class="tag l">SAME</span>'}</div>
    <div class="critbody">
      <div><small>A</small><p>${escapeHtml(critical.valueA)}</p></div>
      <div class="arrow">→</div>
      <div><small>B</small><p>${escapeHtml(critical.valueB)}</p></div>
      <div class="delta">${formatDelta(critical.delta, unit)}</div>
    </div>
  </div>`;
};

/** Page 3 · Compare: aligned rows, the critical field in the ink block. */
export function renderCompare(
  left: LabelReading,
  right: LabelReading,
  comparison: Comparison,
  actions: CompareActions,
): HTMLElement {
  const unit = 'g';
  const rows = comparison.rows
    .filter((row) => row.key !== comparison.criticalKey)
    .map((row) => `<div class="crow${row.category === 'nutrition' ? ' nutrow' : ''}">
      <div class="cl"><span class="lbl">${escapeHtml(row.label)}</span>
        ${row.delta !== null ? `<em>${formatDelta(row.delta, unit)}</em>` : ''}</div>
      ${valueCell(row, 'a')}${valueCell(row, 'b')}
    </div>`)
    .join('');

  const node = el(`<main class="compare">
    <section class="chead">
      <div class="cprod"><span class="lbl">A</span><h2>${escapeHtml(left.productName)}</h2>
        <div class="sub">${formatDate(left.readAt)} · ${left.localCount} local / ${left.cloudCount} cloud · ${formatMs(left.totalMs)}</div>
        ${picker('left', left, actions.options)}</div>
      <div class="cprod"><span class="lbl">B</span><h2>${escapeHtml(right.productName)}</h2>
        <div class="sub">${formatDate(right.readAt)} · ${right.localCount} local / ${right.cloudCount} cloud · ${formatMs(right.totalMs)}</div>
        ${picker('right', right, actions.options)}</div>
    </section>
    ${criticalBlock(comparison.critical, 'g')}
    <div class="ctable">
      <div class="crow head"><div class="cl"><span class="lbl">Field</span></div>
        <div class="cv"><span class="lbl">A · ${escapeHtml(left.netWeight)}</span></div>
        <div class="cv"><span class="lbl">B · ${escapeHtml(right.netWeight)}</span></div></div>
      ${rows}
    </div>
    <div class="cfoot">${comparison.changedCount} of ${comparison.sharedCount} fields differ ·
      ${fieldOf(left, comparison.criticalKey)?.provenance === 'cloud' ? 'critical field cross-checked in the cloud' : 'critical field read on device'}</div>
  </main>`);

  node.querySelectorAll<HTMLSelectElement>('select[data-side]').forEach((select) => {
    select.addEventListener('change', () => {
      const side = select.dataset.side === 'left' ? 'left' : 'right';
      actions.onPick(side, select.value);
    });
  });
  return node;
}
