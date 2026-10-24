# Nourish by Siessima 🌸

Site vitrine pour une diététicienne-nutritionniste : accueil, À propos, Services, Galerie, En vidéo, Bibliothèque (recettes, guides, fiches conseils), tableau « Laisser une trace » et Contact. Thème rose et fleurs, mode jour/nuit, pétales qui tombent sur la page.

Le site est fait en HTML, CSS et JavaScript simples, **sans installation ni outil à lancer**.

## Structure du dossier

```
nourish-by-siessima/
├── index.html        # La structure de la page
├── css/
│   └── style.css     # Les styles (couleurs, mise en page, animations)
├── js/
│   ├── config.js     # ✏️ LE FICHIER À MODIFIER : tous les textes et contenus
│   ├── main.js       # Le fonctionnement du site (à ne pas toucher)
│   └── theme.js      # Choix du mode jour/nuit au chargement
├── images/
│   └── logo.webp     # Le logo (et l'icône de l'onglet du navigateur)
└── README.md         # Ce fichier
```

## Voir le site

Double-clique sur `index.html` : il s'ouvre dans le navigateur. Les polices Google (Fraunces, DM Sans, Caveat) demandent une connexion internet ; sans connexion, des polices de secours sont utilisées.

## Modifier le contenu

Tout se passe dans **`js/config.js`**. Ouvre-le avec un éditeur de texte (Bloc-notes, VS Code…), remplace les textes entre crochets `[...]`, enregistre, puis recharge la page.

| À changer | Dans `config.js` |
|---|---|
| Nom, phrase d'accueil | `brand`, `name`, `by`, `tagline` |
| Texte « À propos » et pastilles | `about`, `tags` |
| Services | `services` (titre `t`, description `d`, pastilles `inc`) |
| Recettes, guides, fiches | `library` (voir ci-dessous) |
| Email, téléphone, ville, horaires, réseaux | `email`, `phone`, `city`, `hours`, `links` |
| Logo et photos | `logo`, `photos` |

### La bibliothèque

Chaque dossier (`Recettes`, `Guides`, `Fiches conseils`) contient une liste de contenus. Un contenu peut avoir :

- `t` : le titre, `tag` : la ligne d'info (durée, type…), `d` : la description
- `ing` : la liste des ingrédients et `steps` : les étapes (pour une recette)
- `pts` : les points à retenir (pour un guide ou une fiche)
- `u` : l'adresse d'un PDF à télécharger (facultatif, `"#"` = pas de bouton)

Pour ajouter un contenu, copie un bloc `{ ... }` existant, colle-le dans la liste et modifie-le. Pour ajouter un dossier, copie un bloc `{ n: "...", f: [...] }`.

> Les recettes, guides et conseils fournis sont des **exemples généraux** à relire et adapter par la diététicienne avant publication.

## Ajouter les photos et le logo

1. Place tes images dans le dossier **`images/`** (formats `.jpg`, `.png` ou `.webp`, de préférence légères, moins de 500 Ko chacune).
2. Ouvre `js/config.js` : la section **📷 PHOTOS ET LOGO** est tout en haut du fichier. Indique le chemin de chaque image dans la liste `photos` :

```js
photos: ["images/portrait.jpg", "", "", "images/galerie-1.jpg", "", "", "", "", "", ""],
```

| Numéro | Emplacement |
|---|---|
| 1 | Portrait dans « À propos » |
| 2 et 3 | Cadres polaroïd de l'accueil (écrans larges) |
| 4 à 10 | Galerie |

Un emplacement laissé vide (`""`) affiche un cadre rose « Photo N ». Pour changer le logo, remplace `images/logo.webp` par ton fichier (carré, idéalement 300 × 300 px) ou modifie `logo` dans `config.js`.

## Les vidéos

Dans `config.js`, la liste `videos` donne le fichier (`u`) et la légende (`t`) de chaque vidéo. La première est la vidéo de présentation (avec le son et les boutons de lecture). Les autres tournent en boucle, sans le son, quand on arrive dessus. Format conseillé : vertical (9:16), `.mp4`, moins de 3 Mo chacune. Liste vide = la section disparaît.

## Changer les couleurs

En haut de `css/style.css`, les couleurs sont définies une seule fois (`--rose`, `--petal`, `--bg`, `--berry`…). Il y a un bloc pour le mode jour et un pour le mode nuit.

## Le formulaire de contact

Pour recevoir les messages directement dans ta boîte mail (gratuit jusqu'à 50 messages par mois) :

1. Crée un compte sur **formspree.io** avec l'adresse qui doit recevoir les messages.
2. Clique sur **New form**. Formspree donne une adresse du type `https://formspree.io/f/abcdwxyz`.
3. Dans `config.js`, colle la fin de cette adresse : `formspree: "abcdwxyz",`.
4. Envoie un premier message depuis le site en ligne et confirme-le dans le mail envoyé par Formspree.

Tant que `formspree` est vide (`""`), le formulaire ouvre l'application mail du visiteur avec le message déjà rempli.

## Le tableau « Laisser une trace »

Les dessins et les post-it ne sont pas enregistrés : chaque visiteur ne voit que les siens, et ils disparaissent au rechargement de la page. C'est un petit espace ludique.

## Mettre le site en ligne

Il s'agit d'un site statique : il suffit d'envoyer le dossier sur un hébergeur gratuit.

- **Netlify** : va sur app.netlify.com/drop et glisse-dépose le dossier.
- **Vercel** ou **GitHub Pages** : envoie le dossier dans un dépôt GitHub et suis l'assistant.

Une fois en ligne, l'icône de l'onglet (le logo) s'affiche aussi.

Après la mise en ligne, ouvre `index.html` et remplace `images/og.jpg` (balises `og:image` et `"image"`) par l'adresse complète, par exemple `https://nourish-by-siessima.vercel.app/images/og.jpg`. C'est l'image d'aperçu affichée quand on partage le lien sur WhatsApp, Instagram ou Facebook.

Si tu modifies `css/style.css` ou un fichier `js/`, augmente le numéro `?v=5` dans `index.html` (`?v=6`…) pour que les visiteurs reçoivent la nouvelle version au lieu de celle gardée en cache.
