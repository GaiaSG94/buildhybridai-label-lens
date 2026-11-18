# DESIGN — journal Label Lens

Versions datées, jamais écrasées. Écrit par le designer uniquement.

## V1 — 2026-11-18 · exploration (close)

Livré :
- `PAGES.md` (4 pages proposées : Lecture, Capture, Comparaison, Historique)
- `REFS.md` (Dominic Burt analysé ; Mobbin en structure seulement, CSS non chargée)
- 3 planches de la page principale **Lecture** :
  - `planches/v1/01-fiche.html` (déplacée en V2 dans `planches/v1/explorations/`) — *Fiche* : papier, grande linéale serrée, deux colonnes photo / champs, puce de provenance accolée à chaque valeur. Direction de départ du brief, poussée.
  - `planches/v1/02-calque.html` — *Calque* : fond graphite, la photo au centre, chaque champ est une légende reliée à la zone lue de l'étiquette ; frise de temps local → cloud en bas.
  - `planches/v1/03-etiquette.html` — *Étiquette* : s'écarte du brief ; l'écran devient lui-même une étiquette réglementaire (cadres noirs épais, typo dense), la provenance est une colonne `SRC`.

Données de démo : produit fictif écrit à la main (barre avoine-noisette), étiquette dessinée en SVG, aucune photo réelle ni marque.

Décisions :
- Page principale = Lecture (c'est là que l'hybride se voit).
- Rouge allergène utilisé une seule fois par écran : la ligne « Contains ».
- Polices système uniquement (aucune dépendance réseau) : grotesque `Inter → Helvetica Neue → Arial`, mono `ui-monospace → Menlo`.

En attente : validation de `PAGES.md` + choix d'une direction.

## V2 — 2026-11-18 · déclinaison « Fiche » (refusée : manque d’identité)

Décision : Gaia valide la direction **01 Fiche** et `PAGES.md`.

Livré :
- `STYLE.md` : palette, échelle typo, grille, composants, états, mouvement.
- `planches/v1/01-lecture.html` : Lecture, reprise à l'identique de 01 Fiche.
- `planches/v1/02-capture.html` : analyse en cours ; 7 champs lus en local, 2 en recoupement cloud, 4 en lecture ; zone de dépôt ; ligne hors-ligne.
- `planches/v1/03-comparaison.html` : A (barre avoine-noisette) contre B (barre avoine-cacao, fictive) ; champ critique allergènes en tête ; écarts nutritionnels B − A en mono.
- `planches/v1/04-historique.html` : 3 versions datées ; tableau des 5 champs changés entre le 02 Sep et le 18 Nov 2026 ; les 9 inchangés résumés.

Changelog :
- Explorations 01/02/03 déplacées dans `planches/v1/explorations/` ; `planches/v1/` ne garde qu'une planche par page.
- Ajout des états « READING » (puce grise, trait gris) et « cross-checking » (puce tirets orange, trait orange) dans `STYLE.md`.
- Rouge allergène : Capture et Lecture → ligne « Contains » ; Comparaison → l'allergène présent dans B seulement ; Historique → la trace ajoutée.

Questions ouvertes : écran de connexion dédié ? écran de réglages Remote Config ? (rien dans `IDEE.md`, non dessiné).

## V3 — 2026-11-18 · « Fiche » durcie (dépassée par V4)

Retour Gaia sur V2 : pas assez d'identité visuelle ; travailler les motifs ; plus de contraste d'agencement des blocs et de couleurs.

Livré (`planches/v2/`, V2 conservée dans `planches/v1/`) :
- `01-lecture.html`, `02-capture.html`, `03-comparaison.html`, `04-historique.html`.
- `STYLE.md` réécrit (motifs, blocs, états).

Changelog :
- 4 motifs-signatures : l'étiquette à œillet (puces, onglet, bouton, logo) ; la barre hybride proportionnelle ; le fil de lecture numéroté 01–06 entre photo et blocs ; la règle de tableau nutritionnel (filets épais, en-tête encre).
- Blocs pleins : barre haute encre, scène photo pleine hauteur, bloc allergène rouge plein, nutrition à en-tête encre, version courante / champ critique en encre.
- CLOUD toujours hachuré, LOCAL toujours plein : la provenance se lit sans la couleur.
- Capture : barre hybride à 3 segments (7 local / 2 checking / 4 reading), dépôt en bloc encre.
- Comparaison : en-têtes produit A encre / B blanc cadré, écarts B − A en pastilles encre, allergène différent en bloc rouge.
- Historique : versions en blocs (courante encre, comparée cadrée, première au trait), nouvelle valeur sur colonne blanche à filet encre.

## V4 — 2026-11-18 · « Fiche » + matière, scène, récit (validée)

Retour Gaia sur V3 : s'appuyer sur les refs du pipeline (`REFERENCES-CAPTURES/narratif-jeu`, `3d-matiere`) pour améliorer significativement le design.

Livré (`planches/v3/`, V3 conservée dans `planches/v2/`) :
- `01-lecture.html` : scène studio, paquet 3D sur socle à anneau vert, zones collées sur la face, HUD, annotation manuscrite qui envoie la ligne floue vers le cloud.
- `02-capture.html` : même scène, nappe de scan qui traverse le paquet, anneau partiel.
- `03-comparaison.html` : étagère sombre avec les deux paquets et leurs plaques, étoile « PEANUT IN B ONLY », puis la comparaison champ par champ.
- `04-historique.html` : galerie claire avec 3 versions du paquet, la courante sous un spot, « new recipe! » à la main ; tableau des changements + compteurs.
- `REFS.md` (§3) et `STYLE.md` (additif V4).

Changelog :
- Ajout : grain papier, lumière dirigée, ombres de tickets, titres et chiffres en relief.
- Ajout : boîte 3D CSS réutilisable (`pack()`), socle, HUD, nappe de scan.
- Ajout : annotations manuscrites (1 par écran) et étoile-bulle (Comparaison seulement).
- Conservé de V3 : étiquette à œillet, barre hybride, fil numéroté, règle de tableau, CLOUD hachuré, rouge unique.

Limite : la typo manuscrite dépend des polices installées (pas de police embarquée).

## LOCK — 2026-11-18

Gaia valide la V4 et verrouille le style (`/lock`). Fin des explorations.

- Référence unique pour l'implémentation : `planches/v3/*.html` + `STYLE.md` (socle V3 + additif V4).
- Les 4 pages de `PAGES.md` sont validées.
- `planches/v1/`, `planches/v2/` et `planches/v1/explorations/` restent comme historique, à ne pas implémenter.
- Toute modification ultérieure = nouvelle version datée dans ce journal, sur demande explicite.
- Restent ouverts (hors style) : écran de connexion dédié ? écran de réglages Remote Config ?
