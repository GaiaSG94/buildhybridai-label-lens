import { loadConfig } from './config';
import { compareLabels } from './core/compare';
import { DEMO_READINGS } from './core/demo';
import { diffVersions, sortVersions, type VersionDiff } from './core/history';
import type { LabelReading } from './core/types';
import { initFirebase, signIn, type Services } from './firebase';
import { readFileAsDataUrl, toImagePart } from './models';
import { readLabel } from './pipeline';
import { listReadings, saveReading } from './store/labels';
import { defaultSettings, loadSettings, type Settings } from './store/settings';
import { renderCapture } from './ui/capture';
import { renderCompare } from './ui/compare';
import { el } from './ui/dom';
import { renderHistory } from './ui/history';
import { engineLine, renderRead } from './ui/read';

type Route = 'read' | 'capture' | 'compare' | 'history';

interface State {
  services: Services | null;
  settings: Settings;
  readings: LabelReading[];
  current: LabelReading;
  route: Route;
  leftId: string;
  rightId: string;
  busy: boolean;
  notice: string;
  error: string;
}

const ROUTES: Route[] = ['read', 'capture', 'compare', 'history'];

const routeFromHash = (): Route => {
  const name = window.location.hash.replace(/^#\/?/, '') as Route;
  return ROUTES.includes(name) ? name : 'read';
};

const initial = (): State => ({
  services: null,
  settings: defaultSettings(loadConfig().threshold),
  readings: [...DEMO_READINGS],
  current: DEMO_READINGS[0],
  route: routeFromHash(),
  leftId: DEMO_READINGS[0].id,
  rightId: DEMO_READINGS[1].id,
  busy: false,
  notice: '',
  error: '',
});

const EMPTY_DIFF: VersionDiff = { changes: [], changedCount: 0, unchangedCount: 0 };

/** Mount the app: shell + the page matching the hash. */
export function mountApp(root: HTMLElement): void {
  const state = initial();
  const view = el('<div class="view"></div>');
  const shell = el(`<header class="top">
    <div class="mark"><span class="logo"><i></i><i></i></span>Label Lens<small>v4</small></div>
    <nav>${ROUTES.map((route) => `<a href="#/${route}" data-nav="${route}">${label(route)}</a>`).join('')}</nav>
    <div class="engines" data-engines></div>
  </header>`);
  root.append(shell, view);

  const render = (): void => {
    state.route = routeFromHash();
    paintTop(shell, state);
    view.replaceChildren(page(state, render));
  };

  const update = (patch: Partial<State>): void => {
    Object.assign(state, patch);
    render();
  };

  window.addEventListener('hashchange', render);
  void boot(state, update);
  render();
  void signInIfLive(state, update);
}

const label = (route: Route): string =>
  route === 'read' ? 'Read' : route === 'capture' ? 'Capture' : route === 'compare' ? 'Compare' : 'History';

const paintTop = (shell: HTMLElement, state: State): void => {
  shell.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((link) => {
    link.classList.toggle('on', link.dataset.nav === state.route);
  });
  const engines = shell.querySelector('[data-engines]');
  const live = Boolean(state.services);
  if (engines) {
    engines.innerHTML = `<span><i class="dot l"></i>${live ? 'Gemini Nano · hybrid' : 'demo data · no project'}</span>
      <span><i class="dot c"></i>${live ? state.settings.origin === 'remote' ? 'cloud · remote config' : 'cloud · defaults' : 'cloud · not configured'}</span>
      <span class="mode">${engineLine(state.current)}</span>`;
  }
}

async function boot(state: State, update: (patch: Partial<State>) => void): Promise<void> {
  state.services = initFirebase();
  if (!state.services) return;
  update({ settings: await loadSettings(state.services, state.settings.threshold) });
}

async function signInIfLive(state: State, update: (patch: Partial<State>) => void): Promise<void> {
  if (!state.services) return;
  try {
    await signIn(state.services);
    const readings = await listReadings(state.services);
    const merged = [...readings, ...DEMO_READINGS];
    update({ readings: merged, current: merged[0] ?? state.current, leftId: merged[0]?.id ?? state.leftId, rightId: merged[1]?.id ?? state.rightId });
  } catch (error) {
    update({ notice: `Firebase signed out: ${String((error as Error).message)} — demo labels only.` });
  }
}

const page = (state: State, render: () => void): HTMLElement => {
  const update = (patch: Partial<State>) => {
    Object.assign(state, patch);
    render();
  };
  if (state.route === 'capture') {
    return renderCapture(
      {
        mode: state.services ? 'live' : 'demo',
        busy: state.busy,
        notice: state.notice,
        lastError: state.error,
        samples: state.readings.slice(0, 3),
      },
      {
        onSample: (id) => {
          const reading = state.readings.find((item) => item.id === id);
          if (reading) update({ current: reading, notice: '' });
        },
        onFile: (file) => void handleFile(state, file, update),
      },
    );
  }
  if (state.route === 'compare') {
    return renderComparePage(state, update);
  }
  if (state.route === 'history') {
    return renderHistoryPage(state, update);
  }
  const read = renderRead(state.current);
  read.querySelector('[data-action="save"]')?.addEventListener('click', () => void handleSave(state, update));
  read.querySelector('[data-action="compare"]')?.addEventListener('click', () => {
    const other = state.readings.find((item) => item.id !== state.current.id);
    update({ leftId: state.current.id, rightId: other?.id ?? state.current.id });
    window.location.hash = '#/compare';
  });
  return read;
}

const renderComparePage = (state: State, update: (patch: Partial<State>) => void): HTMLElement => {
  const left = state.readings.find((item) => item.id === state.leftId) ?? state.readings[0] ?? state.current;
  const right = state.readings.find((item) => item.id === state.rightId) ?? state.readings[1] ?? left;
  return renderCompare(left, right, compareLabels(left, right, state.settings.criticalField), {
    options: state.readings,
    onPick: (side, id) => update(side === 'left' ? { leftId: id } : { rightId: id }),
  });
}

const renderHistoryPage = (state: State, update: (patch: Partial<State>) => void): HTMLElement => {
  const versions = sortVersions(state.readings.filter((item) => item.productKey === state.current.productKey));
  const selected = versions.find((item) => item.id === state.current.id) ?? versions[0] ?? state.current;
  const index = versions.findIndex((item) => item.id === selected.id);
  const previous = index >= 0 ? versions[index + 1] : undefined;
  const diff = previous ? diffVersions(previous, selected) : EMPTY_DIFF;
  return renderHistory(versions.length > 0 ? versions : [selected], selected, diff, {
    onPick: (id) => {
      const reading = state.readings.find((item) => item.id === id);
      if (reading) update({ current: reading });
    },
  });
}

async function handleSave(state: State, update: (patch: Partial<State>) => void): Promise<void> {
  if (!state.services) {
    const copy = { ...state.current, id: `${state.current.id}-copy-${Date.now()}`, readAt: Date.now() };
    update({ readings: [copy, ...state.readings], current: copy, notice: 'Saved in this session only: no Firebase project configured.' });
    return;
  }
  try {
    await saveReading(state.services, state.current);
    const readings = await listReadings(state.services);
    update({ readings: [...readings, ...DEMO_READINGS], notice: 'Saved: extracted text only, the photo was not kept.' });
  } catch (error) {
    update({ error: `Save failed: ${String((error as Error).message)}` });
  }
}

async function handleFile(state: State, file: File, update: (patch: Partial<State>) => void): Promise<void> {
  if (!state.services) {
    update({ notice: 'Demo mode: no Firebase project, so the photo is not read. Open a demo label below.' });
    return;
  }
  update({ busy: true, error: '', notice: 'Reading on device first…' });
  try {
    const image = toImagePart(await readFileAsDataUrl(file));
    const outcome = await readLabel(state.services.ai, image, {
      threshold: state.settings.threshold,
      watched: state.settings.watched,
      cloudModel: state.services.config.cloudModel,
    });
    const note = outcome.deviceFallback
      ? 'On-device model unavailable: the cloud read every field (badges say CLOUD).'
      : `${outcome.escalations.length} field(s) cross-checked in the cloud.`;
    update({ busy: false, readings: [outcome.reading, ...state.readings], current: outcome.reading, notice: note });
    window.location.hash = '#/read';
  } catch (error) {
    update({ busy: false, error: `Reading failed: ${String((error as Error).message)}` });
  }
}
