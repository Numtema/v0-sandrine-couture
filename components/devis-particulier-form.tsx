"use client"

import type React from "react"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/contact-data"

export default function DevisParticulierForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    categorie: "",
    article: "",
    autreArticle: "",
    personnalisation: "",
    texte: "",
    couleurs: "",
    quantite: "1",
    occasion: "",
    delai: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const articleTexte = formData.article === "Autre" ? formData.autreArticle : formData.article

    const message = `💝 DEVIS PARTICULIER - By Sandrine Couture

👤 INFORMATIONS CLIENT
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Ville: ${formData.ville}

🎁 DÉTAILS DU PROJET
Catégorie: ${formData.categorie}
Article: ${articleTexte}
Type personnalisation: ${formData.personnalisation}
Texte à broder: ${formData.texte}
Couleurs souhaitées: ${formData.couleurs || "À définir"}
Quantité: ${formData.quantite}
Occasion: ${formData.occasion}
Délai souhaité: ${formData.delai}

💬 MESSAGE
${formData.message || "Aucun message supplémentaire"}

---
Demande envoyée depuis bysandrinecouture.com`

    window.open(getWhatsAppUrl(message), "_blank")
  }

  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="text-[#e91e63]" size={40} />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-2">Devis Particulier</h1>
        <p className="text-gray-600">Créations personnalisées uniques - Réponse sous 24h</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Vos Coordonnées</h3>

          <div>
            <label className="block text-sm font-medium mb-2">
              Nom et Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Prénom Nom"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
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
                placeholder="email@exemple.fr"
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
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.ville}
              onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Votre ville"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Votre Projet</h3>

          <div>
            <label className="block text-sm font-medium mb-2">
              Catégorie <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.categorie}
              onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Naissance / Bébé">Naissance / Bébé</option>
              <option value="Anniversaire">Anniversaire</option>
              <option value="Mariage / EVJF">Mariage / EVJF</option>
              <option value="Cadeau Entreprise">Cadeau Entreprise</option>
              <option value="Autre occasion">Autre occasion</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Article souhaité <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.article}
              onChange={(e) => setFormData({ ...formData, article: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Peignoir">Peignoir</option>
              <option value="Serviette">Serviette</option>
              <option value="Bavoir">Bavoir</option>
              <option value="Couverture bébé">Couverture bébé</option>
              <option value="Sac / Trousse">Sac / Trousse</option>
              <option value="T-shirt / Polo">T-shirt / Polo</option>
              <option value="Sweat">Sweat</option>
              <option value="Casquette">Casquette</option>
              <option value="Autre">Autre</option>
            </select>
            {formData.article === "Autre" && (
              <input
                type="text"
                required
                value={formData.autreArticle}
                onChange={(e) => setFormData({ ...formData, autreArticle: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all mt-3"
                placeholder="Précisez l'article..."
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Type de personnalisation <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.personnalisation}
              onChange={(e) => setFormData({ ...formData, personnalisation: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Prénom seul">Prénom seul</option>
              <option value="Prénom + Date">Prénom + Date</option>
              <option value="Initiales">Initiales</option>
              <option value="Message personnalisé">Message personnalisé</option>
              <option value="Logo / Motif">Logo / Motif</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Texte à broder <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.texte}
              onChange={(e) => setFormData({ ...formData, texte: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Ex: Emma, né le 12/05/2024"
            />
            <p className="text-xs text-gray-500 mt-1">Orthographe exacte SVP (majuscules, accents...)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Couleurs souhaitées</label>
              <input
                type="text"
                value={formData.couleurs}
                onChange={(e) => setFormData({ ...formData, couleurs: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
                placeholder="Ex: Rose et or"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quantité <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.quantite}
                onChange={(e) => setFormData({ ...formData, quantite: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Occasion <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Ex: Naissance, anniversaire 30 ans, cadeau Noël..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Date souhaitée <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.delai}
              onChange={(e) => setFormData({ ...formData, delai: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
            >
              <option value="">Sélectionnez...</option>
              <option value="Avant le (préciser dans message)">Date précise (préciser dans message)</option>
              <option value="Standard (~7 jours)">Standard (~7 jours)</option>
              <option value="Urgent (3-5 jours)">Urgent (3-5 jours)</option>
              <option value="Pas de date fixe">Pas de date fixe</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message complémentaire</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:ring-2 focus:ring-[#e91e63]/20 outline-none transition-all"
              placeholder="Détails supplémentaires, inspiration, questions..."
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
