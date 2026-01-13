import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { contactData } from "@/lib/contact-data"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Nos Réalisations de Broderie | By Sandrine Couture",
  description:
    "Découvrez notre portfolio de broderies professionnelles et personnalisées. Uniformes d'entreprise, cadeaux sur mesure, créations uniques.",
}

export default function RealisationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pink-100 text-[#e91e63] rounded-full text-sm font-semibold mb-6">
              Portfolio
            </div>
            <h1 className="section-title">Nos Réalisations de Broderie</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez quelques-unes de nos créations brodées pour entreprises et particuliers. Chaque projet est
              unique et réalisé avec le plus grand soin.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 bg-[#e91e63] text-white rounded-full font-medium">Tous</button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-colors">
                Entreprises
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-colors">
                Particuliers
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-colors">
                Technique 3D
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "professional restaurant uniform polo with embroidered chef logo on chest, black elegant",
                cat: "Restaurant",
                title: "Polos Restaurant Le Gourmet",
                type: "B2B",
              },
              {
                img: "embroidered baby bathrobe soft pink with teddy bear and name Sophie, adorable gift",
                cat: "Naissance",
                title: "Peignoir Bébé Sophie",
                type: "B2C",
              },
              {
                img: "construction worker jacket with company logo 3D puff embroidery, high visibility orange",
                cat: "BTP",
                title: "Vestes BTP LogoBat",
                type: "B2B",
              },
              {
                img: "white tote bag with elegant embroidered floral name design Marie, feminine chic",
                cat: "Cadeau",
                title: "Sac Personnalisé Marie",
                type: "B2C",
              },
              {
                img: "hotel staff uniform vest with gold embroidered hotel crest, luxury hospitality",
                cat: "Hôtellerie",
                title: "Uniformes Hôtel Royal",
                type: "B2B",
              },
              {
                img: "embroidered wedding towels with monogram initials JM and date, pure white luxury linen",
                cat: "Mariage",
                title: "Serviettes Mariage J&M",
                type: "B2C",
              },
              {
                img: "bakery apron with embroidered boulangerie logo and wheat design, classic white",
                cat: "Boulangerie",
                title: "Tabliers Boulangerie Artisan",
                type: "B2B",
              },
              {
                img: "custom embroidered baby bib with cute animal design and name Lucas, colorful playful",
                cat: "Bébé",
                title: "Bavoir Lucas",
                type: "B2C",
              },
              {
                img: "sports club caps with 3D embroidered team logo, black professional athletic wear",
                cat: "Sport",
                title: "Casquettes Club Sportif",
                type: "B2B",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-2 group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <Image
                    src={`/.jpg?height=350&width=450&query=${item.img}`}
                    alt={item.title}
                    width={450}
                    height={350}
                    className="w-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#e91e63] text-xs font-semibold rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs text-gray-500 mb-1">{item.cat}</p>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Suivez-nous sur les Réseaux Sociaux</h3>
            <p className="text-gray-600 mb-6">
              Découvrez nos dernières créations et projets en cours sur Instagram et Facebook
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={contactData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Instagram size={20} />
                @bysandrinecouture
              </a>
              <a
                href={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <Facebook size={20} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Vous Avez un Projet en Tête?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-moi pour discuter de votre projet de broderie personnalisée
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/devis" className="btn-primary">
              Demander un Devis
            </Link>
            <Link href="/contact" className="btn-secondary">
              Me Contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
