import type { VersionDiff } from '../core/history';
import type { LabelReading } from '../core/types';
import { el, escapeHtml, formatDate, provenanceTag } from './dom';

export interface HistoryActions {
  onPick(id: string): void;
}

const versionCard = (reading: LabelReading, current: boolean): string => `<button
  class="ver${current ? ' on' : ''}" data-version="${escapeHtml(reading.id)}">
  <span class="tag ${current ? 'n' : 'l'}">${current ? 'CURRENT' : `${reading.localCount} LOCAL`}</span>
  <b>${escapeHtml(reading.productName)}</b>
  <small>${formatDate(reading.readAt)} · ${reading.localCount} local / ${reading.cloudCount} cloud</small>
  <span class="hbar mini"><i class="l" style="flex:${Math.max(1, reading.localCount)}"></i><i class="c" style="flex:${Math.max(1, reading.cloudCount)}"></i></span>
</button>`;

/** Page 4 · History: version gallery on the left, diff table on the right. */
export function renderHistory(
  versions: LabelReading[],
  selected: LabelReading,
  diff: VersionDiff,
  actions: HistoryActions,
): HTMLElement {
  const rows = diff.changes
    .map((change) => `<tr class="${change.changed ? 'chg' : ''}">
      <td class="k">${escapeHtml(change.label)}</td>
      <td class="b">${escapeHtml(change.before)}</td>
      <td class="a">→</td>
      <td class="b">${escapeHtml(change.after)}</td>
      <td class="p">${change.changed ? '<span class="tag c">CHANGED</span>' : '<span class="tag w">same</span>'}</td>
    </tr>`)
    .join('');

  const node = el(`<main class="history">
    <section class="hlist">
      <div class="blk"><span class="lbl">Versions of this label</span>
        <p class="sub">Text only: the photo is never stored, so a version is the extracted fields.</p></div>
      <div class="stack">${versions.map((reading) => versionCard(reading, reading.id === selected.id)).join('')}</div>
    </section>
    <section class="hmain">
      <div class="head">
        <div><h1 class="relief">${escapeHtml(selected.productName)}</h1>
          <div class="sub">Read ${formatDate(selected.readAt)} · ${provenanceTag(selected.cloudCount > 0 ? 'cloud' : 'local')}
            ${selected.localCount} local / ${selected.cloudCount} cloud</div></div>
        <div class="count"><div><b>${diff.changedCount}</b><span>changed</span></div>
          <div><b>${diff.unchangedCount}</b><span>unchanged</span></div></div>
      </div>
      <div class="panel">
        <span class="lbl">What changed since the previous version</span>
        <table class="diff"><tbody>${rows}</tbody></table>
      </div>
      <div class="cfoot">${versions.length} version(s) · newest first · anonymous account, no e-mail</div>
    </section>
  </main>`);

  node.querySelectorAll<HTMLElement>('[data-version]').forEach((button) => {
    button.addEventListener('click', () => actions.onPick(button.dataset.version ?? ''));
  });
  return node;
}
