import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0B1B4D] text-white/70 pt-10 pb-6 px-[5%] mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6">
        <div>
          <h4 className="font-playfair font-bold text-white mb-4 text-sm">Navigation</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li><Link to="/" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">Startseite</Link></li>
            <li><a href="/#leistungen" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">Leistungen</a></li>
            <li><a href="/#prozess" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">Prozess</a></li>
            <li><a href="/#faq" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-playfair font-bold text-white mb-4 text-sm">Rechtliches</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li><Link to="/datenschutz" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">Datenschutz</Link></li>
            <li><Link to="/impressum" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">Impressum</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-playfair font-bold text-white mb-4 text-sm">Kontakt</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li><a href="tel:+4915563989382" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">📞 +49 155 63 989 382</a></li>
            <li><a href="mailto:info@smartersystem.de" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">✉️ info@smartersystem.de</a></li>
            <li><Link to="/kontakt" className="text-white/60 hover:text-[#38BDF8] transition-colors text-sm no-underline">💬 Kontaktformular</Link></li>
            <li><span className="text-white/60 text-sm">🕐 Mo–Fr 9–18 Uhr</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-5 text-center text-xs text-white/40 max-w-6xl mx-auto">
        © Smarter System 2025 – Alle Rechte vorbehalten ·{' '}
        <Link to="/datenschutz" className="text-white/45 underline">Datenschutz</Link> ·{' '}
        <Link to="/impressum" className="text-white/45 underline">Impressum</Link>
      </div>
    </footer>
  )
}
