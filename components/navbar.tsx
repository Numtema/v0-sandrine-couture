"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-panel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="logo-circle">
              <Image
                src="/images/bysandrinecouture-logo.png"
                alt="By Sandrine Couture Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-xl font-bold text-black">By Sandrine Couture</p>
              <p className="text-xs text-gray-600">Broderie Premium</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-[#e91e63] font-medium transition-colors">
              Accueil
            </Link>

            {/* Dropdown Entreprises */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("entreprises")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#e91e63] font-medium transition-colors">
                Entreprises
                <ChevronDown size={16} />
              </button>
              {openDropdown === "entreprises" && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card p-4 space-y-2">
                  <div className="text-xs font-semibold text-gray-500 mb-2">SECTEURS</div>
                  <Link
                    href="/broderie-restaurant"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Restaurants
                  </Link>
                  <Link
                    href="/broderie-artisans-btp"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Artisans & BTP
                  </Link>
                  <Link
                    href="/broderie-boulangerie"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Boulangeries
                  </Link>
                  <Link
                    href="/broderie-hotel"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Hôtels
                  </Link>
                  <div className="text-xs font-semibold text-gray-500 mb-2 mt-3">PRODUITS</div>
                  <Link
                    href="/patch-velcro-brode"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Patchs Velcro
                  </Link>
                  <Link
                    href="/casquette-bonnet-brode"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                  >
                    Casquettes & Bonnets
                  </Link>
                  <div className="border-t border-pink-100 mt-3 pt-3">
                    <Link
                      href="/entreprises"
                      className="block px-3 py-2 text-sm font-semibold text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                    >
                      Voir toutes les offres →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/particuliers" className="text-gray-700 hover:text-[#e91e63] font-medium transition-colors">
              Particuliers
            </Link>

            <Link href="/realisations" className="text-gray-700 hover:text-[#e91e63] font-medium transition-colors">
              Réalisations
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-[#e91e63] font-medium transition-colors">
              Contact
            </Link>

            <Link href="/devis" className="btn-primary">
              Devis WhatsApp
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#e91e63] rounded-full hover:bg-pink-50 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-pink-100 max-h-[80vh] overflow-y-auto">
            <Link href="/devis" className="block btn-primary text-center mb-4" onClick={() => setIsMenuOpen(false)}>
              Devis WhatsApp
            </Link>

            <Link
              href="/"
              className="block py-2 px-4 text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>

            <Link
              href="/entreprises"
              className="block py-2 px-4 text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprises
            </Link>

            <div className="pl-4 space-y-1">
              <div className="text-xs font-semibold text-gray-500 px-4 py-1">Secteurs</div>
              <Link
                href="/broderie-restaurant"
                className="block py-2 px-4 text-sm text-gray-600 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurants
              </Link>
              <Link
                href="/broderie-artisans-btp"
                className="block py-2 px-4 text-sm text-gray-600 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Artisans & BTP
              </Link>
              <Link
                href="/broderie-boulangerie"
                className="block py-2 px-4 text-sm text-gray-600 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Boulangeries
              </Link>
            </div>

            <Link
              href="/particuliers"
              className="block py-2 px-4 text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Particuliers
            </Link>

            <Link
              href="/realisations"
              className="block py-2 px-4 text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Réalisations
            </Link>

            <Link
              href="/contact"
              className="block py-2 px-4 text-gray-700 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-pink-100 mt-4 pt-4">
              <Link
                href="/broderie-normandie"
                className="block py-2 px-4 text-sm text-gray-600 hover:text-[#e91e63] hover:bg-pink-50 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Normandie
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
