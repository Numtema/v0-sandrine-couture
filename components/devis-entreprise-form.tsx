"use client"

import type React from "react"

import { useState } from "react"
import { Building2, MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/contact-data"

export default function DevisEntrepriseForm() {
  const [formData, setFormData] = useState({
    entreprise: "",
    contact: "",
    email: "",
    telephone: "",
    secteur: "",
    articles: [] as string[],
    autreArticle: "",
    quantite: "",
    placement: [] as string[],
    autrePlacement: "",
    delai: "",
    logo: false,
    ville: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const articlesTexte =
      formData.articles.length > 0
        ? formData.articles.join(", ") + (formData.autreArticle ? `, ${formData.autreArticle}` : "")
        : formData.autreArticle

    const placementTexte =
      formData.placement.length > 0
        ? formData.placement.join(", ") + (formData.autrePlacement ? `, ${formData.autrePlacement}` : "")
        : formData.autrePlacement

    const message = `🏢 DEVIS ENTREPRISE - By Sandrine Couture

📋 INFORMATIONS SOCIÉTÉ
Entreprise: ${formData.entreprise}
Contact: ${formData.contact}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Secteur: ${formData.secteur}
Ville: ${formData.ville}

🎯 DÉTAILS DU PROJET
Articles: ${articlesTexte}
Quantité: ${formData.quantite}
Placement broderie: ${placementTexte}
Délai souhaité: ${formData.delai}
Logo à broder: ${formData.logo ? "Oui (à envoyer)" : "Non"}

💬 MESSAGE
${formData.message || "Aucun message supplémentaire"}

---
Demande envoyée depuis bysandrinecouture.com`

    window.open(getWhatsAppUrl(message), "_blank")
  }

  const handleCheckboxChange = (field: "articles" | "placement", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="text-[#e91e63]" size={40} />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-2">Devis Entreprise</h1>
        <p className="text-gray-600">Uniformes brodés professionnels - Réponse sous 24h</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Informations Société</h3>

          <div>
            <label className="block text-sm font-medium mb-2">
              Nom de l'entreprise <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.entreprise}
              onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Ex: Restaurant Le Gourmet"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Personne de contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
                placeholder="Prénom et nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
                placeholder="06 XX XX XX XX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="contact@entreprise.fr"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Secteur d'activité <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.secteur}
                onChange={(e) => setFormData({ ...formData, secteur: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              >
                <option value="">Sélectionnez...</option>
                <option value="Restaurant / Hôtellerie">Restaurant / Hôtellerie</option>
                <option value="Artisanat / BTP">Artisanat / BTP</option>
                <option value="Commerce / Boutique">Commerce / Boutique</option>
                <option value="Sport / Association">Sport / Association</option>
                <option value="Événementiel">Événementiel</option>
                <option value="Santé / Bien-être">Santé / Bien-être</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Ville <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.ville}
                onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
                placeholder="Rouen, Le Havre..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Détails du Projet</h3>

          <div>
            <label className="block text-sm font-medium mb-3">
              Articles souhaités <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Polos", "T-shirts", "Sweats", "Vestes / Softshell", "Casquettes", "Sacs"].map((article) => (
                <label key={article} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.articles.includes(article)}
                    onChange={() => handleCheckboxChange("articles", article)}
                    className="w-4 h-4 text-[#e91e63] rounded focus:ring-[#e91e63]"
                  />
                  <span className="text-sm">{article}</span>
                </label>
              ))}
            </div>
            <input
              type="text"
              value={formData.autreArticle}
              onChange={(e) => setFormData({ ...formData, autreArticle: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all mt-3"
              placeholder="Autre article..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Quantité approximative <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.quantite}
              onChange={(e) => setFormData({ ...formData, quantite: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="10-20 pièces">10-20 pièces</option>
              <option value="20-50 pièces">20-50 pièces</option>
              <option value="50-100 pièces">50-100 pièces</option>
              <option value="100+ pièces">100+ pièces</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Placement broderie <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Cœur (poitrine gauche)", "Centre poitrine", "Manche", "Dos", "Nuque", "Côté"].map((placement) => (
                <label key={placement} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.placement.includes(placement)}
                    onChange={() => handleCheckboxChange("placement", placement)}
                    className="w-4 h-4 text-[#e91e63] rounded focus:ring-[#e91e63]"
                  />
                  <span className="text-sm">{placement}</span>
                </label>
              ))}
            </div>
            <input
              type="text"
              value={formData.autrePlacement}
              onChange={(e) => setFormData({ ...formData, autrePlacement: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all mt-3"
              placeholder="Autre placement..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Délai souhaité <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.delai}
              onChange={(e) => setFormData({ ...formData, delai: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Standard (10-14 jours)">Standard (10-14 jours)</option>
              <option value="Urgent (7 jours)">Urgent (7 jours)</option>
              <option value="Flexible (pas de date fixe)">Flexible (pas de date fixe)</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.checked })}
                className="w-4 h-4 text-[#e91e63] rounded focus:ring-[#e91e63]"
              />
              <span className="text-sm">J'ai un logo à faire broder (je l'enverrai ensuite)</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message complémentaire</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Détails supplémentaires, couleurs préférées, questions..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#e91e63] text-white rounded-full font-semibold hover:bg-[#c2185b] transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Envoyer sur WhatsApp
        </button>

        <p className="text-sm text-gray-500 text-center">
          En cliquant, vos informations seront envoyées sur WhatsApp. Réponse garantie sous 24h.
        </p>
      </form>
    </div>
  )
}
