# Capfun · Le Paradis de Bazas — Espace Saisonnier

Site web interne destiné aux **saisonniers du camping Le Paradis de Bazas** (Capfun, Bazas · Gironde).  
Il centralise toutes les informations utiles avant et pendant la saison : logement, équipes, avantages, sécurité, animations.

---

## Aperçu

| Page | Description |
|---|---|
| **Accueil** | Mot de bienvenue des directeurs, navigation par rubriques, aperçu des avantages |
| **Avant ton arrivée** | Adresse, transport, checklist valise, règles de vie |
| **Le Groupe** | Histoire Capfun, marques du groupe, mission, credo |
| **Le Camping** | Espace aquatique, activités, hébergements |
| **Farfarolle** | Univers des mascottes, Balkos, carte de l'île, spectacles 2026 |
| **Travailler ici** | Contacts, plannings, tenue, hébergement, esprit d'équipe |
| **Mes Avantages** | –30 % restaurant, piscine gratuite, partenaires (trampoline, accrobranche, beauté) |
| **Les Teams** | Présentation des équipes et membres, mascottes, aperçu des avantages |
| **Code Rouge** | Numéros d'urgence, procédures, équipement de sécurité, plans d'évacuation |

---

## Stack technique

- **HTML5** sémantique — 9 pages statiques, aucune dépendance build
- **CSS3** — design system partagé (`styles.css`) : variables CSS, grilles responsive, animations scroll
- **JavaScript vanilla** — `site.js` : menu mobile, reveal on scroll, lightbox zoom
- **Google Fonts** — Fredoka (titres) + Nunito (corps)
- Zéro framework, zéro bundler — fonctionne directement dans le navigateur

---

## Structure du projet

```
capfun/
├── index.html              # Accueil
├── avant-arrivee.html      # Rubrique 01
├── le-groupe.html          # Rubrique 02
├── le-camping.html         # Rubrique 03
├── farfarolle.html         # Rubrique 04
├── travailler.html         # Rubrique 05
├── avantages.html          # Rubrique 06
├── les-teams.html          # Rubrique 07
├── code-rouge.html         # Rubrique 08
├── styles.css              # Design system global
├── site.js                 # Comportements partagés
└── assets/                 # Images, logos, affiches
```

---

## Lancer le site en local

Aucune installation requise. Deux options :

**Option 1 — Ouvrir directement**
```
Ouvre index.html dans ton navigateur
```

**Option 2 — Serveur local (recommandé)**
```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```
Puis ouvre [http://localhost:8080](http://localhost:8080)

---

## Design system

| Token | Valeur |
|---|---|
| `--purple` | `#5a2cd6` |
| `--magenta` | `#c0186b` |
| `--orange` | `#ff7a2f` |
| `--yellow` | `#ffc62e` |
| `--cyan` | `#23b1e6` |
| `--green` | `#34b24a` |
| `--coral` | `#ec3b46` |
| Police titres | Fredoka |
| Police corps | Nunito |

---

## Informations camping

**Capfun · Le Paradis de Bazas**  
285 Chemin de Migot — 33430 Bazas, Gironde  
Accueil : 05 56 65 13 17  
Astreinte : 07 86 85 04 22  

---

## Licence

Usage interne Capfun uniquement. Tous droits réservés © 2026 Capfun.
