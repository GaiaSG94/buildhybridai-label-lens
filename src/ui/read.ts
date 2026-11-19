import { fieldOf } from '../core/merge';
import type { LabelReading } from '../core/types';
import { allergenBlock, fieldCard, hybridBar, nutritionCard } from './blocks';
import { escapeHtml, el, formatDate, formatMs, provenanceTag } from './dom';
import { labelSvg } from './label';

export interface ReadActions {
  onSave(): void;
  onCompare(): void;
}

const notesCard = (reading: LabelReading): string => {
  const rows = ['warnings', 'storage', 'bestBefore']
    .map((key) => {
      const field = fieldOf(reading, key);
      if (!field) return '';
      return `<div class="rowf"><span class="k">${escapeHtml(field.label)}</span>
        <span class="fv">${escapeHtml(field.value)}</span>
        <span class="p">${provenanceTag(field.provenance)}</span></div>`;
    })
    .join('');
  return `<div class="fb"><div class="fh">
    <span class="tag n">05</span><span class="lbl">Warnings · storage · date</span></div>
    ${rows}</div>`;
};

/** Page 1 · Read: the studio scene on the left, the reading on the right. */
export function renderRead(reading: LabelReading): HTMLElement {
  const onDevice = reading.deviceSource === 'on_device';
  const node = el(`<main class="read">
    <section class="studio">
      <div class="beam"></div>
      <div class="hud hud-tl"><b>SCENE 01 · READ</b><i></i>photo not stored<br>text only · ${reading.fields.length} fields</div>
      <div class="hud hud-tr"><b>${onDevice ? 'GEMINI NANO' : 'CLOUD FALLBACK'}</b><i></i>
        ${onDevice ? 'on this device' : 'no on-device model'} · ${formatMs(reading.deviceMs)}<br>
        ${reading.localCount} / ${reading.fields.length} fields</div>
      <div class="packwrap">${labelSvg(reading)}</div>
      <div class="plinth" data-cloud="${reading.cloudCount > 0}">
        <div class="body"></div><div class="top"><div class="ring"></div></div>
      </div>
      <div class="hud hud-bl">zones 01–06 · numbered read thread</div>
      <div class="hud hud-br">cloud cross-check · ${reading.cloudCount} fields · ${formatMs(reading.cloudMs)}</div>
    </section>
    <section class="right">
      <div class="head">
        <div>
          <h1 class="relief">${escapeHtml(reading.productName)}${reading.netWeight ? `<br>${escapeHtml(reading.netWeight)}` : ''}</h1>
          <div class="sub">Read ${formatDate(reading.readAt)} · ${reading.fields.length} fields · total ${formatMs(reading.totalMs)}
            ${onDevice ? '' : ' · on-device model unavailable, cloud fallback'}</div>
        </div>
        <div class="actions">
          <button class="btn g" data-action="save">Save to history</button>
          <button class="btn" data-action="compare">Compare</button>
        </div>
      </div>
      ${hybridBar(reading)}
      <div class="cols">
        <div class="stack">
          ${allergenBlock(reading)}
          ${fieldCard('mayContain', reading)}
          ${fieldCard('ingredients', reading)}
          ${notesCard(reading)}
        </div>
        <div class="stack">
          ${nutritionCard(reading)}
        </div>
      </div>
    </section>
  </main>`);
  return node;
}

/** Status text of the top bar for the current reading. */
export function engineLine(reading: LabelReading | undefined): string {
  if (!reading) return 'no reading yet';
  const source = reading.deviceSource === 'on_device' ? 'device' : 'cloud fallback';
  return `${reading.localCount} local · ${reading.cloudCount} cloud · ${source}`;
}
