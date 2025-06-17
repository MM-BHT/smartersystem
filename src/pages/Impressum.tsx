import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Angaben gemäß § 5 TMG</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="mb-4">
                  <strong>Smarter System</strong><br />
                  Eisackstraße 37<br />
                  10827 Berlin
                </p>
                
                <p className="mb-4">
                  <strong>Handelsregister:</strong><br />
                  <strong>Registergericht:</strong>
                </p>

                <p className="mb-4">
                  <strong>Vertreten durch:</strong><br />
                  Aleksandar Vukanovic, Marian Matijevic, Milos Geric
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Kontakt</h3>
              <p className="mb-6">
                <strong>Telefon:</strong> +49 178 2087960<br />
                <strong>E-Mail:</strong> info@smartersystem.de
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Umsatzsteuer-ID</h3>
              <p className="mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">EU-Streitschlichtung</h3>
              <p className="mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
              <p className="mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Haftung für Inhalte</h3>
              <p className="mb-6">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Haftung für Links</h3>
              <p className="mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mb-6">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Urheberrecht</h3>
              <p className="mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mb-6">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                <strong>Quelle:</strong> <a href="https://www.e-recht24.de" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;