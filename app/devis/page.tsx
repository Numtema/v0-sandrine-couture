"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { MessageCircle, Building2, User, CheckCircle } from "lucide-react"

export default function DevisPage() {
  const [formType, setFormType] = useState<"entreprise" | "particulier">("entreprise")
  const [formData, setFormData] = useState({
    // Entreprise fields
    companyName: "",
    contactName: "",
    quantity: "",
    article: "",
    logo: "",
    placement: "",
    options: "",
    // Particulier fields
    personalName: "",
    articleParticulier: "",
    text: "",
    motif: "",
    occasion: "",
    // Common fields
    phone: "",
    deadline: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let message = ""

    if (formType === "entreprise") {
      message = `Bonjour, je souhaite un devis pour :

*Entreprise* : ${formData.companyName}
*Contact* : ${formData.contactName}
*Quantité* : ${formData.quantity}
*Article(s)* : ${formData.article}
*Logo* : ${formData.logo}
*Placement* : ${formData.placement}
${formData.options ? `*Options* : ${formData.options}` : ""}
*Téléphone* : ${formData.phone}
${formData.deadline ? `*Délai souhaité* : ${formData.deadline}` : ""}

Merci !`
    } else {
      message = `Bonjour, je souhaite un devis pour une broderie personnalisée :

*Nom* : ${formData.personalName}
*Article* : ${formData.articleParticulier}
*Texte/Prénom* : ${formData.text}
${formData.motif ? `*Motif* : ${formData.motif}` : ""}
*Occasion* : ${formData.occasion}
*Téléphone* : ${formData.phone}
${formData.deadline ? `*Date souhaitée* : ${formData.deadline}` : ""}

Merci !`
    }

    const whatsappURL = `https://wa.me/33629492213?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Demander un devis</h1>
            <p className="text-xl text-gray-600 mb-8">
              Remplissez le formulaire → WhatsApp s'ouvre avec votre demande déjà structurée
            </p>

            <div className="flex gap-4 justify-center mb-8">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Réponse rapide</span>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Sans engagement</span>
            </div>
          </div>

          {/* Form Type Selector */}
          <div className="flex gap-4 mb-8 fade-in-up" style={{ animationDelay: "100ms" }}>
            <button
              onClick={() => setFormType("entreprise")}
              className={`flex-1 py-6 px-8 rounded-2xl font-semibold transition-all ${
                formType === "entreprise"
                  ? "bg-black text-white shadow-xl scale-105"
                  : "bg-white text-black border-2 border-gray-200 hover:border-black"
              }`}
            >
              <Building2 className="w-6 h-6 mx-auto mb-2" />
              Entreprise
            </button>
            <button
              onClick={() => setFormType("particulier")}
              className={`flex-1 py-6 px-8 rounded-2xl font-semibold transition-all ${
                formType === "particulier"
                  ? "bg-black text-white shadow-xl scale-105"
                  : "bg-white text-black border-2 border-gray-200 hover:border-black"
              }`}
            >
              <User className="w-6 h-6 mx-auto mb-2" />
              Particulier
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {formType === "entreprise" ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Nom de l'entreprise *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Restaurant Le Gourmet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Nom du contact *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Marie Dupont"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Quantité *</label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="10 pièces"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Article(s) *</label>
                    <input
                      type="text"
                      required
                      value={formData.article}
                      onChange={(e) => setFormData({ ...formData, article: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Polos, Tabliers..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Logo / Texte à broder *</label>
                  <textarea
                    required
                    value={formData.logo}
                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    rows={3}
                    placeholder="Décrivez votre logo ou joignez-le par WhatsApp après"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Placement souhaité *</label>
                  <select
                    required
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                  >
                    <option value="">Choisissez...</option>
                    <option value="Logo coeur">Logo coeur (classique)</option>
                    <option value="Manche">Manche</option>
                    <option value="Nuque">Nuque</option>
                    <option value="Grand dos">Grand dos</option>
                    <option value="Je ne sais pas">Je ne sais pas encore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Options supplémentaires (facultatif)
                  </label>
                  <input
                    type="text"
                    value={formData.options}
                    onChange={(e) => setFormData({ ...formData, options: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Prénom, patch velcro, casquettes..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Délai souhaité (facultatif)</label>
                    <input
                      type="text"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Dans 2 semaines"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Votre nom *</label>
                  <input
                    type="text"
                    required
                    value={formData.personalName}
                    onChange={(e) => setFormData({ ...formData, personalName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Sophie Martin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Article à personnaliser *</label>
                  <input
                    type="text"
                    required
                    value={formData.articleParticulier}
                    onChange={(e) => setFormData({ ...formData, articleParticulier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Peignoir, serviette, gigoteuse, sweat..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Texte / Prénom à broder *</label>
                  <input
                    type="text"
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Emma, Meilleure Maman..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Motif souhaité (facultatif)</label>
                  <input
                    type="text"
                    value={formData.motif}
                    onChange={(e) => setFormData({ ...formData, motif: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                    placeholder="Coeur, étoile, fleur..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Occasion *</label>
                  <select
                    required
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                  >
                    <option value="">Choisissez...</option>
                    <option value="Naissance">Naissance</option>
                    <option value="Anniversaire">Anniversaire</option>
                    <option value="Mariage">Mariage</option>
                    <option value="EVJF/EVG">EVJF/EVG</option>
                    <option value="Cadeau">Cadeau</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Date souhaitée (facultatif)</label>
                    <input
                      type="text"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                      placeholder="15 février"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-3 btn-shine"
            >
              <MessageCircle className="w-6 h-6" />
              Envoyer le devis par WhatsApp
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Votre demande est envoyée sur WhatsApp sous forme de message complet.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
