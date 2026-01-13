import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Check, Utensils, Hotel, Wrench, ShoppingBag, Scissors, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Broderie entreprise : uniformes brodés & patchs | Normandie",
  description:
    "Uniformes brodés pour entreprises : polos, tabliers, sweats, casquettes, patch velcro. Devis WhatsApp rapide, facture, livraison Normandie & France. Robertot (76560).",
}

export default function EntreprisesPage() {
  const sectors = [
    { icon: Utensils, title: "Restaurants & métiers de bouche" },
    { icon: Hotel, title: "Hôtels / accueil / entretien" },
    { icon: Wrench, title: "Artisans, BTP, garages" },
    { icon: ShoppingBag, title: "Boulangeries / traiteurs" },
    { icon: Scissors, title: "Salons coiffure / esthétique" },
    { icon: Users, title: "Événementiel / associations / clubs" },
  ]

  const products = [
    "Polos brodés",
    "T-shirts",
    "Sweats / hoodies",
    "Tabliers brodés",
    "Casquettes / bonnets",
    "Patchs brodés (cousus ou velcro)",
  ]

  const placements = [
    { title: "Logo cœur", desc: "Le plus classique" },
    { title: "Manche / nuque", desc: "Premium discret" },
    { title: "Grand dos", desc: "Visibilité maximale" },
  ]

  const packs = [
    {
      name: "Starter",
      ideal: "Petite équipe / artisan",
      features: ["Série courte", "Logo cœur", "Rendu durable"],
    },
    {
      name: "Team",
      ideal: "PME / équipe complète",
      features: ["Série moyenne", "Option manche/nuque", "Contrôle qualité"],
    },
    {
      name: "Premium",
      ideal: "Image haut de gamme",
      features: ["Multi-articles (polos + casquettes + vestes)", "Patch velcro possible", "Accompagnement complet"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="floating-bubble w-64 h-64 top-10 left-10 opacity-30"
              style={{ "--duration": "20s", "--x": "80px", "--y": "-100px" } as React.CSSProperties}
            />
            <div
              className="floating-bubble w-96 h-96 top-40 right-20 opacity-20"
              style={{ "--duration": "25s", "--x": "-60px", "--y": "80px" } as React.CSSProperties}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-rose-light/30 to-background -z-10" />
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Robertot (76560) • Normandie • Livraison France</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                  Uniformes brodés pour entreprises
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
                  Une image d&apos;équipe professionnelle, durable et cohérente.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  Restaurants, hôtels, artisans, salons, clubs... Je personnalise vos tenues avec une broderie nette et
                  résistante : logo, patch, prénom ou fonction.
                </p>

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
                    <span className="text-foreground font-medium">Facture pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Livraison</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-4">
                  <Link href="/devis">
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 shadow-lg btn-shine transition-all hover:scale-105"
                    >
                      Demander un devis entreprise
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

                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  Le formulaire génère un message WhatsApp complet (quantité, article, délai, livraison...).
                </p>
              </div>

              <div
                className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl glass-card animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Image
                  src="/images/team-wearing-embroidered-uniforms-restaurant.jpg"
                  alt="Équipe en uniformes brodés pour restaurant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="floating-bubble w-80 h-80 top-1/4 right-1/4 opacity-15"
              style={{ "--duration": "22s", "--x": "-100px", "--y": "60px" } as React.CSSProperties}
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pour quels types d&apos;entreprises ?
              </h2>
              <p className="text-lg text-muted-foreground">Les demandes les plus fréquentes.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className="glass-card border-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <sector.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{sector.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <p
              className="text-center text-sm text-muted-foreground mt-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Vous n&apos;êtes pas dans la liste ? Aucun souci : on adapte.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="floating-bubble w-72 h-72 bottom-20 left-10 opacity-20"
              style={{ "--duration": "24s", "--x": "90px", "--y": "-70px" } as React.CSSProperties}
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Produits personnalisés</h2>
              <p className="text-lg text-muted-foreground">Tenues d&apos;équipe, accessoires et options.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="service-card-enhanced animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-semibold text-foreground">{product}</p>
                </div>
              ))}
            </div>
            <div
              className="max-w-3xl mx-auto glass-panel rounded-lg p-6 text-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="text-sm text-foreground">
                <span className="font-semibold">Note pro :</span> Je peux broder sur vos textiles ou vous proposer une
                solution selon votre besoin.
              </p>
            </div>
          </div>
        </section>

        {/* Placements Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Placement du logo & options populaires
              </h2>
              <p className="text-lg text-muted-foreground">Pour un rendu discret ou plus visible.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {placements.map((placement, index) => (
                <Card
                  key={index}
                  className="glass-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <CardTitle>{placement.title}</CardTitle>
                    <CardDescription>{placement.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <div className="max-w-3xl mx-auto glass-panel rounded-lg p-6">
                <p className="text-sm text-foreground mb-2 font-semibold">Options :</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Ajout prénom / fonction (ex : Chef, Sécurité, Staff)</li>
                  <li>Patch velcro</li>
                  <li>Casquette personnalisée</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Votre logo est optimisé pour un rendu broderie propre et lisible.
              </p>
            </div>
          </div>
        </section>

        {/* Packs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Packs entreprise (simple et efficace)
              </h2>
              <p className="text-lg text-muted-foreground">Pour gagner du temps, on peut partir sur une base claire.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              {packs.map((pack, index) => (
                <Card
                  key={index}
                  className="glass-card border-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">Pack {pack.name}</CardTitle>
                    <CardDescription>Idéal : {pack.ideal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/devis">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent btn-shine"
                      >
                        Choisir ce pack
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              Vous voulez une configuration sur mesure ? On le fait.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment se déroule une commande entreprise ?
              </h2>
              <p className="text-lg text-muted-foreground">Simple, carré, efficace.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              {[
                "Vous envoyez : logo + quantité + articles",
                "Je vous réponds avec un devis clair",
                "Validation + acompte",
                "Production",
                "Livraison",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 glass-panel rounded-lg p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Délais :</span> En moyenne : environ 10 jours (selon quantité)
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Facture :</span> Facture disponible
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Demandez votre devis en 1 minute</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Un formulaire simple → WhatsApp s&apos;ouvre avec votre demande déjà prête.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Link href="/devis">
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 shadow-lg btn-shine transition-all hover:scale-105"
                  >
                    Demander un devis entreprise (WhatsApp)
                  </Button>
                </Link>
                <a href="tel:+33629492213">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all hover:scale-105"
                  >
                    Appeler : 06 29 49 22 13
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground">Logo + article + quantité + délai = devis rapide.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
