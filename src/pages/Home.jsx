import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { icon: '💡', title: 'Beleuchtung', desc: 'Automatische Lichtsteuerung nach Tageszeit und Anwesenheit. Dimmen, Farbwechsel und Szenarien für jeden Anlass. Energieeffiziente LED-Technik mit intelligenter Steuerung.' },
  { icon: '🌡️', title: 'Heizungssteuerung', desc: 'Intelligente Raumtemperaturregelung spart bis zu 30 % Heizkosten. Automatische Anpassung an Ihre Gewohnheiten und Zeitpläne.' },
  { icon: '🔒', title: 'Sicherheit', desc: 'Überwachungskameras, Bewegungsmelder und smarte Türschlösser. Benachrichtigungen auf Ihr Smartphone und automatische Reaktionen bei Abwesenheit.' },
  { icon: '📱', title: 'App-Steuerung', desc: 'Alles in einer App: Licht, Heizung, Sicherheit und mehr. Fernsteuerung von überall, Zeitschaltungen und individuelle Automatisierungen.' },
  { icon: '🔧', title: 'Nachrüst-Installation', desc: 'Smart Home für jede Wohnung – egal ob Altbau, Neubau oder Büro. Unsere Systeme lassen sich sauber und schnell nachrüsten ohne bauliche Eingriffe.' },
  { icon: '✨', title: 'Komfort', desc: 'Szenarien wie „Guten Morgen" oder „Urlaub" steuern automatisch alle Geräte. Sprachsteuerung und Gestensteuerung für ultimativen Komfort.' },
]

const steps = [
  { num: '1', icon: '🔍', title: 'Bedarfsanalyse', desc: 'In einer kostenlosen Erstberatung besprechen wir Ihre Wünsche und die baulichen Gegebenheiten vor Ort.' },
  { num: '2', icon: '📋', title: 'Individuelle Planung', desc: 'Ich erstelle ein passgenaues Konzept. Alle Komponenten werden vorab konfiguriert, um die Installationszeit kurz zu halten.' },
  { num: '3', icon: '🛠️', title: 'Fachgerechte Montage', desc: 'Die Nachrüstung erfolgt in kürzester Zeit – sauber, per Funk und ohne Arbeiten am Stromnetz oder der Bausubstanz.' },
  { num: '4', icon: '🎓', title: 'Einweisung & Übergabe', desc: 'Sie erhalten eine ausführliche Einweisung. Wir richten gemeinsam alle Funktionen ein, bis Sie sich sicher im Umgang fühlen.' },
]

const faqs = [
  {
    q: 'Benötige ich für die Installation die Erlaubnis meines Vermieters?',
    a: 'Da ausschließlich moderne Funktechnologie eingesetzt wird, entfallen bauliche Maßnahmen wie das Klopfen von Schlitzen oder das Verlegen von Kabeln vollständig. Die Systeme sind deshalb in aller Regel genehmigungsfrei und können bei einem Umzug ohne Rückstände wieder entfernt werden.'
  },
  {
    q: 'Mit welchen Kosten muss ich ungefähr rechnen?',
    a: 'Weil jeder Bedarf anders ist, können die Preise variieren. Ein solides Einstiegspaket beginnt häufig schon im dreistelligen Bereich. Wer umfangreichere Lösungen mit Sturzerkennung, Beschattung oder Heizungssteuerung wünscht, sollte mit Kosten zwischen 1.500 € und 3.500 € rechnen. Ich gebe Ihnen im kostenlosen Erstgespräch gerne eine erste Einschätzung.'
  },
  {
    q: 'Besteht ein Anspruch auf finanzielle Unterstützung?',
    a: 'Liegt ein Pflegegrad vor, lassen sich Zuschüsse für technische Assistenzsysteme bei der zuständigen Pflegekasse beantragen. Der maximale Förderbetrag für Maßnahmen zur Wohnumfeldverbesserung beträgt 4.000 €. Über Bewilligung und Abwicklung des Antragsverfahrens entscheidet die jeweilige Pflegekasse.'
  },
  {
    q: 'Welche Voraussetzungen müssen vor Ort gegeben sein?',
    a: 'Entscheidend ist ein stabiler Internetanschluss (WLAN) sowie – für die Steuerung und Benachrichtigung von außen – ein Smartphone bei einer Vertrauensperson. Fehlt ein Internetanschluss, kann ich diesen kostengünstig über eine vorhandene Anschlussdose oder Mobilfunk einrichten. Alles Weitere bringe ich mit.'
  },
  {
    q: 'Was passiert, wenn das Internet einmal ausfällt?',
    a: 'Lokale Funktionen wie automatisches Licht oder Türzutritt per Code laufen weiterhin problemlos. Lediglich die Benachrichtigung nach außen ist während des Ausfalls unterbrochen – bei einem Verbindungsabbruch wird zudem automatisch eine Meldung versandt. Sobald das Internet wieder verfügbar ist, stellt das System alle Verbindungen selbstständig wieder her.'
  },
  {
    q: 'Ist die Technik auch für Menschen ohne Smartphone-Erfahrung geeignet?',
    a: 'Ein Smartphone oder Tablet ist keine zwingende Voraussetzung. Die Technik arbeitet vollständig selbstständig im Hintergrund und lässt sich auch über klassische Wandschalter für Licht, Heizung, Rollos oder das Türschloss bedienen. Das Smartphone wird ausschließlich von Vertrauenspersonen zur Information oder im Notfall genutzt.'
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left font-semibold text-gray-900 hover:text-[#1A56E8] transition-colors text-[0.95rem]"
        onClick={() => setOpen(!open)}
      >
        {q}
        <span className={`text-[#1A56E8] text-xl font-light ml-4 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="pb-5 text-gray-500 leading-relaxed text-sm">{a}</p>
      )}
    </div>
  )
}

const housePoints = [
  { label: 'Beleuchtung', icon: '💡', tip: 'Automatisches Licht nach Tageszeit & Bewegung', style: { top: '50%', left: '74%' } },
  { label: 'Türschloss', icon: '🔑', tip: 'Smarte Türschlösser – Zutritt per App, Code oder NFC', style: { top: '62%', left: '48%' } },
  { label: 'Kamera', icon: '📷', tip: 'HD-Überwachungskameras mit Live-Feed auf Ihr Smartphone', style: { top: '28%', left: '65%' } },
  { label: 'Heizung', icon: '🌡️', tip: 'Intelligente Raumtemperatur spart bis zu 30% Energie', style: { top: '28%', left: '22%' } },
  { label: 'Rollos', icon: '🏠', tip: 'Automatische Beschattung nach Sonnenstand & Wetter', style: { top: '50%', left: '58%' } },
  { label: 'Entertainment', icon: '🎵', tip: 'Multiroom-Audio und vernetzte Unterhaltung durch das ganze Haus', style: { top: '50%', left: '20%' } },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[91vh] flex items-center justify-center relative overflow-hidden text-center px-[5%] py-28"
        style={{ background: 'linear-gradient(160deg, #1246C8 0%, #1A56E8 40%, #2a8fd4 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-7">
            <span>✦</span> Smart Home Experten Berlin
          </div>
          <h1 className="font-playfair font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4rem)' }}>
            Ihr Zuhause. <br /><span className="italic opacity-90">Nur Smarter.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Wir verwandeln Ihr Zuhause in ein intelligentes Smart Home – zur Miete, zur Pflege oder einfach für mehr Komfort. Kompetent. Sauber. Ohne Bohren.
          </p>
        </div>
      </section>

      {/* HOUSE ILLUSTRATION */}
      <section className="bg-white py-20 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-label">Interaktiv</div>
            <h2 className="section-title text-3xl md:text-4xl">Entdecken Sie Ihr <span className="text-[#1A56E8]">Smart Home</span></h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(180deg, #1c3d7a 0%, #2a5a9e 35%, #1e4a80 65%, #18396a 100%)', height: '400px' }}>
            {/* Simple house SVG */}
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Sky gradient */}
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a3a6e" />
                  <stop offset="100%" stopColor="#2563a8" />
                </linearGradient>
                <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4c5a9" />
                  <stop offset="100%" stopColor="#c0b090" />
                </linearGradient>
              </defs>
              <rect width="800" height="400" fill="url(#skyGrad)" />
              {/* Stars */}
              {[{x:100,y:40},{x:250,y:25},{x:400,y:55},{x:600,y:30},{x:720,y:50},{x:160,y:80},{x:680,y:75}].map((s, i) => (
                <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="rgba(255,255,255,0.6)" />
              ))}
              {/* Moon */}
              <circle cx="700" cy="60" r="22" fill="rgba(255,255,255,0.12)" />
              <circle cx="690" cy="55" r="18" fill="#1c3d7a" />
              {/* Ground */}
              <rect x="0" y="320" width="800" height="80" fill="#1a3520" />
              <rect x="0" y="310" width="800" height="15" fill="#244228" />
              {/* House body */}
              <rect x="220" y="200" width="360" height="130" fill="url(#wallGrad)" />
              {/* Roof */}
              <polygon points="180,205 400,90 620,205" fill="#8B2020" />
              <polygon points="190,205 400,97 610,205" fill="#A52020" />
              {/* Chimney */}
              <rect x="490" y="110" width="30" height="60" fill="#7a1818" />
              <rect x="485" y="105" width="40" height="10" fill="#6a1515" />
              {/* Windows left */}
              <rect x="255" y="225" width="70" height="55" rx="3" fill="#87CEEB" opacity="0.9" />
              <rect x="255" y="225" width="70" height="55" rx="3" fill="rgba(255,240,150,0.4)" />
              <line x1="290" y1="225" x2="290" y2="280" stroke="#555" strokeWidth="2" />
              <line x1="255" y1="252" x2="325" y2="252" stroke="#555" strokeWidth="2" />
              {/* Windows right */}
              <rect x="475" y="225" width="70" height="55" rx="3" fill="#87CEEB" opacity="0.9" />
              <rect x="475" y="225" width="70" height="55" rx="3" fill="rgba(255,240,150,0.4)" />
              <line x1="510" y1="225" x2="510" y2="280" stroke="#555" strokeWidth="2" />
              <line x1="475" y1="252" x2="545" y2="252" stroke="#555" strokeWidth="2" />
              {/* Door */}
              <rect x="360" y="265" width="80" height="65" rx="2" fill="#6B3A1F" />
              <rect x="368" y="273" width="28" height="40" rx="1" fill="#5a2f18" />
              <rect x="404" y="273" width="28" height="40" rx="1" fill="#5a2f18" />
              <circle cx="396" cy="300" r="3" fill="#d4a04a" />
              <circle cx="406" cy="300" r="3" fill="#d4a04a" />
              {/* Path */}
              <polygon points="375,330 425,330 440,390 360,390" fill="#9e8b6a" />
              {/* Bushes */}
              <ellipse cx="230" cy="325" rx="30" ry="18" fill="#2d5a27" />
              <ellipse cx="570" cy="325" rx="30" ry="18" fill="#2d5a27" />
              {/* Lamp post */}
              <rect x="616" y="250" width="5" height="75" fill="#555" />
              <ellipse cx="618" cy="248" rx="12" ry="6" fill="#888" />
              <ellipse cx="618" cy="248" rx="8" ry="4" fill="rgba(255,240,100,0.8)" />
            </svg>

            {/* Interactive hotspots */}
            {housePoints.map((p, i) => (
              <div key={i} className="absolute group" style={p.style}>
                <div className="flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full grid place-items-center text-lg
                    shadow-lg transition-all group-hover:bg-[#1A56E8]/85 group-hover:border-white/80 group-hover:scale-110">
                    {p.icon}
                  </div>
                  <span className="text-white text-[0.7rem] font-bold text-shadow drop-shadow-lg whitespace-nowrap">{p.label}</span>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1A56E8]/95 backdrop-blur-sm text-white text-xs
                    rounded-xl px-3 py-2 max-w-[180px] text-center leading-snug opacity-0 group-hover:opacity-100 translate-y-2
                    group-hover:translate-y-0 transition-all pointer-events-none shadow-xl z-20 whitespace-normal">
                    {p.tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1A56E8]/95" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">↑ Bewegen Sie die Maus über die Icons für Details</p>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="bg-[#F0F4FF] py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label">Unsere Leistungen</div>
            <h2 className="section-title text-3xl md:text-4xl">Smart Home <span className="text-[#1A56E8]">Vorteile</span> im Überblick</h2>
            <p className="text-gray-500 text-lg mt-3">Von Beleuchtung bis Sicherheit – wir machen Ihr Zuhause intelligent.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section id="prozess" className="bg-white py-24 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label">Unser Prozess</div>
            <h2 className="section-title text-3xl md:text-4xl">In vier Schritten zum <span className="text-[#1A56E8]">sicheren Zuhause</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-[#F0F4FF] rounded-2xl grid place-items-center text-3xl mx-auto">{s.icon}</div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#1A56E8] text-white text-xs font-bold rounded-full grid place-items-center">{s.num}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-[5%] bg-[#F0F4FF]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label">Häufige Fragen</div>
            <h2 className="section-title text-3xl md:text-4xl">Ihre Fragen, <span className="text-[#1A56E8]">unsere Antworten</span></h2>
          </div>
          <div className="bg-white rounded-2xl px-8 shadow-sm border border-gray-100">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-[5%]">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B1B4D] to-[#1A56E8] rounded-3xl px-10 py-12 text-white text-center shadow-2xl">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">Kontaktieren Sie uns</h2>
          <p className="text-white/75 mb-8 text-lg">Ein unverbindliches Erstgespräch – damit wir gemeinsam herausfinden, was zu Ihnen passt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/kontakt"
              className="bg-white text-[#1A56E8] font-bold px-8 py-3.5 rounded-xl hover:bg-[#F0F4FF] transition-colors no-underline text-sm">
              Kontaktformular öffnen
            </Link>
            <a href="https://wa.me/4915563989382"
              className="flex items-center gap-3 bg-white/10 border border-white/30 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors no-underline">
              <div className="text-2xl">📱</div>
              <div className="text-left">
                <div className="text-white/60 text-xs">Anrufen oder WhatsApp</div>
                <div className="text-white font-semibold text-sm">+49 155 63 989 382</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
