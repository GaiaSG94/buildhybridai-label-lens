import type { LabelReading } from '../core/types';
import { escapeHtml, el, formatDate } from './dom';

export interface CaptureActions {
  onFile(file: File): void;
  onSample(id: string): void;
}

export interface CaptureState {
  mode: 'demo' | 'live';
  busy: boolean;
  notice: string;
  samples: LabelReading[];
  lastError: string;
}

const sampleCard = (reading: LabelReading): string => `<button class="ver" data-sample="${escapeHtml(reading.id)}">
  <span class="tag n">${String(reading.localCount).padStart(2, '0')} LOCAL</span>
  <b>${escapeHtml(reading.productName)}</b>
  <small>${escapeHtml(reading.netWeight)} · ${formatDate(reading.readAt, false)} · ${reading.cloudCount} cloud</small>
</button>`;

/** Page 2 · Capture: drop a photo, or open one of the demo labels. */
export function renderCapture(state: CaptureState, actions: CaptureActions): HTMLElement {
  const notice = state.notice
    ? `<div class="notice${state.mode === 'demo' ? ' warn' : ''}">${escapeHtml(state.notice)}</div>`
    : '';
  const error = state.lastError ? `<div class="notice err">${escapeHtml(state.lastError)}</div>` : '';
  const node = el(`<main class="capture">
    <section class="studio short">
      <div class="beam"></div>
      <div class="hud hud-tl"><b>SCENE 02 · CAPTURE</b><i></i>photo read in memory<br>never uploaded to storage</div>
      <div class="hud hud-tr"><b>${state.mode === 'live' ? 'GEMINI NANO' : 'DEMO MODE'}</b><i></i>
        ${state.mode === 'live' ? 'hybrid ready' : 'no Firebase project'}<br>
        ${state.mode === 'live' ? 'on device first' : 'sample labels only'}</div>
      <div class="dropwrap">
        <label class="drop" data-drop>
          <input type="file" accept="image/png,image/jpeg" data-file hidden>
          <span class="tag n">01 DROP A LABEL</span>
          <b>${state.busy ? 'Reading the label…' : 'Drop a JPEG or PNG, or click to choose'}</b>
          <small>the on-device model reads it first · only uncertain fields go to the cloud</small>
          ${state.busy ? '<span class="skel c"></span>' : ''}
        </label>
      </div>
      <div class="hud hud-bl">photo not stored · text only · anonymous account, no e-mail</div>
      <div class="hud hud-br">scenes 02 · capture</div>
    </section>
    <section class="right">
      <div class="head">
        <div><h1 class="relief">Capture</h1>
        <div class="sub">${state.mode === 'live'
          ? 'The photo stays in memory. Firestore keeps the extracted text only.'
          : 'Demo mode: the sample labels below were written by hand, no real photo.'}</div></div>
      </div>
      ${notice}${error}
      <div class="lbl">Demo labels · fictional packaging</div>
      <div class="stack samples">${state.samples.map(sampleCard).join('')}</div>
      <div class="panel">
        <span class="lbl">What happens to the photo</span>
        <ol class="steps">
          <li><span class="tag l">LOCAL</span> Gemini Nano reads every field on this machine, no network.</li>
          <li><span class="tag c">CLOUD</span> only the fields below the escalation threshold are cross-checked.</li>
          <li><span class="tag n">STORE</span> the extracted text is saved, the photo is dropped.</li>
        </ol>
      </div>
    </section>
  </main>`);

  const input = node.querySelector<HTMLInputElement>('[data-file]');
  const drop = node.querySelector<HTMLElement>('[data-drop]');
  input?.addEventListener('change', () => {
    const file = input.files?.[0];
    if (file) actions.onFile(file);
  });
  drop?.addEventListener('dragover', (event) => {
    event.preventDefault();
    drop.classList.add('over');
  });
  drop?.addEventListener('dragleave', () => drop.classList.remove('over'));
  drop?.addEventListener('drop', (event) => {
    event.preventDefault();
    drop.classList.remove('over');
    const file = event.dataTransfer?.files?.[0];
    if (file) actions.onFile(file);
  });
  return node;
}
