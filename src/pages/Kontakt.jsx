import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

// =============================================================================
// EMAILJS KONFIGURATION
// Registrieren Sie sich kostenlos auf https://www.emailjs.com
// und ersetzen Sie diese drei Werte mit Ihren eigenen Zugangsdaten:
// =============================================================================
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // z.B. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // z.B. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // z.B. 'aBcDeFgHiJkLmNoP'
// =============================================================================

export default function Kontakt() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [privacy, setPrivacy] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!privacy) return

    setStatus('loading')

    // Collect form data manually so we can include newsletter checkbox
    const data = new FormData(formRef.current)
    const templateParams = {
      company:    data.get('company') || '–',
      fname:      data.get('fname'),
      lname:      data.get('lname'),
      email:      data.get('email'),
      phone:      data.get('phone') || '–',
      zip:        data.get('zip') || '–',
      message:    data.get('message') || '–',
      newsletter: newsletter ? 'Ja' : 'Nein',
      to_email:   'info@smartersystem.de',
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setPrivacy(false)
      setNewsletter(false)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <>
      {/* PAGE HEADER */}
      <div className="px-[5%] py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
        <h1 className="font-playfair font-extrabold text-white mb-3" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
          Kontaktieren Sie uns
        </h1>
        <p className="text-white/80 text-lg">Wir freuen uns auf Ihre Anfrage – kostenlos und unverbindlich</p>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 px-[5%] bg-[#F0F4FF]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
          
          {/* LEFT: INFO */}
          <div>
            <h2 className="font-playfair font-extrabold text-gray-900 text-3xl mb-3">So erreichen Sie uns</h2>
            <p className="text-gray-500 leading-relaxed mb-8">Ob per Telefon, WhatsApp oder Formular – wir sind für Sie da und melden uns schnell zurück.</p>
            
            {[
              { icon: '📱', label: 'Telefon & WhatsApp', value: '+49 155 063 989 382', href: 'tel:+4915563989382' },
              { icon: '✉️', label: 'E-Mail', value: 'info@smartersystem.de', href: 'mailto:info@smartersystem.de' },
              { icon: '🕐', label: 'Erreichbarkeit', value: 'Montag bis Freitag 9–18 Uhr', href: null },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex items-center gap-4 mb-3 border border-[#1A56E8]/10 hover:border-[#1A56E8]/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl grid place-items-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #1A56E8, #38BDF8)' }}>
                  {card.icon}
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold text-[#1A56E8] uppercase tracking-widest">{card.label}</span>
                  {card.href
                    ? <a href={card.href} className="text-gray-900 font-medium text-sm no-underline hover:text-[#1A56E8]">{card.value}</a>
                    : <p className="text-gray-900 font-medium text-sm m-0">{card.value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="rounded-2xl p-4 flex items-center gap-4 mt-4"
              style={{ background: 'linear-gradient(135deg, #0B1B4D, #1A56E8)' }}>
              <div className="text-3xl">🗱</div>
              <div>
                <span className="block text-[#38BDF8] text-[0.7rem] font-bold uppercase tracking-widest">Schnellste Option</span>
                <p className="text-white font-medium text-sm m-0">WhatsApp-Nachricht – oft in Minuten beantwortet</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-xl" style={{ boxShadow: '0 20px 60px rgba(26,86,232,0.1)' }}>
            <h3 className="font-playfair font-bold text-gray-900 text-2xl mb-7">Anfrage senden</h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Company */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Unternehmen (optional)</label>
                <input name="company" type="text" placeholder="Ihr Unternehmen"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
              </div>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Vorname *</label>
                  <input name="fname" type="text" placeholder="Max" required
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Nachname *</label>
                  <input name="lname" type="text" placeholder="Mustermann" required
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">E-Mail-Adresse *</label>
                  <input name="email" type="email" placeholder="max@beispiel.de" required
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1.5">Telefon</label>
                  <input name="phone" type="tel" placeholder="+49 ..."
                    className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
                </div>
              </div>

              {/* ZIP */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Postleitzahl der Immobilie</label>
                <input name="zip" type="text" placeholder="10115"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all" />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Ihre Nachricht</label>
                <textarea name="message" rows={4} placeholder="Beschreiben Sie kurz, was Sie sich vorstellen …"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-gray-200 bg-[#F0F4FF] text-gray-900 text-sm outline-none focus:border-[#1A56E8] focus:bg-white focus:ring-4 focus:ring-[#1A56E8]/8 transition-all resize-y min-h-[100px]" />
              </div>

              {/* Privacy */}
              <label className="flex items-start gap-2.5 mb-3 cursor-pointer text-sm text-gray-500 leading-relaxed">
                <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)}
                  className="w-4 h-4 flex-shrink-0 mt-0.5 accent-[#1A56E8]" required />
                Ich habe die <Link to="/datenschutz" className="text-[#1A56E8] underline">Datenschutzerklärung</Link> gelesen und bin damit einverstanden. *
              </label>

              {/* Newsletter */}
              <label className="flex items-start gap-2.5 mb-6 cursor-pointer text-sm text-gray-500 leading-relaxed">
                <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)}
                  className="w-4 h-4 flex-shrink-0 mt-0.5 accent-[#1A56E8]" />
                Ich möchte aktuelle News und Angebote von Sky Way Technology erhalten. (Kann jederzeit abbestellt werden.)
              </label>

              <button type="submit" disabled={status === 'loading' || !privacy}
                className="w-full py-4 bg-[#1A56E8] text-white rounded-xl font-playfair font-bold text-base cursor-pointer transition-all hover:bg-[#0F3BAA] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                style={{ boxShadow: '0 8px 24px rgba(26,86,232,0.3)' }}>
                {status === 'loading' ? 'Wird gesendet…' : 'Anfrage senden →'}
              </button>

              {status === 'success' && (
                <div className="mt-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 text-sm font-medium">
                  ✅ Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm font-medium">
                  ❌ Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an <a href="mailto:info@smartersystem.de" className="underline">info@smartersystem.de</a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
