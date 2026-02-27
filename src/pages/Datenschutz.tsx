import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)',
        padding: 'clamp(6rem, 12vw, 9rem) 5% 4rem',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.8rem',
        }}>Datenschutzerklärung</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>Fassung: Juni 2025 | Sky Way Technology</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 5%' }}>
        <span style={{
          display: 'inline-block', background: 'rgba(26,86,232,0.1)', color: '#1A56E8',
          padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700,
          marginBottom: '2rem',
        }}>DSGVO-konform</span>

        {[
          {
            title: 'Einleitung und Überblick',
            content: <p>Wir haben diese Datenschutzerklärung (Fassung 26.06.2025) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE" style={{ color: '#1A56E8' }}>Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir verarbeiten und welche rechtmäßigen Möglichkeiten Sie haben. <strong>Stand:</strong> Juni 2025</p>,
          },
          {
            title: 'Verantwortlicher',
            content: <><p><strong>Sky Way Technology</strong><br />Eisackstraße 37<br />10827 Berlin<br />Deutschland</p><p style={{ marginTop: '0.75rem' }}><strong>Vertretungsberechtigte Personen:</strong> Aleksandar Vukanovic, Marian Matijevic, Milos Geric<br /><strong>E-Mail:</strong> info@smartersystem.de<br /><strong>Telefon:</strong> 030 - 439 701 26</p></>,
          },
          {
            title: 'Zugriffsdaten / Server-Logfiles',
            content: <><p>Bei jedem Zugriff auf unsere Webseite werden automatisch IP-Adresse, Browsertyp, Datum/Uhrzeit und weitere technische Informationen erfasst.</p><p style={{ marginTop: '0.5rem' }}><strong>Zweck:</strong> Optimierung & Sicherheit der Website<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p></>,
          },
          {
            title: 'Kontaktformular / E-Mail',
            content: <p>Bei Nutzung des Kontaktformulars erfassen wir Name, E-Mail, Telefonnummer und Nachricht.<br /><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>,
          },
          {
            title: 'Cookies',
            content: <p>Unsere Webseite verwendet Cookies. Unbedingt erforderliche Cookies sind für die Funktion der Website notwendig. Analyse-/Marketing-Cookies nur mit Ihrer Zustimmung.<br /><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO</p>,
          },
          {
            title: 'Hosting',
            content: <p>Wir hosten bei: <strong>All-Inkl</strong> – ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf.</p>,
          },
          {
            title: 'Ihre Rechte',
            content: <><p>Sie haben das Recht auf:</p><ul style={{ paddingLeft: '1.5rem', color: '#6B7280', lineHeight: 1.9, marginTop: '0.5rem' }}>
              {['Auskunft nach Art. 15 DSGVO','Berichtigung nach Art. 16 DSGVO','Löschung nach Art. 17 DSGVO','Einschränkung der Verarbeitung nach Art. 18 DSGVO','Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO','Datenübertragbarkeit nach Art. 20 DSGVO','Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)'].map(r => <li key={r}>{r}</li>)}
            </ul><p style={{ marginTop: '0.75rem' }}>Anfragen an: <a href="mailto:info@smartersystem.de" style={{ color: '#1A56E8' }}>info@smartersystem.de</a></p></>,
          },
          {
            title: 'Datensicherheit',
            content: <p>Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten. Wir verwenden SSL-Verschlüsselung für die Datenübertragung.</p>,
          },
          {
            title: 'Änderungen dieser Datenschutzerklärung',
            content: <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Kontakt bei Fragen: <Link to="/impressum" style={{ color: '#1A56E8' }}>Impressum</Link>.</p>,
          },
        ].map(section => (
          <div key={section.title}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700,
              color: '#111827', margin: '2.5rem 0 0.8rem', paddingBottom: '0.5rem',
              borderBottom: '2px solid #F0F4FF',
            }}>{section.title}</h2>
            <div style={{ color: '#6B7280', lineHeight: 1.8, fontSize: '0.95rem' }}>{section.content}</div>
          </div>
        ))}

        <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '3rem' }}>
          Erstellt mit dem <a href="https://www.adsimple.at/datenschutz-generator/" style={{ color: '#1A56E8' }}>Datenschutz-Generator</a> von AdSimple
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
