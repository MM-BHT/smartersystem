import React from 'react';

const Impressum: React.FC = () => {
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
        }}>Impressum</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>Angaben gemäß § 5 TMG</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 5%' }}>
        {/* Info Box */}
        <div style={{
          background: '#F0F4FF', border: '1px solid rgba(26,86,232,0.15)',
          borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2rem',
        }}>
          <p style={{ color: '#111827', margin: 0, lineHeight: 1.8 }}>
            <strong>Sky Way Technology</strong><br />
            Eisackstraße 37<br />
            10827 Berlin<br />
            Deutschland
          </p>
        </div>

        {[
          {
            title: 'Handelsregister',
            content: <p><strong>Handelsregister:</strong> [wird ergänzt]<br /><strong>Registergericht:</strong> [wird ergänzt]</p>,
          },
          {
            title: 'Vertreten durch',
            content: <p>Aleksandar Vukanovic, Marian Matijevic, Milos Geric</p>,
          },
          {
            title: 'Kontakt',
            content: <p><strong>Telefon:</strong> 030 - 439 701 26<br /><strong>E-Mail:</strong> <a href="mailto:info@smartersystem.de" style={{ color: '#1A56E8' }}>info@smartersystem.de</a></p>,
          },
          {
            title: 'Umsatzsteuer-ID',
            content: <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE</p>,
          },
          {
            title: 'EU-Streitschlichtung',
            content: <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#1A56E8' }}>https://ec.europa.eu/consumers/odr/</a></p>,
          },
          {
            title: 'Verbraucherstreitbeilegung',
            content: <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>,
          },
          {
            title: 'Haftung für Inhalte',
            content: <><p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p><p style={{ marginTop: '0.5rem' }}>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p></>,
          },
          {
            title: 'Haftung für Links',
            content: <p>Unser Angebot enthält Links zu externen Websites Dritter. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>,
          },
          {
            title: 'Urheberrecht',
            content: <><p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung und Verbreitung bedürfen der schriftlichen Zustimmung des jeweiligen Autors.</p><p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#9CA3AF' }}>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" style={{ color: '#1A56E8' }}>https://www.e-recht24.de</a></p></>,
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
      </div>
    </div>
  );
};

export default Impressum;
