"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/10 hover:ring-primary/30 transition-all">
              <Image src="/images/bysandrinecouture-logo.png" alt="By Sandrine Couture" fill className="object-cover" />
            </div>
            <span className="font-semibold text-lg text-foreground hidden sm:block">By Sandrine Couture</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm">
              Accueil
            </Link>
            <Link
              href="/entreprises"
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              Entreprises
            </Link>
            <Link
              href="/particuliers"
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              Particuliers
            </Link>
            <Link
              href="/realisations"
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              Réalisations
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button with helper text */}
          <div className="hidden lg:flex flex-col items-end gap-0.5">
            <Link href="/devis">
              <Button className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold shadow-md hover:shadow-lg transition-all">
                Devis WhatsApp
              </Button>
            </Link>
            <span className="text-[10px] text-muted-foreground">Réponse rapide</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border/50 bg-white/95 backdrop-blur-lg">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/entreprises"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entreprises
            </Link>
            <Link
              href="/particuliers"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Particuliers
            </Link>
            <Link
              href="/realisations"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/devis" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold">
                Devis WhatsApp
              </Button>
              <span className="block text-center text-xs text-muted-foreground mt-1">Réponse rapide</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
