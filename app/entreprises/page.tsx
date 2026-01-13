import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { whatsappTemplates } from "@/lib/contact-data"
import { Building2, Briefcase, ChefHat, Hammer, Users, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Uniformes Brodés pour Entreprises | By Sandrine Couture",
  description:
    "Uniformes professionnels brodés pour restaurants, hôtels, artisans, BTP. Devis sous 24h, facture, livraison suivie. Seine-Maritime, Normandie.",
}

export default function EntreprisesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-pink-100 text-[#e91e63] rounded-full text-sm font-semibold mb-6">
                B2B Professionnel
              </div>
              <h1 className="section-title text-balance">Équipez Vos Équipes avec des Uniformes Brodés Premium</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Renforcez votre identité de marque avec des uniformes brodés de qualité professionnelle. Devis sous 24h,
                facture, livraison suivie.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <WhatsAppButton message={whatsappTemplates.entreprise}>Demander un Devis Pro</WhatsAppButton>
                <Link href="/realisations" className="btn-secondary">
                  Voir Réalisations
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#e91e63]" size={20} />
                  <span className="text-sm font-medium">Devis 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#e91e63]" size={20} />
                  <span className="text-sm font-medium">Facture pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#e91e63]" size={20} />
                  <span className="text-sm font-medium">Livraison suivie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#e91e63]" size={20} />
                  <span className="text-sm font-medium">Séries dès 10 pièces</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-2">
                <Image
                  src="/professional-embroidered-polo-shirts-with-company-.jpg"
                  alt="Uniformes brodés professionnels"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Secteurs Que Nous Servons</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions de broderie adaptées à votre industrie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/broderie-restaurant" className="glass-card p-6 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e91e63] transition-colors">
                <ChefHat className="text-[#e91e63] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Restaurant & Hôtellerie</h3>
              <p className="text-gray-600 mb-4">Polos, tabliers, toques de chef brodés. Identité visuelle soignée.</p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">En savoir plus →</span>
            </Link>

            <Link href="/broderie-artisans-btp" className="glass-card p-6 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e91e63] transition-colors">
                <Hammer className="text-[#e91e63] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Artisans & BTP</h3>
              <p className="text-gray-600 mb-4">Vêtements de travail brodés, logo entreprise, textile résistant.</p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">En savoir plus →</span>
            </Link>

            <Link href="/broderie-boulangerie" className="glass-card p-6 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e91e63] transition-colors">
                <Building2 className="text-[#e91e63] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Boulangerie & Commerce</h3>
              <p className="text-gray-600 mb-4">Tabliers, polos personnalisés pour équipes en contact client.</p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">En savoir plus →</span>
            </Link>

            <Link href="/broderie-hotel" className="glass-card p-6 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e91e63] transition-colors">
                <Building2 className="text-[#e91e63] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Hôtels & Spas</h3>
              <p className="text-gray-600 mb-4">Uniformes élégants pour réception, conciergerie, service étages.</p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">En savoir plus →</span>
            </Link>

            <Link href="/broderie-salon-coiffure-esthetique" className="glass-card p-6 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e91e63] transition-colors">
                <Users className="text-[#e91e63] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Salons & Esthétique</h3>
              <p className="text-gray-600 mb-4">Tuniques, tabliers stylés pour coiffeurs et esthéticiennes.</p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">En savoir plus →</span>
            </Link>

            <div className="glass-card p-6 bg-gradient-to-br from-pink-50 to-white">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Briefcase className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Clubs & Associations</h3>
              <p className="text-gray-600 mb-4">Textile événementiel, merchandising, vêtements de sport brodés.</p>
              <WhatsAppButton message={whatsappTemplates.entreprise} className="text-sm px-4 py-2">
                Demander un devis
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Produits Phares</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Techniques et textiles de qualité professionnelle</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/patch-velcro-brode" className="glass-card p-8 group">
              <Image
                src="/embroidered-velcro-patches-on-uniform--removable-p.jpg"
                alt="Patchs velcro brodés"
                width={500}
                height={300}
                className="rounded-2xl mb-6 w-full"
              />
              <h3 className="text-2xl font-serif font-bold mb-3">Patchs Velcro Brodés</h3>
              <p className="text-gray-600 mb-4">
                Patchs amovibles avec velcro, parfaits pour uniformes tactiques, BTP, sécurité. Faciles à retirer pour
                lavage.
              </p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">Voir détails →</span>
            </Link>

            <Link href="/casquette-bonnet-brode" className="glass-card p-8 group">
              <Image
                src="/embroidered-caps-and-beanies-with-company-logos--p.jpg"
                alt="Casquettes bonnets brodés"
                width={500}
                height={300}
                className="rounded-2xl mb-6 w-full"
              />
              <h3 className="text-2xl font-serif font-bold mb-3">Casquettes & Bonnets Brodés</h3>
              <p className="text-gray-600 mb-4">
                Couvre-chefs personnalisés pour entreprises, clubs sportifs, événements. Broderie 3D ou classique.
              </p>
              <span className="text-[#e91e63] font-semibold group-hover:underline">Voir détails →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Processus Professionnel</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De votre demande à la livraison en 4 étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Consultation & Logo",
                desc: "Envoyez votre logo. Réponse et conseil sous 24h.",
              },
              {
                num: "02",
                title: "Mockup & Devis",
                desc: "Aperçu réaliste + devis détaillé. Validation ensemble.",
              },
              {
                num: "03",
                title: "Production",
                desc: "Broderie de qualité, contrôle à chaque étape.",
              },
              {
                num: "04",
                title: "Livraison Suivie",
                desc: "Envoi sécurisé 10-14 jours. Tracking fourni.",
              },
            ].map((step) => (
              <div key={step.num} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e91e63] to-[#c2185b] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Prêt à Équiper Votre Équipe?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Obtenez un devis personnalisé sous 24h. Service professionnel garanti.
            </p>
            <WhatsAppButton message={whatsappTemplates.entreprise}>Demander un Devis Entreprise</WhatsAppButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
