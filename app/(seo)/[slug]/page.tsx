import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getSEOPage, getAllSEOSlugs } from "@/lib/seo-data"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CONTACT_DATA } from "@/lib/contact-data"

export async function generateStaticParams() {
  const slugs = getAllSEOSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getSEOPage(params.slug)

  if (!page) {
    return {
      title: "Page non trouvée",
    }
  }

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "website",
    },
  }
}

export default function SEOPage({ params }: { params: { slug: string } }) {
  const page = getSEOPage(params.slug)

  if (!page) {
    notFound()
  }

  const whatsappMessage = `Bonjour, je suis intéressé(e) par ${page.h1}. Pouvez-vous me faire un devis?`
  const whatsappUrl = `https://wa.me/${CONTACT_DATA.phone.replace(/\s/g, "")}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={`/${page.heroImage}`} alt={page.h1} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{page.h1}</h1>
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">{page.content.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg px-8 shadow-glow"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Devis WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                >
                  <a href={`tel:${CONTACT_DATA.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {page.services.map((service, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-cream/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Pourquoi choisir By Sandrine Couture?</h2>
              <ul className="space-y-4">
                {page.content.avantages.map((avantage, index) => (
                  <li key={index} className="flex items-start gap-4 text-cream/90">
                    <span className="text-primary text-2xl mt-1">✓</span>
                    <span className="text-lg">{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-3xl font-bold text-white mb-6">{page.content.cta}</h2>
              <p className="text-cream/80 text-lg mb-8">
                Devis gratuit sous 24h. Contactez-nous par WhatsApp, téléphone ou email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg px-8 shadow-glow"
                >
                  <Link href="/devis">Demander un devis</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-8 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                >
                  <Link href="/realisations">Voir nos réalisations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Découvrez aussi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {page.relatedPages.slice(0, 6).map((relatedSlug) => {
                const isMainPage = ["entreprises", "particuliers", "realisations"].includes(relatedSlug)
                const href = isMainPage ? `/${relatedSlug}` : `/${relatedSlug}`
                const title = relatedSlug
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")

                return (
                  <Link
                    key={relatedSlug}
                    href={href}
                    className="glass-card p-6 rounded-3xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    <p className="text-white font-semibold">{title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
