export interface SEOPage {
  slug: string
  title: string
  h1: string
  metaDescription: string
  category: "territoire" | "ville" | "secteur" | "produit"
  heroImage: string
  heroQuery: string
  content: {
    intro: string
    avantages: string[]
    cta: string
  }
  relatedPages: string[]
  services: {
    title: string
    description: string
    icon: string
  }[]
}

export const SEO_PAGES: Record<string, SEOPage> = {
  // TERRITOIRES
  "broderie-normandie": {
    slug: "broderie-normandie",
    title: "Broderie Professionnelle en Normandie | By Sandrine Couture",
    h1: "Service de Broderie Personnalisée en Normandie",
    metaDescription:
      "Broderie et personnalisation textile pour entreprises et particuliers en Normandie. Devis rapide, qualité professionnelle, livraison dans toute la région.",
    category: "territoire",
    heroImage: "normandy-embroidery-shop-exterior-professional-brod.jpg",
    heroQuery: "normandy embroidery shop exterior professional broderie normandie storefront",
    content: {
      intro:
        "By Sandrine Couture vous accompagne dans tous vos projets de broderie en Normandie. Que vous soyez une entreprise recherchant des uniformes brodés ou un particulier souhaitant personnaliser un cadeau, notre atelier basé à Robertot offre un service professionnel à toute la région normande.",
      avantages: [
        "Service local en Normandie - Proximité et réactivité",
        "Livraison dans toute la Seine-Maritime, Eure, Calvados, Orne et Manche",
        "Devis sous 24h pour les professionnels",
        "Travail artisanal de qualité",
        "Tous types de broderie: logos, prénoms, textes, motifs",
      ],
      cta: "Votre projet en Normandie mérite une broderie de qualité",
    },
    relatedPages: [
      "broderie-seine-maritime-76",
      "broderie-rouen",
      "broderie-le-havre",
      "broderie-caen",
      "entreprises",
      "particuliers",
    ],
    services: [
      {
        title: "Entreprises Normandie",
        description: "Uniformes brodés pour restaurants, hôtels, artisans BTP",
        icon: "🏢",
      },
      { title: "Particuliers Normandie", description: "Cadeaux personnalisés, naissance, mariage", icon: "🎁" },
      { title: "Livraison Régionale", description: "Toute la Normandie couverte", icon: "🚚" },
    ],
  },

  "broderie-seine-maritime-76": {
    slug: "broderie-seine-maritime-76",
    title: "Broderie Seine-Maritime (76) | Service Professionnel",
    h1: "Broderie Personnalisée en Seine-Maritime (76)",
    metaDescription:
      "Atelier de broderie en Seine-Maritime. Service B2B et B2C à Rouen, Le Havre, Dieppe, Yvetot, Fécamp. Devis rapide.",
    category: "territoire",
    heroImage: "seine-maritime-embroidery-workshop-76-department-fr.jpg",
    heroQuery: "seine maritime embroidery workshop 76 department france professional atelier",
    content: {
      intro:
        "Basée à Robertot en Seine-Maritime, By Sandrine Couture dessert tout le département 76 avec un service de broderie professionnel. De Rouen au Havre, de Dieppe à Fécamp, nous intervenons pour vos projets entreprise et particuliers.",
      avantages: [
        "Atelier local en Seine-Maritime (76)",
        "Intervention Rouen, Le Havre, Dieppe, Yvetot, Fécamp",
        "Rencontre possible dans votre entreprise",
        "Livraison ou retrait sur place",
        "Devis personnalisé sous 24h",
      ],
      cta: "Projet de broderie en Seine-Maritime? Contactez-nous",
    },
    relatedPages: [
      "broderie-normandie",
      "broderie-rouen",
      "broderie-le-havre",
      "broderie-dieppe",
      "broderie-yvetot",
      "broderie-fecamp",
    ],
    services: [
      { title: "Rouen et périphérie", description: "Service broderie Rouen et agglo", icon: "📍" },
      { title: "Le Havre", description: "Broderie professionnelle Havre", icon: "📍" },
      { title: "Tout le 76", description: "Dieppe, Yvetot, Fécamp et plus", icon: "🗺️" },
    ],
  },

  // VILLES
  "broderie-rouen": {
    slug: "broderie-rouen",
    title: "Broderie à Rouen (76) | Entreprise et Particulier",
    h1: "Service de Broderie Professionnelle à Rouen",
    metaDescription:
      "Broderie personnalisée à Rouen et agglomération. Uniformes entreprise, cadeaux personnalisés. Atelier en Seine-Maritime, devis rapide.",
    category: "ville",
    heroImage: "rouen-city-embroidery-service-professional-textile.jpg",
    heroQuery: "rouen city embroidery service professional textile shop france normandy",
    content: {
      intro:
        "By Sandrine Couture accompagne les entreprises et particuliers de Rouen et son agglomération dans leurs projets de broderie. Depuis notre atelier de Robertot en Seine-Maritime, nous offrons un service de qualité à toute la région rouennaise.",
      avantages: [
        "Service local - Intervention Rouen et agglo",
        "Devis rapide sous 24h",
        "Livraison à Rouen possible",
        "Qualité professionnelle",
        "Tous secteurs: restauration, BTP, commerces, associations",
      ],
      cta: "Besoin de broderie à Rouen? Demandez votre devis",
    },
    relatedPages: [
      "broderie-seine-maritime-76",
      "broderie-normandie",
      "entreprises",
      "particuliers",
      "broderie-restaurant",
      "patch-velcro-brode",
    ],
    services: [
      { title: "Entreprises Rouen", description: "Uniformes brodés, logos entreprise", icon: "🏢" },
      { title: "Particuliers Rouen", description: "Cadeaux personnalisés", icon: "🎁" },
      { title: "Livraison Rouen", description: "Livraison sur Rouen et agglo", icon: "🚚" },
    ],
  },

  "broderie-le-havre": {
    slug: "broderie-le-havre",
    title: "Broderie au Havre (76) | Service Pro et Particulier",
    h1: "Broderie Personnalisée au Havre",
    metaDescription:
      "Service de broderie au Havre. Uniformes entreprise, textiles personnalisés. Atelier professionnel en Seine-Maritime.",
    category: "ville",
    heroImage: "le-havre-port-city-embroidery-professional-service.jpg",
    heroQuery: "le havre port city embroidery professional service normandy france maritime",
    content: {
      intro:
        "By Sandrine Couture dessert Le Havre et son bassin avec des services de broderie professionnelle pour les entreprises maritimes, commerces, et particuliers de la région havraise.",
      avantages: [
        "Service Le Havre et agglomération",
        "Spécialisation uniformes secteur maritime",
        "Livraison possible au Havre",
        "Devis professionnel 24h",
        "Petites et grandes séries",
      ],
      cta: "Projet de broderie au Havre? Contactez-nous",
    },
    relatedPages: [
      "broderie-seine-maritime-76",
      "broderie-normandie",
      "entreprises",
      "broderie-restaurant",
      "casquette-bonnet-brode",
    ],
    services: [
      { title: "Secteur Maritime", description: "Broderie pour entreprises maritimes", icon: "⚓" },
      { title: "Commerces Havre", description: "Uniformes commerces et restaurants", icon: "🏪" },
      { title: "Particuliers", description: "Personnalisation textile", icon: "🎁" },
    ],
  },

  "broderie-dieppe": {
    slug: "broderie-dieppe",
    title: "Broderie à Dieppe (76) | By Sandrine Couture",
    h1: "Service de Broderie à Dieppe et Région",
    metaDescription:
      "Broderie professionnelle à Dieppe. Uniformes entreprise, textiles personnalisés. Service Seine-Maritime.",
    category: "ville",
    heroImage: "dieppe-coastal-town-embroidery-service-normandy.jpg",
    heroQuery: "dieppe coastal town embroidery service normandy france maritime city",
    content: {
      intro:
        "By Sandrine Couture intervient à Dieppe et sa région pour tous vos besoins en broderie professionnelle et personnalisation textile.",
      avantages: [
        "Service Dieppe et périphérie",
        "Broderie entreprise et particulier",
        "Devis rapide",
        "Livraison possible",
        "Travail soigné",
      ],
      cta: "Votre projet à Dieppe? Demandez un devis",
    },
    relatedPages: ["broderie-seine-maritime-76", "broderie-normandie", "entreprises", "particuliers"],
    services: [
      { title: "Entreprises Dieppe", description: "Uniformes professionnels", icon: "🏢" },
      { title: "Particuliers", description: "Cadeaux personnalisés", icon: "🎁" },
      { title: "Associations", description: "Broderie clubs sportifs", icon: "⚽" },
    ],
  },

  "broderie-yvetot": {
    slug: "broderie-yvetot",
    title: "Broderie à Yvetot (76) | Service Professionnel",
    h1: "Broderie Personnalisée à Yvetot",
    metaDescription: "Service de broderie à Yvetot. Entreprises et particuliers. Atelier local Seine-Maritime.",
    category: "ville",
    heroImage: "yvetot-town-embroidery-workshop-professional-servic.jpg",
    heroQuery: "yvetot town embroidery workshop professional service normandy france",
    content: {
      intro:
        "À proximité d'Yvetot, By Sandrine Couture propose ses services de broderie professionnelle pour les entreprises et particuliers de la région.",
      avantages: [
        "Proximité Yvetot",
        "Service rapide",
        "Devis sous 24h",
        "Qualité artisanale",
        "Tous types de broderie",
      ],
      cta: "Projet à Yvetot? Contactez-nous",
    },
    relatedPages: ["broderie-seine-maritime-76", "broderie-rouen", "entreprises", "particuliers"],
    services: [
      { title: "B2B Yvetot", description: "Uniformes entreprise", icon: "🏢" },
      { title: "B2C Yvetot", description: "Personnalisation", icon: "🎁" },
      { title: "Livraison", description: "Service local", icon: "🚚" },
    ],
  },

  "broderie-caen": {
    slug: "broderie-caen",
    title: "Broderie à Caen (14) | By Sandrine Couture",
    h1: "Service de Broderie à Caen et Calvados",
    metaDescription: "Broderie professionnelle à Caen. Service Calvados. Uniformes entreprise, textiles personnalisés.",
    category: "ville",
    heroImage: "caen-city-embroidery-service-calvados-normandy.jpg",
    heroQuery: "caen city embroidery service calvados normandy france professional",
    content: {
      intro:
        "By Sandrine Couture étend ses services de broderie à Caen et le Calvados pour accompagner les professionnels et particuliers normands.",
      avantages: [
        "Service Caen et Calvados",
        "Livraison possible",
        "Devis professionnel",
        "Qualité garantie",
        "Tous secteurs",
      ],
      cta: "Besoin de broderie à Caen? Devis gratuit",
    },
    relatedPages: ["broderie-normandie", "entreprises", "particuliers"],
    services: [
      { title: "Entreprises Caen", description: "Uniformes professionnels", icon: "🏢" },
      { title: "Particuliers", description: "Cadeaux personnalisés", icon: "🎁" },
      { title: "Calvados", description: "Tout le département", icon: "🗺️" },
    ],
  },

  "broderie-fecamp": {
    slug: "broderie-fecamp",
    title: "Broderie à Fécamp (76) | Service Professionnel",
    h1: "Broderie Personnalisée à Fécamp",
    metaDescription: "Service de broderie à Fécamp. Entreprises et particuliers. Atelier Seine-Maritime.",
    category: "ville",
    heroImage: "fecamp-coastal-town-embroidery-service-normandy.jpg",
    heroQuery: "fecamp coastal town embroidery service normandy france maritime",
    content: {
      intro:
        "By Sandrine Couture dessert Fécamp et sa région avec un service de broderie professionnel adapté aux besoins locaux.",
      avantages: [
        "Service Fécamp et environs",
        "Broderie professionnelle",
        "Devis rapide",
        "Livraison locale",
        "Travail de qualité",
      ],
      cta: "Votre projet à Fécamp? Demandez un devis",
    },
    relatedPages: ["broderie-seine-maritime-76", "broderie-normandie", "entreprises"],
    services: [
      { title: "Entreprises Fécamp", description: "Uniformes brodés", icon: "🏢" },
      { title: "Particuliers", description: "Personnalisation", icon: "🎁" },
      { title: "Local", description: "Service de proximité", icon: "📍" },
    ],
  },

  // SECTEURS B2B
  "broderie-restaurant": {
    slug: "broderie-restaurant",
    title: "Broderie Restaurant | Uniformes Cuisine & Service",
    h1: "Broderie Professionnelle pour Restaurants",
    metaDescription:
      "Uniformes brodés pour restaurants: vestes cuisine, polos service, tabliers. Logo restaurant, prénom chef. Devis 24h.",
    category: "secteur",
    heroImage: "restaurant-chef-wearing-embroidered-uniform-profess.jpg",
    heroQuery: "restaurant chef wearing embroidered uniform professional kitchen jacket logo",
    content: {
      intro:
        "By Sandrine Couture équipe les restaurants, brasseries, cafés et traiteurs avec des uniformes brodés professionnels. Logo de votre établissement, prénom du chef, broderie de prestige pour une image soignée.",
      avantages: [
        "Vestes de cuisine brodées (logo + prénom)",
        "Polos et chemises service (logo coeur ou manche)",
        "Tabliers personnalisés",
        "Patch velcro amovible pour lavage facile",
        "Devis restaurant sous 24h",
      ],
      cta: "Équipez votre équipe avec des uniformes brodés de qualité",
    },
    relatedPages: [
      "entreprises",
      "patch-velcro-brode",
      "casquette-bonnet-brode",
      "broderie-rouen",
      "broderie-normandie",
    ],
    services: [
      { title: "Vestes Cuisine", description: "Logo + prénom chef brodés", icon: "👨‍🍳" },
      { title: "Polos Service", description: "Logo restaurant brodé", icon: "👔" },
      { title: "Tabliers", description: "Personnalisation textile", icon: "🎽" },
    ],
  },

  "broderie-hotel": {
    slug: "broderie-hotel",
    title: "Broderie Hôtel | Uniformes Personnel Hôtellerie",
    h1: "Uniformes Brodés pour Hôtels et Hébergements",
    metaDescription:
      "Uniformes hôtel brodés: réception, femmes de chambre, conciergerie. Logo hôtel brodé, image professionnelle.",
    category: "secteur",
    heroImage: "hotel-staff-wearing-embroidered-uniforms-professio.jpg",
    heroQuery: "hotel staff wearing embroidered uniforms professional hospitality reception",
    content: {
      intro:
        "By Sandrine Couture habille le personnel hôtelier avec des uniformes brodés élégants. Réception, conciergerie, housekeeping: valorisez votre établissement avec une image professionnelle cohérente.",
      avantages: [
        "Uniformes réception brodés (logo hôtel)",
        "Polos housekeeping personnalisés",
        "Foulards et accessoires brodés",
        "Cohérence visuelle de votre équipe",
        "Petites et grandes séries",
      ],
      cta: "Uniforme hôtel professionnel? Demandez un devis",
    },
    relatedPages: ["entreprises", "casquette-bonnet-brode", "broderie-normandie", "broderie-rouen"],
    services: [
      { title: "Réception", description: "Uniformes élégants brodés", icon: "🏨" },
      { title: "Housekeeping", description: "Polos et tuniques", icon: "🧹" },
      { title: "Conciergerie", description: "Accessoires brodés", icon: "🎩" },
    ],
  },

  "broderie-boulangerie": {
    slug: "broderie-boulangerie",
    title: "Broderie Boulangerie Pâtisserie | Uniformes Brodés",
    h1: "Uniformes Brodés pour Boulangeries et Pâtisseries",
    metaDescription:
      "Uniformes boulangerie brodés: tabliers, vestes, polos. Logo boulangerie, prénom équipe. Devis rapide.",
    category: "secteur",
    heroImage: "bakery-staff-wearing-embroidered-aprons-profession.jpg",
    heroQuery: "bakery staff wearing embroidered aprons professional boulangerie uniform france",
    content: {
      intro:
        "By Sandrine Couture équipe les boulangeries et pâtisseries avec des uniformes brodés professionnels. Logo de votre boulangerie, prénom de l'équipe, image artisanale et qualitative.",
      avantages: [
        "Tabliers brodés logo boulangerie",
        "Vestes boulanger personnalisées",
        "Polos vente brodés",
        "Image professionnelle",
        "Devis sous 24h",
      ],
      cta: "Uniformes boulangerie? Contactez-nous",
    },
    relatedPages: ["entreprises", "broderie-restaurant", "patch-velcro-brode", "broderie-rouen"],
    services: [
      { title: "Tabliers Brodés", description: "Logo boulangerie", icon: "🥖" },
      { title: "Vestes Boulanger", description: "Personnalisation pro", icon: "👨‍🍳" },
      { title: "Polos Vente", description: "Équipe en boutique", icon: "👔" },
    ],
  },

  "broderie-artisans-btp": {
    slug: "broderie-artisans-btp",
    title: "Broderie Artisans BTP | Uniformes Travaux Brodés",
    h1: "Broderie Professionnelle pour Artisans et BTP",
    metaDescription:
      "Uniformes BTP brodés: polos, sweats, vestes, casquettes. Logo entreprise artisanale brodé. Patch velcro. Devis 24h.",
    category: "secteur",
    heroImage: "construction-worker-wearing-embroidered-company-un.jpg",
    heroQuery: "construction worker wearing embroidered company uniform professional workwear logo",
    content: {
      intro:
        "By Sandrine Couture équipe les artisans, entreprises BTP, plombiers, électriciens, peintres avec des uniformes brodés robustes. Logo entreprise, nom artisan, véhicules identifiés: professionnalisez votre image.",
      avantages: [
        "Polos et sweats BTP logo brodé",
        "Vestes softshell brodées",
        "Casquettes et bonnets personnalisés",
        "Patch velcro amovible (lavage intensif)",
        "Petites séries acceptées (dès 5 pièces)",
      ],
      cta: "Logo de votre entreprise artisanale sur vos uniformes? Devis gratuit",
    },
    relatedPages: [
      "entreprises",
      "patch-velcro-brode",
      "casquette-bonnet-brode",
      "broderie-rouen",
      "broderie-normandie",
    ],
    services: [
      { title: "Polos BTP", description: "Logo entreprise brodé", icon: "🏗️" },
      { title: "Vestes Softshell", description: "Broderie multi-placements", icon: "🧥" },
      { title: "Casquettes", description: "Visibilité chantier", icon: "🧢" },
    ],
  },

  "broderie-salon-coiffure-esthetique": {
    slug: "broderie-salon-coiffure-esthetique",
    title: "Broderie Salon Coiffure Esthétique | Uniformes",
    h1: "Uniformes Brodés pour Salons de Coiffure et Esthétique",
    metaDescription:
      "Uniformes salon de coiffure et esthétique brodés. Logo salon, prénom équipe. Image professionnelle soignée.",
    category: "secteur",
    heroImage: "hairdresser-wearing-embroidered-salon-uniform-prof.jpg",
    heroQuery: "hairdresser wearing embroidered salon uniform professional beauty parlor",
    content: {
      intro:
        "By Sandrine Couture habille les professionnels de la beauté avec des uniformes brodés élégants. Salons de coiffure, instituts esthétiques, spas: logo de votre salon brodé avec finesse.",
      avantages: [
        "Tuniques brodées logo salon",
        "Polos esthétique personnalisés",
        "Broderie discrète et élégante",
        "Prénom de l'équipe",
        "Image professionnelle cohérente",
      ],
      cta: "Uniformes salon? Demandez votre devis",
    },
    relatedPages: ["entreprises", "broderie-rouen", "broderie-normandie"],
    services: [
      { title: "Tuniques Coiffure", description: "Logo salon brodé", icon: "💇" },
      { title: "Polos Esthétique", description: "Broderie discrète", icon: "💅" },
      { title: "Cohérence Équipe", description: "Image professionnelle", icon: "✨" },
    ],
  },

  // PRODUITS
  "patch-velcro-brode": {
    slug: "patch-velcro-brode",
    title: "Patch Velcro Brodé | Écusson Amovible Pro",
    h1: "Patch Velcro Brodé Professionnel",
    metaDescription:
      "Patch brodé avec velcro amovible. Écusson entreprise, logo velcro, patch personnalisé. Lavage facile, interchangeable.",
    category: "produit",
    heroImage: "velcro-embroidered-patches-removable-professional-.jpg",
    heroQuery: "velcro embroidered patches removable professional logo badges company",
    content: {
      intro:
        "Le patch velcro brodé est la solution idéale pour les entreprises avec uniformes lavés fréquemment. Écusson brodé amovible, interchangeable, facile d'entretien. Parfait pour BTP, restauration, industrie.",
      avantages: [
        "Patch amovible velcro (face scratch + face agrippante)",
        "Logo brodé haute qualité",
        "Lavage intensif sans abîmer la broderie",
        "Interchangeable (plusieurs logos possibles)",
        "Idéal uniformes BTP, restauration, sécurité",
      ],
      cta: "Patch velcro personnalisé? Demandez un devis",
    },
    relatedPages: ["broderie-artisans-btp", "broderie-restaurant", "entreprises", "broderie-rouen"],
    services: [
      { title: "Patch Brodé", description: "Logo haute définition", icon: "🏷️" },
      { title: "Velcro Cousu", description: "Système amovible durable", icon: "🔄" },
      { title: "Personnalisation", description: "Forme et taille sur-mesure", icon: "📐" },
    ],
  },

  "casquette-bonnet-brode": {
    slug: "casquette-bonnet-brode",
    title: "Casquette et Bonnet Brodé | Logo Entreprise",
    h1: "Casquettes et Bonnets Brodés Professionnels",
    metaDescription:
      "Casquettes et bonnets brodés logo entreprise. BTP, artisans, événementiel. Broderie qualité, petites et grandes séries.",
    category: "produit",
    heroImage: "embroidered-caps-and-beanies-with-company-logos-pr.jpg",
    heroQuery: "embroidered caps and beanies with company logos professional workwear branded",
    content: {
      intro:
        "By Sandrine Couture brode vos casquettes et bonnets avec le logo de votre entreprise. Idéal pour artisans BTP, événements, associations sportives, goodies entreprise. Broderie 3D ou classique selon le rendu souhaité.",
      avantages: [
        "Casquettes brodées logo entreprise (3D relief ou classique)",
        "Bonnets hiver personnalisés",
        "Large choix de couleurs et modèles",
        "Petites séries acceptées (dès 10 pièces)",
        "Parfait pour visibilité chantier ou événementiel",
      ],
      cta: "Casquettes ou bonnets brodés? Devis gratuit",
    },
    relatedPages: ["broderie-artisans-btp", "broderie-restaurant", "broderie-hotel", "entreprises"],
    services: [
      { title: "Casquettes Pro", description: "Logo brodé 3D ou plat", icon: "🧢" },
      { title: "Bonnets Hiver", description: "Broderie personnalisée", icon: "🧣" },
      { title: "Événementiel", description: "Goodies entreprise", icon: "🎉" },
    ],
  },
}

export const getSEOPage = (slug: string): SEOPage | undefined => {
  return SEO_PAGES[slug]
}

export const getAllSEOSlugs = (): string[] => {
  return Object.keys(SEO_PAGES)
}

export const getSEOPagesByCategory = (category: SEOPage["category"]): SEOPage[] => {
  return Object.values(SEO_PAGES).filter((page) => page.category === category)
}
