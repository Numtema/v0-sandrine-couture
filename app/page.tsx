import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import WhyUsSection from "@/components/why-us-section"
import PacksTeaserSection from "@/components/packs-teaser-section"
import AboutSection from "@/components/about-section"
import FAQSection from "@/components/faq-section"
import LocalSEOSection from "@/components/local-seo-section"
import ContactSection from "@/components/contact-section"

export const metadata = {
  title: "Broderie & personnalisation textile | By Sandrine Couture",
  description:
    "Broderie entreprise et particuliers à Robertot (76560). Polos, tabliers, sweats, casquettes, patchs, prénoms. Devis WhatsApp rapide, livraison Normandie & France.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <PacksTeaserSection />
      <AboutSection />
      <FAQSection />
      <LocalSEOSection />
      <ContactSection />
    </main>
  )
}
