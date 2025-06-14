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

      {/* Smart Home Vorteile */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Home Vorteile im Überblick</h2>
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

      {/* Wie läuft es ab */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wie läuft es ab?</h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-blue-600 text-white p-6 rounded-xl flex-shrink-0 w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Schritt 1</h3>
                <h4 className="font-medium mb-2">Analyse Ihrer Zukunft</h4>
                <p className="text-sm opacity-90">
                  Gemeinsam ermitteln wir Ihre Wünsche und Anforderungen, besprechen die technischen Möglichkeiten 
                  und entwickeln ein individuelles Konzept.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse">
              <div className="bg-blue-600 text-white p-6 rounded-xl flex-shrink-0 w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Schritt 2</h3>
                <h4 className="font-medium mb-2">Erstellung Beratung</h4>
                <p className="text-sm opacity-90">
                  Ausführliche Smart Home Planung bis hin zu den Schalterdosen inkl. KNX, Heizung, Beschattung, 
                  Alarmanlage, Kameras und Multimedia. Wir beraten Sie umfassend.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-blue-600 text-white p-6 rounded-xl flex-shrink-0 w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Schritt 3</h3>
                <h4 className="font-medium mb-2">Planung</h4>
                <p className="text-sm opacity-90">
                  Detaillierte Smart Home System mit vorausschauender Beratung zu KNX Verkabelung oder drahtlosen 
                  Systemen. Wir realisieren die modernsten und funktionalsten Lösungen.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse">
              <div className="bg-blue-600 text-white p-6 rounded-xl flex-shrink-0 w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Schritt 4</h3>
                <h4 className="font-medium mb-2">Installation</h4>
                <p className="text-sm opacity-90">
                  Alle Smart Home Technischen gfr mit uns als Koordinator-Baustelle durch. Elektroinstallation, 
                  Heizungstechnik, Beschattungstechnik. Alles kommt von einem Anbieter.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-blue-600 text-white p-6 rounded-xl flex-shrink-0 w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Schritt 5</h3>
                <h4 className="font-medium mb-2">Service & Wartung</h4>
                <p className="text-sm opacity-90">
                  Nach dem Einstellzeitraum stehen wir Ihnen Self Technology. Erwartete eine langfristige, 
                  kontinuierliche Betreuung und Updates der Technik zur Verfügung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Bereiche */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Home Bereiche
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Alles in einer App</h3>
              <p className="mb-4">
                Planbar und jederzeit erweiterbar. 100% Cloud Free.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Smarte Szenen</h3>
              <p className="mb-4">
                Benutzerfreundliche Zentrale bestehend aus Elektro-Digitalen-Anlauf
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Für jeden gut</h3>
              <p className="mb-4">
                Ob Haus, Wohnung, Gewerbe oder Büro
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Für jeden das passende</h3>
              <p className="mb-4">
                Bei jedem Neubau, Kernsanierung oder Bestandsimmobilie.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Hochgradig kompatibel</h3>
              <p className="mb-4">
                Die beste Vorlaufzeit für die unterschiedlichsten Technologien und Busse
              </p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Für jeden das passende</h3>
              <p className="mb-4">
                Bei jedem Neubau, Kernsanierung oder Bestandsimmobilie.
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