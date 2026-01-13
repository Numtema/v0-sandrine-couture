import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_DATA } from "@/lib/contact-data"

export const metadata = {
  title: "Politique de Confidentialité | By Sandrine Couture",
  description: "Politique de confidentialité et protection des données RGPD - By Sandrine Couture",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12">
            <h1 className="section-title mb-8">Politique de Confidentialité</h1>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecte des Données</h2>
                <p>
                  By Sandrine Couture collecte uniquement les données personnelles que vous nous fournissez
                  volontairement lors de vos demandes de devis ou commandes : nom, prénom, email, téléphone, adresse de
                  livraison.
                </p>
                <p className="mt-4">
                  <strong>Données collectées via WhatsApp :</strong> Lorsque vous nous contactez via WhatsApp, les
                  informations échangées sont régies par la politique de confidentialité de WhatsApp (Meta). Nous
                  utilisons uniquement ces données pour traiter votre demande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Utilisation des Données</h2>
                <p>Vos données sont utilisées exclusivement pour :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Traiter vos commandes et devis</li>
                  <li>Vous contacter concernant vos projets de broderie</li>
                  <li>Assurer le suivi de livraison</li>
                  <li>Émettre les factures (entreprises)</li>
                  <li>Améliorer la qualité de nos services</li>
                </ul>
                <p className="mt-4">
                  <strong>Aucune transmission à des tiers :</strong> Vos données ne sont jamais vendues, louées ou
                  transmises à des tiers sans votre consentement explicite, sauf obligation légale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des Données (RGPD)</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) du 25 mai 2018, vous disposez
                  des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Droit d'accès :</strong> Vous pouvez demander une copie de toutes vos données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> Vous pouvez corriger vos informations inexactes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données
                  </li>
                  <li>
                    <strong>Droit de portabilité :</strong> Vous pouvez récupérer vos données dans un format exploitable
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données
                  </li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a href={`mailto:${CONTACT_DATA.email}`} className="text-primary hover:underline font-semibold">
                    {CONTACT_DATA.email}
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conservation des Données</h2>
                <p>
                  Vos données sont conservées pendant la durée nécessaire à la réalisation de votre commande, plus la
                  durée légale de conservation des documents comptables (10 ans pour les factures selon le Code de
                  commerce). Les données marketing (si consentement) sont conservées 3 ans maximum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies et Analytics</h2>
                <p>
                  Ce site utilise des cookies analytics (Vercel Analytics) pour améliorer l'expérience utilisateur et
                  comprendre comment vous interagissez avec notre site. Ces cookies collectent des données anonymisées
                  uniquement :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                  <li>Source de trafic (comment vous avez trouvé notre site)</li>
                  <li>Type d'appareil (mobile, tablette, ordinateur)</li>
                </ul>
                <p className="mt-4">
                  <strong>Aucune donnée personnelle identifiable n'est collectée.</strong> Vous pouvez désactiver les
                  cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du
                  site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité</h2>
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour
                  protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction. Le site
                  utilise le protocole HTTPS pour sécuriser les échanges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
                <p>
                  By Sandrine Couture se réserve le droit de modifier cette politique de confidentialité à tout moment.
                  Toute modification sera publiée sur cette page avec une date de mise à jour.
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
