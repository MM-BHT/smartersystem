import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 14L14 4L26 14" stroke="#1A56E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14v11h18V14" stroke="#1A56E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="17" width="8" height="8" rx="1" fill="#1A56E8"/>
    <circle cx="14" cy="11.5" r="1.5" fill="#38BDF8"/>
    <path d="M10.5 8.5Q14 6 17.5 8.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0B1B4D', color: 'rgba(255,255,255,0.7)', padding: '2.5rem 5% 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo Row */}
        <div style={{ marginBottom: '2rem' }}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
            <Logo /> Smarter System
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginBottom: '1.5rem' }} className="footer-grid">
          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', marginBottom: '0.9rem', fontSize: '0.95rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {[
                { href: '#leistungen', label: 'Leistungen' },
                { href: '#pv-speicher', label: 'PV & Speicher' },
                { href: '#smart-home', label: 'Smart Home' },
                { href: '#uber-uns', label: 'Über Uns' },
                { href: '#faq', label: 'FAQ' },
              ].map(item => (
                <li key={item.href}>
                  <a href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', marginBottom: '0.9rem', fontSize: '0.95rem' }}>Rechtliches</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li>
                <Link to="/datenschutz" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >Datenschutz</Link>
              </li>
              <li>
                <Link to="/impressum" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >Impressum</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', marginBottom: '0.9rem', fontSize: '0.95rem' }}>Kontakt</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li><a href="tel:+4915563989382" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>📞 +49 155 63 989 382</a></li>
              <li><a href="mailto:info@smartersystem.de" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>✉️ info@smartersystem.de</a></li>
              <li>
                <a href="#kontakt" onClick={(e) => { e.preventDefault(); scrollTo('#kontakt'); }}
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>💬 Kontaktformular</a>
              </li>
              <li><span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>🕐 Mo–Fr 9–18 Uhr</span></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.2rem', textAlign: 'center', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
          © Smarter System 2025 – Alle Rechte vorbehalten ·{' '}
          <Link to="/datenschutz" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}>Datenschutz</Link>
          {' · '}
          <Link to="/impressum" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}>Impressum</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
