import { Shirt, UtensilsCrossed, Briefcase, Gift, Baby, Sparkles } from "lucide-react"

const b2bServices = [
  {
    icon: Shirt,
    title: "Uniformes Professionnels",
    description: "Polos, sweats, vestes brodés avec votre logo. Parfait pour restaurants, hôtels, artisans.",
    features: ["Broderie logo", "Séries à partir de 10 pièces", "Facture professionnelle"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration & Hôtellerie",
    description: "Tabliers, toques, chemises pour équipes de cuisine et service. Identité visuelle soignée.",
    features: ["Tabliers personnalisés", "Textile résistant", "Livraison rapide"],
  },
  {
    icon: Briefcase,
    title: "Entreprises & Associations",
    description: "Casquettes, polos événementiels, textile corporate. Renforcez votre image de marque.",
    features: ["Devis sous 24h", "Suivi livraison", "Conseil placement"],
  },
]

const b2cServices = [
  {
    icon: Baby,
    title: "Naissance & Bébé",
    description: "Peignoirs, gigoteuses, bavoirs brodés avec prénom. Cadeaux de naissance inoubliables.",
    features: ["Prénoms & dates", "Motifs mignons", "Qualité douce"],
  },
  {
    icon: Gift,
    title: "Cadeaux Personnalisés",
    description: "Sacs, serviettes, textiles brodés pour anniversaires, mariages, événements spéciaux.",
    features: ["Broderie texte", "Couleurs au choix", "Délai ~1 semaine"],
  },
  {
    icon: Sparkles,
    title: "Créations Sur Mesure",
    description: "Projets uniques, broderie artistique, patchs custom. Donnez vie à vos idées textiles.",
    features: ["Conception unique", "Techniques variées", "Accompagnement"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services de Broderie</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solutions professionnelles pour entreprises et créations personnalisées pour particuliers
          </p>
        </div>

        <div className="mb-20">
          <div className="inline-block px-6 py-3 glass-card text-primary font-semibold mb-10">
            Pour Entreprises (B2B)
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {b2bServices.map((service, index) => (
              <div key={index} className="glass-card p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
        </div>

        <div>
          <div className="inline-block px-6 py-3 glass-card text-primary font-semibold mb-10">
            Pour Particuliers (B2C)
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {b2cServices.map((service, index) => (
              <div key={index} className="glass-card p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
        </div>
      </div>
    </section>
  )
}
