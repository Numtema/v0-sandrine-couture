import { Shirt, UtensilsCrossed, Briefcase, Gift, Baby, Sparkles, Tag, BadgeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const b2bServices = [
  {
    icon: Shirt,
    title: "Uniformes Professionnels",
    description: "Polos, sweats, vestes brodés avec votre logo. Parfait pour restaurants, hôtels, artisans.",
    features: ["Broderie logo", "Séries à partir de 10 pièces", "Facture professionnelle"],
    image: "/professional-embroidered-polo-shirts-with-company-.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration & Hôtellerie",
    description: "Tabliers, toques, chemises pour équipes de cuisine et service. Identité visuelle soignée.",
    features: ["Tabliers personnalisés", "Textile résistant", "Livraison rapide"],
    image: "/embroidered-chef-apron-with-restaurant-logo--professio.jpg",
  },
  {
    icon: Briefcase,
    title: "Entreprises & Associations",
    description: "Casquettes, polos événementiels, textile corporate. Renforcez votre image de marque.",
    features: ["Devis sous 24h", "Suivi livraison", "Conseil placement"],
    image: "/embroidered-corporate-caps-with-company-logo--professi.jpg",
  },
]

const b2cServices = [
  {
    icon: Baby,
    title: "Naissance & Bébé",
    description: "Peignoirs, gigoteuses, bavoirs brodés avec prénom. Cadeaux de naissance inoubliables.",
    features: ["Prénoms & dates", "Motifs mignons", "Qualité douce"],
    image: "/embroidered-baby-bathrobe-with-name-personalization--s.jpg",
  },
  {
    icon: Gift,
    title: "Cadeaux Personnalisés",
    description: "Sacs, serviettes, textiles brodés pour anniversaires, mariages, événements spéciaux.",
    features: ["Broderie texte", "Couleurs au choix", "Délai environ 1 semaine"],
    image: "/personalized-embroidered-tote-bag-with-custom-name--gi.jpg",
  },
  {
    icon: BadgeIcon,
    title: "Patchs & Accessoires",
    description: "Patchs brodés cousus ou velcro, écussons personnalisés, badges textiles sur mesure.",
    features: ["Patch velcro ou cousu", "Broderie 3D possible", "Conception unique"],
    image: "/embroidered-velcro-patches-on-uniform--removable-p.jpg",
  },
]

const servicesDetails = [
  {
    icon: Tag,
    title: "Broderie logo",
    description: "Coeur / manche / dos",
  },
  {
    icon: BadgeIcon,
    title: "Patch brodé",
    description: "Cousu ou velcro",
  },
  {
    icon: Sparkles,
    title: "Broderie prénom / texte",
    description: "Cadeaux, bébé...",
  },
  {
    icon: Shirt,
    title: "Casquettes & bonnets brodés",
    description: "Logo ou texte personnalisé",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Deux parcours, une seule exigence : la qualité.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez votre besoin pour aller directement à l'essentiel.
          </p>
        </div>

        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card text-primary font-semibold mb-10">
            <Briefcase className="w-5 h-5" />
            Pour Entreprises (B2B)
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {b2bServices.map((service, index) => (
              <div key={index} className="glass-card p-6 group hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/entreprises" className="btn-secondary">
              Voir l'offre entreprise
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card text-primary font-semibold mb-10">
            <Gift className="w-5 h-5" />
            Pour Particuliers (B2C)
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {b2cServices.map((service, index) => (
              <div key={index} className="glass-card p-6 group hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/particuliers" className="btn-secondary">
              Voir l'offre particuliers
            </Link>
          </div>
        </div>

        <div className="glass-card p-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ce que je réalise</h2>
            <p className="text-lg text-gray-600">
              Du simple prénom au logo complet, toujours avec une finition propre.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesDetails.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-pink-50/50 rounded-xl border border-pink-100">
            <p className="text-sm text-gray-700 text-center">
              Votre logo est optimisé avant broderie pour un rendu propre et lisible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
