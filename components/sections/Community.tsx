'use client'

import { motion } from 'framer-motion'
import { Quote, Instagram, Users } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Ana Martínez',
    role: 'Founder Member',
    location: 'Cancún, MX',
    quote: 'NUMA no es solo un club de wellness, es una comunidad de personas que realmente se apoyan. He encontrado amistades genuinas aquí.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Carlos Hernández',
    role: 'Regular Member',
    location: 'Playa del Carmen, MX',
    quote: 'El contraste térmico cambió mi vida. Llegué buscando recuperación atlética y encontré una práctica diaria que transformó mi bienestar mental.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Social Member',
    location: 'Tulum, MX',
    quote: 'Coming from Paris, I never expected to find such a sophisticated wellness space in Mexico. NUMA exceeded all my expectations.',
    image: '/images/testimonial-3.jpg',
  },
]

const ugcPhotos = [
  { id: 1, caption: 'Morning ritual', username: '@wellness_seeker' },
  { id: 2, caption: 'Ice bath squad', username: '@coldtherapy_mx' },
  { id: 3, caption: 'Sunday vibes', username: '@numa_familia' },
  { id: 4, caption: 'Breathwork circle', username: '@mindful_cancun' },
  { id: 5, caption: 'After sauna glow', username: '@holistic_life' },
  { id: 6, caption: 'Community love', username: '@numa_community' },
]

export default function Community() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-bg-secondary to-white" id="community">
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
            <Users className="w-6 h-6 text-aura-gold" />
            <span className="text-aura-gold font-semibold uppercase tracking-wider text-sm">
              Comunidad
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-aura-black mb-6">
            No es un spa,{' '}
            <span className="text-aura-gold font-medium italic">es un movimiento</span>
          </h2>
          <p className="text-xl md:text-2xl text-aura-black/70 max-w-3xl mx-auto">
            Experiencias compartidas que crean vínculos auténticos y duraderos
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '500+', label: 'Miembros activos' },
            { number: '2,000+', label: 'Sesiones mensuales' },
            { number: '50+', label: 'Eventos realizados' },
            { number: '4.9/5', label: 'Rating promedio' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light text-aura-gold mb-2">
                {stat.number}
              </div>
              <div className="text-aura-black/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-aura-black/5 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-aura-gold/30 mb-6" />

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl font-serif font-light text-aura-black mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aura-gold to-aura-terracota flex items-center justify-center text-white text-xl font-serif">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-aura-black">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-aura-black/60">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'w-12 bg-aura-gold'
                      : 'w-2 bg-aura-black/20 hover:bg-aura-black/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* User Generated Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-aura-black">
              La comunidad en acción
            </h3>
            <a
              href="https://instagram.com/numasocialclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-aura-gold hover:text-aura-terracota transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@numasocialclub</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ugcPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-aura-jade/30 to-aura-terracota/30 cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-aura-obsidiana/20 to-aura-gold/20 image-hover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-medium mb-1">{photo.caption}</p>
                  <p className="text-white/70 text-xs">{photo.username}</p>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-aura-black/70 mb-4">
              Comparte tu experiencia NUMA con <span className="text-aura-gold font-semibold">#NumaWellness</span>
            </p>
            <a
              href="#waitlist"
              className="inline-block btn-hover bg-aura-gold text-aura-black px-8 py-4 rounded-full font-semibold text-lg"
            >
              Únete a la comunidad
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
