export const CONTACT_DATA = {
  phone: "+33629492213",
  phoneFormatted: "+33 6 29 49 22 13",
  email: "bysandrinecouture@gmail.com",
  whatsapp: "https://wa.me/33629492213",
  instagram: "https://www.instagram.com/bysandrinecouture",
  facebook: "https://www.facebook.com/share/1HYmwmTqmc/",
  address: {
    city: "Robertot",
    postalCode: "76560",
    region: "Seine-Maritime, Normandie",
    full: "Robertot, 76560, Seine-Maritime, Normandie",
  },
}

// Garde l'ancien export pour compatibilité
export const contactData = CONTACT_DATA

// Templates WhatsApp
export function getWhatsAppUrl(message: string) {
  return `https://wa.me/33629492213?text=${encodeURIComponent(message)}`
}

export const whatsappTemplates = {
  entreprise: `Bonjour Sandrine 👋

Je souhaite un devis pour uniformes brodés :
- Type d'entreprise : [Restaurant / Artisan / Sport / Autre]
- Articles souhaités : [Polos / Sweats / Casquettes / Vestes]
- Quantité approximative : 
- Logo/texte : [à envoyer]
- Délai souhaité : 
- Ville/Livraison : 

Merci 😊`,

  particulier: `Bonjour Sandrine 👋

Je souhaite une personnalisation :
- Article : [Peignoir / Serviette / Sac / Vêtement]
- Type : [Naissance / Anniversaire / Cadeau]
- Personnalisation : [Prénom / Date / Texte]
- Quantité : 
- Délai souhaité : 

Merci 😊`,

  general: `Bonjour Sandrine 👋

J'aimerais en savoir plus sur vos services de broderie.

Merci 😊`,
}
