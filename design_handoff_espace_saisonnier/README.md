# Handoff : Espace Saisonnier — Camping Capfun Le Paradis de Bazas

## Overview
Site web d'**onboarding pour les travailleurs saisonniers** du camping Capfun « Le Paradis de Bazas » (Bazas, Gironde, France). Il accueille les nouveaux saisonniers de la saison 2026, leur donne toutes les infos pratiques (logement, trajet, règles de vie), présente le groupe Capfun, le camping, l'univers d'animation, l'équipe, leurs avantages, et les consignes de sécurité.

C'est un site **statique multi-pages, 100 % en français**, au ton chaleureux et ludique (univers camping familial). Langue de l'interface : **français** — tout le copy doit rester en français.

## About the Design Files
Les fichiers de ce bundle sont des **références de design réalisées en HTML/CSS/JS vanilla** — des prototypes montrant l'apparence et le comportement voulus, **pas** du code de production à copier tel quel.

La tâche est de **recréer ces designs dans l'environnement du codebase cible** (React, Vue, Astro, etc.) en suivant ses patterns et librairies établis. Si aucun environnement n'existe encore, ce site étant simple et statique, **Astro**, **Next.js (static export)** ou **Eleventy** sont d'excellents choix ; le HTML/CSS vanilla fourni peut aussi être livré quasiment tel quel si un site statique suffit.

Le contenu (textes français, coordonnées, photos d'équipe) est **réel** et provient du brief PDF du client — à conserver fidèlement.

## Fidelity
**High-fidelity (hifi)**. Couleurs, typographie, espacements et interactions sont définitifs. Recréer l'UI au pixel près en utilisant les composants/patterns du codebase cible. Tous les tokens sont centralisés dans `styles.css` (variables CSS `:root`).

## Architecture des pages
Site de **9 pages** partageant `styles.css` + `site.js`, une barre de nav et un footer identiques. Ordre de navigation (boutons Précédent/Suivant en bas de page) :

| # | Fichier | Titre | Bandeau (couleur) |
|---|---------|-------|-------------------|
| — | `index.html` | Accueil | hero violet |
| 01 | `avant-arrivee.html` | Avant ton arrivée | vert |
| 02 | `le-groupe.html` | Le Groupe | violet |
| 03 | `le-camping.html` | Le Camping | cyan |
| 04 | `farfarolle.html` | Le Monde de Farfarolle | corail |
| 05 | `travailler.html` | Travailler ici | violet |
| 06 | `avantages.html` | Mes Avantages | magenta |
| 07 | `les-teams.html` | Les Teams | magenta |
| 08 | `code-rouge.html` | Code Rouge (sécurité) | corail |

## Design Tokens
Tous définis dans `styles.css` `:root`. À reproduire tels quels.

### Couleurs
```
--purple:      #5a2cd6   --purple-deep: #3a169c   --purple-ink: #241258
--blue:        #2b7fe0   --cyan:        #23b1e6
--magenta:     #c0186b   --pink:        #f6a5c8   --pink-soft:  #ffd9e8
--yellow:      #ffc62e   --green:       #34b24a   --orange:     #ff7a2f
--coral:       #ec3b46
--ink:         #241a4d   (texte principal)
--ink-soft:    #5b5378   (texte secondaire)
--cream:       #fbf6ef   (fond de page)
--cream-2:     #f3ece1   --card: #ffffff
--line:        rgba(36,26,77,.10)  (bordures)
```
Bandeaux d'en-tête = dégradés radiaux par couleur (classes `.bg-purple`, `.bg-cyan`, `.bg-magenta`, `.bg-coral`, `.bg-green`).

### Typographie
- **Display / titres** : `Fredoka` (Google Fonts), poids 400–700. Titres en 600/700, `letter-spacing:-.01em`.
- **Corps** : `Nunito` (Google Fonts), poids 400–800.
- Échelle fluide : `h1` clamp(2.4rem,5.2vw,4.4rem) · `h2` clamp(1.9rem,3.6vw,2.9rem) · `h3` clamp(1.25rem,2vw,1.6rem) · `.lead` 1.2rem.
- `body` line-height 1.6 ; `text-wrap:pretty` sur les paragraphes.

### Rayons / ombres / layout
```
--r-sm:12px  --r:20px  --r-lg:30px  --r-xl:42px
--shadow-sm: 0 4px 14px rgba(36,26,77,.08)
--shadow:    0 14px 38px rgba(36,26,77,.12)
--shadow-lg: 0 30px 70px rgba(36,26,77,.20)
--maxw:1180px   --nav-h:74px
```
Espacement vertical des sections : `padding: clamp(56px,8vw,110px) 0`.

## Composants partagés

### Barre de navigation (`.nav`)
- Sticky en haut, hauteur 74px, fond crème translucide `backdrop-filter:blur(14px)`, bordure basse fine.
- Gauche : logo `assets/logo-paradis.png` (classe `.brand-logo`, hauteur ~42px).
- Centre : liens (`.nav-links a`) en Fredoka 500 ; le lien actif a la classe `.active` (fond violet, texte blanc, pilule) ; hover = fond blanc + texte magenta.
- Droite : bouton CTA (`.btn`) + burger mobile.
- **Responsive** ≤980px : les liens deviennent un menu déroulant plein largeur (toggle via `.open`, géré par `site.js`).

### Footer (`.footer`)
- Fond `--purple-ink`, 4 colonnes : marque+adresse, « L'essentiel », « Découvrir », « En cas d'urgence » (encart corail `.emergency` avec n° d'astreinte). Responsive → 2 puis 1 colonne.

### Boutons (`.btn`)
Pilules `border-radius:999px`, Fredoka 600. Variantes : `.btn-primary` (magenta), `.btn-sun` (jaune, texte violet-encre), `.btn-ghost` (translucide bordé blanc, sur fond foncé), `.btn-outline` (blanc bordé). Hover = `translateY(-2px)` + ombre colorée.

### Hero / bandeaux (`.hero`, `.page-head`)
- Fond dégradé radial + texture de bruit SVG (`.hero-grain`, opacity .5, mix-blend overlay).
- `.hero` (accueil) : crochets de cadrage décoratifs `.brackets`/`.bracket-b` (motif appareil photo) + onde SVG de séparation en bas (`.wave`, remplie `--cream`).
- `.page-head` (pages intérieures) : eyebrow + h1 + paragraphe, onde SVG en bas. Tous les textes en blanc.

### Cartes & grilles
- `.card` (fond blanc, `--r-lg`, `--shadow`) ; `.feature` (carte d'icône : pastille `.badge` 54px arrondie + titre + texte).
- Grilles : `.grid` avec `gap:clamp(18px,2.4vw,30px)`, modificateurs `.g-2/.g-3/.g-4`. Responsive : g-3/g-4 → 2 col ≤900px, tout → 1 col ≤560px.
- `.tile` (accueil) : tuiles de navigation colorées 210px min, emoji géant en filigrane (`.ic`), numéro + titre + flèche. Hover `translateY(-6px)`.
- `.chip`, `.pill-tag` (étiquettes), `.checklist` (liste à puces ✓ vertes), `.eyebrow` (sur-titre magenta avec trait).

### Animation au scroll (`.reveal`)
Éléments `.reveal` : `opacity:0; translateY(26px)`, passent à visible via la classe `.in` ajoutée par un IntersectionObserver dans `site.js` (threshold .14). Respecte `prefers-reduced-motion`.

## Écrans / Pages (détail)

### Accueil (`index.html`)
- **Hero violet** : eyebrow « Saison 2026 », h1 « Bienvenue au Paradis de Bazas », sous-titre, 2 CTA (jaune + ghost), ligne d'infos (adresse, espace aquatique, Farfarolle).
- **Mot des directeurs** : carte blanche — pastille « Vos directeurs » + eyebrow, h2 « Chris & Mariam vous accueillent », citation, 2 chips téléphone. *(Pas de photos ici — décision client.)*
- **Navigation par sections** : grille de 9 `.tile` colorées vers chaque page.
- **Teaser avantages** : section magenta, 4 `.feature` (–30 % resto, accès piscine gratuit, –10 % Myl'Beauté, –10 % accrobranche/trampoline) + CTA.

### Avant ton arrivée (`avant-arrivee.html`)
3 features (hébergement, accès réservé, cadre de vie) ; « Comment arriver » (adresse / voiture+parking / train) ; checklist valise ; encart tranquillité (23h00).

### Le Groupe (`le-groupe.html`)
Histoire Capfun (1992, ~200 campings) ; marques du groupe ; section « Cap sur le Fun » (4 valeurs : Innovation, Originalité, Qualité, Convivialité) ; **CREDO** complet en cartes Q&R (`.credo-q`, grille 2 col, styles dans le `<style>` de la page).

### Le Camping (`le-camping.html`)
Espace aquatique (4 features) ; activités haute/basse saison ; hébergements & services ; **plan du camping** (`assets/plan-haute-jour.png`, cliquable/zoomable).

### Le Monde de Farfarolle (`farfarolle.html`)
Mascotte Balkos ; line-up des mascottes (`assets/mascottes-lineup.png` + grille de noms) ; spectacles 2026 (Mamma Mia, Reine des Neiges).

### Travailler ici (`travailler.html`)
Contacts Chris & Mariam ; infos pratiques (horaires/signature des heures, tenue, hébergement, pauses) ; besoin d'aide + esprit d'équipe ; **plan saisonnier & zones de travail** (`assets/plan-haute-jour.png`) avec légende des zones en chips colorées.

### Mes Avantages (`avantages.html`)
- **Sur le camping** : 2 grandes cartes `.perk` (grille 2 col, image + corps). Restaurant –30 % (image en `object-fit:contain` sur fond violet `.perk-media.fit` pour voir tout le poster) ; Espace aquatique gratuit (`.perk.flip` = image à droite).
- **Partenaires** : 3 cartes (Myl'Beauté –10 %, Aventures Sud-Gironde –10 %, New Jump Trampoline –10 %).
- Note pratique : présenter qu'on est saisonnier (⚠️ **pas** de badge/carte — le camping n'en a pas).

### Les Teams (`les-teams.html`)
Grille de 6 cartes `.team` (en-tête coloré + liste de membres `.member` avec avatar photo rond `.av`).
- **Direction** : Chris, Mariam, Jessica · **Animation** : Julien, Jean Luc, Basma · **Réception** : Gwen, Rémi · **Ménage** : Roze, Kalyssa, Noah · **Technique & Espaces Verts** : Remy, Philippe, Jeremy, Mathéo, Matthew, Barth · **« Et toi ? »** (carte jaune d'accueil).
- **Effet avatar au survol** (clé) : l'avatar `.av:hover` passe `transform:scale(1.85) translateY(-8px)`, contour blanc 4px, ombre portée, et **flotte** en boucle (`@keyframes av-float`, 2.4s). Les cartes `.team` ont `position:relative` SANS `overflow:hidden` pour ne pas couper l'avatar agrandi. Styles dans le `<style>` de la page.

### Code Rouge (`code-rouge.html`)
Numéros d'urgence (`.num-card`, dont 2 « big ») ; 9 réflexes sécurité (checklist) ; **Guide du donneur d'alerte** (6 étapes `.step` numérotées + encart corail « Exemple · ce qu'il faut dire » avec le message-type d'appel au 18) ; infographie équipement (`assets/cr-equipement.png`) ; plans d'évacuation (`assets/cr-*.png`, zoomables).

## Interactions & Behavior
- **Menu mobile** : burger toggle la classe `.open` sur `.nav-links` (`site.js`). Se ferme au clic sur un lien.
- **Reveal au scroll** : IntersectionObserver ajoute `.in` aux `.reveal` (`site.js`). Fallback : tout visible si pas d'IO.
- **Nav Précédent/Suivant** : pilules `.prev-card` / `.next-card` en bas de chaque page intérieure, flèche ronde jaune qui pivote au hover (`.next-arrow`). L'accueil n'a que Suivant ; Code Rouge boucle vers l'accueil.
- **Avatars d'équipe** : zoom + flottement au hover/focus (voir Les Teams).
- **Images zoomables** (`.zoomable`) : lightbox au clic — vérifier l'implémentation dans `site.js` et la recréer (overlay plein écran, fermeture au clic/Échap).
- **Hover boutons/tiles/cartes** : translateY + ombres (transitions ~.18–.2s ease).

## Responsive
- Breakpoints principaux : **980px** (nav → burger), **900px** (g-3/g-4 → 2 col), **820px** (`.perk` → 1 col), **780px** (footer → 2 col), **680px** (credo → 1 col), **560px** (grilles → 1 col, prev/next empilés), **480px** (footer → 1 col).
- Toutes les tailles de police sont fluides (`clamp`). Densité confortable, cibles tactiles ≥44px.

## State Management
Site statique — **aucun state applicatif** hormis : (1) état ouvert/fermé du menu mobile, (2) état visible/caché des `.reveal`, (3) ouverture de la lightbox d'image. Aucune donnée distante, aucun formulaire backend.

## Assets
Tous dans `assets/`. Provenance : extraits du brief PDF Canva du client + logo officiel fourni.
- **Logo** : `logo-paradis.png` (fond transparent).
- **Photos d'équipe** (avatars détourés sur fond transparent, ~420×420) : `team-<prénom>.png` pour chacun des 14 membres listés ci-dessus.
- **Posters avantages** : `avantage-restaurant.png`, `avantage-piscine*.png`, `avantage-mylbeaute.png`, `avantage-accrobranche.png`, `avantage-trampoline.png`.
- **Plans** : `plan-haute-jour.png`, `plan-haute-nuit.png`, `plan-basse-saison.png`.
- **Code Rouge** : `cr-equipement.png`, `cr-accident.png`, `cr-arret-cardiaque.png`, `cr-noyade-avec.png`, `cr-noyade-sans.png`.
- **Mascottes / camping / groupe** : `mascottes-lineup.png`, `balkos-photo.png`, `farfarolle-*.png`, `camping-infographic.png`, `hero-camping.png`, `groupe-equipe.png`, `mission-slogan.png`, `credo-pool.png`, `brand-*.png`.
- Polices : Google Fonts **Fredoka** + **Nunito** (importées en haut de `styles.css`).

## Files
- `index.html`, `avant-arrivee.html`, `le-groupe.html`, `le-camping.html`, `farfarolle.html`, `travailler.html`, `avantages.html`, `les-teams.html`, `code-rouge.html` — les 9 pages.
- `styles.css` — design system complet (tokens + tous les composants partagés).
- `site.js` — menu mobile, reveal au scroll, lightbox images.
- `assets/` — toutes les images et avatars.

## Notes d'implémentation
- **Factoriser** la nav, le footer et les boutons prev/next en composants réutilisables (ils sont dupliqués dans chaque HTML). Le lien actif de la nav doit refléter la page courante.
- Conserver les **variables CSS** comme source de vérité des tokens (ou les mapper vers le système de thème du codebase).
- Garder tout le **copy en français** à l'identique (contenu client réel : coordonnées, noms, montants de réduction).
- Pas de dépendance JS lourde nécessaire — vanilla suffit ; un framework statique facilite surtout la factorisation des partials.
