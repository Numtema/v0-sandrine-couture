import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { whatsappTemplates } from "@/lib/contact-data"
import { Baby, Gift, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Broderie Personnalisée pour Particuliers | By Sandrine Couture",
  description:
    "Cadeaux brodés personnalisés: naissance, anniversaire, mariage. Peignoirs, serviettes, sacs brodés avec prénom. Robertot, Normandie.",
}

export default function ParticuliersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-pink-100 text-[#e91e63] rounded-full text-sm font-semibold mb-6">
                Particuliers
              </div>
              <h1 className="section-title text-balance">Créez des Cadeaux Uniques et Personnalisés</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transformez vos moments précieux en souvenirs brodés inoubliables. Naissance, anniversaire, mariage -
                chaque création est unique.
              </p>

              <div className="flex flex-wrap gap-4">
                <WhatsAppButton message={whatsappTemplates.particulier}>Commander sur WhatsApp</WhatsAppButton>
                <Link href="/realisations" className="btn-secondary">
                  Voir la Galerie
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="glass-card p-2">
                <Image
                  src="/personalized-embroidered-baby-bathrobe-with-name--.jpg"
                  alt="Broderie personnalisée cadeau"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories Populaires */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Catégories Populaires</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des créations brodées pour tous vos moments spéciaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Baby className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Naissance & Bébé</h3>
              <p className="text-gray-600 mb-4">
                Peignoirs, gigoteuses, bavoirs brodés avec prénom et date. Cadeaux de naissance mémorables.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Prénoms & dates</li>
                <li>✓ Motifs mignons</li>
                <li>✓ Textile doux bébé</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Gift className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Cadeaux Personnalisés</h3>
              <p className="text-gray-600 mb-4">
                Sacs, serviettes, textiles brodés pour anniversaires, fêtes, événements spéciaux.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Textes personnalisés</li>
                <li>✓ Couleurs au choix</li>
                <li>✓ Délai ~1 semaine</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Mariage & Couple</h3>
              <p className="text-gray-600 mb-4">
                Serviettes monogrammées, peignoirs pour mariés, linge de maison personnalisé.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Monogrammes élégants</li>
                <li>✓ Dates importantes</li>
                <li>✓ Cadeaux romantiques</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Créations Sur Mesure</h3>
              <p className="text-gray-600 mb-4">
                Projets uniques, broderie artistique, patchs custom. Donnez vie à vos idées.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Conception unique</li>
                <li>✓ Techniques variées</li>
                <li>✓ Accompagnement créatif</li>
              </ul>
            </div>

            <div className="glass-card p-6 bg-gradient-to-br from-pink-50 to-white">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Gift className="text-[#e91e63]" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Cadeaux Entreprise</h3>
              <p className="text-gray-600 mb-4">Petites séries premium pour cadeaux clients ou événements.</p>
              <WhatsAppButton message={whatsappTemplates.particulier} className="text-sm px-4 py-2">
                Me contacter
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Inspiration */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Inspirez-vous de Mes Créations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Quelques exemples de broderies personnalisées</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "embroidered baby bathrobe with teddy bear and name Emma, soft pink, adorable gift",
                title: "Peignoir Bébé Emma",
              },
              {
                img: "personalized white tote bag with embroidered floral name Marie, elegant feminine design",
                title: "Sac Personnalisé Marie",
              },
              {
                img: "embroidered wedding towels with monogram initials and date, luxury white linens",
                title: "Serviettes Mariage",
              },
              {
                img: "custom embroidered baby bib with cute animals and name Lucas, colorful playful design",
                title: "Bavoir Lucas",
              },
              {
                img: "personalized gym sports bag with embroidered name and motivational text, black modern",
                title: "Sac Sport Brodé",
              },
              {
                img: "embroidered linen cushion with custom date and romantic quote, beige elegant home decor",
                title: "Coussin Date Spéciale",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-2 group cursor-pointer">
                <Image
                  src={`/.jpg?height=300&width=400&query=${item.img}`}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-xl w-full mb-3"
                />
                <p className="text-center font-medium text-gray-700 px-2">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/realisations" className="btn-secondary">
              Voir Toutes les Réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Processus Simple */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Comment Commander?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              3 étapes simples pour votre broderie personnalisée
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Choisissez & Décrivez",
                desc: "Article, personnalisation souhaitée, couleurs. Contactez-moi sur WhatsApp.",
              },
              {
                num: "02",
                title: "Recevez Votre Devis",
                desc: "Aperçu et prix sous 24h. On valide ensemble les détails.",
              },
              {
                num: "03",
                title: "Recevez Votre Création",
                desc: "Broderie réalisée avec soin. Livraison en ~7 jours.",
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
            <h2 className="text-3xl font-serif font-bold mb-4">Prêt à Créer Votre Cadeau Unique?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Racontez-moi votre projet, je vous accompagne pour créer la broderie parfaite.
            </p>
            <WhatsAppButton message={whatsappTemplates.particulier}>Commander sur WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
