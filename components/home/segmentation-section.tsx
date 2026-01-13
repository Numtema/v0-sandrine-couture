import type React from "react"
import Link from "next/link"
import { Building2, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SegmentationSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="floating-bubble w-80 h-80 top-1/4 left-1/4 opacity-15"
          style={{ "--duration": "24s", "--x": "100px", "--y": "-80px" } as React.CSSProperties}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deux parcours, une seule exigence : la qualité.
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez votre besoin pour aller directement à l&apos;essentiel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Entreprises */}
          <Card className="glass-card border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Entreprises & équipes</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Uniformes brodés pour une image professionnelle : tabliers, polos, sweats, casquettes, patchs... Idéal
                pour restaurants, artisans, hôtels, salons, associations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/entreprises">
                <Button className="w-full bg-primary hover:bg-primary/90 btn-shine">
                  Voir l&apos;offre entreprise
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Particuliers */}
          <Card className="glass-card border-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Particuliers & cadeaux</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Prénom, message, motif... offrez un cadeau unique ou personnalisez vos textiles : bébé, naissance,
                anniversaire.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/particuliers">
                <Button className="w-full bg-primary hover:bg-primary/90 btn-shine">
                  Voir l&apos;offre particuliers
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
