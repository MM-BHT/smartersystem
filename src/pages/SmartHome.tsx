import React from 'react';
import { Home, Smartphone, Wifi, Lightbulb, Thermometer, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartHome: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url("https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Smart Home
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Die Zukunft für Ihr Zuhause beginnt jetzt - Wir integrieren intelligente Lösungen zur Licht-, Heizungs- und Sicherheitssteuerung!
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <span>Unverbindliche Beratung sichern →</span>
          </Link>
        </div>
      </section>

            {/* Smart Home Lösungen */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Smarte Lösungen für Ihr Zuhause
      </h2>
    </div>

    {/* Abschnitt 1: Allgemeine Smart-Home-Leistungen */}
    <div className="lg:flex lg:items-center lg:gap-12 mb-16">
      <img
        src="/images/smart_1.png"
        alt="Smart Home Steuerung"
        className="rounded-xl shadow-lg w-full lg:w-1/2 mb-8 lg:mb-0"
      />
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Smarte Steuerung für Ihr Zuhause
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Zentralisierte Steuerung von Licht, Heizung, Rollläden und Sicherheitssystemen</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Kompatibel mit gängigen Sprachassistenten wie Alexa, Google Assistant und Apple HomeKit</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Individuelle Szenarien für Alltag, Urlaub, Nachtmodus oder Energieeinsparung</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Automatisierte Abläufe auf Basis von Sensorik, Zeitplänen oder Nutzerverhalten</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Benutzerfreundliche App-Steuerung für Mobilgeräte und Tablets</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Abschnitt 2: PV- und Speicherintegration ins Smart Home */}
    <div className="lg:flex lg:items-center lg:gap-12 lg:flex-row-reverse">
      <img
        src="/images/smart_2.png"
        alt="PV Speicher Integration Smart Home"
        className="rounded-xl shadow-lg w-full lg:w-1/2 mb-8 lg:mb-0"
      />
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Energiemanagement mit PV- und Speicheranbindung
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Intelligente Steuerung von Energieflüssen zwischen PV-Anlage, Speicher und Verbrauchern</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Priorisierung von Eigenverbrauch für maximale Energieeffizienz</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Automatische Geräteaktivierung bei PV-Überschuss (z. B. Waschmaschine, Wallbox)</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Echtzeit-Überwachung von Erzeugung, Verbrauch und Ladezustand</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>Optimierung über lernende Algorithmen und dynamische Stromtarife</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Smart Home Vorteile */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Smart Home Vorteile im Überblick</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <Lightbulb className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beleuchtung</h3>
              <p className="opacity-90">
                Automatische Lichtsteuerung nach Tageszeit und Anwesenheit. Dimmen, Farbwechsel und Szenarien für jeden Anlass. 
                Energieeffiziente LED-Technik mit intelligenter Steuerung.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Thermometer className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heizungssteuerung</h3>
              <p className="opacity-90">
                Intelligente Raumtemperaturregelung spart bis zu 30% Heizkosten. Automatische Anpassung an Ihre Gewohnheiten 
                mit Geofencing und Zeitsteuerung.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sicherheit</h3>
              <p className="opacity-90">
                Überwachungskameras, Bewegungsmelder und smarte Türschlösser. Benachrichtigungen auf Ihr Smartphone und 
                automatische Reaktionen bei Abwesenheit.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Smartphone className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">App-Steuerung</h3>
              <p className="opacity-90">
                Alles in einer App: Licht, Heizung, Sicherheit und mehr. Fernsteuerung von überall, Zeitschaltungen und 
                individuelle Automatisierungen.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Wifi className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vernetzung</h3>
              <p className="opacity-90">
                Alle Geräte kommunizieren miteinander über sichere Protokolle. KNX, Zigbee oder WLAN - 
                wir finden die beste Lösung für Ihr Zuhause.
              </p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Home className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Komfort</h3>
              <p className="opacity-90">
                Szenarien wie "Guten Morgen" oder "Urlaub" steuern automatisch alle Geräte. 
                Sprachsteuerung und Gestensteuerung für ultimativen Komfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihr intelligentes Zuhause?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Lassen Sie sich kostenlos beraten und entdecken Sie die Möglichkeiten der Smart Home Technologie.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Jetzt Smart Home Beratung anfordern</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmartHome;