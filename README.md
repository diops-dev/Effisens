# Effisens, site vitrine (Sandra Germade)

Site statique multipage HTML/CSS/JS pour **Effisens**, massages ayurvédiques, soins énergétiques, cures et formations. Conforme à la stratégie SEO 6 pages.

## Pages

| URL | Fichier |
|---|---|
| `/` | `index.html` |
| `/les-soins` | `les-soins.html` |
| `/les-cures` | `les-cures.html` |
| `/bretagne-secrete` | `bretagne-secrete.html` |
| `/formation` | `formation.html` |
| `/a-propos` | `a-propos.html` |
| `/contact` | `contact.html` |
| `/mentions-legales` | `mentions-legales.html` |

Plus : `sitemap.xml`, `robots.txt`, `404.html`, `.htaccess` (URL rewriting + HTTPS).

## Structure

```
effisens-site/
├── index.html
├── les-soins.html
├── les-cures.html
├── bretagne-secrete.html
├── formation.html
├── a-propos.html
├── contact.html
├── mentions-legales.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── .htaccess
└── assets/
    ├── css/
    │   ├── tokens.css     ← variables du design system Effisens
    │   └── site.css       ← styles du site
    ├── js/
    │   └── site.js        ← header sticky, mobile nav, reveal-on-scroll
    └── img/
        ├── *.jpg          ← photographies du design system
        ├── wordmark*.svg
        └── schirchampi-icon.png
```

## Stack

- **Aucun framework, aucune build step.** HTML/CSS/JS pur. Compatible Hostinger sans configuration.
- **Polices :** Cormorant Garamond + Nunito Sans via Google Fonts (déclarées dans `tokens.css`).
- **Formulaire de contact :** ouverture de la messagerie du visiteur via `mailto:` pré-rempli vers `effisensbienetre@gmail.com`. Pas de backend, pas de service tiers.
- **SEO :** balises Title, Description, Canonical, Open Graph + JSON-LD Schema.org (`LocalBusiness`, `Service`, `FAQPage`, `Course`, `Event`, `Person`) sur chaque page.

## Déployer sur Hostinger via GitHub

### 1. Initialiser le dépôt

```bash
cd effisens-site
git init
git add .
git commit -m "Initial commit, site Effisens"
git branch -M main
git remote add origin git@github.com:<ton-compte>/effisens-site.git
git push -u origin main
```

### 2. Connecter GitHub à Hostinger

1. Dans **hPanel Hostinger → Sites Web → ton domaine → Avancé → Git**.
2. Clique **Créer un dépôt** et colle l'URL HTTPS de ton dépôt GitHub.
3. Branche : `main`. Dossier de destination : `public_html`.
4. Active l'**auto-déploiement** : à chaque `git push`, Hostinger récupère et publie.

### 3. Premier déploiement

Force un déploiement initial depuis hPanel. Vérifie que `public_html/index.html` est bien en place.

### 4. SSL et domaine

- Active le SSL gratuit (Let's Encrypt) dans hPanel, le `.htaccess` redirige déjà HTTP → HTTPS.
- Si le domaine `effisens.fr` est externe, pointe les nameservers ou les A/CNAME vers Hostinger.

### Mises à jour

```bash
# Modifier ton site localement, puis
git add .
git commit -m "Mise à jour : <ce qui a changé>"
git push
```

Hostinger redéploie automatiquement en quelques secondes.

## Personnalisation rapide

- **Couleurs / typo / espacements** → `assets/css/tokens.css` (variables CSS).
- **Texte d'une page** → ouvrir le `.html` correspondant. Pas de templating, tout est directement éditable.
- **Téléphone / e-mail** → cherche `06 22 79 76 30` et `effisensbienetre@gmail.com` dans le projet et remplace-les si besoin.
- **Photos** → remplacer les fichiers dans `assets/img/` en gardant les mêmes noms (`abhyanga.jpg`, `shirodhara.jpg`, etc.) ou modifie les `src` des `<img>` en conséquence.
- **Adresses exactes des cabinets** → à compléter sur `contact.html` (section "Informations pratiques") quand elles seront à diffuser publiquement.

## Notes design

Le site est construit sur les tokens du **Effisens Design System** :
- Palette warm earth, terracotta, sand, sage, ochre, ink.
- Cormorant Garamond pour les titres, Nunito Sans pour le corps.
- Cards `--r-4` (14px), shadow `--shadow-2`, hover `--shadow-3` + image scale 1.04.
- Header transparent sur le hero, blurred sand au scroll.
- Reveal-on-scroll progressif via IntersectionObserver.

## Crédits & licences

- Photographies : © Sandra Germade / Effisens.
- Conception : Effisens Design System (mai 2026).
- Polices : Google Fonts (Cormorant Garamond, Nunito Sans).
