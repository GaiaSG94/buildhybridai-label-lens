# PAGES — Label Lens (desktop 1440 × 900)

Statut : validé par Gaia le 2026-11-18 (avec la direction 01 Fiche). Dérivé de `../IDEE.md` (features) et des critères Stage 2.

| # | Page | Rôle | Contenu clé | Statut |
|---|---|---|---|---|
| 1 | **Lecture** (page principale) | Montrer la lecture d'une étiquette et la provenance de chaque champ | photo de l'étiquette avec zones lues ; ingrédients, allergènes (14 EU), nutrition /100 g, avertissements, date de durabilité ; puce LOCAL / CLOUD par champ ; compteur « N lus en local, M recoupés en cloud » + latences | `planches/v3/01-lecture.html` · **validée (V4, verrouillée)** |
| 2 | **Capture** | Déposer / prendre la photo, suivre l'analyse | zone de dépôt + bouton caméra ; état d'analyse (champs qui se remplissent) ; état modèle local (prêt / indisponible) ; mode avion (local seul, pas de recoupement) | `planches/v3/02-capture.html` · **validée (V4, verrouillée)** |
| 3 | **Comparaison** | Deux étiquettes côte à côte | 2 colonnes alignées champ par champ ; champ le plus critique mis en avant (allergènes par défaut, via Remote Config) ; provenance conservée | `planches/v3/03-comparaison.html` · **validée (V4, verrouillée)** |
| 4 | **Historique** | Versions d'étiquette d'un même produit | liste datée des lectures ; différences entre versions (texte extrait seulement, pas de photo stockée) | `planches/v3/04-historique.html` · **validée (V4, verrouillée)** |

## Hors pages (états, pas des écrans)

- Connexion (Authentication) : un état de la barre haute, pas une page dédiée — **à confirmer** : faut-il un écran de connexion à part ?
- Réglages Remote Config (seuil d'escalade, catégories surveillées) : pilotés côté console, pas d'écran utilisateur prévu dans `IDEE.md` — **à confirmer**.

## Pourquoi Lecture est la page principale

C'est l'écran où l'hybride se voit (provenance par champ) : il sert à la fois *Technological Implementation* et *Design*, et c'est le plan central de la vidéo de 60 s.
