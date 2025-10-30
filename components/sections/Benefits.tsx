'use client'

import { motion } from 'framer-motion'
import { Brain, Moon, Zap, Users, Target, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'Reducción de estrés',
    metric: '-30%',
    subtitle: 'Niveles de cortisol',
    description: 'Disminución comprobada del cortisol tras 4 semanas de contrast therapy regular.',
    color: 'numa-azul-caribe',
  },
  {
    icon: Moon,
    title: 'Mejora del sueño',
    metric: '+45%',
    subtitle: 'Calidad del descanso',
    description: 'Mayor profundidad en fase REM y reducción de despertares nocturnos.',
    color: 'numa-terracota',
  },
  {
    icon: Zap,
    title: 'Metabolismo activo',
    metric: '+20%',
    subtitle: 'Gasto calórico',
    description: 'Activación de grasa parda (BAT) mediante exposición al frío controlado.',
    color: 'numa-dorado',
  },
  {
    icon: Users,
    title: 'Conexión social',
    metric: '-60%',
    subtitle: 'Sensación de soledad',
    description: 'Experiencias compartidas que generan vínculos auténticos y comunidad.',
    color: 'numa-azul-caribe',
  },
  {
    icon: Target,
    title: 'Claridad mental',
    metric: '+35%',
    subtitle: 'Foco y concentración',
    description: 'Mejora en funciones ejecutivas y toma de decisiones tras breathwork.',
    color: 'numa-dorado',
  },
  {
    icon: TrendingUp,
    title: 'Recuperación atlética',
    metric: '-40%',
    subtitle: 'Tiempo de recuperación',
    description: 'Reducción de inflamación y dolor muscular post-entrenamiento.',
    color: 'numa-terracota',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-numa-arena to-numa-blanco" id="benefits">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-numa-negro mb-6">
            Beneficios{' '}
            <span className="text-numa-dorado font-medium italic">comprobados</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-gris-cálido max-w-3xl mx-auto font-sans">
            Resultados respaldados por ciencia y estudios clínicos
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-numa-blanco rounded-2xl p-8 border border-numa-negro/5 hover:border-numa-dorado/30 card-hover"
              >
                {/* Icon & Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-${benefit.color}/10`}>
                    <Icon className={`w-7 h-7 text-${benefit.color}`} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-serif font-medium text-numa-dorado">
                      {benefit.metric}
                    </div>
                    <div className="text-xs text-numa-gris-cálido font-medium mt-1 font-sans">
                      {benefit.subtitle}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-medium text-numa-negro mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-numa-gris-cálido text-sm leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Scientific Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-numa-gris-cálido max-w-4xl mx-auto font-sans">
            * Datos basados en estudios clínicos de contrast therapy, breathwork y medicina funcional.
            Los resultados individuales pueden variar. Consulta con un profesional de la salud antes de comenzar cualquier programa de wellness.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
