import { MessageSquare, Palette, Sparkles, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "Contactez-nous via WhatsApp ou formulaire. Décrivez votre projet, envoyez votre logo ou idées.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Mockup & Devis",
    description: "Recevez un aperçu de votre broderie et un devis détaillé sous 24h. Validation ensemble.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Production",
    description: "Broderie réalisée avec soin et précision. Contrôle qualité à chaque étape du processus.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Livraison",
    description: "Livraison suivie en France. Entreprises : 10-14 jours. Particuliers : ~7 jours.",
  },
]

export default function ProcessSection() {
  return (
    <section id="processus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Processus Simple</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            De votre idée à la réalisation finale en 4 étapes claires et transparentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 rounded-2xl h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-serif text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Sandrine%2C%20je%20souhaite%20d%C3%A9marrer%20un%20projet%20de%20broderie."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Démarrer Mon Projet
          </a>
        </div>
      </div>
    </section>
  )
}
