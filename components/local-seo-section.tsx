import { MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const localLinks = [
  {
    label: "Broderie Normandie",
    href: "/broderie-normandie",
    image: "/normandy-embroidery-shop-exterior-professional-brod.jpg",
  },
  {
    label: "Broderie Seine-Maritime (76)",
    href: "/broderie-seine-maritime-76",
    image: "/seine-maritime-embroidery-workshop-76-department-fr.jpg",
  },
  {
    label: "Broderie Rouen",
    href: "/broderie-rouen",
    image: "/rouen-city-embroidery-service-professional-textile.jpg",
  },
]

export default function LocalSEOSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card shadow-lg mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold text-gray-900">Normandie & France</span>
          </div>
          <h2 className="section-title mb-6">Normandie & France</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atelier basé à <strong>Robertot (76560)</strong>. Je travaille avec des clients en{" "}
            <strong>Normandie</strong> et je propose la <strong>livraison partout en France</strong>.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {localLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="glass-card p-4 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={link.image || "/placeholder.svg"}
                  alt={link.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
