'use client'

import { motion } from 'framer-motion'
import { Flame, Snowflake, Armchair, FlaskConical, Sun, Wind, Droplets, Zap } from 'lucide-react'

const experiences = [
  {
    icon: Flame,
    title: 'Sauna',
    description: 'Cabina individual de sauna de espectro completo. Detoxificación profunda, mejora circulación y recuperación muscular.',
    temperature: '55-65°C',
    duration: '30-45 min',
    intensity: 'Media',
    image: '/images/services/sauna.jpg',
    zone: 'Thermal Contrast',
  },
  {
    icon: Snowflake,
    title: 'Ice Bath',
    description: 'Inmersión en agua fría 3-5°C. Reduce inflamación, aumenta energía y fortalece sistema inmune. Protocolo Wim Hof.',
    temperature: '3-5°C',
    duration: '2-5 min',
    intensity: 'Alta',
    image: '/images/services/ice-bath.jpg',
    zone: 'Thermal Contrast',
  },
  {
    icon: Armchair,
    title: 'Social Lounge',
    description: 'Espacio de convivencia con biblioteca wellness, bar de adaptógenos y snacks saludables. Networking consciente.',
    temperature: 'Ambiente',
    duration: 'Libre',
    intensity: 'Relajación',
    image: '/images/services/lounge.jpg',
    zone: 'Community Space',
  },
  {
    icon: Sun,
    title: 'Red Light Therapy',
    description: 'Panel de terapia de luz roja para recuperación celular, mejora de piel y reducción de inflamación.',
    temperature: 'Ambiente',
    duration: '15-20 min',
    intensity: 'Baja',
    image: '/images/services/red-light.jpg',
    zone: 'Longevity Lab',
  },
  {
    icon: Wind,
    title: 'Oxigenoterapia (O2 Boost)',
    description: 'Barra de oxígeno al 95% de pureza. Aumenta energía, claridad mental y recuperación post-ejercicio.',
    temperature: 'N/A',
    duration: '10-15 min',
    intensity: 'Baja',
    image: '/images/services/oxygen.jpg',
    zone: 'Longevity Lab',
  },
  {
    icon: Droplets,
    title: 'IV Lounge',
    description: 'Sueros intravenosos personalizados con vitaminas, minerales y antioxidantes. Hidratación, energía e inmunidad.',
    temperature: 'N/A',
    duration: '30-45 min',
    intensity: 'Baja',
    image: '/images/services/iv-lounge.jpg',
    zone: 'Longevity Lab',
  },
  {
    icon: Zap,
    title: 'Localized Cryotherapy',
    description: 'Crioterapia localizada con chorro de aire frío para zonas específicas. Alivia dolor y acelera recuperación.',
    temperature: '-100°C',
    duration: '5-10 min',
    intensity: 'Media',
    image: '/images/services/cryo.jpg',
    zone: 'Longevity Lab',
  },
  {
    icon: FlaskConical,
    title: 'Breath + HRV Biofeedback',
    description: 'Sesiones guiadas de breathwork con medición de variabilidad cardíaca en tiempo real. Optimiza tu sistema nervioso.',
    temperature: 'Ambiente',
    duration: '20-30 min',
    intensity: 'Media',
    image: '/images/services/hrv.jpg',
    zone: 'Longevity Lab',
  },
]

export default function CoreExperiences() {
  return (
    <section className="py-24 md:py-32 px-4 bg-numa-blanco" id="experiences">
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
            Nuestros{' '}
            <span className="text-numa-dorado font-medium italic">servicios</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-gris-cálido max-w-3xl mx-auto mb-4 font-sans">
            Thermal Contrast, Social Lounge y Longevity Lab
          </p>
          <p className="text-base text-numa-gris-cálido max-w-2xl mx-auto font-sans">
            Combina sauna infrarroja, ice bath y biohacking avanzado en un solo lugar
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-numa-negro to-numa-azul-caribe h-[400px] card-hover"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient if image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-numa-terracota/30 via-numa-azul-caribe/20 to-numa-dorado/20" />
                </div>

                {/* Overlay that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-numa-negro via-numa-negro/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-numa-dorado/20 border border-numa-dorado/30">
                      <Icon className="w-6 h-6 text-numa-dorado" strokeWidth={1.5} />
                    </div>
                    {/* Stats badge */}
                    <div className="text-right">
                      <div className="text-numa-dorado text-sm font-semibold font-sans">{exp.temperature}</div>
                      <div className="text-numa-blanco/70 text-xs font-sans">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    {/* Zone Badge */}
                    <div className="mb-2">
                      <span className="text-xs text-numa-dorado/70 uppercase tracking-wider font-semibold font-sans">
                        {exp.zone}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-numa-blanco mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-numa-blanco/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 font-sans">
                      {exp.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-numa-dorado/20 border border-numa-dorado/40">
                      <span className="text-numa-dorado text-xs font-semibold font-sans">
                        Intensidad: {exp.intensity}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#waitlist"
            className="inline-block btn-hover bg-numa-terracota text-numa-blanco px-8 py-4 rounded-full font-semibold text-lg font-sans hover:bg-numa-azul-caribe"
          >
            Reserva tu primera experiencia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
