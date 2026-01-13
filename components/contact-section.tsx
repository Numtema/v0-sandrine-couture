import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Contactez-Moi</h2>
          <p className="text-lg text-gray-600">Prêt à démarrer votre projet ? Je réponds sous 24h</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Parlons de Votre Projet</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Que vous soyez une entreprise cherchant des uniformes brodés professionnels ou un particulier souhaitant
                un cadeau personnalisé unique, je suis là pour vous accompagner.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/33XXXXXXXXX"
                className="flex items-start gap-4 p-6 glass-card rounded-2xl hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp (Recommandé)</h4>
                  <p className="text-sm text-gray-600">+33 X XX XX XX XX</p>
                  <p className="text-xs text-gray-500 mt-1">Réponse rapide & devis instantané</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@sandrinecouture.fr" className="text-sm text-gray-600 hover:text-primary">
                    contact@sandrinecouture.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <a href="tel:+33XXXXXXXXX" className="text-sm text-gray-600 hover:text-primary">
                    +33 X XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-sm text-gray-600">Robertot, 76560</p>
                  <p className="text-sm text-gray-600">Seine-Maritime, Normandie</p>
                </div>
              </div>

              <a
                href="https://instagram.com/bysandrinecouture"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 glass-card rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                  <p className="text-sm text-gray-600">@bysandrinecouture</p>
                  <p className="text-xs text-gray-500 mt-1">Suivez mes créations</p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:pl-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Demande de Devis Rapide</h3>

              <div className="space-y-6 mb-8">
                <div className="p-6 bg-pink-50 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Pour Entreprises</h4>
                  <p className="text-sm text-gray-600 mb-4">Uniformes brodés, séries, facture professionnelle</p>
                  <a
                    href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Sandrine%2C%20je%20souhaite%20un%20devis%20pour%20uniformes%20brod%C3%A9s%20%3A%0A-%20Type%20d%27entreprise%20%3A%0A-%20Articles%20souhait%C3%A9s%20%3A%0A-%20Quantit%C3%A9%20%3A%0A-%20D%C3%A9lai%20%3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Devis Entreprise
                  </a>
                </div>

                <div className="p-6 bg-pink-50 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Pour Particuliers</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Cadeaux personnalisés, broderie prénom, créations uniques
                  </p>
                  <a
                    href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Sandrine%2C%20je%20souhaite%20une%20personnalisation%20%3A%0A-%20Article%20%3A%0A-%20Pr%C3%A9nom%2Ftexte%20%3A%0A-%20Occasion%20%3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block"
                  >
                    Commande Particulier
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Réponse garantie sous 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
