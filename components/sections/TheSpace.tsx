'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const spaces = [
  {
    id: 1,
    title: 'Sauna Finnish',
    subtitle: 'Corazón del Club',
    description: 'Sauna finlandesa de 140m² con capacidad para 50 personas. Tres niveles de temperatura con cedro canadiense y kiuas Harvia de 28kW.',
    image: '/images/services/sauna.jpg',
    materials: 'Cedro Rojo Canadiense, Abachi, Piedra Volcánica',
  },
  {
    id: 2,
    title: 'Ice Plunge Zone',
    subtitle: 'Contraste Térmico',
    description: '4 piscinas de inmersión a nivel de suelo para 16 personas. Sistema de refrigeración industrial con temperatura controlada de 4-8°C.',
    image: '/images/services/ice-bath.jpg',
    materials: 'Concreto Armado, Madera Teca, PVC Reforzado',
  },
  {
    id: 3,
    title: 'Longevity Lab',
    subtitle: 'Biohacking Avanzado',
    description: 'Espacio de 85m² con 7 servicios: O2 Bar, IV Lounge, Sauna Infrarroja, Cryo Localizado, Red Light, Normatec y HRV Biofeedback.',
    image: '/images/services/iv-lounge.jpg',
    materials: 'Acero Inoxidable, Cristal Templado, Tecnología Médica',
  },
  {
    id: 4,
    title: 'Social Lounge',
    subtitle: 'Integración Post-Ritual',
    description: 'Área de convivencia de 95m² con capacidad para 32 personas. Chimenea de bioetanol y bar de adaptógenos para socializar.',
    image: '/images/services/lounge.jpg',
    materials: 'Roble Blanco, Lino Natural, Terracota',
  },
  {
    id: 5,
    title: 'Pre-Sauna Lounge',
    subtitle: 'Transición y Breathwork',
    description: 'Espacio de 30m² con 12 mats de yoga y cojines de meditación. Facilitadores guían breathwork entre rondas de sauna.',
    image: '/images/services/oxygen.jpg',
    materials: 'Bambú Sostenible, Corcho Natural, Algodón Orgánico',
  },
]

export default function TheSpace() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = spaces.length - 1
      if (nextIndex >= spaces.length) nextIndex = 0
      return nextIndex
    })
  }

  return (
    <section className="py-24 md:py-32 px-4 bg-numa-blanco" id="space">
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
            El{' '}
            <span className="text-numa-dorado font-medium italic">espacio</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-gris-cálido max-w-3xl mx-auto font-sans">
            Arquitectura minimalista mexicana que honra la naturaleza
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-numa-negro to-numa-azul-caribe">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-numa-terracota/40 via-numa-azul-caribe/30 to-numa-dorado/20" />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-numa-negro/80 via-numa-negro/20 to-transparent flex items-end p-8 md:p-12">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-numa-dorado text-sm md:text-base font-semibold mb-2 uppercase tracking-wider font-sans">
                        {spaces[currentIndex].subtitle}
                      </p>
                      <h3 className="text-3xl md:text-5xl font-serif font-bold text-numa-blanco mb-4">
                        {spaces[currentIndex].title}
                      </h3>
                      <p className="text-numa-blanco/80 text-base md:text-lg mb-4 leading-relaxed font-sans">
                        {spaces[currentIndex].description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-numa-blanco/60 font-sans">
                        <span className="font-medium">Materiales:</span>
                        <span>{spaces[currentIndex].materials}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Virtual Tour Badge */}
                <div className="absolute top-8 right-8">
                  <button className="glass px-4 py-2 rounded-full text-numa-blanco text-sm font-medium flex items-center gap-2 hover:bg-numa-blanco/20 transition-all font-sans">
                    <Maximize2 className="w-4 h-4" />
                    Tour Virtual 360°
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-numa-blanco/20 backdrop-blur-sm border border-numa-blanco/30 flex items-center justify-center text-numa-blanco hover:bg-numa-blanco/30 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-numa-blanco/20 backdrop-blur-sm border border-numa-blanco/30 flex items-center justify-center text-numa-blanco hover:bg-numa-blanco/30 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-5 gap-4">
            {spaces.map((space, index) => (
              <button
                key={space.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-2 ring-numa-dorado scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-numa-terracota/50 to-numa-dorado/30' :
                  index % 3 === 1 ? 'from-numa-azul-caribe/50 to-numa-negro/30' :
                  'from-numa-dorado/50 to-numa-terracota/30'
                }`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-numa-blanco text-xs font-medium text-center px-2 font-sans">
                    {space.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {spaces.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-12 bg-numa-dorado'
                    : 'w-6 bg-numa-negro/20 hover:bg-numa-negro/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Materials Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h4 className="text-2xl font-serif font-medium text-numa-negro mb-2">
              Materiales Locales
            </h4>
            <p className="text-numa-gris-cálido font-sans">
              Piedra volcánica, madera de parota y textiles oaxaqueños
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-serif font-medium text-numa-negro mb-2">
              Diseño Sostenible
            </h4>
            <p className="text-numa-gris-cálido font-sans">
              Certificación LEED, energía solar y sistemas de reciclaje de agua
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-serif font-medium text-numa-negro mb-2">
              Arquitectura Mexicana
            </h4>
            <p className="text-numa-gris-cálido font-sans">
              Minimalismo tropical que dialoga con el entorno natural
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
