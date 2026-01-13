import { Award, Clock, FileText, Truck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Qualité",
    description: "Broderie durable, finitions propres",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Devis clair et rapide sur WhatsApp",
  },
  {
    icon: FileText,
    title: "Pro",
    description: "Facture disponible pour entreprises",
  },
  {
    icon: Truck,
    title: "Livraison",
    description: "Normandie + expédition France",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Un service simple, mais sérieux.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
