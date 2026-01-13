import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quels types de textiles pouvez-vous broder ?",
    answer:
      "Je brode sur une large gamme de textiles : polos, sweats, vestes, tabliers, casquettes, peignoirs, serviettes, sacs, bavoirs, gigoteuses, et bien plus. Si vous avez un textile spécifique, contactez-moi pour vérifier la faisabilité.",
  },
  {
    question: "Quelle est la quantité minimale pour une commande entreprise ?",
    answer:
      "Pour les entreprises, la quantité minimale est de 10 pièces. Cela permet de garantir un tarif avantageux et une qualité optimale. Pour les particuliers, pas de minimum : même une seule pièce est brodée avec le même soin.",
  },
  {
    question: "Quels sont les délais de réalisation ?",
    answer:
      "Entreprises : comptez 10 à 14 jours après validation du devis. Particuliers : environ 7 jours pour les créations simples. Les délais peuvent varier selon la complexité et la quantité. Vous recevez un délai précis lors du devis.",
  },
  {
    question: "Comment se déroule la commande ?",
    answer:
      "Contactez-moi via WhatsApp ou le formulaire avec votre projet. Je vous envoie un mockup et un devis sous 24h. Après validation et acompte (entreprises), je lance la production. Vous recevez votre commande par livraison suivie.",
  },
  {
    question: "Proposez-vous la création de logo ou motifs ?",
    answer:
      "Je peux numériser votre logo existant pour la broderie. Si vous n'avez pas de logo, je peux vous conseiller des prestataires de design graphique. Pour les particuliers, je propose une sélection de motifs et polices pour personnaliser vos textiles.",
  },
  {
    question: "Livrez-vous partout en France ?",
    answer:
      "Oui, je livre dans toute la France métropolitaine via transporteur avec suivi. Basée à Robertot (76560) en Normandie, je peux aussi organiser une remise en main propre locale sur rendez-vous.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Pour les entreprises : virement bancaire ou chèque, avec facture professionnelle. Pour les particuliers : virement, PayPal ou espèces (remise en main propre). Un acompte de 50% est demandé pour les commandes entreprises.",
  },
  {
    question: "Puis-je voir des exemples de réalisations ?",
    answer:
      "Bien sûr ! Consultez mon Instagram @bysandrinecouture pour découvrir mes dernières créations. Vous y trouverez des exemples de broderies entreprises (uniformes, logos) et particuliers (cadeaux, personnalisations).",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-pink-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600">Tout ce que vous devez savoir sur nos services de broderie</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 rounded-2xl border-0">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
