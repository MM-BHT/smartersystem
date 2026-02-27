import { Link } from 'react-router-dom'

const sections = [
  { title: 'Einleitung und Überblick', content: (
    <>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">Wir haben diese Datenschutzerklärung (Fassung 26.06.2025) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE" target="_blank" rel="noreferrer" className="text-[#1A56E8] underline">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir verarbeiten.</p>
      <p className="text-gray-500 text-sm leading-relaxed"><strong>Stand:</strong> Juni 2025</p>
    </>
  )},
  { title: 'Verantwortlicher', content: (
    <p className="text-gray-500 text-sm leading-relaxed">
      <strong>Sky Way Technology</strong><br />Eisackstraße 37<br />10827 Berlin<br />Deutschland<br /><br />
      <strong>Vertretungsberechtigte Personen:</strong> Aleksandar Vukanovic, Marian Matijevic, Milos Geric<br />
      <strong>E-Mail-Adresse:</strong> info@smartersystem.de<br />
      <strong>Telefon:</strong> 030 - 439 701 26
    </p>
  )},
  { title: 'Zugriffsdaten / Server-Logfiles', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Bei jedem Zugriff werden Ihre IP-Adresse, Browsertyp, Datum und Uhrzeit automatisch erfasst.<br /><strong>Zweck:</strong> Optimierung &amp; Sicherheit der Website<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
  )},
  { title: 'Kontaktformular / E-Mail', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Bei Nutzung von Kontaktformularen erfassen wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und Nachricht.<br /><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
  )},
  { title: 'Cookies', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Unsere Website verwendet Cookies. Technisch notwendige Cookies sind für den Betrieb erforderlich. Analyse-/Marketing-Cookies werden nur mit Ihrer Zustimmung gesetzt.<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a bzw. lit. f DSGVO</p>
  )},
  { title: 'Hosting', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Wir hosten unsere Website bei <strong>All-Inkl</strong> (ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf).</p>
  )},
  { title: 'Datensicherheit', content: (
    <p className="text-gray-500 text-sm leading-relaxed">Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten. Wir verwenden SSL-Verschlüsselung.</p>
  )},
]

const rights = [
  'auf Auskunft nach Art. 15 DSGVO',
  'auf Berichtigung nach Art. 16 DSGVO',
  'auf Löschung nach Art. 17 DSGVO',
  'auf Einschränkung der Verarbeitung nach Art. 18 DSGVO',
  'auf Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO',
  'auf Datenübertragbarkeit nach Art. 20 DSGVO',
  'auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)',
]

export default function Datenschutz() {
  return (
    <>
      <div className="px-[5%] py-24 text-center" style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Datenschutzerklärung</h1>
        <p className="text-white/75 text-base">Fassung: Juni 2025 | Sky Way Technology</p>
      </div>

      <div className="max-w-3xl mx-auto px-[5%] py-20">
        <div className="inline-block bg-[#1A56E8]/10 text-[#1A56E8] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">DSGVO-konform</div>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">{s.title}</h2>
            {s.content}
          </div>
        ))}

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Ihre Rechte</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">Sie haben das Recht auf:</p>
        <ul className="text-gray-500 text-sm leading-relaxed ml-5 mb-3 list-disc">
          {rights.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <p className="text-gray-500 text-sm">Bitte richten Sie Anfragen an: <a href="mailto:info@smartersystem.de" className="text-[#1A56E8] underline">info@smartersystem.de</a></p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Beschwerderecht</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts.</p>

        <h2 className="font-playfair font-bold text-gray-900 text-xl mt-10 mb-3 pb-2 border-b-2 border-[#F0F4FF]">Kontakt</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Fragen zur Datenschutzerklärung richten Sie bitte an die im <Link to="/impressum" className="text-[#1A56E8] underline">Impressum</Link> angegebenen Kontaktdaten.</p>
        <p className="text-xs text-gray-400 mt-6">Quelle: Erstellt mit dem <a href="https://www.adsimple.at/datenschutz-generator/" target="_blank" rel="noreferrer" className="underline">Datenschutz-Generator</a> von AdSimple</p>
      </div>
    </>
  )
}
