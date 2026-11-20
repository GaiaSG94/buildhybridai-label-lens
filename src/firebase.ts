import { initializeApp, type FirebaseApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider, CustomProvider, type AppCheck } from 'firebase/app-check';
import { getAuth, signInAnonymously, type Auth } from 'firebase/auth';
import { getAI, AgentPlatformBackend, GoogleAIBackend, type AI } from 'firebase/ai';
import { isConfigured, loadConfig, type AppConfig } from './config';

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
  }
}

export interface Services {
  app: FirebaseApp;
  auth: Auth;
  ai: AI;
  appCheck?: AppCheck;
  config: AppConfig;
}

/**
 * Initialize Firebase, App Check, anonymous auth and Firebase AI Logic.
 * Returns null when no project is configured: the UI then runs in demo mode.
 */
export function initFirebase(config: AppConfig = loadConfig()): Services | null {
  if (!isConfigured(config)) return null;
  const app = initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
  });
  const appCheck = initAppCheck(app, config);
  const backend = config.backend === 'google-ai' ? new GoogleAIBackend() : new AgentPlatformBackend('global');
  return { app, auth: getAuth(app), ai: getAI(app, { backend }), appCheck, config };
}

function initAppCheck(app: FirebaseApp, config: AppConfig): AppCheck | undefined {
  if (config.appcheckDebug) {
    // Local development: the debug provider prints the token to register in
    // the Firebase console (App Check > Apps > Manage debug tokens). The
    // provider is never called in debug mode, so a stub is enough.
    window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    const stub = new CustomProvider({
      getToken: () => Promise.reject(new Error('App Check debug provider is active.')),
    });
    return initializeAppCheck(app, { provider: stub });
  }
  if (!config.appcheckSiteKey || !/^[A-Za-z0-9_-]{20,}$/.test(config.appcheckSiteKey)) return undefined;
  return initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(config.appcheckSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

/** Anonymous account: one uid, no e-mail, no PII collected. */
export async function signIn(services: Services): Promise<string | null> {
  const credential = await signInAnonymously(services.auth);
  return credential.user?.uid ?? null;
}
