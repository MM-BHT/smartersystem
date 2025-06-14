import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Battery, Home as HomeIcon, Zap, Shield, Settings } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url("https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Photovoltaik & Smart Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Beratung, Planung, Installation & Anmeldung - alles aus einer Hand und in wenigen Wochen installiert
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <span>Unverbindliche Beratung sichern</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Smart vernetzt und Nachhaltig versorgt!
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Wir machen Ihr Zuhause smart und nachhaltig. Dank der intelligenten Vernetzung all Ihrer Komponenten  
            Sie Strom und Wärme optimal nutzen. Ihr Gewinn ist nicht nur finanziell messbar, 
            sondern auch ein Beitrag zum Klimaschutz und zur Unabhängigkeit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="PV und Speicher"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">PV und Speicher</h3>
              <p className="text-gray-600 mb-4">
                Sonne zu Strom und Wärmestrom. Sonnenstrom macht Sie unabhängig vom Stromversorger.
              </p>
              <Link to="/pv-speicher" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Mehr erfahren <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Smart Home"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Smart Home</h3>
              <p className="text-gray-600 mb-4">
                Smarte Lösungen für komfortables und energieeffizientes Wohnen mit intelligenter Steuerung.
              </p>
              <Link to="/smart-home" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Mehr erfahren <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-12">
            Zu welchem Thema möchten Sie Ihre Anfrage stellen?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/pv-speicher"
              className="group bg-white border-2 border-blue-200 p-8 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-blue-600 mb-4">
                <Sun className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PV und Speicher</h3>
            </Link>

            <Link 
              to="/smart-home"
              className="group bg-white border-2 border-blue-200 p-8 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-blue-600 mb-4">
                <HomeIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Home</h3>
            </Link>

            <Link 
              to="/kontakt"
              className="group bg-white border-2 border-blue-200 p-8 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-blue-600 mb-4">
                <Zap className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PV + Smart Home</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white text-blue-600 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Kostenloses Erstgespräch</h2>
            <p className="text-gray-700 mb-6">
              Wir freuen uns darauf, Sie kennenzulernen und über Ihre Projekte zu sprechen. 
              Schreiben Sie uns bei WhatsApp:
            </p>
            <a 
              href="tel:+4917820877960"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>📞 +49 178 2087960</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;