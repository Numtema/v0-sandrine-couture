import type React from "react"
import Image from "next/image"
import { Sparkles, Tag, Type, CircleDot, Shirt } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: "Broderie logo (cœur / manche / dos)",
    },
    {
      icon: Tag,
      title: "Patch brodé (cousu ou velcro)",
    },
    {
      icon: Type,
      title: "Broderie prénom / texte (cadeaux, bébé...)",
    },
    {
      icon: CircleDot,
      title: "Casquettes & bonnets brodés",
    },
    {
      icon: Shirt,
      title: "Options premium : nuque, grand dos, broderie 3D (sur demande)",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="floating-bubble w-72 h-72 top-20 right-10 opacity-20"
          style={{ "--duration": "22s", "--x": "-90px", "--y": "70px" } as React.CSSProperties}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ce que je réalise</h2>
          <p className="text-lg text-muted-foreground">
            Du simple prénom au logo complet, toujours avec une finition propre.
          </p>
        </div>

        {/* Grid with services */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-8 items-center">
          {/* Services list */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card-enhanced animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground leading-relaxed">{service.title}</h3>
              </div>
            ))}
          </div>

          <div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl glass-card animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/embroidered-polo-shirts-with-company-logos-profe.jpg"
              alt="Polos brodés avec logos entreprise - Travail professionnel"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className="max-w-3xl mx-auto glass-panel rounded-lg p-6 text-center animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-foreground">
            <span className="font-semibold">Note professionnelle :</span> Votre logo est optimisé avant broderie pour un
            rendu propre et lisible.
          </p>
        </div>
      </div>
    </section>
  )
}
