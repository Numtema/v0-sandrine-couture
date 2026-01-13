import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SegmentationSection } from "@/components/home/segmentation-section"
import { ServicesSection } from "@/components/home/services-section"
import { ReassuranceSection } from "@/components/home/reassurance-section"
import { ProcessSection } from "@/components/home/process-section"
import { PacksSection } from "@/components/home/packs-section"
import { RealisationsSection } from "@/components/home/realisations-section"
import { LocalisationSection } from "@/components/home/localisation-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SegmentationSection />
        <ServicesSection />
        <ReassuranceSection />
        <ProcessSection />
        <PacksSection />
        <RealisationsSection />
        <LocalisationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
