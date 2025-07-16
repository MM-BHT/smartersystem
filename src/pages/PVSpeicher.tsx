import React from 'react';
import { Sun, Battery, Zap, TrendingUp, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PVSpeicher: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url("https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Photovoltaik & Speicher
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Beratung, Planung, Installation & Anmeldung - alles aus einer Hand und in wenigen Wochen installiert
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <span>Unverbindliche Beratung sichern →</span>
          </Link>
        </div>
      </section>

      {/* Technical Details */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Unsere Leistungen im Detail
      </h2>
    </div>

    {/* Erster Abschnitt: Bild links, Text rechts */}
    <div className="lg:flex lg:items-center lg:gap-12 mb-16">
      <img 
        src="/images/home_3.png"
        alt="Photovoltaik Installation"
        className="rounded-xl shadow-lg w-full lg:w-1/2 mb-8 lg:mb-0"
      />
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Komplettservice Photovoltaik
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Kostenlose Erstberatung und Potentialanalyse vor Ort</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>3D-Planung und Ertragsberechnung für optimale Auslegung</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Komplette Anmeldung beim Netzbetreiber und der Bundesnetzagentur</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Installation durch zertifizierte Elektrofachkräfte</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Inbetriebnahme und Einweisung in das System</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Zweiter Abschnitt: Text links, Bild rechts */}
    <div className="lg:flex lg:items-center lg:gap-12 lg:flex-row-reverse">
      <img 
        src="/images/pv_2.png"
        alt="Speicher Installation"
        className="rounded-xl shadow-lg w-full lg:w-1/2 mb-8 lg:mb-0"
      />
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Intelligente Speicherlösungen
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Hochleistungs-Lithium-Batterien mit 10+ Jahren Garantie</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Modulares System - erweiterbar je nach Bedarf</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Notstromfunktion für kritische Verbraucher</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>App-Steuerung für Monitoring und Optimierung</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Automatische Firmware-Updates und Remote-Wartung</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* Benefits Section */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">PV Vorteile im Überblick</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <Sun className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strom vom Dach - auch bei Wolken</h3>
              <p className="opacity-90">
                Selbst an bewölkten Tagen liefert Ihre PV-Anlage verlässlich Energie. 
                Moderne Solarmodule nutzen diffuses Licht effizient. So gewinnen Sie auch ohne strahlende Sonne saubere Energie.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schatten? Kein Problem.</h3>
              <p className="opacity-90">
                Intelligente Verschaltungs-Erkennung schützt vor Energieverlust. 
                Modulweise Abschattung optimiert den Gesamtertrag. So bleibt Ihre Anlage leistungsstark - auch bei Laub oder Teileverschattung.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Battery className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unabhängig dank Speicher & Inselmodus</h3>
              <p className="opacity-90">
                Ihre Batterie speichert den Solarstrom - für Tag und Nacht. 
                Mit Inselmodus sind Sie auch bei Stromausfall versorgt. Erleben Sie echte Autarkie - ganz ohne Netzabhängigkeit.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <TrendingUp className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Warmwasser aus Sonnenkraft</h3>
              <p className="opacity-90">
                Ist die Batterie voll, fließt der Stromüberschuss zu einem Heizstab in einem Warmwasserspeicher. So wird Ihr Wasser mit 
                Sonnenenergie erwärmt. Maximale Sicherheit, maximale Freiheit.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Zap className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart gesteuert - Energie clever nutzen</h3>
              <p className="opacity-90">
                Mit Smart-Home-Integration steuern Sie Ihre Verbraucher automatisch. Waschmaschine, Boiler oder sogar Ihre Geräte 
                - alles läuft der Stromverbrauch, wenn die Sonne scheint.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bereit für Ihre eigene Solaranlage?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lassen Sie sich kostenlos beraten und erfahren Sie, wie viel Sie mit einer eigenen PV-Anlage sparen können.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Jetzt kostenlos beraten lassen</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PVSpeicher;