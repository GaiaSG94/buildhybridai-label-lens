/** Environment configuration, read once from the Vite variables. */

export type AiBackend = 'google-ai' | 'agent-platform';

export interface AppConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  backend: AiBackend;
  appcheckSiteKey: string;
  appcheckDebug: boolean;
  cloudModel: string;
  threshold: number;
}

const text = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

const number = (value: unknown, fallback: number): number => {
  const parsed = Number(text(value));
  return Number.isFinite(parsed) ? parsed : fallback;
};

/** Vite exposes the variables it finds in .env.local; nothing here is secret. */
export function loadConfig(env: Record<string, unknown> = import.meta.env as unknown as Record<string, unknown>): AppConfig {
  return {
    apiKey: text(env.VITE_FIREBASE_API_KEY),
    authDomain: text(env.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: text(env.VITE_FIREBASE_PROJECT_ID),
    storageBucket: text(env.VITE_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: text(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
    appId: text(env.VITE_FIREBASE_APP_ID),
    backend: text(env.VITE_AI_BACKEND) === 'agent-platform' ? 'agent-platform' : 'google-ai',
    appcheckSiteKey: text(env.VITE_APPCHECK_SITE_KEY),
    appcheckDebug: text(env.VITE_APPCHECK_DEBUG) === '1',
    cloudModel: text(env.VITE_CLOUD_MODEL) || 'gemini-3.5-flash-lite',
    threshold: Math.min(1, Math.max(0, number(env.VITE_CLOUD_ESCALATION_THRESHOLD, 0.7))),
  };
}

const placeholder = (value: string): boolean => !value || /replace-me|your-project|^\d{12}$/.test(value);

/** A real project needs the API key, the project id and the app id. */
export function isConfigured(config: AppConfig): boolean {
  return Boolean(config.apiKey && config.projectId && config.appId)
    && !placeholder(config.apiKey)
    && !placeholder(config.projectId)
    && !placeholder(config.appId);
}
