'use client'

import { motion } from 'framer-motion'
import { MapPin, Plane, Sun, Waves, Building2, TrendingUp } from 'lucide-react'

const whyCancun = [
  {
    icon: Sun,
    title: 'Clima ideal',
    description: '300+ días de sol al año. Temperatura promedio 26°C perfecta para contrast therapy.',
  },
  {
    icon: Waves,
    title: 'Mar Caribe',
    description: 'Acceso a playas vírgenes y cenotes sagrados mayas a minutos del club.',
  },
  {
    icon: Plane,
    title: 'Conectividad global',
    description: 'Aeropuerto internacional con vuelos directos desde 70+ ciudades del mundo.',
  },
  {
    icon: Building2,
    title: 'Hub wellness',
    description: 'Epicentro del turismo wellness en Latinoamérica con crecimiento del 25% anual.',
  },
]

const expansionPlans = [
  { city: 'Tulum', status: 'Q1 2027', phase: 'En planeación' },
  { city: 'Ciudad de México', status: 'Q3 2027', phase: 'Investigación' },
  { city: 'Monterrey', status: 'Q1 2028', phase: 'Futuro' },
]

export default function Location() {
  return (
    <section className="py-24 md:py-32 px-4 bg-numa-blanco" id="location">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-numa-dorado" />
            <span className="text-numa-dorado font-semibold uppercase tracking-wider text-sm font-sans">
              Ubicación
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-numa-negro mb-6">
            Cancún,{' '}
            <span className="text-numa-dorado font-medium italic">México</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-gris-cálido max-w-3xl mx-auto font-sans">
            En el corazón del Caribe Mexicano, donde el wellness se encuentra con el paraíso
          </p>
        </motion.div>

        {/* TODO: Enable when exact location is known
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[600px] bg-gradient-to-br from-numa-azul-caribe/20 to-numa-terracota/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-numa-dorado/50 mx-auto mb-4" />
                <p className="text-numa-gris-cálido text-lg font-sans">
                  Mapa interactivo de Cancún
                </p>
                <p className="text-numa-gris-cálido/60 text-sm mt-2 font-sans">
                  Ubicación exacta se revelará a miembros del waitlist en Q1 2026
                </p>
              </div>
            </div>

            <div className="absolute top-8 left-8 glass px-6 py-3 rounded-full">
              <p className="text-numa-negro font-semibold font-sans">
                📍 Zona Hotelera, Cancún, Quintana Roo
              </p>
            </div>

            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-xs">
              <h4 className="font-serif font-medium text-numa-negro mb-3">
                Acceso fácil
              </h4>
              <div className="space-y-2 text-sm text-numa-gris-cálido font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-numa-dorado" />
                  <span>15 min del aeropuerto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-numa-dorado" />
                  <span>5 min de la playa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-numa-dorado" />
                  <span>Parking gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        */}

        {/* Why Cancún */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-numa-negro text-center mb-12">
            ¿Por qué Cancún?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCancun.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-numa-dorado/10 mb-4">
                    <Icon className="w-8 h-8 text-numa-dorado" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-serif font-medium text-numa-negro mb-3">
                    {reason.title}
                  </h4>
                  <p className="text-numa-gris-cálido leading-relaxed font-sans">
                    {reason.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* TODO: Expansion Plans - Enable when expansion is confirmed
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-bg-secondary to-white rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-aura-gold" />
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-aura-black">
              Planes de expansión
            </h3>
          </div>
          ...
        </motion.div>
        */}

        {/* Distance Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-serif font-bold text-numa-dorado mb-2">
              15 min
            </div>
            <p className="text-numa-gris-cálido font-sans">
              Aeropuerto Internacional de Cancún
            </p>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-numa-dorado mb-2">
              5 min
            </div>
            <p className="text-numa-gris-cálido font-sans">
              Playas del Caribe Mexicano
            </p>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-numa-dorado mb-2">
              30 min
            </div>
            <p className="text-numa-gris-cálido font-sans">
              Cenotes sagrados mayas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
