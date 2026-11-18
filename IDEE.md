# IDEE — buildhybridai-label-lens (Web/Chrome)

Nouvelle ébauche R2 (2026-11-17), remplace Babel Chip (écartée : doublon de traduction avec fieldnote). Critères : `../../../criteres/index.json#buildhybridai-2026` + `../../FICHE.md` + `CRITERES.md` (généré).

## Pitch (1 phrase)

Photo d'une étiquette d'emballage → Gemini Nano 4 **lit l'image sur l'appareil** et extrait ingredients, allergènes, valeurs nutritionnelles et avertissements ; le cloud Gemini ne recoupe que ce que le local n'a pas su lire, et chaque champ affiche sa source (LOCAL / CLOUD).

## Problème / cible

Lire une étiquette (produit allergenisant, médicament, complément, cosmétique) demande du temps, une loupe et une table de correspondance — et l'utilisateur ne sait pas quoi comparer. Les applis existantes envoient la photo à un cloud : la photo part chez un tiers, et la réponse est opaque (« peu de sucre »). Cible : personnes avec allergie/intolérance, parents, soignants en déplacement.

## Features

- Capture photo (ou fichier) → **lecture locale** via Gemini Nano 4 multimodal (Prompt API, JPEG/PNG) → champs structurés : ingrédients, allergènes (14 EU), nutrition/100 g, avertissements, date de durabilité.
- Chaque champ porte sa provenance : **LOCAL** (lu sur l'appareil) ou **CLOUD** (recoupé quand le local est incertain : lecture floue, texte non latin, allergène ambigu).
- Comparateur d'étiquettes (Firestore) : deux produits côte à côte, le champ le plus critique mis en avant ; historique des versions d'étiquette.
- Remote Config : seuil d'escalade cloud + catégories surveillées (allergènes par défaut) ; Authentication (compte) ; App Check (requis).

## Différenciation

Seul projet **image → structuré** du lot, seul projet santé/alimentation. L'hybride est visible et mesurable (compteur « 4 champs lus en local, 1 recoupé en cloud », latence), et le mode avion montre la limite assumée : local = lecture fiable, mais pas de recoupement.

## Risques

- Multimodal on-device = feature Chrome expérimentative : flag `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input` à activer, à vérifier sur le PC Gaia (`tools/nano-check/`).
- Précision de lecture locale sur photo réelle → seuil bas + repli cloud, et jeu de photos de démo **écrit à la main / sous licence** (zéro photo personnelle, zéro PII).
- Pas de stockage des photos dans Firestore (PII) : on ne garde que le texte extrait.

## Pourquoi ça gagne

- Démo de 60 s très visuelle : photo → champs qui apparaissent en vert (local) → un champ bascule en orange (cloud) → comparaison.
- Impact réel et audience universelle (allergies, Hygiene alimentaire,看不出) — critère *Potential Impact* démontrable.
- Complète le trio (confidentialité / terrain / arnaques) sans jamais ressembler aux 3 autres rendus.

## Livrables visés (critères 1-1)

| Livrable | Plan |
|---|---|
| Repo public GitHub + licence OSS (Apache-2.0) | Firebase AI Logic importé et appelé au runtime (Nano 4 multimodal + cloud) |
| Vidéo YouTube publique ≤ 3 min EN | footage Chrome desktop, lecture locale puis recoupement cloud |
| Démo hébergée | web app statique (Firebase Hosting, free tier) |
| Description EN | usage Firebase AI Logic, features, value prop, résumé période |
| Catégorie sélectionnée | Web/Chrome |
