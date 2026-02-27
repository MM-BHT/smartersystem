import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LogoSVG = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 14L14 4L26 14" stroke="#1A56E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14v11h18V14" stroke="#1A56E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="17" width="8" height="8" rx="1" fill="#1A56E8"/>
    <circle cx="14" cy="11.5" r="1.5" fill="#38BDF8"/>
    <path d="M10.5 8.5Q14 6 17.5 8.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#pv-speicher', label: 'PV & Speicher' },
  { href: '#smart-home', label: 'Smart Home' },
  { href: '#uber-uns', label: 'Über Uns' },
  { href: '#faq', label: 'FAQ' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (hash: string) => {
    setMenuOpen(false);
    if (!isHome) { window.location.href = '/' + hash; return; }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="site-nav">
      {/* Logo */}
      {isHome ? (
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#1A56E8', textDecoration: 'none' }}
        >
          <LogoSVG /> Smarter System
        </a>
      ) : (
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#1A56E8', textDecoration: 'none' }}>
          <LogoSVG /> Smarter System
        </Link>
      )}

      {/* Desktop nav links */}
      <ul>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button desktop */}
      <a
        href="#kontakt"
        className="btn-primary nav-cta-desktop"
        onClick={e => { e.preventDefault(); scrollTo('#kontakt'); }}
      >
        Kontakt & Angebot
      </a>

      {/* Mobile burger */}
      <button
        className="nav-mobile-btn"
        onClick={() => setMenuOpen(v => !v)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
      >
        {menuOpen ? <X size={24} color="#111827" /> : <Menu size={24} color="#111827" />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid #e5e7eb',
          padding: '1.2rem 5%', display: 'flex', flexDirection: 'column', gap: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              style={{ fontSize: '0.95rem', fontWeight: 500, color: '#111827', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="btn-primary"
            style={{ textAlign: 'center' }}
            onClick={e => { e.preventDefault(); scrollTo('#kontakt'); }}
          >
            Kontakt & Angebot
          </a>
          <Link to="/datenschutz" onClick={() => setMenuOpen(false)} style={{ fontSize: '0.85rem', color: '#6B7280', textDecoration: 'none' }}>Datenschutz</Link>
          <Link to="/impressum" onClick={() => setMenuOpen(false)} style={{ fontSize: '0.85rem', color: '#6B7280', textDecoration: 'none' }}>Impressum</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
