'use client'

import { motion } from 'framer-motion'

export default function FoundingTerms() {
  const terms = [
    {
      icon: '📅',
      title: 'Permanencia Mínima',
      items: [
        'Commitment de 12 meses desde fecha de apertura del club',
        'Pagos mensuales comienzan cuando NUMA abre (Q3-Q4 2026)',
        'Después de 12 meses, continúa mes a mes sin permanencia',
      ],
    },
    {
      icon: '🔒',
      title: 'Discount Locked de Por Vida',
      items: [
        'Tu precio Founding (40% off) está garantizado mientras mantengas membresía activa',
        'Si cancelas y regresas después, pagas precio regular',
        'Puedes pausar membresía hasta 3 meses/año sin perder discount',
      ],
    },
    {
      icon: '⚠️',
      title: 'Cancelación Temprana',
      description: 'Si cancelas antes de completar 12 meses, se cobra diferencia a precio regular por los meses ya consumidos.',
      example: {
        title: 'Ejemplo: Infinite Founder cancela en mes 6',
        details: [
          'Pagó: $2,400 × 6 = $14,400',
          'Debería: $4,000 × 6 = $24,000',
          'Diferencia: $9,600',
        ],
      },
    },
    {
      icon: '✅',
      title: 'Garantía de Satisfacción',
      items: [
        'Primer mes es "trial"',
        'Si no estás satisfecho en los primeros 30 días, reembolso completo sin preguntas',
        'Después del primer mes, aplica permanencia de 12 meses',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50" id="founding-terms">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-numa-azul-caribe mb-4">
            Términos de Founding Membership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Transparencia total. Aquí está todo lo que necesitas saber.
          </p>
        </motion.div>

        {/* Terms Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-serif font-bold text-numa-azul-caribe mb-6 flex items-center gap-3">
                <span className="text-4xl">{term.icon}</span>
                {term.title}
              </h3>

              {term.items && (
                <ul className="space-y-4">
                  {term.items.map((item, idx) => (
                    <li key={idx} className="pb-3 border-b border-gray-200 last:border-0 text-gray-700 leading-relaxed font-sans">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              )}

              {term.description && (
                <div className="text-gray-700 leading-relaxed mb-4 font-sans">
                  <p className="mb-4">{term.description}</p>
                  {term.example && (
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <strong className="block mb-2">{term.example.title}</strong>
                      {term.example.details.map((detail, idx) => (
                        <div key={idx} className="mb-1">
                          {idx === term.example.details.length - 1 ? (
                            <span className="text-numa-dorado font-bold">• {detail}</span>
                          ) : (
                            <span>• {detail}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white border-l-4 border-numa-dorado rounded-lg p-8"
        >
          <h4 className="text-xl font-serif font-bold text-numa-azul-caribe mb-4">
            📍 Retrasos en Apertura
          </h4>
          <p className="text-gray-700 leading-relaxed font-sans">
            Si la apertura se retrasa más de 3 meses (pasado Diciembre 2026), tienes opción de reembolso completo
            o mantener tu reserva. Los 12 meses de permanencia cuentan desde la fecha real de apertura,
            no desde la fecha estimada original.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
