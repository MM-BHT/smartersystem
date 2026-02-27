import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 14L14 4L26 14" stroke="#1A56E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14v11h18V14" stroke="#1A56E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="17" width="8" height="8" rx="1" fill="#1A56E8"/>
    <circle cx="14" cy="11.5" r="1.5" fill="#38BDF8"/>
    <path d="M10.5 8.5Q14 6 17.5 8.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const navItems = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#pv-speicher', label: 'PV & Speicher' },
  { href: '#smart-home', label: 'Smart Home' },
  { href: '#uber-uns', label: 'Über Uns' },
  { href: '#faq', label: 'FAQ' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.9rem 5%',
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 8px rgba(0,0,0,0.06)',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Logo */}
      {isHome ? (
        <a href="#hero" onClick={(e) => handleAnchorClick(e, '#hero')} style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.1rem',
          color: '#1A56E8', textDecoration: 'none',
        }}>
          <Logo />
          Smarter System
        </a>
      ) : (
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.1rem',
          color: '#1A56E8', textDecoration: 'none',
        }}>
          <Logo />
          Smarter System
        </Link>
      )}

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-nav">
        {isHome ? navItems.map(item => (
          <a key={item.href} href={item.href}
            onClick={(e) => handleAnchorClick(e, item.href)}
            style={{ fontSize: '0.9rem', fontWeight: 500, color: '#111827', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1A56E8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#111827')}
          >{item.label}</a>
        )) : (
          <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#111827', textDecoration: 'none' }}>← Startseite</Link>
        )}
      </nav>

      {/* CTA Button */}
      {isHome ? (
        <a href="#kontakt" onClick={(e) => handleAnchorClick(e, '#kontakt')}
          style={{
            background: '#1A56E8', color: '#fff', padding: '0.6rem 1.4rem',
            borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem',
            textDecoration: 'none', transition: 'background 0.2s', display: 'inline-block',
          }}
          className="desktop-cta"
          onMouseEnter={e => (e.currentTarget.style.background = '#0F3BAA')}
          onMouseLeave={e => (e.currentTarget.style.background = '#1A56E8')}
        >Kontakt & Angebot</a>
      ) : (
        <Link to="/#kontakt" style={{
          background: '#1A56E8', color: '#fff', padding: '0.6rem 1.4rem',
          borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem',
          textDecoration: 'none', display: 'inline-block',
        }}
          className="desktop-cta"
        >Kontakt & Angebot</Link>
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-btn"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'none' }}
      >
        {isMenuOpen ? <X size={24} color="#111827" /> : <Menu size={24} color="#111827" />}
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid #e5e7eb',
          padding: '1rem 5%', display: 'flex', flexDirection: 'column', gap: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}>
          {isHome ? navItems.map(item => (
            <a key={item.href} href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              style={{ fontSize: '0.95rem', fontWeight: 500, color: '#111827', textDecoration: 'none' }}
            >{item.label}</a>
          )) : (
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '0.95rem', fontWeight: 500, color: '#111827', textDecoration: 'none' }}>← Startseite</Link>
          )}
          {isHome && (
            <a href="#kontakt" onClick={(e) => handleAnchorClick(e, '#kontakt')}
              style={{
                background: '#1A56E8', color: '#fff', padding: '0.7rem 1.4rem',
                borderRadius: '6px', fontWeight: 600, textDecoration: 'none', textAlign: 'center',
              }}
            >Kontakt & Angebot</a>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
