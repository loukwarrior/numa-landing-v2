'use client'

import { useState } from 'react'
import { Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }, 500)
  }

  return (
    <footer className="bg-numa-negro text-numa-blanco">
      {/* Newsletter Section */}
      <div className="border-b border-numa-blanco/10">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-numa-blanco mb-4">
                Mantente{' '}
                <span className="text-numa-dorado font-medium italic">conectado</span>
              </h3>
              <p className="text-numa-blanco/70 text-lg font-sans">
                Recibe contenido exclusivo sobre wellness, updates del club y acceso anticipado a eventos.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="bg-numa-azul-caribe/20 border-2 border-numa-azul-caribe rounded-2xl p-6 text-center">
                  <p className="text-numa-azul-caribe font-semibold text-lg font-sans">
                    ✓ ¡Gracias por suscribirte!
                  </p>
                  <p className="text-numa-blanco/70 text-sm mt-2 font-sans">
                    Revisa tu email para confirmar tu suscripción
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-6 py-4 bg-numa-blanco/10 border border-numa-blanco/20 rounded-full text-numa-blanco placeholder-numa-blanco/40 focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                  />
                  <button
                    type="submit"
                    className="btn-hover bg-numa-terracota text-numa-blanco px-8 py-4 rounded-full font-semibold flex items-center gap-2 font-sans hover:bg-numa-azul-caribe"
                  >
                    <Send className="w-5 h-5" />
                    <span className="hidden md:inline">Suscribirse</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h4 className="text-3xl font-serif font-bold text-numa-blanco mb-2">
                NUMA
              </h4>
              <p className="text-numa-dorado text-sm uppercase tracking-wider font-sans">
                Social Wellness Club
              </p>
            </div>
            <p className="text-numa-blanco/70 mb-6 leading-relaxed max-w-md font-sans">
              El primer club de bienestar social en México. Thermal contrast, breathwork, medicina ancestral y comunidad auténtica en el corazón del Caribe Mexicano.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/numasocialclub', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com/company/numa-social-wellness', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hola@numasocialwellness.club', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-numa-blanco/10 border border-numa-blanco/20 flex items-center justify-center text-numa-blanco hover:bg-numa-dorado hover:border-numa-dorado hover:text-numa-negro transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-numa-blanco font-semibold mb-4 uppercase tracking-wider text-sm font-sans">
              Enlaces
            </h5>
            <ul className="space-y-3">
              {[
                { label: 'Experiencias', href: '#experiences' },
                { label: 'Membresías', href: '#memberships' },
                { label: 'El Espacio', href: '#space' },
                { label: 'Comunidad', href: '#community' },
                { label: 'Ubicación', href: '#location' },
                { label: 'FAQ', href: '/faq' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-numa-blanco/70 hover:text-numa-dorado transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-numa-blanco font-semibold mb-4 uppercase tracking-wider text-sm font-sans">
              Contacto
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-numa-dorado flex-shrink-0 mt-0.5" />
                <span className="text-numa-blanco/70 text-sm font-sans">
                  Zona Hotelera<br />
                  Cancún, Quintana Roo<br />
                  México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-numa-dorado flex-shrink-0" />
                 <a
                   href="mailto:hola@numasocialwellness.club"
                   className="text-numa-blanco/70 hover:text-numa-dorado transition-colors text-sm font-sans"
                >
                  hola@numasocialwellness.club
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-numa-dorado flex-shrink-0" />
                 <a
                   href="tel:+525581042398"
                   className="text-numa-blanco/70 hover:text-numa-dorado transition-colors text-sm font-sans"
                >
                  +52 55 8104 2398
                </a>
              </li>
            </ul>

            {/* Press Kit */}
            <div className="mt-6">
              <a
                href="/press-kit"
                className="inline-flex items-center gap-2 text-numa-dorado hover:text-numa-terracota transition-colors text-sm font-semibold font-sans"
              >
                <span>Press Kit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-numa-blanco/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-numa-blanco/50 font-sans">
          <p>
            © {new Date().getFullYear()} NUMA Social Wellness Club. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-numa-dorado transition-colors">
              Privacidad
            </a>
            <a href="/terms" className="hover:text-numa-dorado transition-colors">
              Términos
            </a>
            <a href="/cookies" className="hover:text-numa-dorado transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
