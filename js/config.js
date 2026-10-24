/* ========= À MODIFIER : tout le contenu du site est ici ========= */
const C = {
  // ===================== 📷 PHOTOS ET LOGO =====================
  // 1) Mets tes images dans le dossier "images/".
  // 2) Écris leur nom entre les guillemets ci-dessous, par exemple "images/portrait.jpg".
  // Un emplacement vide ("") affiche un cadre rose en attendant.
  logo: "images/logo.webp", // logo rond (menu, accueil, pied de page)
  photos: [
    "images/pam0.jpg", // Photo 1 : portrait dans « À propos »
    "images/pam2.jpg", // Photo 2 : cadre à gauche de l'accueil
    "images/img1.jpeg", // Photo 3 : cadre à droite de l'accueil
    "images/bouf1.jpeg", // Photo 4 : galerie
    "images/bouf2.jpeg", // Photo 5 : galerie
    "images/bouf3.jpeg", // Photo 6 : galerie
    "images/pam3.jpeg", // Photo 7 : galerie
    "images/bouf5.jpeg", // Photo 8 : galerie
    "images/bouf6.jpeg", // Photo 9 : galerie
    "images/bouf7.jpeg", // Photo 10 : galerie
  ],
  // =============================================================

  // ===================== 🎬 VIDÉOS =====================
  // u : chemin de la vidéo (.mp4), t : petite légende.
  // La première est mise en avant (avec le son), les autres tournent en boucle sans le son.
  videos: [
    { u: "images/vid_prest.mp4", t: "Je me présente" },
    { u: "images/vid3.mp4", t: "Mon smoothie du matin" },
    { u: "images/vid2.mp4", t: "Brochettes de fruits" },
    { u: "images/vid6.mp4", t: "En coulisses" },
    { u: "images/vid5.mp4", t: "Mon petit coin" },
    { u: "images/vid1.mp4", t: "Sport et équilibre" },
    { u: "images/vid4.mp4", t: "Les bons repères" },
  ],
  // =====================================================

  // Identité et accueil
  brand: "Nourish by Siessima",
  name: "Nourish",
  by: "by Siessima",
  tagline:
    "Diététicienne-nutritionniste. Un accompagnement bienveillant, sans régime strict, pour manger mieux et se sentir bien.",

  // Section « À propos »
  about: [
    "Bonjour, je suis Siessima !",
    "Je suis diététicienne-nutritionniste et j'accompagne chaque personne dans sa démarche de bien-être et de santé.",
    "Bienveillant, sans régime strict et adapté à votre quotidien : je vous propose un accompagnement personnalisé pour atteindre vos objectifs, à votre rythme.",
  ],
  tags: [
    "Gestion du poids",
    "Bien-être",
    "Alimentation équilibrée",
    "Consultations en ligne",
  ],

  // Section « Services » (titre, description, trois pastilles)
  services: [
    {
      t: "Bilan nutritionnel",
      d: "Une première consultation pour faire le point : vos habitudes, votre mode de vie, vos goûts et vos objectifs. Nous définissons ensemble des premières pistes réalistes, adaptées à vous.",
      inc: [
        "Habitudes alimentaires",
        "Objectifs personnalisés",
        "Premiers conseils",
      ],
    },
    {
      t: "Suivi personnalisé",
      d: "Un accompagnement dans la durée, avec des consultations régulières pour ajuster, encourager et installer de nouvelles habitudes sans frustration.",
      inc: [
        "Plan adapté à votre rythme",
        "Ajustements réguliers",
        "Soutien et motivation",
      ],
    },
    {
      t: "Rééquilibrage alimentaire",
      d: "Retrouver une alimentation variée et plaisante, sans régime strict ni interdits, pour mieux gérer son poids ou simplement se sentir mieux au quotidien.",
      inc: ["Sans régime restrictif", "Idées de repas", "Gestion des envies"],
    },
    {
      t: "Alimentation et sport",
      d: "Adapter ses repas à son activité physique : énergie, récupération et hydratation, avant comme après l'effort.",
      inc: ["Énergie", "Récupération", "Hydratation"],
    },
    {
      t: "Alimentation de l'enfant et de la famille",
      d: "Des conseils simples pour que toute la famille mange mieux : repas équilibrés, goûters, diversification alimentaire, enfants sélectifs.",
      inc: ["Repas en famille", "Diversification", "Enfants sélectifs"],
    },
    {
      t: "Ateliers et conseils en groupe",
      d: "Des ateliers pratiques et des interventions : lire les étiquettes, composer ses menus, cuisiner simple et sain. Pour les entreprises, les écoles ou les associations.",
      inc: ["Ateliers cuisine", "Entreprises et écoles", "Sur demande"],
    },
  ],

  // Section « Bibliothèque » : dossiers → contenus (recettes avec ing/steps, guides et fiches avec pts, u = lien PDF facultatif)
  library: [
    {
      n: "Recettes",
      f: [
        {
          t: "Bowl quinoa, légumes rôtis et pois chiches",
          tag: "Déjeuner · 25 min · 2 personnes",
          d: "Un plat complet, coloré et rassasiant, riche en fibres et en protéines végétales.",
          ing: [
            "120 g de quinoa",
            "1 boîte de pois chiches (environ 240 g égouttés)",
            "1 courgette et 1 poivron",
            "1 cuillère à soupe d'huile d'olive",
            "Le jus d'un citron, persil, paprika, sel, poivre",
          ],
          steps: [
            "Cuire le quinoa 12 minutes dans deux fois son volume d'eau salée.",
            "Couper les légumes en dés et les rôtir 20 minutes à 200 °C avec l'huile et le paprika.",
            "Ajouter les pois chiches égouttés pour les 5 dernières minutes.",
            "Assembler le tout, arroser de citron et parsemer de persil.",
          ],
        },
        {
          t: "Smoothie banane, épinards et avoine",
          tag: "Petit-déjeuner · 5 min · 1 personne",
          d: "Rapide à préparer, il apporte de l'énergie durable pour bien démarrer la matinée.",
          ing: [
            "1 banane mûre",
            "1 poignée d'épinards frais",
            "3 cuillères à soupe de flocons d'avoine",
            "200 ml de lait ou de boisson végétale",
            "1 cuillère à café de miel (facultatif)",
          ],
          steps: [
            "Mettre tous les ingrédients dans un blender.",
            "Mixer environ une minute jusqu'à obtenir une texture lisse.",
            "Ajouter quelques glaçons si besoin et déguster aussitôt.",
          ],
        },
        {
          t: "Soupe de lentilles corail au curcuma",
          tag: "Dîner · 35 min · 4 personnes",
          d: "Une soupe douce et réconfortante, simple et économique.",
          ing: [
            "200 g de lentilles corail",
            "1 oignon, 2 carottes, 1 gousse d'ail",
            "1 cuillère à café de curcuma",
            "1 litre d'eau ou de bouillon",
            "1 cuillère à soupe d'huile, un peu de citron",
          ],
          steps: [
            "Faire revenir l'oignon, l'ail et les carottes 5 minutes dans l'huile.",
            "Ajouter le curcuma, les lentilles rincées et l'eau, puis cuire 20 minutes.",
            "Mixer en partie, assaisonner et finir avec un filet de citron.",
          ],
        },
        {
          t: "Yaourt fruité aux graines",
          tag: "Collation · 5 min · 1 personne",
          d: "Une collation équilibrée qui cale sans excès de sucre.",
          ing: [
            "1 yaourt nature",
            "1 fruit de saison coupé en morceaux",
            "1 cuillère à soupe de graines (courge, tournesol…)",
            "Une pincée de cannelle",
          ],
          steps: [
            "Verser le yaourt dans un bol et ajouter le fruit.",
            "Parsemer de graines et de cannelle.",
          ],
        },
      ],
    },
    {
      n: "Guides",
      f: [
        {
          t: "Construire une assiette équilibrée",
          tag: "Guide · 5 min de lecture",
          d: "Un repère visuel simple pour composer ses repas au quotidien, sans rien peser.",
          pts: [
            "La moitié de l'assiette : des légumes, crus ou cuits.",
            "Un quart : des féculents variés (riz, pâtes, igname, pain complet…).",
            "Un quart : des protéines (poisson, œufs, volaille, légumineuses).",
            "Un filet d'huile de qualité et un fruit en dessert.",
            "L'eau comme boisson principale.",
          ],
          u: "#",
        },
        {
          t: "Bien démarrer la journée",
          tag: "Guide · 4 min de lecture",
          d: "Comment composer un petit-déjeuner qui tient jusqu'au déjeuner.",
          pts: [
            "Associer une céréale complète, une source de protéines ou de bons gras, et un fruit.",
            "Écouter sa faim : pas besoin de se forcer, mais éviter de sauter systématiquement le repas.",
            "Limiter les produits très sucrés du matin (céréales enrichies en sucre, viennoiseries).",
            "Prévoir la veille pour gagner du temps.",
          ],
          u: "#",
        },
        {
          t: "Faire ses courses malin",
          tag: "Guide · 6 min de lecture",
          d: "Les bons réflexes pour remplir son panier sans se compliquer la vie.",
          pts: [
            "Préparer une liste à partir de ses menus de la semaine.",
            "Privilégier les produits bruts et de saison.",
            "Faire ses courses le ventre plein.",
            "Comparer les produits au prix pour 100 g plutôt qu'à l'unité.",
            "Garder une base de placards : légumineuses, céréales complètes, conserves de légumes et de poisson.",
          ],
          u: "#",
        },
      ],
    },
    {
      n: "Fiches conseils",
      f: [
        {
          t: "S'hydrater au quotidien",
          tag: "Fiche · 2 min",
          d: "Un réflexe simple, souvent oublié.",
          pts: [
            "Boire régulièrement, sans attendre d'avoir très soif.",
            "Garder une bouteille d'eau à portée de main.",
            "Parfumer l'eau avec du citron, de la menthe ou du concombre.",
            "Réserver les boissons sucrées aux occasions.",
            "Les besoins augmentent avec la chaleur et l'activité physique.",
          ],
        },
        {
          t: "Manger en pleine conscience",
          tag: "Fiche · 3 min",
          d: "Retrouver le plaisir de manger et ses sensations de faim et de satiété.",
          pts: [
            "S'asseoir et éviter les écrans pendant le repas.",
            "Mâcher lentement et poser ses couverts entre deux bouchées.",
            "Se demander : faim, envie ou émotion ?",
            "Laisser un peu de temps au signal de satiété avant de se resservir.",
          ],
        },
        {
          t: "Des collations qui font du bien",
          tag: "Fiche · 2 min",
          d: "Quelques idées simples pour éviter le coup de fatigue de l'après-midi.",
          pts: [
            "Un fruit et une poignée d'oléagineux.",
            "Un yaourt nature avec des fruits.",
            "Une tranche de pain complet avec de la purée d'amande ou d'arachide.",
            "Des bâtonnets de légumes crus avec du houmous.",
          ],
        },
        {
          t: "Mieux lire une étiquette",
          tag: "Fiche · 3 min",
          d: "Décrypter un emballage pour faire des choix éclairés.",
          pts: [
            "Les ingrédients sont classés du plus présent au moins présent.",
            "Une liste courte et compréhensible est généralement bon signe.",
            "Repérer les sucres sous leurs autres noms (sirop de glucose, dextrose…).",
            "Comparer les produits sur la base de 100 g.",
            "Se méfier des mentions marketing comme « naturel » ou « allégé ».",
          ],
        },
      ],
    },
  ],

  // Section « Contact »
  contactText:
    "Une question ? Envie de réserver un bilan nutritionnel ? Écrivez-moi 🌸",
  phone: "+90 501 049 73 04",
  city: "Turquie · en ligne partout", // ✏️ mets ta ville, par ex. "Istanbul · en ligne"
  hours: "Lun–Ven 9h–18h",
  email: "pamela@nourish-by-siessima.com", // ✏️ vérifie que cette adresse reçoit bien les mails
  // Formulaire de contact : crée un formulaire gratuit sur formspree.io et colle ici son identifiant
  // (la fin de l'adresse https://formspree.io/f/XXXXXXX). Vide ("") = le formulaire ouvre l'application mail.
  formspree: "",
  // Un lien "#" est masqué automatiquement (ajoute par ex. ta page de prise de rendez-vous quand tu l'as).
  links: [
    { t: "Instagram", u: "https://www.instagram.com/nourish_by_siessima/" },
    { t: "Snapchat", u: "https://snapchat.com/t/NjkzZxMI" },
    { t: "Rendez-vous en ligne", u: "#" },
  ],
};
