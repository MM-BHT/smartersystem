import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Datenschutzerklärung für Sky Way Technology<br />
                Stand: Juni 2024
              </p>

              <p className="mb-6">
                Wir haben diese Datenschutzerklärung (Fassung 28.06.2024) verfasst, um Ihnen gemäß der Vorgaben der <strong>Datenschutz-Grundverordnung (EU) 2016/679</strong> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz „Daten") wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verantwortlicher</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p>
                  Sky Way Technology<br />
                  Eisackstraße 37<br />
                  10827 Berlin<br />
                  Deutschland
                </p>
                <p className="mt-4">
                  <strong>Vertretungsberechtigt Personen:</strong> Aleksandar Vukanovic, Marian Matijevic, Milos Geric<br />
                  <strong>E-Mail:</strong> info@skywaytechnology.de<br />
                  <strong>Telefon:</strong> +49 178 2087960<br />
                  <strong>Impressum:</strong> <a href="/impressum" className="text-blue-600 hover:text-blue-700">https://skywaytechnology.de/impressum</a>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Server-Logfiles</h3>
              <p className="mb-4">
                Automatisch erfasste Daten: Bei jedem Zugriff auf unsere Webseite werden automatisch bestimmte Informationen erfasst und in Logfiles gespeichert. Diese Informationen umfassen: IP-Adresse des zugreifenden Rechners, den verwendeten Browsertyp, Datum und Uhrzeit des Zugriffs, die aufgerufenen Seiten, die übertragene Datenmenge und den Access Provider. Diese Daten werden zur Gewährleistung eines störungsfreien Betriebs der Seite und zur Verbesserung unseres Angebots verwendet. Eine Zuordnung dieser Daten zu einer bestimmten Person ist uns ohne weitere Informationen nicht möglich.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
              <p className="mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, um bestimmte Informationen zu speichern und die Nutzererfahrung zu verbessern. Sie können die Verwendung von Cookies in Ihrem Browser-Einstellungen kontrollieren. Beachten Sie jedoch, dass das Deaktivieren von Cookies die Funktionalität unserer Website beeinträchtigen kann.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben das Recht, Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten sowie Berichtigung, Löschung oder Einschränkung zu verlangen.
              </p>
              <p className="mb-4">
                Sie haben das Recht:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>auf Auskunft nach Art. 15 DSGVO</li>
                <li>auf Berichtigung nach Art. 16 DSGVO</li>
                <li>auf Löschung nach Art. 17 DSGVO</li>
                <li>auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
                <li>auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
                <li>auf Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO</li>
                <li>auf Widerruf einer Einwilligung nach Art. 7 Abs. 3 DSGVO</li>
                <li>auf Beschwerde bei einer Aufsichtsbehörde nach Art. 77 DSGVO</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
              <p className="mb-4">
                Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte wahrnehmen möchten, kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Diese Datenschutzerklärung wurde zuletzt am 28. Juni 2024 aktualisiert.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;