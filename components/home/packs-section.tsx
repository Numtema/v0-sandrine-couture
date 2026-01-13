import Link from "next/link"
import { Users, Building, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PacksSection() {
  const packs = [
    {
      icon: Users,
      name: "Starter",
      description: "Petites équipes",
      features: ["Série courte", "Logo cœur", "Rendu durable"],
    },
    {
      icon: Building,
      name: "Team",
      description: "Série complète",
      features: ["Série moyenne", "Option manche/nuque", "Contrôle qualité"],
    },
    {
      icon: Crown,
      name: "Premium",
      description: "Multi-articles + options",
      features: ["Multi-articles", "Patch velcro possible", "Accompagnement complet"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Besoin d&apos;équiper une équipe ?</h2>
          <p className="text-lg text-muted-foreground">
            Packs possibles pour aller vite (quantités, placements, options).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {packs.map((pack, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pack.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Pack {pack.name}</CardTitle>
                <CardDescription>{pack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/devis">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Choisir ce pack
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground">Vous voulez une configuration sur mesure ? On le fait.</p>
      </div>
    </section>
  )
}
