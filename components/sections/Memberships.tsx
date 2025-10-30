'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const tiers = [
  {
    name: 'Explorer',
    price: '$750',
    foundingPrice: '$450',
    period: 'MXN/mes',
    visits: '2 clases/mes',
    description: 'Descubre el contraste térmico',
    features: [
      'Horarios valle (Lun-Vie 7AM-2PM)',
      'Thermal contrast + breathwork',
      'Toallas y amenities incluidos',
      'Acceso a Longevity Lab',
    ],
    cta: 'Ser Founding Member',
    popular: false,
  },
  {
    name: 'Regular',
    price: '$1,650',
    foundingPrice: '$990',
    period: 'MXN/mes',
    visits: '5 clases/mes',
    description: 'Bienestar consistente',
    features: [
      'Todo lo de Explorer',
      'Horarios amplios 7AM-10PM',
      'Priority booking',
      '10% descuento en retail',
    ],
    cta: 'Ser Founding Member',
    popular: false,
  },
  {
    name: 'Committed',
    price: '$2,900',
    foundingPrice: '$1,740',
    period: 'MXN/mes',
    visits: '12 clases/mes',
    description: 'Transformación profunda',
    features: [
      'Todo lo de Regular',
      'Sin restricción de horarios',
      'Acceso a eventos nocturnos',
      '2 guest passes mensuales',
    ],
    cta: 'Ser Founding Member',
    popular: true,
    badge: 'MÁS POPULAR',
  },
  {
    name: 'Infinite',
    price: '$4,000',
    foundingPrice: '$2,400',
    period: 'MXN/mes',
    visits: 'Ilimitado',
    description: 'Sin límites. Solo transformación.',
    features: [
      'Todo lo de Committed',
      '1 Guided/día + Free Flow extra',
      'The Inner Circle + coaching',
      'Pricing garantizado de por vida',
      'Sin fee de inscripción',
      'Tu nombre en placa fundadora',
    ],
    cta: 'Ser Founding Member',
    popular: false,
  },
]

export default function Memberships() {
  return (
    <section className="py-24 md:py-32 px-4 bg-numa-azul-caribe text-numa-blanco" id="memberships">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-numa-blanco mb-6">
            Elige tu{' '}
            <span className="text-numa-dorado font-medium italic">membresía</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-blanco/70 max-w-3xl mx-auto font-sans">
            Flexibilidad para cada estilo de vida
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl overflow-hidden ${
                tier.popular
                  ? 'bg-gradient-to-b from-numa-dorado/20 to-transparent border-2 border-numa-dorado'
                  : 'bg-numa-blanco/5 border border-numa-blanco/10'
              } card-hover`}
            >
              {/* Spots Left Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
                🔥 47 spots left
              </div>

              {/* Founding Pricing Header */}
              <div className="bg-gradient-to-r from-numa-dorado to-[#f4d03f] p-4 -mt-0">
                <div className="text-center">
                  <div className="text-xs text-numa-negro/70 uppercase tracking-wider mb-1 font-sans font-bold">
                    🏛️ Founding Member Pricing
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="line-through text-numa-negro/50 text-lg">
                      {tier.price}
                    </span>
                    <span className="text-numa-negro text-3xl font-bold">
                      {tier.foundingPrice}
                    </span>
                    <span className="text-numa-negro/80 text-sm font-semibold">/mes</span>
                  </div>
                  <div className="text-xs text-numa-negro/70 mt-1 font-sans font-semibold">
                    40% off locked forever
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Popular Badge */}
                {tier.popular && tier.badge && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                    <div className="bg-numa-dorado text-numa-negro px-4 py-1.5 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold">{tier.badge}</span>
                    </div>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-numa-blanco mb-3 mt-8">
                  {tier.name}
                </h3>

                {/* Visits */}
                <p className="text-numa-dorado text-base font-semibold mb-4 font-sans">{tier.visits}</p>

                {/* Description */}
                <p className="text-numa-blanco/70 mb-8 font-sans">
                  {tier.description}
                </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-numa-dorado/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-numa-dorado" strokeWidth={3} />
                    </div>
                    <span className="text-numa-blanco/90 text-sm font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollToSection('waitlist')}
                className={`w-full py-4 rounded-full font-semibold transition-all font-sans ${
                  tier.popular
                    ? 'bg-numa-terracota text-numa-blanco hover:bg-numa-azul-caribe btn-hover'
                    : 'bg-numa-blanco/10 text-numa-blanco hover:bg-numa-blanco/20 border border-numa-blanco/20'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-numa-blanco mb-2">
              Comparación detallada
            </h3>
            <p className="text-numa-blanco/60 font-sans">
              Encuentra la membresía perfecta para ti
            </p>
          </div>

          <div className="bg-numa-blanco/5 border border-numa-blanco/10 rounded-2xl p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-numa-blanco/90 font-medium font-sans">Beneficio</th>
                  <th className="pb-4 text-center text-numa-blanco/90 font-medium font-sans">Explorer</th>
                  <th className="pb-4 text-center text-numa-blanco/90 font-medium font-sans">Regular</th>
                  <th className="pb-4 text-center text-numa-dorado font-medium font-sans">Committed</th>
                  <th className="pb-4 text-center text-numa-blanco/90 font-medium font-sans">Infinite</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: 'Visitas mensuales', values: ['2', '5', '12', 'Ilimitado'] },
                  { label: 'Horarios', values: ['7AM-2PM', '7AM-10PM', 'Sin restricción', 'Sin restricción'] },
                  { label: 'Guest passes', values: ['-', '-', '2/mes', '3/mes'] },
                  { label: 'Priority booking', values: ['-', '✓', '✓', '✓'] },
                  { label: 'Eventos nocturnos', values: ['-', '-', '✓', '✓'] },
                  { label: 'The Inner Circle', values: ['-', '-', '-', '✓'] },
                  { label: 'Guided sessions', values: ['-', '-', '-', '1/día'] },
                  { label: 'Pricing de por vida', values: ['-', '-', '-', '✓'] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="py-4 text-numa-blanco/70 font-sans">{row.label}</td>
                    {row.values.map((value, vIdx) => (
                      <td key={vIdx} className="py-4 text-center text-numa-blanco/90 font-sans">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Day Pass Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-numa-blanco/60 font-sans">
              También ofrecemos <span className="text-numa-dorado font-semibold">day passes</span> a $500 MXN por visita para no miembros
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
