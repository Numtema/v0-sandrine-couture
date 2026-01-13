import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { whatsappTemplates } from "@/lib/contact-data"
import { Building2, Heart } from "lucide-react"

export const metadata = {
  title: "Demander un Devis | By Sandrine Couture",
  description:
    "Obtenez un devis gratuit sous 24h pour vos projets de broderie. Entreprises ou particuliers, contactez-nous sur WhatsApp.",
}

export default function DevisPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="section-title">Demander un Devis</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Réponse garantie sous 24h. Choisissez votre type de projet pour un devis personnalisé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Building2 className="text-[#e91e63]" size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-center mb-4">Pour Entreprises</h2>
              <p className="text-gray-600 text-center mb-6">
                Uniformes brodés, séries, facture professionnelle. À partir de 10 pièces.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Devis professionnel sous 24h
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Mockup de votre logo brodé
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Facture et conditions pro
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Livraison suivie 10-14 jours
                </li>
              </ul>

              <WhatsAppButton message={whatsappTemplates.entreprise} className="w-full justify-center">
                Devis Entreprise
              </WhatsAppButton>
            </div>

            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-[#e91e63]" size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-center mb-4">Pour Particuliers</h2>
              <p className="text-gray-600 text-center mb-6">
                Cadeaux personnalisés, broderie prénom, créations uniques.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Réponse rapide sous 24h
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Conseil personnalisé
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Prix transparent
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-[#e91e63] rounded-full"></span>
                  Livraison en ~7 jours
                </li>
              </ul>

              <WhatsAppButton message={whatsappTemplates.particulier} className="w-full justify-center">
                Devis Particulier
              </WhatsAppButton>
            </div>
          </div>

          <div className="glass-card p-8 mt-12 text-center">
            <h3 className="text-xl font-serif font-bold mb-4">Informations à Préparer</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Pour Entreprises:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Type d'articles (polos, vestes, casquettes...)</li>
                  <li>• Quantité approximative</li>
                  <li>• Votre logo (format image)</li>
                  <li>• Placement souhaité</li>
                  <li>• Délai souhaité</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pour Particuliers:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Article souhaité (peignoir, sac, serviette...)</li>
                  <li>• Type de personnalisation (prénom, date...)</li>
                  <li>• Couleurs préférées</li>
                  <li>• Quantité</li>
                  <li>• Occasion (naissance, mariage...)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
