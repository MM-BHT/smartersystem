import React from 'react';
import { Link } from 'react-router-dom';

const LogoSVG = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 14L14 4L26 14" stroke="#1A56E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14v11h18V14" stroke="#1A56E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="17" width="8" height="8" rx="1" fill="#1A56E8"/>
    <circle cx="14" cy="11.5" r="1.5" fill="#38BDF8"/>
    <path d="M10.5 8.5Q14 6 17.5 8.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      {/* Navigation */}
      <div className="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#leistungen" onClick={e => { e.preventDefault(); scrollTo('#leistungen'); }}>Leistungen</a></li>
          <li><a href="#pv-speicher" onClick={e => { e.preventDefault(); scrollTo('#pv-speicher'); }}>PV &amp; Speicher</a></li>
          <li><a href="#smart-home" onClick={e => { e.preventDefault(); scrollTo('#smart-home'); }}>Smart Home</a></li>
          <li><a href="#uber-uns" onClick={e => { e.preventDefault(); scrollTo('#uber-uns'); }}>Über Uns</a></li>
          <li><a href="#faq" onClick={e => { e.preventDefault(); scrollTo('#faq'); }}>FAQ</a></li>
        </ul>
      </div>

      {/* Rechtliches */}
      <div className="footer-col">
        <h4>Rechtliches</h4>
        <ul>
          <li><Link to="/datenschutz">Datenschutz</Link></li>
          <li><Link to="/impressum">Impressum</Link></li>
        </ul>
      </div>

      {/* Kontakt */}
      <div className="footer-col">
        <h4>Kontakt</h4>
        <ul>
          <li><a href="tel:+4915563989382">📞 +49 155 63 989 382</a></li>
          <li><a href="mailto:info@smartersystem.de">✉️ info@smartersystem.de</a></li>
          <li>
            <a href="#kontakt" onClick={e => { e.preventDefault(); scrollTo('#kontakt'); }}>
              💬 Kontaktformular
            </a>
          </li>
          <li><span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>🕐 Mo–Fr 9–18 Uhr</span></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      © Smarter System 2025 – Alle Rechte vorbehalten ·{' '}
      <Link to="/datenschutz">Datenschutz</Link>
      {' · '}
      <Link to="/impressum">Impressum</Link>
    </div>
  </footer>
);

export default Footer;
