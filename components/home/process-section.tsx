import { MessageSquare, Reply, CheckCircle, Cog, Package } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Vous remplissez le devis (entreprise ou particulier)",
    },
    {
      icon: Reply,
      title: "WhatsApp s'ouvre avec votre demande déjà structurée",
    },
    {
      icon: CheckCircle,
      title: "Je vous réponds avec un devis clair (+ délais)",
    },
    {
      icon: Cog,
      title: "Validation + production",
    },
    {
      icon: Package,
      title: "Livraison / remise",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comment ça marche ?</h2>
          <p className="text-lg text-muted-foreground">Vous décrivez votre besoin → je m&apos;occupe du reste.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-border rounded-lg p-6 hover:border-primary transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <step.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-foreground leading-relaxed">{step.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
            <p className="font-semibold">
              Délais : Particuliers : environ 1 semaine • Entreprises : environ 10 jours (selon quantité)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
