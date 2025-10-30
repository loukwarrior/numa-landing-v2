'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { scrollToSection, trackCTAClick } from '@/lib/utils'

export default function Hero() {
  const handlePrimaryClick = () => {
    trackCTAClick('hero', 'Reserva tu experiencia')
    scrollToSection('waitlist')
  }

  const handleSecondaryClick = () => {
    trackCTAClick('hero', 'Conoce NUMA')
    scrollToSection('positioning')
  }

  return (
    <section className="relative h-[70vh] w-full overflow-hidden" id="hero">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-numa-negro via-numa-azul-caribe/20 to-numa-terracota/30" />
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="video-overlay" />
        
        {/* Additional animated overlay for depth */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-numa-negro/60 via-numa-negro/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-8 right-8 z-20"
      >
        <div className="glass px-4 py-2 rounded-full">
          <p className="text-numa-blanco text-small font-medium">
            Próxima apertura: Cancún Q3-Q4 2026
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline Emocional */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-numa-blanco mb-6 text-balance"
          >
            Reconecta con tu{' '}
            <span className="text-numa-dorado font-medium italic">esencia</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-numa-blanco/90 mb-12 max-w-2xl mx-auto font-sans"
          >
            El primer club de bienestar social en México
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handlePrimaryClick}
              className="btn-hover bg-numa-terracota text-numa-blanco px-8 py-4 rounded-full font-semibold text-lg w-full sm:w-auto font-sans"
            >
              Reserva tu experiencia
            </button>
            <button
              onClick={handleSecondaryClick}
              className="btn-hover border-2 border-numa-blanco text-numa-blanco px-8 py-4 rounded-full font-semibold text-lg w-full sm:w-auto hover:bg-numa-blanco/10 font-sans"
            >
              Conoce NUMA
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleSecondaryClick}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-numa-dorado text-small mb-2 font-medium">Scroll para descubrir</span>
          <ChevronDown className="w-6 h-6 text-numa-dorado group-hover:text-numa-blanco transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  )
}
