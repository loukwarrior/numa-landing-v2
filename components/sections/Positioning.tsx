'use client'

import { motion } from 'framer-motion'
import { Flame, Users, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Flame,
    title: 'Contrast Therapy',
    subtitle: 'Sauna + Hielo',
    description: 'Transforma tu cuerpo a través del poder del contraste térmico. Sauna infrarrojo, ice baths y breathwork guiado.',
    color: 'numa-terracota',
  },
  {
    icon: Users,
    title: 'Social Wellness',
    subtitle: 'Conexión Humana',
    description: 'No es un spa, es una comunidad. Experiencias compartidas que crean vínculos auténticos y duraderos.',
    color: 'numa-dorado',
  },
  {
    icon: Sparkles,
    title: 'Longevity Lab',
    subtitle: 'Ciencia Antiaging',
    description: 'Tecnología de vanguardia y biomonitorización para optimizar tu salud celular y ralentizar el proceso de envejecimiento.',
    color: 'numa-azul-caribe',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
}

export default function Positioning() {
  return (
    <section className="py-24 md:py-32 px-4 bg-numa-arena" id="positioning">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-numa-negro mb-6">
            ¿Qué es{' '}
            <span className="text-numa-dorado font-medium italic">NUMA</span>?
          </h2>
          <p className="text-xl md:text-2xl text-numa-gris-cálido max-w-3xl mx-auto font-sans">
            Tres pilares que transforman tu bienestar físico, mental y social
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-hover bg-numa-blanco rounded-2xl p-8 md:p-10 border border-numa-negro/5 hover:border-numa-dorado/30"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${pillar.color}/10 mb-6`}>
                  <Icon className={`w-8 h-8 text-${pillar.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-numa-negro mb-2">
                  {pillar.title}
                </h3>
                <p className="text-numa-dorado font-semibold mb-4 text-lg font-sans">
                  {pillar.subtitle}
                </p>
                <p className="text-numa-gris-cálido leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
