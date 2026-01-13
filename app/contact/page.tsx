import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { contactData, whatsappTemplates } from "@/lib/contact-data"
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact | By Sandrine Couture",
  description:
    "Contactez By Sandrine Couture pour vos projets de broderie. WhatsApp, téléphone, email. Robertot, Seine-Maritime, Normandie.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="section-title">Contactez-Moi</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prêt à démarrer votre projet ? Je réponds sous 24h. Choisissez le moyen de contact qui vous convient.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Moyens de Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp (Recommandé)</h3>
                      <p className="text-gray-600 text-sm mb-2">Réponse rapide & devis instantané</p>
                      <a href={contactData.whatsapp} className="text-[#e91e63] font-semibold hover:underline">
                        {contactData.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#e91e63]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-gray-600 text-sm mb-2">Appelez-moi directement</p>
                      <a href={`tel:${contactData.phone}`} className="text-[#e91e63] font-semibold hover:underline">
                        {contactData.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#e91e63]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 text-sm mb-2">Pour demandes détaillées</p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-[#e91e63] font-semibold hover:underline break-all"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#e91e63]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-600 text-sm">
                        {contactData.address.city}, {contactData.address.postalCode}
                        <br />
                        {contactData.address.region}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#e91e63]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires de Réponse</h3>
                      <p className="text-gray-600 text-sm">
                        Lundi - Samedi: 9h - 18h
                        <br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl font-serif font-bold mb-4">Réseaux Sociaux</h2>
                <p className="text-gray-600 text-sm mb-6">Suivez mes créations et actualités</p>

                <div className="space-y-4">
                  <a
                    href={contactData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition-transform"
                  >
                    <Instagram size={24} />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm opacity-90">@bysandrinecouture</p>
                    </div>
                  </a>

                  <a
                    href={contactData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl hover:scale-105 transition-transform"
                  >
                    <Facebook size={24} />
                    <div>
                      <p className="font-semibold">Facebook</p>
                      <p className="text-sm opacity-90">By Sandrine Couture</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Demander un Devis Rapide</h2>

                <div className="space-y-6">
                  <div className="glass-card p-6 bg-gradient-to-br from-pink-50 to-white">
                    <h3 className="font-semibold mb-3">Pour Entreprises</h3>
                    <p className="text-sm text-gray-600 mb-4">Uniformes brodés, séries professionnelles, facture.</p>
                    <WhatsAppButton message={whatsappTemplates.entreprise} className="w-full justify-center">
                      Devis Entreprise
                    </WhatsAppButton>
                  </div>

                  <div className="glass-card p-6 bg-gradient-to-br from-pink-50 to-white">
                    <h3 className="font-semibold mb-3">Pour Particuliers</h3>
                    <p className="text-sm text-gray-600 mb-4">Cadeaux personnalisés, broderie prénom.</p>
                    <WhatsAppButton message={whatsappTemplates.particulier} className="w-full justify-center">
                      Devis Particulier
                    </WhatsAppButton>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-pink-50 rounded-2xl">
                  <h3 className="font-semibold mb-2">Pourquoi WhatsApp?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Réponse en quelques heures</li>
                    <li>✓ Échange de photos facile</li>
                    <li>✓ Suivi de votre projet</li>
                    <li>✓ Communication simple et directe</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-4 mt-6">
                <Image
                  src="/embroidery-workshop-in-normandy-france--sewing-mac.jpg"
                  alt="Atelier By Sandrine Couture"
                  width={500}
                  height={300}
                  className="rounded-xl w-full"
                />
                <p className="text-center text-sm text-gray-600 mt-3">Atelier basé à Robertot, Seine-Maritime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
