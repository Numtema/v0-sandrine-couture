import { Award, Zap, FileText, Truck } from "lucide-react"

export function ReassuranceSection() {
  const features = [
    {
      icon: Award,
      title: "Qualité",
      description: "Broderie durable, finitions propres",
    },
    {
      icon: Zap,
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Un service simple, mais sérieux.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
