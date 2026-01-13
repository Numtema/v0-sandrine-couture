import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vous avez un projet ?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Dites-moi ce que vous voulez broder — je vous réponds rapidement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/devis">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8">
                Demander un devis WhatsApp
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Contacter
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Entreprise : logo + quantité + placement • Particulier : article + prénom/texte + date
          </p>
        </div>
      </div>
    </section>
  )
}
