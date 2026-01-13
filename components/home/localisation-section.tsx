import Link from "next/link"
import { MapPin } from "lucide-react"

export function LocalisationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Normandie & France</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Atelier basé à Robertot (76560). Je travaille avec des clients en Normandie et je propose la livraison
            partout en France.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/broderie-normandie"
              className="px-4 py-2 bg-white border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Broderie Normandie
            </Link>
            <Link
              href="/broderie-seine-maritime-76"
              className="px-4 py-2 bg-white border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Broderie Seine-Maritime (76)
            </Link>
            <Link
              href="/broderie-rouen"
              className="px-4 py-2 bg-white border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Broderie Rouen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
