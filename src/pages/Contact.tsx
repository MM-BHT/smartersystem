import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    postalCode: '',
    message: '',
    privacy: false,
    newsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Energie-Projekt planen. 
            Wir freuen uns auf Ihre Anfrage!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Unternehmen"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Vorname"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nachname"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Service and Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              >
                <option value="">Interessiert an... (Haus; Wohnung; Gewerbe/Büro)</option>
                <option value="pv-speicher">PV und Speicher</option>
                <option value="smart-home">Smart Home</option>
                <option value="komplett">PV + Smart Home</option>
              </select>
              <input
                type="text"
                name="postalCode"
                placeholder="Postleitzahl der Immobilie"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Ihre Nachricht an uns"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  Ich habe die Datenschutzerklärung gelesen bin damit einverstanden.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Ich möchte aktuelle News und Angebote von Sky Way Technology erhalten. (Diese können jederzeit abbestellt werden.)
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Senden</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 mb-2">Montag bis Freitag 9-18 Uhr</p>
              <a href="tel:+4917820877960" className="text-blue-600 hover:text-blue-700 font-medium">
                +49 178 2087960
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Mail</h3>
              <p className="text-gray-600 mb-2">Schreiben Sie uns</p>
              <a href="mailto:info@skywaytechnology.de" className="text-blue-600 hover:text-blue-700 font-medium">
                info@skywaytechnology.de
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
              <p className="text-gray-600">
                Mo-Fr: 9:00 - 18:00 Uhr<br />
                Sa: Nach Vereinbarung
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;