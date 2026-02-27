import React, { useState } from 'react';
import {
  Sun, Battery, Zap, TrendingUp, Shield, Award,
  Home as HomeIcon, Smartphone, Wifi, Lightbulb, Thermometer,
  Users, Target, Heart, ChevronDown, ChevronUp, ArrowRight, PhoneCall,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/* ══════════════════════════════════════════════
   1. HERO  (from original index.html / Home.tsx)
══════════════════════════════════════════════ */
const Hero: React.FC = () => (
  <section
    id="hero"
    style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage:
        'linear-gradient(rgba(30,64,175,0.82), rgba(59,130,246,0.82)), url("https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textAlign: 'center',
      paddingTop: '80px',
    }}
  >
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 5%' }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800,
        fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
        lineHeight: 1.15,
        marginBottom: '1.5rem',
      }}>
        Photovoltaik &amp; Smart Home
      </h1>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', opacity: 0.9, lineHeight: 1.7, marginBottom: '2.5rem' }}>
        Beratung, Planung, Installation &amp; Anmeldung –<br />
        alles aus einer Hand und in wenigen Wochen installiert
      </p>
      <button
        className="btn-white"
        onClick={() => scrollTo('#kontakt')}
        style={{ fontSize: '1.05rem', padding: '0.85rem 2.2rem' }}
      >
        Unverbindliche Beratung sichern <ArrowRight size={18} />
      </button>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   2. VALUE PROPOSITION  (from Home.tsx)
══════════════════════════════════════════════ */
const ValueProp: React.FC = () => (
  <section id="leistungen" style={{ padding: '5rem 5%', background: '#F9FAFB' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800,
        fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
        color: '#111827',
        marginBottom: '1rem',
      }}>
        Smart vernetzt und Nachhaltig versorgt!
      </h2>
      <p style={{ color: '#6B7280', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto 3rem', fontSize: '1.05rem' }}>
        Wir machen Ihr Zuhause smart und nachhaltig. Dank der intelligenten Vernetzung all Ihrer Komponenten
        können Sie Strom und Wärme optimal nutzen. Ihr Gewinn ist nicht nur finanziell messbar,
        sondern auch ein Beitrag zum Klimaschutz und zur Unabhängigkeit.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '880px', margin: '0 auto' }}>
        {/* PV Card */}
        <div
          style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
          onClick={() => scrollTo('#pv-speicher')}
          onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 12px 40px rgba(26,86,232,0.13)'; d.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; d.style.transform = 'translateY(0)'; }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <img src="/images/home_3.png" alt="PV und Speicher" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
          <h3 style={{ color: '#1A56E8', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>PV und Speicher</h3>
          <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            Sonne zu Strom und Wärmestrom. Sonnenstrom macht Sie unabhängig vom Stromversorger.
          </p>
          <span style={{ color: '#1A56E8', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Mehr erfahren <ArrowRight size={14} />
          </span>
        </div>

        {/* Smart Home Card */}
        <div
          style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
          onClick={() => scrollTo('#smart-home')}
          onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 12px 40px rgba(26,86,232,0.13)'; d.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; d.style.transform = 'translateY(0)'; }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <img src="/images/home_2.png" alt="Smart Home" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
          <h3 style={{ color: '#1A56E8', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>Smart Home</h3>
          <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            Smarte Lösungen für komfortables und energieeffizientes Wohnen mit intelligenter Steuerung.
          </p>
          <span style={{ color: '#1A56E8', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Mehr erfahren <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   3. PV & SPEICHER  (from PVSpeicher.tsx)
══════════════════════════════════════════════ */
const PVSpeicher: React.FC = () => (
  <section id="pv-speicher" style={{ padding: '5rem 5%', background: '#fff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 800,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#111827', marginBottom: '1rem',
        }}>
          Photovoltaik &amp; Speicher
        </h2>
        <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Beratung, Planung, Installation &amp; Anmeldung – alles aus einer Hand und in wenigen Wochen installiert
        </p>
        <button
          className="btn-primary"
          style={{ marginTop: '1.5rem' }}
          onClick={() => scrollTo('#kontakt')}
        >
          Unverbindliche Beratung sichern →
        </button>
      </div>

      {/* Unsere Leistungen */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontWeight: 800,
        fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827',
        textAlign: 'center', marginBottom: '3rem',
      }}>
        Unsere Leistungen im Detail
      </h2>

      {/* Block 1: Bild links, Text rechts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <img src="/images/home_3.png" alt="Photovoltaik Installation"
          style={{ borderRadius: '16px', boxShadow: '0 8px 40px rgba(11,27,77,0.1)', width: '100%', objectFit: 'cover' }} />
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#111827', marginBottom: '1.2rem' }}>
            Komplettservice Photovoltaik
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Kostenlose Erstberatung und Potentialanalyse vor Ort',
              '3D-Planung und Ertragsberechnung für optimale Auslegung',
              'Komplette Anmeldung beim Netzbetreiber und der Bundesnetzagentur',
              'Installation durch zertifizierte Elektrofachkräfte',
              'Inbetriebnahme und Einweisung in das System',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A56E8', flexShrink: 0, marginTop: '7px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block 2: Text links, Bild rechts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ order: 1 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#111827', marginBottom: '1.2rem' }}>
            Intelligente Speicherlösungen
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Hochleistungs-Lithium-Batterien mit 10+ Jahren Garantie',
              'Modulares System – erweiterbar je nach Bedarf',
              'Notstromfunktion für kritische Verbraucher',
              'App-Steuerung für Monitoring und Optimierung',
              'Automatische Firmware-Updates und Remote-Wartung',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A56E8', flexShrink: 0, marginTop: '7px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/pv_3.png" alt="Speicher" style={{ order: 2, borderRadius: '16px', boxShadow: '0 8px 40px rgba(11,27,77,0.1)', width: '100%', objectFit: 'cover' }} />
      </div>

      {/* PV Vorteile Cards */}
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', textAlign: 'center', marginBottom: '2.5rem' }}>
        PV Vorteile im Überblick
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {[
          { Icon: Sun, title: 'Strom vom Dach – auch bei Wolken', desc: 'Selbst an bewölkten Tagen liefert Ihre PV-Anlage verlässlich Energie. Moderne Solarmodule nutzen diffuses Licht effizient.' },
          { Icon: Shield, title: 'Schatten? Kein Problem.', desc: 'Intelligente Verschaltungs-Erkennung schützt vor Energieverlust. Modulweise Abschattung optimiert den Gesamtertrag.' },
          { Icon: Battery, title: 'Unabhängig dank Speicher & Inselmodus', desc: 'Ihre Batterie speichert den Solarstrom – für Tag und Nacht. Mit Inselmodus sind Sie auch bei Stromausfall versorgt.' },
          { Icon: TrendingUp, title: 'Warmwasser aus Sonnenkraft', desc: 'Ist die Batterie voll, fließt der Stromüberschuss zu einem Heizstab. So wird Ihr Wasser mit Sonnenenergie erwärmt.' },
          { Icon: Zap, title: 'Smart gesteuert – Energie clever nutzen', desc: 'Mit Smart-Home-Integration steuern Sie Ihre Verbraucher automatisch – wenn die Sonne scheint.' },
        ].map(({ Icon, title, desc }) => (
          <div key={title} style={{ background: '#1d4ed8', padding: '1.5rem', borderRadius: '16px', color: '#fff' }}>
            <Icon size={36} style={{ marginBottom: '1rem', opacity: 0.95 }} />
            <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{title}</h3>
            <p style={{ opacity: 0.88, fontSize: '0.88rem', lineHeight: 1.65 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', background: '#F9FAFB', borderRadius: '20px', padding: '3rem 2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', marginBottom: '1rem' }}>
          Bereit für Ihre eigene Solaranlage?
        </h2>
        <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Lassen Sie sich kostenlos beraten und erfahren Sie, wie viel Sie mit einer eigenen PV-Anlage sparen können.
        </p>
        <button className="btn-primary" onClick={() => scrollTo('#kontakt')}>
          Jetzt kostenlos beraten lassen
        </button>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   4. SMART HOME  (from SmartHome.tsx)
══════════════════════════════════════════════ */
const SmartHome: React.FC = () => (
  <section id="smart-home" style={{ padding: '5rem 5%', background: '#F0F4FF' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', color: '#111827', marginBottom: '1rem' }}>
          Smart Home
        </h2>
        <p style={{ color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
          Die Zukunft für Ihr Zuhause beginnt jetzt – Wir integrieren intelligente Lösungen zur Licht-, Heizungs- und Sicherheitssteuerung!
        </p>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => scrollTo('#kontakt')}>
          Unverbindliche Beratung sichern →
        </button>
      </div>

      {/* Smarte Lösungen */}
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', textAlign: 'center', marginBottom: '3rem' }}>
        Smarte Lösungen für Ihr Zuhause
      </h2>

      {/* Block 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <img src="/images/smart_1.png" alt="Smart Home Steuerung"
          style={{ borderRadius: '16px', boxShadow: '0 8px 40px rgba(11,27,77,0.1)', width: '100%', objectFit: 'cover' }} />
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#111827', marginBottom: '1.2rem' }}>
            Smarte Steuerung für Ihr Zuhause
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Zentralisierte Steuerung von Licht, Heizung, Rollläden und Sicherheitssystemen',
              'Kompatibel mit gängigen Sprachassistenten wie Alexa, Google Assistant und Apple HomeKit',
              'Individuelle Szenarien für Alltag, Urlaub, Nachtmodus oder Energieeinsparung',
              'Automatisierte Abläufe auf Basis von Sensorik, Zeitplänen oder Nutzerverhalten',
              'Benutzerfreundliche App-Steuerung für Mobilgeräte und Tablets',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A56E8', flexShrink: 0, marginTop: '7px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#111827', marginBottom: '1.2rem' }}>
            Energiemanagement mit PV- und Speicheranbindung
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Intelligente Steuerung von Energieflüssen zwischen PV-Anlage, Speicher und Verbrauchern',
              'Priorisierung von Eigenverbrauch für maximale Energieeffizienz',
              'Automatische Geräteaktivierung bei PV-Überschuss (z. B. Waschmaschine, Wallbox)',
              'Echtzeit-Überwachung von Erzeugung, Verbrauch und Ladezustand',
              'Optimierung über lernende Algorithmen und dynamische Stromtarife',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A56E8', flexShrink: 0, marginTop: '7px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/smart_2.png" alt="PV Smart Home Integration"
          style={{ borderRadius: '16px', boxShadow: '0 8px 40px rgba(11,27,77,0.1)', width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Vorteile */}
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', textAlign: 'center', marginBottom: '2.5rem' }}>
        Smart Home Vorteile im Überblick
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {[
          { Icon: Lightbulb, title: 'Beleuchtung', desc: 'Automatische Lichtsteuerung nach Tageszeit und Anwesenheit. Dimmen, Farbwechsel und Szenarien für jeden Anlass.' },
          { Icon: Thermometer, title: 'Heizungssteuerung', desc: 'Intelligente Raumtemperaturregelung spart bis zu 30% Heizkosten. Automatische Anpassung mit Geofencing.' },
          { Icon: Shield, title: 'Sicherheit', desc: 'Überwachungskameras, Bewegungsmelder und smarte Türschlösser. Benachrichtigungen auf Ihr Smartphone.' },
          { Icon: Smartphone, title: 'App-Steuerung', desc: 'Alles in einer App: Licht, Heizung, Sicherheit und mehr. Fernsteuerung von überall, Zeitschaltungen.' },
          { Icon: Wifi, title: 'Vernetzung', desc: 'KNX, Zigbee oder WLAN – wir finden die beste Lösung für Ihr Zuhause.' },
          { Icon: HomeIcon, title: 'Komfort', desc: 'Szenarien wie „Guten Morgen" oder „Urlaub" steuern automatisch alle Geräte.' },
        ].map(({ Icon, title, desc }) => (
          <div key={title} style={{ background: '#1d4ed8', padding: '1.5rem', borderRadius: '16px', color: '#fff' }}>
            <Icon size={36} style={{ marginBottom: '1rem', opacity: 0.95 }} />
            <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{title}</h3>
            <p style={{ opacity: 0.88, fontSize: '0.88rem', lineHeight: 1.65 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', background: '#1A56E8', borderRadius: '20px', padding: '3rem 2rem', color: '#fff' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: '1rem' }}>
          Bereit für Ihr intelligentes Zuhause?
        </h2>
        <p style={{ opacity: 0.9, marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Lassen Sie sich kostenlos beraten und entdecken Sie die Möglichkeiten der Smart Home Technologie.
        </p>
        <button
          onClick={() => scrollTo('#kontakt')}
          style={{ background: '#fff', color: '#1A56E8', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer' }}
        >
          Jetzt Smart Home Beratung anfordern
        </button>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   5. ÜBER UNS  (from About.tsx)
══════════════════════════════════════════════ */
const UberUns: React.FC = () => (
  <section id="uber-uns" style={{ padding: '5rem 5%', background: '#fff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', color: '#111827', marginBottom: '1rem' }}>
          Über uns
        </h2>
        <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          Ihr vertrauensvoller Partner für nachhaltige Energielösungen
        </p>
      </div>

      {/* Company Info */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
        <img src="/images/about_1.png" alt="Unser Team"
          style={{ borderRadius: '16px', boxShadow: '0 8px 40px rgba(11,27,77,0.1)', width: '100%', objectFit: 'cover' }}
        />
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#111827', marginBottom: '1.2rem' }}>
            Smarter System – Ihr Experte für Zukunftstechnologien
          </h3>
          {[
            'Als innovatives Unternehmen im Bereich erneuerbarer Energien und Smart Home Technologien haben wir uns darauf spezialisiert, unseren Kunden ganzheitliche Lösungen anzubieten, die sowohl umweltfreundlich als auch wirtschaftlich sinnvoll sind.',
            'Unsere Expertise umfasst die Planung, Installation und Wartung von Photovoltaikanlagen, Energiespeichersystemen und intelligenten Haussteuerungen. Dabei setzen wir auf modernste Technologien und arbeiten ausschließlich mit renommierten Herstellern zusammen.',
            'Von der ersten Beratung bis zur finalen Inbetriebnahme begleiten wir Sie persönlich und sorgen dafür, dass Ihr Projekt termingerecht und in höchster Qualität umgesetzt wird.',
          ].map((text, i) => (
            <p key={i} style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: '0.9rem', fontSize: '0.97rem' }}>{text}</p>
          ))}
        </div>
      </div>

      {/* Values */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', marginBottom: '0.5rem' }}>
          Unsere Werte
        </h2>
        <p style={{ color: '#6B7280', lineHeight: 1.7 }}>Diese Prinzipien leiten uns bei allem, was wir tun</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {[
          { Icon: Target, title: 'Qualität', desc: 'Höchste Standards bei Produkten, Installation und Service für langfristige Zufriedenheit.' },
          { Icon: Users, title: 'Partnerschaft', desc: 'Langfristige Beziehungen zu unseren Kunden basierend auf Vertrauen und Transparenz.' },
          { Icon: Award, title: 'Innovation', desc: 'Neueste Technologien und innovative Lösungen für maximale Effizienz.' },
          { Icon: Heart, title: 'Nachhaltigkeit', desc: 'Beitrag zum Klimaschutz durch umweltfreundliche Energielösungen.' },
        ].map(({ Icon, title, desc }) => (
          <div key={title} style={{ textAlign: 'center' }}>
            <div style={{ background: '#1A56E8', color: '#fff', padding: '1rem', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Icon size={28} />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#111827', marginBottom: '0.5rem' }}>
          Unser Expertenteam
        </h2>
        <p style={{ color: '#6B7280', lineHeight: 1.7 }}>Erfahrene Fachkräfte mit Leidenschaft für nachhaltige Technologien</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
        {[
          { Icon: Users, title: 'Projektleitung', desc: 'Koordination aller Gewerke und termingerechte Umsetzung Ihrer Projekte' },
          { Icon: Award, title: 'Montage-Teams', desc: 'Zertifizierte Installateure mit jahrelanger Erfahrung in der Branche' },
          { Icon: Target, title: 'Kundenbetreuung', desc: 'Persönliche Ansprechpartner für Beratung, Service und Wartung' },
        ].map(({ Icon, title, desc }) => (
          <div key={title} style={{ textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)', color: '#fff', padding: '2rem', borderRadius: '16px', marginBottom: '1rem' }}>
              <Icon size={52} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{title}</h3>
            </div>
            <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: 1.65 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   6. FAQ
══════════════════════════════════════════════ */
const faqs = [
  { q: 'Wie lange dauert die Installation einer PV-Anlage?', a: 'In der Regel dauert die komplette Installation inkl. Anmeldung 4–8 Wochen ab Auftragserteilung. Wir kümmern uns um alle behördlichen Anmeldungen.' },
  { q: 'Welche Fördermöglichkeiten gibt es?', a: 'Es gibt aktuell verschiedene Förderprogramme auf Bundes- und Landesebene. Wir beraten Sie in einem kostenlosen Erstgespräch zu den aktuell verfügbaren Förderungen.' },
  { q: 'Kann ich ein Smart Home auch nachrüsten?', a: 'Ja, viele unserer Smart-Home-Lösungen lassen sich problemlos in Bestandsgebäude integrieren. Wir prüfen Ihre Situation und empfehlen die beste Lösung.' },
  { q: 'Wie lange halten die Solarmodule?', a: 'Hochwertige Solarmodule haben eine Lebensdauer von 25–30 Jahren. Die meisten Hersteller geben 25 Jahre Leistungsgarantie.' },
  { q: 'Was kostet eine PV-Anlage inkl. Speicher?', a: 'Die Kosten variieren je nach Anlagengröße und Bedarf. In einem kostenlosen Erstgespräch erstellen wir Ihnen ein individuelles Angebot.' },
  { q: 'Bietet ihr auch Wartung und Service an?', a: 'Ja, wir bieten Wartungsverträge für PV-Anlagen und Smart-Home-Systeme an. Remote-Monitoring ermöglicht uns schnelle Reaktion bei Problemen.' },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: '5rem 5%', background: '#F9FAFB' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', color: '#111827', marginBottom: '0.5rem' }}>
            Häufige Fragen
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: '12px',
              border: `1.5px solid ${open === i ? '#1A56E8' : '#E5E7EB'}`,
              overflow: 'hidden', transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '1.2rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
              >
                <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.97rem' }}>{faq.q}</span>
                {open === i ? <ChevronUp size={18} color="#1A56E8" /> : <ChevronDown size={18} color="#6B7280" />}
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.2rem', color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════
   7. KONTAKT  (pixel-perfect from kontakt.html)
══════════════════════════════════════════════ */
const Kontakt: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '', firstName: '', lastName: '',
    email: '', phone: '', service: '', postalCode: '',
    message: '', privacy: false, newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-inner">
        {/* Left: Info */}
        <div className="contact-info">
          <h2>So erreichen Sie uns</h2>
          <p>Ob per Telefon, WhatsApp oder Formular – wir sind für Sie da und melden uns schnell zurück.</p>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-card-text">
              <span>Telefon &amp; WhatsApp</span>
              <a href="tel:+4915563989382">+49 155 063 989 382</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div className="info-card-text">
              <span>E-Mail</span>
              <a href="mailto:info@smartersystem.de">info@smartersystem.de</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div className="info-card-text">
              <span>Erreichbarkeit</span>
              <p>Montag bis Freitag 9–18 Uhr</p>
            </div>
          </div>

          {/* WhatsApp highlight card */}
          <div style={{ background: 'linear-gradient(135deg,#0B1B4D,#1A56E8)', borderRadius: '16px', padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '2rem' }}>💬</div>
            <div>
              <span style={{ color: '#38BDF8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>Schnellste Option</span>
              <p style={{ color: '#fff', fontWeight: 500, margin: 0, fontSize: '0.95rem' }}>WhatsApp-Nachricht – oft in Minuten beantwortet</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap">
          <h3>Anfrage senden</h3>
          <form action="https://formsubmit.co/info@smartersystem.de" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} readOnly />
            <input type="hidden" name="_subject" value="Neue Kontaktanfrage über das Formular" />

            <div className="form-group">
              <label className="form-label" htmlFor="company">Unternehmen (optional)</label>
              <input className="form-input" type="text" id="company" name="company" placeholder="Ihr Unternehmen" value={formData.company} onChange={handleChange} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">Vorname *</label>
                <input className="form-input" type="text" id="firstName" name="firstName" placeholder="Max" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">Nachname *</label>
                <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Mustermann" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">E-Mail-Adresse *</label>
                <input className="form-input" type="email" id="email" name="email" placeholder="max@beispiel.de" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Telefon</label>
                <input className="form-input" type="tel" id="phone" name="phone" placeholder="+49 ..." value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="service">Interessiert an...</label>
                <select className="form-input" id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Haus; Wohnung; Gewerbe/Büro</option>
                  <option value="pv-speicher">PV und Speicher</option>
                  <option value="smart-home">Smart Home</option>
                  <option value="komplett">PV + Smart Home</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="postalCode">Postleitzahl der Immobilie</label>
                <input className="form-input" type="text" id="postalCode" name="postalCode" placeholder="10115" value={formData.postalCode} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Ihre Nachricht</label>
              <textarea className="form-input" id="message" name="message" rows={4} placeholder="Beschreiben Sie kurz, was Sie sich vorstellen …" value={formData.message} onChange={handleChange} style={{ resize: 'vertical' }} />
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="privacy" name="privacy" required checked={formData.privacy} onChange={handleChange} />
              <label htmlFor="privacy">
                Ich habe die <Link to="/datenschutz">Datenschutzerklärung</Link> gelesen und bin damit einverstanden. *
              </label>
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
              <label htmlFor="newsletter">
                Ich möchte aktuelle News und Angebote von Sky Way Technology erhalten. (Kann jederzeit abbestellt werden.)
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Anfrage senden →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════
   8. KOSTENLOSES ERSTGESPRÄCH (from Home.tsx)
══════════════════════════════════════════════ */
const Erstgespraech: React.FC = () => (
  <section style={{ padding: '4rem 5%', background: '#1A56E8' }}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: '1.6rem', color: '#1A56E8', marginBottom: '1rem' }}>
          Kostenloses Erstgespräch
        </h2>
        <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Wir freuen uns darauf, Sie kennenzulernen und über Ihre Projekte zu sprechen.
          Schreiben Sie uns bei WhatsApp:
        </p>
        <a
          href="tel:+4915563989382"
          style={{ background: '#1A56E8', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '1rem' }}
        >
          <PhoneCall size={18} color="#4ade80" />
          +49 155 063 989 382
        </a>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════ */
const Home: React.FC = () => (
  <div>
    <Hero />
    <ValueProp />
    <PVSpeicher />
    <SmartHome />
    <UberUns />
    <FAQ />
    <Kontakt />
    <Erstgespraech />
  </div>
);

export default Home;
