import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_DATA } from "@/lib/contact-data"

export const metadata = {
  title: "Mentions Légales | By Sandrine Couture",
  description: "Mentions légales du site By Sandrine Couture - Broderie professionnelle en Normandie",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12">
            <h1 className="section-title mb-8">Mentions Légales</h1>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du Site</h2>
                <p>
                  <strong>By Sandrine Couture</strong>
                  <br />
                  Auto-entreprise
                  <br />
                  {CONTACT_DATA.address.city}, {CONTACT_DATA.address.postalCode}
                  <br />
                  {CONTACT_DATA.address.region}, France
                </p>
                <p className="mt-4">
                  Email :{" "}
                  <a href={`mailto:${CONTACT_DATA.email}`} className="text-primary hover:underline">
                    {CONTACT_DATA.email}
                  </a>
                  <br />
                  Téléphone :{" "}
                  <a href={`tel:${CONTACT_DATA.phone}`} className="text-primary hover:underline">
                    {CONTACT_DATA.phoneFormatted}
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
                <p>
                  Ce site est hébergé par :<br />
                  <strong>Vercel Inc.</strong>
                  <br />
                  440 N Barranca Ave #4133
                  <br />
                  Covina, CA 91723
                  <br />
                  États-Unis
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété Intellectuelle</h2>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
                  propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                  téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mt-4">
                  Les logos et marques des clients présentés sur ce site appartiennent à leurs propriétaires respectifs
                  et sont utilisés uniquement à titre d'exemple de nos réalisations avec leur autorisation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible. Toutefois, By Sandrine
                  Couture ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise
                  à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
                  informations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens Hypertextes</h2>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de By Sandrine
                  Couture.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
