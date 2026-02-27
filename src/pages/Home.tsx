import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sun, Battery, Zap, TrendingUp, Shield, Award,
  Home as HomeIcon, Smartphone, Wifi, Lightbulb, Thermometer,
  Users, Target, Heart, Phone, Mail, Clock, Send, PhoneCall,
  ChevronDown, ChevronUp,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────────── */
const blue = '#1A56E8';
const blueDark = '#0F3BAA';
const cyan = '#38BDF8';
const navy = '#0B1B4D';
const light = '#F0F4FF';
const gray = '#6B7280';
const text = '#111827';

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 800,
  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
  color: text,
  marginBottom: '1rem',
};

const sectionSubtitle: React.CSSProperties = {
  color: gray,
  fontSize: '1.05rem',
  maxWidth: '640px',
  lineHeight: 1.7,
  margin: '0 auto',
};

const badge = (label: string) => (
  <span style={{
    display: 'inline-block', background: `rgba(26,86,232,0.1)`, color: blue,
    padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700,
    marginBottom: '1rem', letterSpacing: '0.04em',
  }}>{label}</span>
);

const btnPrimary: React.CSSProperties = {
  background: blue, color: '#fff', padding: '0.75rem 1.8rem',
  borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem',
  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.15s',
};

const btnOutline: React.CSSProperties = {
  background: '#fff', color: blue, padding: '0.75rem 1.8rem',
  borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem',
  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  border: `2px solid ${blue}`, cursor: 'pointer', transition: 'all 0.2s',
};

/* ─────────────────────────────────────────────
   SECTION: HERO
───────────────────────────────────────────── */
const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" style={{
      background: `linear-gradient(135deg, ${navy}, ${blue})`,
      padding: 'clamp(7rem, 15vw, 11rem) 5% clamp(5rem, 10vw, 8rem)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* subtle background circles */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(56,189,248,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(26,86,232,0.12)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(56,189,248,0.15)', color: cyan, padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
          ☀️ Photovoltaik · Smart Home · Speicher
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 800,
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          color: '#fff',
          lineHeight: 1.15,
          marginBottom: '1.5rem',
        }}>
          Ihr Zuhause –<br />smart & nachhaltig
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Beratung, Planung, Installation & Anmeldung – alles aus einer Hand<br className="hide-sm" /> und in wenigen Wochen installiert.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('#kontakt')} style={{ ...btnPrimary, background: '#fff', color: blue }}>
            Unverbindliche Beratung <ArrowRight size={17} />
          </button>
          <button onClick={() => scrollTo('#leistungen')} style={{ ...btnOutline, color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }}>
            Leistungen entdecken
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION: LEISTUNGEN OVERVIEW
───────────────────────────────────────────── */
const LeistungenSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="leistungen" style={{ padding: '5rem 5%', background: light }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        {badge('UNSERE LEISTUNGEN')}
        <h2 style={sectionTitle}>Smart vernetzt und nachhaltig versorgt</h2>
        <p style={{ ...sectionSubtitle, marginBottom: '3rem' }}>
          Dank intelligenter Vernetzung aller Komponenten können Sie Strom und Wärme optimal nutzen –
          finanziell messbar und ein Beitrag zum Klimaschutz.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            {
              icon: <Sun size={32} color={blue} />,
              title: 'PV & Speicher',
              desc: 'Sonnenstrom macht Sie unabhängig. Von der Planung bis zur Inbetriebnahme – alles aus einer Hand.',
              anchor: '#pv-speicher',
            },
            {
              icon: <HomeIcon size={32} color={blue} />,
              title: 'Smart Home',
              desc: 'Intelligente Steuerung von Licht, Heizung, Sicherheit und Energie – komfortabel per App.',
              anchor: '#smart-home',
            },
            {
              icon: <Zap size={32} color={blue} />,
              title: 'Komplettlösung',
              desc: 'PV + Speicher + Smart Home perfekt aufeinander abgestimmt für maximale Effizienz und Autarkie.',
              anchor: '#kontakt',
            },
          ].map(card => (
            <div key={card.title} style={{
              background: '#fff', borderRadius: '16px', padding: '2rem',
              border: '1px solid rgba(26,86,232,0.1)',
              boxShadow: '0 4px 20px rgba(26,86,232,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(26,86,232,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(26,86,232,0.06)'; }}
              onClick={() => scrollTo(card.anchor)}
            >
              <div style={{ background: light, borderRadius: '12px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.2rem', color: text, marginBottom: '0.6rem' }}>{card.title}</h3>
              <p style={{ color: gray, lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.2rem' }}>{card.desc}</p>
              <span style={{ color: blue, fontWeight: 600, fontSize: '0.9rem' }}>Mehr erfahren →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION: PV & SPEICHER
───────────────────────────────────────────── */
const PVSpeicherSection: React.FC = () => (
  <section id="pv-speicher" style={{ padding: '5rem 5%', background: '#fff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        {badge('PHOTOVOLTAIK & SPEICHER')}
        <h2 style={sectionTitle}>Strom vom eigenen Dach</h2>
        <p style={sectionSubtitle}>
          Beratung, Planung, Installation & Anmeldung – alles aus einer Hand und in wenigen Wochen installiert.
        </p>
      </div>

      {/* Block 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <img src="/images/home_3.png" alt="Photovoltaik Installation"
          style={{ borderRadius: '16px', boxShadow: '0 16px 48px rgba(11,27,77,0.12)', width: '100%', objectFit: 'cover' }} />
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: text, marginBottom: '1.2rem' }}>Komplettservice Photovoltaik</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Kostenlose Erstberatung und Potentialanalyse vor Ort',
              '3D-Planung und Ertragsberechnung für optimale Auslegung',
              'Komplette Anmeldung beim Netzbetreiber und der Bundesnetzagentur',
              'Installation durch zertifizierte Elektrofachkräfte',
              'Inbetriebnahme und Einweisung in das System',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: gray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: blue, flexShrink: 0, marginTop: '6px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ order: 1 }} className="pv-text-right">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: text, marginBottom: '1.2rem' }}>Intelligente Speicherlösungen</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Hochleistungs-Lithium-Batterien mit 10+ Jahren Garantie',
              'Modulares System – erweiterbar je nach Bedarf',
              'Notstromfunktion für kritische Verbraucher',
              'App-Steuerung für Monitoring und Optimierung',
              'Automatische Firmware-Updates und Remote-Wartung',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: gray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: blue, flexShrink: 0, marginTop: '6px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/pv_3.png" alt="Speicher"
          style={{ borderRadius: '16px', boxShadow: '0 16px 48px rgba(11,27,77,0.12)', width: '100%', objectFit: 'cover', order: 2 }} />
      </div>

      {/* Vorteile Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {[
          { icon: <Sun size={28} />, title: 'Strom auch bei Wolken', desc: 'Moderne Module nutzen diffuses Licht – verlässliche Energie auch ohne Sonne.' },
          { icon: <Shield size={28} />, title: 'Schatten? Kein Problem.', desc: 'Intelligente Verschaltung schützt vor Energieverlust bei Teilabschattung.' },
          { icon: <Battery size={28} />, title: 'Unabhängig dank Speicher', desc: 'Batterie speichert Solarstrom für Tag und Nacht – echter Inselmodus.' },
          { icon: <TrendingUp size={28} />, title: 'Warmwasser aus Sonnenkraft', desc: 'PV-Überschuss heizt Ihr Wasser – maximale Effizienz ohne Verluste.' },
          { icon: <Zap size={28} />, title: 'Smart gesteuert', desc: 'Geräte laufen automatisch, wenn die Sonne scheint – smarte Energie.' },
        ].map(card => (
          <div key={card.title} style={{
            background: `linear-gradient(135deg, ${navy}, ${blue})`,
            borderRadius: '16px', padding: '1.5rem', color: '#fff',
          }}>
            <div style={{ marginBottom: '0.75rem', opacity: 0.9 }}>{card.icon}</div>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{card.title}</h4>
            <p style={{ opacity: 0.85, fontSize: '0.88rem', lineHeight: 1.6 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION: SMART HOME
───────────────────────────────────────────── */
const SmartHomeSection: React.FC = () => (
  <section id="smart-home" style={{ padding: '5rem 5%', background: light }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        {badge('SMART HOME')}
        <h2 style={sectionTitle}>Die Zukunft für Ihr Zuhause</h2>
        <p style={sectionSubtitle}>
          Intelligente Lösungen zur Licht-, Heizungs- und Sicherheitssteuerung –
          bequem per App oder Sprachbefehl.
        </p>
      </div>

      {/* Block 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <img src="/images/smart_1.png" alt="Smart Home Steuerung"
          style={{ borderRadius: '16px', boxShadow: '0 16px 48px rgba(11,27,77,0.12)', width: '100%', objectFit: 'cover' }} />
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: text, marginBottom: '1.2rem' }}>Smarte Steuerung für Ihr Zuhause</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Zentralisierte Steuerung von Licht, Heizung, Rollläden und Sicherheitssystemen',
              'Kompatibel mit Alexa, Google Assistant und Apple HomeKit',
              'Individuelle Szenarien für Alltag, Urlaub, Nachtmodus oder Energieeinsparung',
              'Automatisierte Abläufe auf Basis von Sensorik, Zeitplänen oder Nutzerverhalten',
              'Benutzerfreundliche App-Steuerung für Mobilgeräte und Tablets',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: gray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: blue, flexShrink: 0, marginTop: '6px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: text, marginBottom: '1.2rem' }}>Energiemanagement mit PV- und Speicheranbindung</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Intelligente Steuerung von Energieflüssen zwischen PV-Anlage, Speicher und Verbrauchern',
              'Priorisierung von Eigenverbrauch für maximale Energieeffizienz',
              'Automatische Geräteaktivierung bei PV-Überschuss (z. B. Waschmaschine, Wallbox)',
              'Echtzeit-Überwachung von Erzeugung, Verbrauch und Ladezustand',
              'Optimierung über lernende Algorithmen und dynamische Stromtarife',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: gray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: blue, flexShrink: 0, marginTop: '6px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/smart_2.png" alt="PV Smart Home Integration"
          style={{ borderRadius: '16px', boxShadow: '0 16px 48px rgba(11,27,77,0.12)', width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Feature Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {[
          { icon: <Lightbulb size={28} />, title: 'Beleuchtung', desc: 'Automatische Lichtsteuerung nach Tageszeit – Dimmen, Farbwechsel, Szenarien.' },
          { icon: <Thermometer size={28} />, title: 'Heizungssteuerung', desc: 'Bis zu 30% Heizkosten sparen durch intelligente Raumtemperaturregelung.' },
          { icon: <Shield size={28} />, title: 'Sicherheit', desc: 'Kameras, Bewegungsmelder, smarte Türschlösser – alles auf Ihrem Smartphone.' },
          { icon: <Smartphone size={28} />, title: 'App-Steuerung', desc: 'Licht, Heizung, Sicherheit in einer App. Fernsteuerung von überall.' },
          { icon: <Wifi size={28} />, title: 'Vernetzung', desc: 'KNX, Zigbee oder WLAN – wir finden die beste Lösung für Ihr Zuhause.' },
          { icon: <HomeIcon size={28} />, title: 'Komfort', desc: 'Szenarien wie „Guten Morgen" steuern automatisch alle Geräte.' },
        ].map(card => (
          <div key={card.title} style={{
            background: `linear-gradient(135deg, ${navy}, ${blue})`,
            borderRadius: '16px', padding: '1.5rem', color: '#fff',
          }}>
            <div style={{ marginBottom: '0.75rem', opacity: 0.9 }}>{card.icon}</div>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{card.title}</h4>
            <p style={{ opacity: 0.85, fontSize: '0.88rem', lineHeight: 1.6 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION: ÜBER UNS
───────────────────────────────────────────── */
const UberUnsSection: React.FC = () => (
  <section id="uber-uns" style={{ padding: '5rem 5%', background: '#fff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        {badge('ÜBER UNS')}
        <h2 style={sectionTitle}>Ihr Partner für Zukunftstechnologien</h2>
        <p style={sectionSubtitle}>
          Als innovatives Unternehmen im Bereich erneuerbarer Energien und Smart Home
          bieten wir ganzheitliche Lösungen – umweltfreundlich und wirtschaftlich sinnvoll.
        </p>
      </div>

      {/* Company text + image */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
        <img src="/images/about_1.png" alt="Unser Team"
          style={{ borderRadius: '16px', boxShadow: '0 16px 48px rgba(11,27,77,0.12)', width: '100%', objectFit: 'cover' }} />
        <div>
          <p style={{ color: gray, lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.97rem' }}>
            Unsere Expertise umfasst die Planung, Installation und Wartung von Photovoltaikanlagen,
            Energiespeichersystemen und intelligenten Haussteuerungen. Dabei setzen wir auf
            modernste Technologien und arbeiten ausschließlich mit renommierten Herstellern zusammen.
          </p>
          <p style={{ color: gray, lineHeight: 1.8, fontSize: '0.97rem' }}>
            Von der ersten Beratung bis zur finalen Inbetriebnahme begleiten wir Sie persönlich
            und sorgen dafür, dass Ihr Projekt termingerecht und in höchster Qualität umgesetzt wird.
          </p>
        </div>
      </div>

      {/* Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {[
          { icon: <Target size={28} color={blue} />, title: 'Qualität', desc: 'Höchste Standards bei Produkten, Installation und Service.' },
          { icon: <Users size={28} color={blue} />, title: 'Partnerschaft', desc: 'Langfristige Beziehungen auf Basis von Vertrauen.' },
          { icon: <Award size={28} color={blue} />, title: 'Innovation', desc: 'Neueste Technologien für maximale Effizienz.' },
          { icon: <Heart size={28} color={blue} />, title: 'Nachhaltigkeit', desc: 'Beitrag zum Klimaschutz für kommende Generationen.' },
        ].map(val => (
          <div key={val.title} style={{ textAlign: 'center', padding: '1.5rem', background: light, borderRadius: '16px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              {val.icon}
            </div>
            <h4 style={{ fontWeight: 700, color: text, marginBottom: '0.4rem' }}>{val.title}</h4>
            <p style={{ color: gray, fontSize: '0.88rem', lineHeight: 1.6 }}>{val.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
        {[
          { icon: <Users size={32} />, title: 'Projektleitung', desc: 'Koordination aller Gewerke und termingerechte Projektumsetzung.' },
          { icon: <Award size={32} />, title: 'Montage-Teams', desc: 'Zertifizierte Installateure mit jahrelanger Branchenerfahrung.' },
          { icon: <Target size={32} />, title: 'Kundenbetreuung', desc: 'Persönliche Ansprechpartner für Beratung, Service und Wartung.' },
        ].map(team => (
          <div key={team.title} style={{
            background: `linear-gradient(135deg, ${navy}, ${blue})`,
            borderRadius: '16px', padding: '2rem', color: '#fff', textAlign: 'center',
          }}>
            <div style={{ marginBottom: '1rem', opacity: 0.9 }}>{team.icon}</div>
            <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>{team.title}</h4>
            <p style={{ opacity: 0.85, fontSize: '0.9rem', lineHeight: 1.6 }}>{team.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION: FAQ
───────────────────────────────────────────── */
const faqs = [
  { q: 'Wie lange dauert die Installation einer PV-Anlage?', a: 'In der Regel dauert die komplette Installation inkl. Anmeldung 4–8 Wochen ab Auftragserteilung. Wir kümmern uns um alle behördlichen Anmeldungen.' },
  { q: 'Welche Fördermöglichkeiten gibt es?', a: 'Es gibt aktuell verschiedene Förderprogramme auf Bundes- und Landesebene. Wir beraten Sie in einem kostenlosen Erstgespräch zu den aktuell verfügbaren Förderungen.' },
  { q: 'Kann ich ein Smart Home auch nachrüsten?', a: 'Ja, viele unserer Smart-Home-Lösungen lassen sich problemlos in Bestandsgebäude integrieren. Wir prüfen Ihre Situation und empfehlen die beste Lösung.' },
  { q: 'Wie lange halten die Solarmodule?', a: 'Hochwertige Solarmodule haben eine Lebensdauer von 25–30 Jahren. Die meisten Hersteller geben 25 Jahre Leistungsgarantie.' },
  { q: 'Was kostet eine PV-Anlage inkl. Speicher?', a: 'Die Kosten variieren je nach Anlagengröße und Bedarf. In einem kostenlosen Erstgespräch erstellen wir Ihnen ein individuelles Angebot.' },
  { q: 'Bietet ihr auch Wartung und Service an?', a: 'Ja, wir bieten Wartungsverträge für PV-Anlagen und Smart-Home-Systeme an. Remote-Monitoring ermöglicht uns schnelle Reaktion bei Problemen.' },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: '5rem 5%', background: light }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {badge('FAQ')}
          <h2 style={sectionTitle}>Häufige Fragen</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: '12px',
              border: `1px solid ${open === i ? blue : 'rgba(26,86,232,0.1)'}`,
              overflow: 'hidden', transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '1.2rem 1.5rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{ fontWeight: 600, color: text, fontSize: '0.97rem' }}>{faq.q}</span>
                {open === i ? <ChevronUp size={18} color={blue} /> : <ChevronDown size={18} color={gray} />}
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.2rem', color: gray, lineHeight: 1.7, fontSize: '0.95rem' }}>
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

/* ─────────────────────────────────────────────
   SECTION: KONTAKT
───────────────────────────────────────────── */
const KontaktSection: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '', firstName: '', lastName: '',
    email: '', phone: '', service: '', postalCode: '', message: '',
    privacy: false, newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.85rem 1rem', borderRadius: '12px',
    border: '1.5px solid #E5E7EB', fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem', color: text, background: light,
    outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box',
  };

  return (
    <section id="kontakt" style={{ padding: '5rem 5%', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          {badge('KONTAKT')}
          <h2 style={sectionTitle}>Kontaktieren Sie uns</h2>
          <p style={sectionSubtitle}>Kostenlos und unverbindlich – wir melden uns schnell zurück.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Info Cards */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: text, marginBottom: '1rem' }}>So erreichen Sie uns</h3>
            <p style={{ color: gray, lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Ob per Telefon, WhatsApp oder Formular – wir sind für Sie da.
            </p>
            {[
              { icon: '📞', label: 'Telefon & WhatsApp', value: '+49 155 063 989 382', href: 'tel:+4915563989382' },
              { icon: '✉️', label: 'E-Mail', value: 'info@smartersystem.de', href: 'mailto:info@smartersystem.de' },
              { icon: '🕐', label: 'Erreichbarkeit', value: 'Montag bis Freitag 9–18 Uhr', href: null },
            ].map(card => (
              <div key={card.label} style={{
                background: light, borderRadius: '14px', padding: '1rem 1.3rem',
                display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem',
                border: '1px solid rgba(26,86,232,0.1)',
              }}>
                <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{card.icon}</div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: blue, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>{card.label}</span>
                  {card.href ? (
                    <a href={card.href} style={{ color: text, fontWeight: 500, textDecoration: 'none', fontSize: '0.93rem' }}>{card.value}</a>
                  ) : (
                    <span style={{ color: text, fontWeight: 500, fontSize: '0.93rem' }}>{card.value}</span>
                  )}
                </div>
              </div>
            ))}
            {/* WhatsApp highlight */}
            <div style={{
              background: `linear-gradient(135deg, ${navy}, ${blue})`,
              borderRadius: '14px', padding: '1rem 1.3rem',
              display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem',
            }}>
              <span style={{ fontSize: '1.8rem' }}>💬</span>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: cyan, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>Schnellste Option</span>
                <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.93rem' }}>WhatsApp – oft in Minuten beantwortet</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#fff', borderRadius: '24px', padding: '2.5rem',
            boxShadow: '0 20px 60px rgba(26,86,232,0.1)',
            border: '1px solid rgba(26,86,232,0.08)',
          }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.3rem', color: text, marginBottom: '1.8rem' }}>Anfrage senden</h3>

            {submitted ? (
              <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', color: '#065F46', borderRadius: '12px', padding: '1.2rem 1.5rem', fontWeight: 500 }}>
                ✅ Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich.
              </div>
            ) : (
              <form action="https://formsubmit.co/info@smartersystem.de" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_subject" value="Neue Kontaktanfrage über das Formular" />

                <input type="text" name="company" placeholder="Unternehmen (optional)" value={formData.company} onChange={handleChange} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" name="firstName" placeholder="Vorname *" required value={formData.firstName} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />
                  <input type="text" name="lastName" placeholder="Nachname *" required value={formData.lastName} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="email" name="email" placeholder="E-Mail *" required value={formData.email} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />
                  <input type="tel" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <select name="service" value={formData.service} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }}>
                    <option value="">Interessiert an...</option>
                    <option value="pv-speicher">PV und Speicher</option>
                    <option value="smart-home">Smart Home</option>
                    <option value="komplett">PV + Smart Home</option>
                  </select>
                  <input type="text" name="postalCode" placeholder="Postleitzahl" value={formData.postalCode} onChange={handleChange} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />
                </div>

                <textarea name="message" placeholder="Ihre Nachricht..." rows={4} value={formData.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = blue; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = light; }} />

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.875rem', color: gray, lineHeight: 1.5, cursor: 'pointer' }}>
                  <input type="checkbox" name="privacy" required checked={formData.privacy} onChange={handleChange}
                    style={{ width: '18px', height: '18px', marginTop: '1px', accentColor: blue, flexShrink: 0 }} />
                  Ich habe die <Link to="/datenschutz" style={{ color: blue, textDecoration: 'underline', marginLeft: '4px', marginRight: '4px' }}>Datenschutzerklärung</Link> gelesen und stimme zu. *
                </label>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.875rem', color: gray, lineHeight: 1.5, cursor: 'pointer' }}>
                  <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange}
                    style={{ width: '18px', height: '18px', marginTop: '1px', accentColor: blue, flexShrink: 0 }} />
                  Ich möchte News und Angebote erhalten. (Jederzeit abbestellbar.)
                </label>

                <button type="submit"
                  style={{
                    ...btnPrimary, justifyContent: 'center', padding: '1rem',
                    borderRadius: '12px', fontSize: '1rem', fontFamily: "'Playfair Display', serif",
                    boxShadow: '0 8px 24px rgba(26,86,232,0.3)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = blueDark; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = blue; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  <Send size={16} /> Anfrage senden →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
const Home: React.FC = () => (
  <div>
    <HeroSection />
    <LeistungenSection />
    <PVSpeicherSection />
    <SmartHomeSection />
    <UberUnsSection />
    <FAQSection />
    <KontaktSection />
  </div>
);

export default Home;
