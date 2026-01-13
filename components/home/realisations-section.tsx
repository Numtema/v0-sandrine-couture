import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RealisationsSection() {
  const realisations = [
    {
      src: "/embroidered-polo-shirt-with-company-logo.jpg",
      alt: "Polo brodé avec logo entreprise",
    },
    {
      src: "/embroidered-caps-and-hats-with-custom-designs.jpg",
      alt: "Casquettes brodées personnalisées",
    },
    {
      src: "/custom-embroidered-apron-for-restaurant.jpg",
      alt: "Tablier brodé pour restaurant",
    },
    {
      src: "/velcro-patch-embroidered-for-uniform.jpg",
      alt: "Patch velcro brodé pour uniforme",
    },
    {
      src: "/personalized-baby-blanket-with-embroidered-name.jpg",
      alt: "Couverture bébé personnalisée avec prénom brodé",
    },
    {
      src: "/embroidered-sweater-with-custom-text.jpg",
      alt: "Sweat brodé avec texte personnalisé",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Réalisations</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Quelques exemples de broderies entreprise et cadeaux personnalisés. Chaque commande est réalisée avec soin.
          </p>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {realisations.map((realisation, i) => (
              <div
                key={i}
                className="relative aspect-square bg-muted rounded-xl overflow-hidden border border-border hover:border-primary transition-all group cursor-pointer shadow-md hover:shadow-xl"
              >
                <Image
                  src={realisation.src || "/placeholder.svg"}
                  alt={realisation.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/realisations">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Voir les réalisations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
