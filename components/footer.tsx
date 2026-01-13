import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">By Sandrine Couture</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Broderie & personnalisation textile</p>
            <div className="flex items-start gap-2 mt-4 text-sm">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">Robertot (76560) - Livraison possible</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacts</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/33629492213"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                06 29 49 22 13
              </a>
              <a
                href="mailto:bysandrinecouture@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                bysandrinecouture@gmail.com
              </a>
              <a
                href="tel:+33629492213"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations légales</h3>
            <div className="space-y-2">
              <Link
                href="/mentions-legales"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/conditions-generales"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions générales
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} By Sandrine Couture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
