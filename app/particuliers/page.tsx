import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Gift, Baby, Sparkles, MessageCircle, CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Broderie personnalisée : prénom, bébé, cadeaux | By Sandrine Couture",
  description:
    "Broderie personnalisée pour particuliers : prénom, message, motif, naissance/bébé. Serviettes, peignoirs, vêtements, accessoires. Devis WhatsApp rapide, livraison possible. Robertot (76560).",
}

export default function ParticuliersPage() {
  const occasions = [
    { icon: Baby, title: "Naissance & bébé", description: "Doudou, gigoteuse, body, cape de bain..." },
    { icon: Gift, title: "Cadeaux & anniversaires", description: "Prénom, message personnalisé, motif unique" },
    { icon: Heart, title: "Mariage & couples", description: "Peignoirs, serviettes, housses..." },
    { icon: Sparkles, title: "Événements", description: "EVJF, enterrements de vie, fêtes..." },
  ]

  const products = [
    {
      title: "Serviettes & peignoirs",
      image: "/images/serviette-brodee-prenom.jpg",
      description: "Prénom brodé élégant sur serviette de bain ou peignoir moelleux",
    },
    {
      title: "Bébé & naissance",
      image: "/images/personnalized-baby-blanket-with-embroidered-name.jpg",
      description: "Gigoteuse, doudou, body personnalisé pour un cadeau unique",
    },
    {
      title: "Vêtements personnalisés",
      image: "/images/embroidered-sweater-with-custom-text.jpg",
      description: "Sweat, t-shirt, veste brodé avec votre texte ou motif",
    },
    {
      title: "Accessoires",
      image: "/images/embroidered-caps-and-hats-with-custom-designs.jpg",
      description: "Casquettes, sacs, trousses brodés",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
        {/* Floating bubbles background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-bubble" style={{ left: "10%", animationDelay: "0s" }} />
          <div className="floating-bubble" style={{ left: "80%", top: "60%", animationDelay: "2s" }} />
          <div className="floating-bubble" style={{ left: "50%", top: "30%", animationDelay: "4s" }} />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-sm text-pink-900 mb-6">
              <span>📍 Robertot (76560) • Livraison possible</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Broderie personnalisée : prénoms, cadeaux, bébé
            </h1>

            <p className="text-2xl text-gray-700 mb-8">Une attention unique, avec une finition nette et durable.</p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Naissance, anniversaire, mariage, EVJF… offrez un cadeau unique avec une broderie personnalisée : prénom,
              message, motif. Travail soigné, détails nets, rendu émouvant.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <CheckCircle className="w-5 h-5 text-pink-500" />
              <span className="text-sm">Devis rapide</span>
              <CheckCircle className="w-5 h-5 text-pink-500" />
              <span className="text-sm">Travail soigné</span>
              <CheckCircle className="w-5 h-5 text-pink-500" />
              <span className="text-sm">Livraison</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/devis"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Demander un devis WhatsApp
              </a>
              <a
                href="/realisations"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all"
              >
                Voir les réalisations
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Le formulaire génère un message WhatsApp complet (article + prénom/texte + date).
            </p>
          </div>

          <div className="relative fade-in-up" style={{ animationDelay: "200ms" }}>
            <Image
              src="/images/personalized-baby-blanket-with-embroidered-name.jpg"
              alt="Broderie personnalisée bébé"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold text-black mb-6">Pour quelle occasion ?</h2>
            <p className="text-xl text-gray-600">Chaque moment mérite une attention particulière.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="fade-in-up glass p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-100 flex items-center justify-center">
                  <occasion.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{occasion.title}</h3>
                <p className="text-gray-600 text-sm">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold text-black mb-6">Broderies populaires</h2>
            <p className="text-xl text-gray-600">Textiles et accessoires personnalisables</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="fade-in-up glass rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-pink-200">
            <p className="text-gray-700">
              <strong>Note pro :</strong> Je peux personnaliser vos propres textiles ou vous proposer une sélection
              qualité selon votre budget et l'occasion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-5xl font-bold mb-6">Demandez votre devis en 1 minute</h2>
          <p className="text-xl text-gray-300 mb-12">
            Un formulaire simple → WhatsApp s'ouvre avec votre demande déjà prête.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Demander un devis particulier (WhatsApp)
            </a>
            <a
              href="tel:+33629492213"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Appeler : 06 29 49 22 13
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-6">Article + prénom/texte + date = devis rapide.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
