'use client'

import { motion } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'

export default function FoundingMembers() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-numa-azul-caribe to-[#2d6a6a]" id="founding-members">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="bg-numa-dorado text-numa-negro px-5 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2">
            ⭐ SOLO 100 FOUNDING MEMBERS
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif font-bold text-numa-blanco mb-6"
        >
          Los Primeros 100
        </motion.h2>

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-numa-blanco/90 max-w-3xl mx-auto mb-16 font-sans"
        >
          No eres un cliente. Eres un co-creador del primer club de bienestar social de México.
        </motion.p>

        {/* Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-numa-blanco/95 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl"
        >

          <h3 className="text-3xl md:text-4xl font-serif font-bold text-numa-azul-caribe mb-4">
            40% DE DESCUENTO DE POR VIDA
          </h3>

          <p className="text-lg text-gray-600 mb-10 font-sans">
            Solo para los primeros 100 miembros
          </p>

          {/* Pricing Preview */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">

              {/* Tier Preview - Infinite */}
              <div className="text-center md:text-left">
                <span className="block text-gray-500 text-sm uppercase tracking-wider mb-3 font-sans">
                  Infinite
                </span>
                <div className="mb-3">
                  <span className="line-through text-gray-400 text-2xl mr-3">
                    $4,000
                  </span>
                  <span className="text-numa-dorado text-5xl font-bold">
                    $2,400
                  </span>
                  <span className="text-numa-azul-caribe text-2xl font-semibold">/mes</span>
                </div>
                <p className="text-numa-azul-caribe font-semibold text-sm">
                  🔒 Locked forever
                </p>
              </div>

              {/* Savings */}
              <div className="text-center md:text-left border-l-4 border-numa-dorado pl-6">
                <div className="text-3xl md:text-4xl text-numa-azul-caribe font-bold mb-2">
                  Ahorras $19,200/año
                </div>
                <div className="text-lg text-gray-600 font-sans">
                  En 5 años: $96,000 MXN
                </div>
              </div>

            </div>
          </div>

          {/* Benefits List */}
          <h4 className="text-2xl font-serif font-bold text-numa-azul-caribe mb-6">
            + BENEFICIOS EXCLUSIVOS FOUNDING MEMBERS:
          </h4>

          <ul className="text-left max-w-2xl mx-auto mb-10 space-y-4">
            {[
              '🏛️ Tu nombre en placa fundadora permanente',
              '🔒 Pricing de $2,400 garantizado de por vida',
              '🚀 Early access exclusivo (3 meses antes del público)',
              '🎯 Voz en decisiones de diseño y eventos del club',
              '👑 Founding Member badge numerado + merch exclusivo',
              '🎉 Invitación a evento fundacional privado',
            ].map((benefit, idx) => (
              <li key={idx} className="py-3 text-gray-800 border-b border-gray-200 last:border-0 font-sans">
                {benefit}
              </li>
            ))}
          </ul>

          {/* Commitment Info */}
          <div className="bg-yellow-50 border-l-4 border-numa-dorado p-6 rounded-lg mb-10 text-left">
            <p className="text-yellow-800 leading-relaxed font-sans">
              <strong>Compromiso:</strong> 12 meses mínimos desde la apertura del club (Q3-Q4 2026).
              Después, continúa mes a mes manteniendo tu descuento de por vida.
              <strong> Garantía de 30 días</strong> en el primer mes.
            </p>
          </div>

          {/* Urgency Box */}
          <div className="mb-8">
            {/* Progress Bar */}
            <div className="bg-gray-300 h-3 rounded-full mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '53%' }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                className="bg-gradient-to-r from-numa-dorado to-[#f4d03f] h-full rounded-full"
              />
            </div>
            <p className="text-lg text-numa-dorado font-bold mb-2">
              🔥 Solo quedan 47 de 100 spots
            </p>
            <p className="text-gray-600 font-sans">
              ⏰ Pre-venta cierra en: <span className="font-bold text-numa-azul-caribe">23 días, 14 horas</span>
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('memberships')}
            className="btn-hover bg-gradient-to-r from-numa-dorado to-[#f4d03f] text-numa-negro px-12 py-5 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
          >
            VER MEMBRESÍAS Y ASEGURAR MI DESCUENTO →
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mt-8 leading-relaxed font-sans">
            * Después de los primeros 100, precios vuelven a regulares<br />
            ($750-$4,000/mes) y beneficios Founding desaparecen
          </p>

        </motion.div>

      </div>
    </section>
  )
}
