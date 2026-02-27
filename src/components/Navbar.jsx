import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-4 bg-white border-b border-gray-200 shadow-sm">
      <Link to="/" className="flex items-center gap-2 font-bold text-[#1A56E8] text-lg no-underline">
        <img src="/logo.png" alt="Logo" className="h-24 w-auto sm:h-30 md:h-36"/>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 list-none">
        <li><NavLink to="/" end className="text-sm font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Startseite</NavLink></li>
        <li><a href="/#leistungen" className="text-sm font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Leistungen</a></li>
        <li><a href="/#prozess" className="text-sm font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Prozess</a></li>
        <li><a href="/#faq" className="text-sm font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">FAQ</a></li>
      </ul>

      <Link to="/kontakt" className="hidden md:inline-block btn-primary">Kontakt &amp; Angebot</Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-8 relative w-10 h-10 z-50 overflow-visible"
        onClick={() => setOpen(!open)}
        aria-label="Menü"
      >
        <div className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "rotate-45" : "-translate-y-2"}`}></div>
        <div className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "opacity-0" : ""}`}></div>
        <div className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "-rotate-45" : "translate-y-2"}`}></div>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col px-[5%] py-4 gap-4">
            <NavLink to="/" end onClick={() => setOpen(false)} className="text-sm font-medium text-gray-800 no-underline">Startseite</NavLink>
            <a href="/#leistungen" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-800 no-underline">Leistungen</a>
            <a href="/#prozess" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-800 no-underline">Prozess</a>
            <a href="/#faq" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-800 no-underline">FAQ</a>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="btn-primary text-center">Kontakt &amp; Angebot</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
