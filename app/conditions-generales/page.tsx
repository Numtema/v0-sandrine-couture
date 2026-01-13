import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_DATA } from "@/lib/contact-data"

export const metadata = {
  title: "Conditions Générales de Vente | By Sandrine Couture",
  description: "Conditions générales de vente - By Sandrine Couture broderie professionnelle",
}

export default function ConditionsGeneralesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12">
            <h1 className="section-title mb-8">Conditions Générales de Vente</h1>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 1 - Devis et Commandes</h2>
                <p>
                  Toute commande implique l'acceptation sans réserve des présentes conditions générales de vente. Un
                  devis détaillé est fourni avant toute production. Le devis est valable 30 jours à compter de sa date
                  d'émission.
                </p>
                <p className="mt-4">
                  La commande est considérée comme ferme et définitive après validation écrite du devis par le client
                  (email, WhatsApp ou signature) et réception de l'acompte pour les entreprises.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 2 - Prix</h2>
                <p>
                  Les prix sont indiqués en euros TTC (toutes taxes comprises) pour les particuliers. Pour les
                  entreprises assujetties à la TVA, les prix HT sont précisés sur les devis et factures avec application
                  de la TVA en vigueur.
                </p>
                <p className="mt-4">Les prix incluent la broderie et peuvent varier selon plusieurs facteurs :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Complexité du motif ou logo</li>
                  <li>Nombre de couleurs de fils</li>
                  <li>Nombre de pièces commandées (dégressif)</li>
                  <li>Type de textile fourni</li>
                  <li>Nombre et emplacement des placements de broderie</li>
                  <li>Techniques spéciales (broderie 3D, puff, métallique, etc.)</li>
                </ul>
                <p className="mt-4">
                  Les frais de livraison ne sont pas inclus dans les prix affichés et seront précisés sur le devis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 3 - Paiement</h2>
                <p>
                  <strong>Entreprises (B2B) :</strong> Un acompte de 50% est demandé à la commande pour lancer la
                  production. Le solde est payable à la livraison ou selon les conditions convenues (30 jours net pour
                  les clients réguliers après accord). Moyens acceptés : virement bancaire, chèque.
                </p>
                <p className="mt-4">
                  <strong>Particuliers (B2C) :</strong> Paiement intégral avant expédition de la commande. Moyens
                  acceptés : virement bancaire, PayPal, espèces (remise en main propre uniquement).
                </p>
                <p className="mt-4">
                  En cas de retard de paiement, des pénalités de retard égales à 3 fois le taux d'intérêt légal seront
                  appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 4 - Délais de Production</h2>
                <p>
                  Les délais de production sont indiqués sur le devis à titre indicatif et courent à partir de la
                  validation du mockup (aperçu visuel) et réception de l'acompte pour les entreprises.
                </p>
                <p className="mt-4">
                  <strong>Délais indicatifs :</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Entreprises : 10-14 jours ouvrés (commandes standard)</li>
                  <li>Particuliers : 5-7 jours ouvrés</li>
                  <li>Commandes urgentes : nous consulter (supplément possible)</li>
                </ul>
                <p className="mt-4">
                  Les délais peuvent varier en période de forte activité (rentrée scolaire, fin d'année, périodes
                  festives). Un délai actualisé vous sera communiqué lors de la commande. By Sandrine Couture s'efforce
                  de respecter les délais annoncés mais ne pourra être tenue responsable en cas de retard indépendant de
                  sa volonté.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 5 - Livraison</h2>
                <p>
                  La livraison est assurée en France métropolitaine par transporteur avec numéro de suivi. Les frais de
                  livraison sont précisés sur le devis et varient selon le poids, le volume et la destination.
                </p>
                <p className="mt-4">
                  <strong>Options de livraison :</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Colissimo suivi (France métropolitaine)</li>
                  <li>Chronopost express (sur demande, supplément)</li>
                  <li>
                    Remise en main propre possible sur rendez-vous (secteur {CONTACT_DATA.address.city},{" "}
                    {CONTACT_DATA.address.region})
                  </li>
                </ul>
                <p className="mt-4">
                  Le client est tenu de vérifier l'état du colis à réception. Toute anomalie (colis endommagé, articles
                  manquants) doit être signalée immédiatement au transporteur et à By Sandrine Couture dans les 48h
                  suivant la réception.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 6 - Retours et Annulations</h2>
                <p>
                  <strong>Produits personnalisés :</strong> Les articles personnalisés étant fabriqués sur mesure selon
                  vos spécifications, aucun retour ni remboursement ne pourra être accepté, conformément à l'article
                  L221-28 du Code de la consommation, sauf en cas de défaut de fabrication avéré constaté dans les 7
                  jours suivant la réception.
                </p>
                <p className="mt-4">
                  <strong>Défaut de fabrication :</strong> En cas de défaut de fabrication (broderie défectueuse, fil
                  cassé, textile endommagé), contactez-nous dans les 7 jours avec photos à l'appui. Nous procéderons au
                  remplacement ou remboursement après analyse.
                </p>
                <p className="mt-4">
                  <strong>Annulation de commande :</strong> Les annulations de commande doivent intervenir{" "}
                  <strong>avant le début de la production</strong> (avant validation du mockup et numérisation du logo).
                  Passé ce délai, l'acompte versé ne pourra être remboursé.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 7 - Propriété Intellectuelle</h2>
                <p>
                  Le client garantit détenir tous les droits de propriété intellectuelle sur les logos, motifs, textes
                  et visuels fournis pour la broderie. By Sandrine Couture ne pourra être tenue responsable en cas de
                  contrefaçon, reproduction illicite ou violation de droits d'auteur liés aux éléments fournis par le
                  client.
                </p>
                <p className="mt-4">
                  Le client autorise By Sandrine Couture à photographier les réalisations à des fins de portfolio et de
                  communication (site web, réseaux sociaux), sauf mention contraire écrite de sa part.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 8 - Garanties et Responsabilité</h2>
                <p>
                  By Sandrine Couture garantit la conformité des produits brodés au devis validé. La responsabilité est
                  limitée au remplacement ou remboursement des articles défectueux, à l'exclusion de tout dommage
                  indirect.
                </p>
                <p className="mt-4">By Sandrine Couture ne pourra être tenue responsable :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>De la qualité des textiles fournis par le client (textile client)</li>
                  <li>Du rendu de la broderie si le logo fourni est de mauvaise qualité</li>
                  <li>Des variations de couleur inhérentes au processus de broderie</li>
                  <li>
                    Des événements de force majeure (incendie, inondation, panne de machine prolongée, grève, etc.)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 9 - Litiges et Médiation</h2>
                <p>
                  En cas de litige, une solution amiable sera recherchée en priorité par contact direct avec By Sandrine
                  Couture à l'adresse{" "}
                  <a href={`mailto:${CONTACT_DATA.email}`} className="text-primary hover:underline font-semibold">
                    {CONTACT_DATA.email}
                  </a>
                  .
                </p>
                <p className="mt-4">
                  À défaut d'accord amiable, et conformément aux articles L.612-1 et suivants du Code de la
                  consommation, le client a la possibilité de recourir gratuitement à un médiateur de la consommation en
                  vue de la résolution du litige.
                </p>
                <p className="mt-4">
                  En dernier recours, le litige sera soumis aux tribunaux compétents du lieu du siège social de By
                  Sandrine Couture ({CONTACT_DATA.address.region}).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 10 - Données Personnelles</h2>
                <p>
                  Les données personnelles collectées font l'objet d'un traitement informatique et sont utilisées
                  uniquement pour la gestion des commandes. Conformément au RGPD, vous disposez d'un droit d'accès, de
                  rectification et de suppression de vos données. Consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:underline font-semibold">
                    Politique de Confidentialité
                  </a>{" "}
                  pour plus de détails.
                </p>
              </section>

              <section className="border-t pt-6 mt-6">
                <p className="text-sm text-gray-500">
                  <strong>By Sandrine Couture</strong>
                  <br />
                  {CONTACT_DATA.address.full}
                  <br />
                  Email : {CONTACT_DATA.email}
                  <br />
                  Téléphone : {CONTACT_DATA.phoneFormatted}
                </p>
                <p className="mt-4 text-sm text-gray-500">Dernière mise à jour : Janvier 2025</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
