import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';
import { DEFAULT_CRITICAL_FIELD, DEFAULT_WATCHED_CATEGORIES } from '../core/fields';
import type { Services } from '../firebase';

export interface Settings {
  threshold: number;
  watched: string[];
  criticalField: string;
  /** 'remote' when Remote Config answered, 'default' otherwise. */
  origin: 'remote' | 'default';
}

export const defaultSettings = (threshold: number): Settings => ({
  threshold,
  watched: [...DEFAULT_WATCHED_CATEGORIES],
  criticalField: DEFAULT_CRITICAL_FIELD,
  origin: 'default',
});

const list = (value: string): string[] =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const ratio = (value: string, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 1 ? parsed : fallback;
};

/** Remote Config is optional: defaults keep the app usable when it is missing. */
export async function loadSettings(services: Services, fallbackThreshold: number): Promise<Settings> {
  const remote = getRemoteConfig(services.app);
  remote.settings.minimumFetchIntervalMillis = 3_600_000;
  try {
    await fetchAndActivate(remote);
    const watched = list(getValue(remote, 'watchedCategories').asString());
    return {
      threshold: ratio(getValue(remote, 'cloudEscalationThreshold').asString(), fallbackThreshold),
      watched: watched.length > 0 ? watched : [...DEFAULT_WATCHED_CATEGORIES],
      criticalField: getValue(remote, 'criticalField').asString() || DEFAULT_CRITICAL_FIELD,
      origin: 'remote',
    };
  } catch {
    return defaultSettings(fallbackThreshold);
  }
}
