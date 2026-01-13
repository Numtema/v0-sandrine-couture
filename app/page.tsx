import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import AboutSection from "@/components/about-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
