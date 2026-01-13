import { Sparkles, Building2, Heart } from "lucide-react"
import { whatsappTemplates, getWhatsAppUrl } from "@/lib/contact-data"

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-pink-50/50 -z-10" />

      {/* Bulles flottantes décoratives */}
      <div
        className="floating-bubble w-96 h-96 top-20 -left-48 opacity-30"
        style={{ "--x": "100px", "--y": "-80px", "--duration": "20s" } as any}
      />
      <div
        className="floating-bubble w-64 h-64 top-40 -right-32 opacity-20"
        style={{ "--x": "-80px", "--y": "-100px", "--duration": "25s" } as any}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-700">Broderie Premium depuis Normandie</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Broderie Professionnelle
            <br />
            <span className="text-primary text-glow">pour Entreprises & Particuliers</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformez vos textiles en pièces uniques avec notre service de broderie sur mesure. Uniformes
            d'entreprise, cadeaux personnalisés, créations exclusives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href={getWhatsAppUrl(whatsappTemplates.entreprise)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Devis Entreprise
            </a>
            <a
              href={getWhatsAppUrl(whatsappTemplates.particulier)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Commande Particulier
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="glass-card p-6">
              <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-lg mb-2">B2B Pro</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">Uniformes brodés pour entreprises</p>
            </div>
            <div className="glass-card p-6">
              <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-lg mb-2">B2C Personnalisé</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">Cadeaux uniques & broderie sur mesure</p>
            </div>
            <div className="glass-card p-6">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Qualité Premium</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Fils haute qualité & finitions soignées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
