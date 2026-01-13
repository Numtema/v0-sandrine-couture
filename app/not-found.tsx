import Link from "next/link"
import { Home, Search, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-4">404</h1>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Page Introuvable</h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou explorez nos
            services de broderie professionnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <Home size={20} />
              Retour à l'accueil
            </Link>

            <Link href="/realisations" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Search size={20} />
              Voir nos réalisations
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-pink-100">
            <p className="text-sm text-gray-500 mb-4">Pages populaires</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/entreprises"
                className="px-4 py-2 bg-white border border-pink-200 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                Entreprises
              </Link>
              <Link
                href="/particuliers"
                className="px-4 py-2 bg-white border border-pink-200 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                Particuliers
              </Link>
              <Link
                href="/devis"
                className="px-4 py-2 bg-white border border-pink-200 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-white border border-pink-200 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
