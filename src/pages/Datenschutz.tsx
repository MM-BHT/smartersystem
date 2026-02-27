import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz: React.FC = () => (
  <div style={{ minHeight: '100vh', background: '#fff' }}>
    <div className="page-header">
      <h1>Datenschutzerklärung</h1>
      <p>Fassung: Juni 2025 | Sky Way Technology</p>
    </div>

    <div className="legal-content">
      <span className="badge-legal">DSGVO-konform</span>

      <h2>Einleitung und Überblick</h2>
      <p>
        Wir haben diese Datenschutzerklärung (Fassung 26.06.2025) verfasst, um Ihnen gemäß der Vorgaben der{' '}
        <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE">
          Datenschutz-Grundverordnung (EU) 2016/679
        </a>{' '}
        und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir als Verantwortliche
        verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.
      </p>
      <p><strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.</p>
      <p><strong>Stand:</strong> Juni 2025</p>

      <h2>Verantwortlicher</h2>
      <p>
        <strong>Sky Way Technology</strong><br />
        Eisackstraße 37<br />
        10827 Berlin<br />
        Deutschland
      </p>
      <p>
        <strong>Vertretungsberechtigte Personen:</strong> Aleksandar Vukanovic, Marian Matijevic, Milos Geric<br />
        <strong>E-Mail-Adresse:</strong> info@smartersystem.de<br />
        <strong>Telefon:</strong> 030 - 439 701 26
      </p>

      <h2>Datenverarbeitung auf unserer Website</h2>
      <h3>Zugriffsdaten / Server-Logfiles</h3>
      <p>
        Bei jedem Zugriff auf unsere Webseite werden automatisch bestimmte Informationen erfasst und in
        Logfiles gespeichert. Diese umfassen Ihre IP-Adresse, den verwendeten Browsertyp, Datum und Uhrzeit
        des Zugriffs sowie weitere technische Informationen.
      </p>
      <p>
        <strong>Zweck:</strong> Optimierung &amp; Sicherheit der Website<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
      </p>

      <h3>Speicherdauer</h3>
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
        Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
      </p>

      <h2>Kontaktformular / E-Mail</h2>
      <p>
        Bei Nutzung von Kontaktformularen können wir personenbezogene Daten wie Ihren Namen, Ihre
        E-Mail-Adresse, Telefonnummer und Nachricht erfassen.
      </p>
      <p>
        <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme)
      </p>

      <h2>Kommunikation via Messenger</h2>
      <p>
        Falls Sie uns z. B. über WhatsApp kontaktieren, gelten auch die Nutzungsbedingungen und
        Datenschutzrichtlinien des jeweiligen Anbieters.<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO<br />
        <strong>Hinweis:</strong> Messenger-Anbieter können Daten außerhalb der EU verarbeiten. Die Nutzung erfolgt freiwillig.
      </p>

      <h2>Newsletter</h2>
      <p>
        Wenn Sie unseren Newsletter abonnieren, speichern wir Ihre E-Mail-Adresse und ggf. Ihren Namen.<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können sich jederzeit
        über den Abmeldelink abmelden.
      </p>

      <h2>Cookies</h2>
      <p>
        Unsere Webseite verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert
        werden, um bestimmte Informationen zu speichern und Ihr Nutzungserlebnis zu verbessern.
      </p>
      <p>
        <strong>Unbedingt erforderliche Cookies:</strong> Für die Funktion der Website notwendig<br />
        <strong>Analyse-/Marketing-Cookies:</strong> Nur mit Ihrer Zustimmung (per Cookie-Banner)<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), lit. f (techn. notwendige Cookies)
      </p>

      <h2>Webanalyse &amp; Optimierung</h2>
      <p>
        Wir verwenden Tools zur Analyse des Nutzerverhaltens, z. B. Google Analytics oder Matomo.
        Verarbeitet werden IP-Adresse (gekürzt/anonymisiert), Seitenaufrufe, Verweildauer und Herkunft (Referrer).<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)
      </p>

      <h2>Soziale Netzwerke / Präsenzen</h2>
      <p>
        Wir unterhalten Onlinepräsenzen auf Plattformen wie Instagram, Facebook, LinkedIn. Bei Besuch gelten
        deren Datenschutzbestimmungen. Gemeinsame Verantwortung kann bestehen (z. B. Facebook Page Insights).<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
      </p>

      <h2>Hosting</h2>
      <p>
        Wir hosten die Inhalte unserer Website bei folgendem Anbieter: <strong>All-Inkl</strong><br />
        Anbieter ist die ALL-INKL.COM – Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf.
      </p>

      <h2>Weitergabe von personenbezogenen Daten</h2>
      <p>
        Wir geben personenbezogene Daten nur dann an eine externe Stelle weiter, wenn dies im Rahmen einer
        Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind, oder wenn ein
        berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe besteht.
      </p>

      <h2>Datensicherheit</h2>
      <p>
        Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor
        Verlust, Missbrauch oder unbefugtem Zugriff zu schützen. Wir verwenden SSL-Verschlüsselung, um die
        Sicherheit der Datenübertragung zu gewährleisten.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht, Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten sowie
        deren Berichtigung, Löschung oder Einschränkung zu verlangen. Sie haben das Recht:
      </p>
      <ul>
        <li>auf Auskunft nach Art. 15 DSGVO</li>
        <li>auf Berichtigung nach Art. 16 DSGVO</li>
        <li>auf Löschung nach Art. 17 DSGVO</li>
        <li>auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
        <li>auf Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO</li>
        <li>auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
        <li>auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>Bitte richten Sie Ihre Anfragen an: <a href="mailto:info@smartersystem.de">info@smartersystem.de</a></p>

      <h2>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
        Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
      </p>

      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern oder zu aktualisieren.
        Eine aktualisierte Version dieser Datenschutzerklärung wird auf unserer Webseite veröffentlicht.
      </p>

      <h2>Kontakt</h2>
      <p>
        Wenn Sie Fragen oder Bedenken hinsichtlich unserer Datenschutzerklärung haben, können Sie uns über die
        im <Link to="/impressum">Impressum</Link> angegebenen Kontaktdaten erreichen.
      </p>

      <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '1rem' }}>
        Quelle: Erstellt mit dem{' '}
        <a href="https://www.adsimple.at/datenschutz-generator/">Datenschutz-Generator</a> von AdSimple
      </p>
    </div>
  </div>
);

export default Datenschutz;
