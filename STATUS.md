# STATUS buildhybridai-label-lens

Phase: idee
Etat: review
Round: R2
Maj: 2026-11-17 19:45

## opencode

- Ébauche 7 de `../IDEES.md`, créée en R2 (2026-11-17) pour remplacer
  babel-chip (écartée : doublon de traduction avec fieldnote).
- Cause du pivot : aucun appareil du duo ne supporte Gemini Nano on-device
  (S20 FE et Redmi Note 13 Pro 5G absents de la liste ML Kit ; émulateur sans
  AICore) → 4 × Web/Chrome.
- Prochaine étape : gate H (validation label-lens + re-plateforme
  signal-guard) → étape 4 build (`prompts/03-build.md`, template CI
  `pr-pipeline/`). Backend imposé : `GoogleAIBackend` (Spark free tier).
- Prérequis build : Gemini Nano multimodal actif sur le PC Gaia
  (`tools/nano-check/`), sinon l'idée retombe sur cloud-first et perd son
  différenciant → à trancher au gate.
- Aucun secret dans les fichiers du projet.
