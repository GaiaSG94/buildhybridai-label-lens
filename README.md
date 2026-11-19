# Label Lens

Photo of a packaging label → **Gemini Nano reads the image on the device** and
extracts ingredients, the EU 14 allergens, nutrition per 100 g, warnings and the
best-before date. The cloud model is called **only for the fields the on-device
pass was unsure about**, and every field shows where it was read: `LOCAL` or
`CLOUD`.

Built for **#BuildHybridAI 2026** (Grand Prize, Web/Chrome).

## Why

Reading a label takes a magnifier and a lookup table, and most "scan a product"
apps ship the photo to a server whose answer is a vague score. Label Lens does
the cheap first pass where the photo already is — on the machine — and pays for
the cloud only when a field is genuinely illegible. The result is a reading you
can audit field by field.

## How Firebase AI Logic is used

`app/src/firebase.ts` initialises the app and calls
`getAI(app, { backend: new GoogleAIBackend() })` at runtime. The backend is the
**Gemini Developer API** (Spark plan, free tier, no payment method);
`AgentPlatformBackend` (ex-Vertex) would require a Blaze billing account.

Two models are created in `app/src/models.ts`:

| Pass | Model | What it receives |
|---|---|---|
| Read (hybrid) | `getGenerativeModel(ai, { mode: InferenceMode.PREFER_ON_DEVICE, onDeviceParams: { createOptions: { expectedInputs: [{type:'text'},{type:'image'}] } } })` | the photo (`inlineData`) + the extraction prompt |
| Cross-check | `getGenerativeModel(ai, { mode: InferenceMode.ONLY_IN_CLOUD })` | the photo + **only** the uncertain field names and why they are uncertain |

The on-device pass runs Gemini Nano through the Chrome Prompt API adapter that
`firebase-ai` provides. If Nano is absent or refuses the image, the SDK falls
back to the cloud and `response.inferenceSource` says so: the app then badges
every field `CLOUD` and prints "on-device model unavailable" in the status line.
It never pretends a cloud answer was local.

Other Firebase products used:

- **App Check** (`ReCaptchaV3Provider`, debug provider when
  `VITE_APPCHECK_DEBUG=1`) wraps every model call.
- **Authentication**: `signInAnonymously` — one uid, no e-mail, no PII.
- **Firestore**: `labels` holds the extracted text of each reading. The photo is
  never written anywhere.
- **Remote Config**: `cloudEscalationThreshold` (default 0.7),
  `watchedCategories` (default `allergens,mayContain`), `criticalField`
  (default `allergens`, the field put first in the comparison).

## The pipeline

`app/src/core/` is pure TypeScript, no Firebase and no DOM, and is covered by
`vitest`:

1. `buildReadingPrompt()` — JSON-only prompt, one confidence per field.
2. `parseModelOutput()` — strict JSON first, tolerant `KEY: value` fallback when
   the model truncates its answer.
3. `escalateKeys()` — missing fields, fields below the threshold, and watched
   categories read below `threshold + 0.15`. Nothing else leaves the device.
4. `buildReading()` — merges the two passes; each field keeps its provenance,
   confidence, zone number and the reason it was cross-checked.
5. `compareLabels()` — two readings aligned field by field, critical field
   first, nutrition deltas in mono.
6. `diffVersions()` + `toStoredReading()` — version diff and the photo-free shape
   persisted to Firestore.

## Pages

| Page | What it shows |
|---|---|
| **Read** | studio scene with the label and its numbered read zones (`01 INGREDIENTS` … `06 DATE`), hybrid bar (fields local / cloud), allergen block, field cards with `LOCAL` / `CLOUD` tags and the cross-check reason, nutrition table |
| **Capture** | drop a JPEG/PNG, or open one of the fictional demo labels; explains what happens to the photo |
| **Compare** | two readings side by side, critical field in the ink block, deltas |
| **History** | versions of one label, field-by-field diff |

The visual system is locked in `G-DESIGN/` (style V4): ink bands, paper, flat
green for `LOCAL`, hatched orange for `CLOUD`, a single red block per screen for
allergens. Desktop only, 1440 × 900, no responsive version on purpose.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # 40 unit tests, no network
npm run build        # tsc --noEmit && vite build
```

Without a Firebase project the app starts in **demo mode**: three hand-written
fictional labels (no real photo, no PII) show the read, compare and history
pages, and the top bar says `demo data · no project`. Dropping a photo in demo
mode is refused explicitly — nothing is faked as a model answer.

### Connect a Firebase project

1. Firebase console → new project → **Firebase AI Logic** → Gemini Developer API
   (Spark, no billing).
2. Add a **Web app**; copy the SDK values into `.env.local`
   (`cp .env.example .env.local`).
3. **Authentication** → Anonymous. **Firestore** → production mode.
   **App Check** → reCAPTCHA v3 site key (`VITE_APPCHECK_SITE_KEY`).
4. Remote Config → publish `cloudEscalationThreshold=0.7`,
   `watchedCategories=allergens,mayContain`, `criticalField=allergens`.
5. On-device text/image needs Chrome ≥ 139 and, for the image input,
   `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input`. Check the
   machine first with `../../tools/nano-check/`.

Suggested Firestore rule:

```
match /labels/{id} {
  allow read, write: if request.auth != null;
}
```

### Deploy

```bash
npm run build
npx firebase-tools deploy --only hosting --project <project-id>
```

`.env.local` is git-ignored; only the public web config values belong in the
build, never a server key.

## Privacy

- The photo stays in memory for the length of one request; it is never written
  to Firestore, localStorage or IndexedDB.
- Only extracted text is stored, under an anonymous uid.
- The demo labels are written by hand for the video; no real person, product
  photo or message is included.

## Limitations

- Gemini Nano multimodal is experimental in Chrome; without the flag (or on an
  unsupported machine) every field is read in the cloud and badged `CLOUD`.
- Reading accuracy on a real, curved, glossy label is below the demo label; that
  is exactly what the escalation threshold is for.
- Nutrition values are assumed per 100 g only when the label says so — the
  column header is part of the reading, not a guess.
- No mobile layout: the target is the desktop demo video.

## Demo script (3 min, EN)

1. **0:00** Read page on the oat bar: `11 LOCAL / 2 CLOUD`, the hatched tags on
   *May contain* and *Salt* with the reason "line blurred — asked the cloud".
2. **0:40** Capture → open a demo label (or drop a photo with a project
   configured): the on-device pass fills the fields, then only the uncertain
   ones turn hatched.
3. **1:30** Compare the two versions of the bar: salt `0.31 → 0.42 g (+0.11 g)`,
   allergens unchanged and still first.
4. **2:10** History: what changed between the two labels; the photo is not
   stored, only the text.
5. **2:40** Close on the hybrid bar and the repo URL.

## What was built during the period

Everything in this repository was built for #BuildHybridAI 2026 (November 2026):
the idea (`IDEE.md`), the locked design system (`G-DESIGN/`, V1 → V4 versions
kept), the TypeScript core with its tests, the four pages, the Firebase
integration and the CI. No pre-existing product code was reused.

## Attribution and licence

No third-party assets, no bundle from another project, no Google or Firebase
logo in the UI. Fonts are system fonts (Inter when installed, Helvetica/Arial
otherwise) — nothing loaded from the network.

Apache-2.0, see `LICENSE`.
