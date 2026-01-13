import { Award, Clock, MapPin, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="section-title mb-6">By Sandrine Couture</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Passionnée de broderie et textile depuis toujours, je transforme vos idées en créations brodées
                d'exception. Basée à <strong className="text-gray-900">Robertot en Normandie</strong>, je mets mon
                expertise au service des entreprises et particuliers dans toute la France.
              </p>
              <p>
                Chaque projet est unique : de la broderie de logos professionnels pour uniformes d'entreprise aux
                créations personnalisées pour vos moments précieux (naissance, mariage, cadeaux). Je travaille avec des
                fils haute qualité et des techniques variées (broderie classique, 3D puff, patchs).
              </p>
              <p>
                <strong className="text-gray-900">Mon engagement :</strong> un service professionnel, des délais
                respectés, une qualité irréprochable et un accompagnement personnalisé pour chaque commande.
              </p>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">10+</p>
              <p className="text-sm text-gray-600">Ans d'expérience textile</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">24h</p>
              <p className="text-sm text-gray-600">Réponse devis garantie</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">Normandie</p>
              <p className="text-sm text-gray-600">Livraison France entière</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-sm text-gray-600">Qualité & satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
