import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, Facebook } from "lucide-react"
import { CONTACT_DATA } from "@/lib/contact-data"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 border-2 border-pink-500/30">
                <Image
                  src="/images/bysandrinecouture-logo.png"
                  alt="By Sandrine Couture"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">By Sandrine Couture</p>
                <p className="text-xs text-gray-400">Broderie Premium</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Broderie professionnelle pour entreprises et particuliers. {CONTACT_DATA.address.city}, Normandie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/entreprises" className="hover:text-primary transition-colors">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link href="/particuliers" className="hover:text-primary transition-colors">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-primary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/devis" className="hover:text-primary transition-colors">
                  Devis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Secteurs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/broderie-restaurant" className="hover:text-primary transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/broderie-artisans-btp" className="hover:text-primary transition-colors">
                  Artisans & BTP
                </Link>
              </li>
              <li>
                <Link href="/broderie-normandie" className="hover:text-primary transition-colors">
                  Normandie
                </Link>
              </li>
              <li>
                <Link href="/patch-velcro-brode" className="hover:text-primary transition-colors">
                  Patchs Velcro
                </Link>
              </li>
              <li>
                <Link href="/casquette-bonnet-brode" className="hover:text-primary transition-colors">
                  Casquettes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${CONTACT_DATA.phone}`} className="hover:text-primary transition-colors">
                  {CONTACT_DATA.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_DATA.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <a
                  href={CONTACT_DATA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @bysandrinecouture
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-primary" />
                <a
                  href={CONTACT_DATA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 By Sandrine Couture. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="/conditions-generales" className="hover:text-primary transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
