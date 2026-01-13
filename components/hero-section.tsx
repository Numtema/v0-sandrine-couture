import { MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-pink-50/50 -z-10" />

      <div
        className="floating-bubble w-96 h-96 top-20 -left-48 opacity-30"
        style={{ "--x": "100px", "--y": "-80px", "--duration": "20s" } as any}
      />
      <div
        className="floating-bubble w-64 h-64 top-40 -right-32 opacity-20"
        style={{ "--x": "-80px", "--y": "-100px", "--duration": "25s" } as any}
      />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card shadow-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">Robertot (76560) • Normandie • Livraison France</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Broderie & personnalisation textile
            </h1>

            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed">
                Uniformes d'équipe & cadeaux personnalisés, avec une finition nette et durable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Que vous soyez une entreprise ou un particulier, je brode vos textiles avec soin : logos professionnels,
                prénoms, patchs, casquettes, tabliers... Un rendu propre, lisible et fait pour durer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary" />
                Devis rapide
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary" />
                Travail soigné
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary" />
                Livraison
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary" />
                Facture (pro)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link href="/devis" className="whatsapp-button">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Demander un devis WhatsApp
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Voir les réalisations
              </Link>
            </div>
            <p className="text-sm text-gray-500 italic">
              Un formulaire simple - WhatsApp s'ouvre avec le message déjà prêt.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card p-4 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/professional-embroidered-polo-shirts-with-company-.jpg"
                  alt="Broderie professionnelle sur polos entreprise avec logo - By Sandrine Couture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl max-w-xs">
              <p className="text-sm font-medium text-gray-900">Qualité professionnelle</p>
              <p className="text-xs text-gray-600 mt-1">Broderie durable, finitions propres</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
