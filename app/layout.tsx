import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "By Sandrine Couture - Broderie Professionnelle & Personnalisée",
  description:
    "Broderie premium pour entreprises et particuliers. Uniformes brodés, cadeaux personnalisés, textiles sur mesure. Robertot, Normandie - Livraison France.",
  keywords:
    "broderie, broderie normandie, uniformes brodés, personnalisation textile, broderie entreprise, cadeaux personnalisés, Robertot, Seine-Maritime",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
