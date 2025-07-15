import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url("https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Über uns
          </h1>
          <p className="text-xl opacity-90">
            Ihr vertrauensvoller Partner für nachhaltige Energielösungen
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Smarter System - Ihr Experte für Zukunftstechnologien
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Als innovatives Unternehmen im Bereich erneuerbarer Energien und Smart Home Technologien 
                  haben wir uns darauf spezialisiert, unseren Kunden ganzheitliche Lösungen anzubieten, 
                  die sowohl umweltfreundlich als auch wirtschaftlich sinnvoll sind.
                </p>
                <p>
                  Unsere Expertise umfasst die Planung, Installation und Wartung von Photovoltaikanlagen, 
                  Energiespeichersystemen und intelligenten Haussteuerungen. Dabei setzen wir auf 
                  modernste Technologien und arbeiten ausschließlich mit renommierten Herstellern zusammen.
                </p>
                <p>
                  Von der ersten Beratung bis zur finalen Inbetriebnahme begleiten wir Sie persönlich 
                  und sorgen dafür, dass Ihr Projekt termingerecht und in höchster Qualität umgesetzt wird.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Unser Team bei der Arbeit"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualität</h3>
              <p className="text-gray-600">
                Höchste Standards bei Produkten, Installation und Service für langfristige Zufriedenheit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnerschaft</h3>
              <p className="text-gray-600">
                Langfristige Beziehungen zu unseren Kunden basierend auf Vertrauen und Transparenz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Neueste Technologien und innovative Lösungen für maximale Effizienz und Zukunftssicherheit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nachhaltigkeit</h3>
              <p className="text-gray-600">
                Beitrag zum Klimaschutz durch umweltfreundliche Energielösungen für kommende Generationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unser Expertenteam</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Erfahrene Fachkräfte mit Leidenschaft für nachhaltige Technologien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl mb-4">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Projektleitung</h3>
              </div>
              <p className="text-gray-600">
                Koordination aller Gewerke und termingerechte Umsetzung Ihrer Projekte
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl mb-4">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Montage-Teams</h3>
              </div>
              <p className="text-gray-600">
                Zertifizierte Installateure mit jahrelanger Erfahrung in der Branche
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl mb-4">
                <Target className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Kundenbetreuung</h3>
              </div>
              <p className="text-gray-600">
                Persönliche Ansprechpartner für Beratung, Service und Wartung
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;