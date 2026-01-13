import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="floating-bubble w-64 h-64 top-10 left-10 opacity-30"
          style={{ "--duration": "20s", "--x": "80px", "--y": "-100px" } as React.CSSProperties}
        />
        <div
          className="floating-bubble w-96 h-96 top-40 right-20 opacity-20"
          style={{ "--duration": "25s", "--x": "-60px", "--y": "80px" } as React.CSSProperties}
        />
        <div
          className="floating-bubble w-48 h-48 bottom-20 left-1/3 opacity-25"
          style={{ "--duration": "18s", "--x": "100px", "--y": "-120px" } as React.CSSProperties}
        />
      </div>

      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-light/30 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side: Text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Robertot (76560) • Normandie • Livraison France</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Broderie & personnalisation textile
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
              Uniformes d&apos;équipe & cadeaux personnalisés, avec une finition nette et durable.
            </p>

            {/* Texte descriptif */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Que vous soyez une entreprise ou un particulier, je brode vos textiles avec soin : logos professionnels,
              prénoms, patchs, casquettes, tabliers... Un rendu propre, lisible et fait pour durer.
            </p>

            {/* Preuves rapides */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Devis rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Travail soigné</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Livraison</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Facture (pro)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-4">
              <Link href="/devis">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 shadow-lg btn-shine transition-all hover:scale-105"
                >
                  Demander un devis WhatsApp
                </Button>
              </Link>
              <Link href="/realisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all hover:scale-105"
                >
                  Voir les réalisations
                </Button>
              </Link>
            </div>

            {/* Micro-texte sous CTA */}
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Un formulaire simple → WhatsApp s&apos;ouvre avec le message déjà prêt.
            </p>
          </div>

          {/* Right side: Professional broderie image */}
          <div
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl glass-card animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/professional-embroidery-textile-workshop-logos-on-.jpg"
              alt="Broderie professionnelle - Polos, casquettes et textiles personnalisés"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
