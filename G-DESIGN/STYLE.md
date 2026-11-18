# STYLE — Label Lens · VERROUILLÉ le 2026-11-18 (V4, `planches/v3/`)

Source de vérité : `planches/v2/*.html`. V2 du style (planches `v1/`) remplacée suite au retour : « pas assez d'identité, travailler les motifs, plus de contraste de blocs et de couleurs ».

## Principe

Trois matières seulement, posées en **blocs pleins** qui s'opposent : **encre** (barre haute, scène photo, en-têtes, éléments actifs), **papier / blanc** (contenu), **couleur sémantique pleine** (vert local, hachure orange cloud, rouge allergène). Pas de cartes ombrées, pas de gris moyen comme fond.

## Palette

| Rôle | Hex | Usage |
|---|---|---|
| Papier | `#fafaf8` | fond de page |
| Carte | `#ffffff` | blocs de champ, colonne « nouvelle valeur » |
| Encre | `#111417` | barre haute, en-tête nutrition, bloc actif, bouton primaire, filets épais |
| Scène | `#1b1d20` | cadre photo |
| Encre 2 / 3 | `#4a4f55` / `#8a8f94` | libellés / méta |
| Filet | `#e3e3df` | lignes fines, état « reading » |
| LOCAL | `#0f9d58` | **aplat plein** |
| CLOUD | `#e8833a` | **toujours hachuré** : `#e8833a` / `#f2a165`, 45°, pas 10 px ; version douce 16 % / 5 % pour les fonds |
| Alerte | `#c81e1e` | **un seul bloc plein par écran** (texte blanc) |

Local = plein, cloud = hachuré : la provenance se lit aussi sans la couleur.

## Motifs-signatures

1. **L'étiquette** — forme à pointe gauche percée d'un œillet (`clip-path` 7 px + point 4 px de la couleur du fond). Utilisée pour : puces LOCAL / CLOUD / READING, numéros de zone, onglet actif, bouton primaire, logo. C'est l'« étiquette dans l'étiquette ».
2. **La barre hybride** — bande proportionnelle pleine largeur, 64 px : segment vert plein (lu en local) + segment hachuré (cloud) + segment gris (en lecture), chiffre 38 px dans chaque segment. Version mini 8 px sur les cartes produit et les versions.
3. **Le fil de lecture numéroté** — chaque zone lue sur la photo porte un numéro (`01 INGREDIENTS` … `06 DATE`) ; le même numéro, en étiquette encre, ouvre le bloc de champ correspondant.
4. **La règle de tableau nutritionnel** — filet encre 3 px en tête de chaque bloc de champ, cadre encre 2 px + en-tête encre plein pour la nutrition, filet 4 px sous « Energy ».

## Typographie

Grotesque `Inter → Helvetica Neue → Arial` ; mono `ui-monospace → JetBrains Mono → Menlo`.

| Niveau | Valeur | Usage |
|---|---|---|
| Display | 58 px / 500 / −0,035 em / interligne 0,92 | nom du produit |
| Chiffre bloc | 38–40 px / 500 | barre hybride, compteurs |
| Alerte | 25 px / 500 blanc sur rouge | bloc allergène |
| Valeur | 21 px nutrition · 18 px champ | |
| Texte | 15 px / 1,5 | ingrédients |
| Label | mono 11 px capitales +0,08 em | en-têtes de bloc |
| Étiquette | mono 10 px 600 capitales +0,08 em | puces |

## Grille

- 1440 × 900 ; barre haute encre 56 px ; marges 48 px ; contenu à 24 px.
- Lecture / Capture : scène 470 px pleine hauteur | 40 px | colonne droite (en-tête, barre hybride, puis `1fr / 360 px`).
- Comparaison : `210 px | 1fr | 1fr`, gouttière 16 px ; colonne de gauche = libellés, bloc encre pour le champ critique.
- Historique : `400 px | 1fr` ; versions empilées, tableau `champ | avant | → | après | source`.

## États

| État | Rendu |
|---|---|
| Lu en local | étiquette verte pleine |
| Recoupé en cloud | étiquette hachurée + fond hachuré doux + note mono `#b5591a` (la raison) |
| En recoupement | étiquette hachurée « CHECKING » + trait hachuré à la place de la valeur |
| En lecture | étiquette grise « READING », filet de bloc en pointillé, trait en peigne gris |
| Hors ligne | ligne mono encre 3 : la lecture locale continue, le recoupement attend |
| Actif / courant | bloc encre plein (onglet, version courante, champ critique) |
| Référence | bloc blanc cadre encre 2 px |

## Mouvement

- Ligne de scan verte qui descend la photo ; chaque zone s'allume quand son bloc se remplit (fondu 160 ms, 60 ms d'écart).
- La barre hybride grandit segment par segment, le chiffre compte.
- Bascule en cloud : l'étiquette passe de grise à hachurée en 200 ms, la hachure glisse lentement (6 s/boucle) tant que le recoupement tourne.

## Interdits rappelés

Pas d'emoji, pas de logo tiers, pas de dégradé (la hachure est un motif à 2 tons, pas un dégradé), pas de seconde couleur d'accent, pas de mobile.

---

# Additif V4 — matière, scène, récit (2026-11-18)

Source de vérité : `planches/v3/*.html` (V4 du style). Tout ce qui précède reste valable ; s'y ajoutent :

## Matière et lumière
- Fond papier `#f3f2ee` + grain fin (bruit SVG 7 %) + halo de lumière venant du haut-gauche.
- **Blocs = tickets posés sur une table** : ombre dirigée vers le bas-droite (`6px 8px 0 -3px` + `14px 20px 30px -6px`, encre à 7–16 %).
- **Titres en relief** : extrusion 3 px vers le bas-droite (`#3d4247 → #6a6f74`) + ombre portée douce ; chiffres de la barre hybride extrudés dans leur couleur.

## Scène (Lecture, Capture)
- Studio sombre pleine hauteur : mur `#2a2e33 → #1b1d20`, sol `#121417`, ligne d'horizon nette à 58 %, faisceau lumineux en haut à gauche, grain.
- **Le paquet** : vraie boîte 3D CSS (face = étiquette, côté, dessus ; `rotateX(-11°) rotateY(-26°)`, perspective 1500 px), zones numérotées collées sur la face.
- **Le socle** : cylindre graphite, anneau vert lumineux = lecture sur l'appareil ; en Capture, anneau partiel = progression.
- HUD mono aux 4 coins (scène, fichier, moteur, latences).
- Capture : nappe de scan verte qui traverse le paquet.

## Récit
- **Annotations manuscrites** : un seul trait à la main par écran pour raconter ce qui s'est passé (cercle autour de la ligne floue, flèche vers le bloc cloud, « too blurry — asked the cloud »). Orange quand c'est le cloud, encre sinon.
- **Étoile-bulle** : réservée au fait décisif de la Comparaison.
- Comparaison = étagère (paquets + plaques de musée) ; Historique = galerie claire (3 paquets, la version courante sous un spot).

## Typo manuscrite
Pas de police embarquée (zéro réseau) : pile `"Comic Neue","Segoe Print","Bradley Hand","Chalkboard SE","URW Chancery L",cursive`. À remplacer par une police manuscrite sous licence libre embarquée en base64 si on passe en production.
