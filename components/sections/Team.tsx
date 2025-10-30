'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Sparkles } from 'lucide-react'

const founder = {
  name: 'Cristian Haro',
  role: 'Founder & CEO',
  bio: 'Emprendedor wellness con experiencia en hospitalidad de lujo y medicina funcional. Certificado en Wim Hof Method, breathwork y terapia de contraste térmico. Cristian creó NUMA después de experimentar la transformación del bienestar social en clubs de Nueva York y Toronto.',
  credentials: ['Wim Hof Method Instructor', 'Functional Medicine Certified', 'Hospitality MBA'],
  image: '/images/founder.jpg',
}

const team = [
  {
    name: 'Dra. María López',
    role: 'Medical Director',
    specialty: 'Medicina Funcional',
    credentials: 'MD, Institute for Functional Medicine',
  },
  {
    name: 'Javier Ruiz',
    role: 'Head of Experience',
    specialty: 'Breathwork & Sound Healing',
    credentials: 'Certified Breathwork Facilitator, Sound Therapist',
  },
  {
    name: 'Ana Sánchez',
    role: 'Wellness Coach',
    specialty: 'Nutrición & Lifestyle',
    credentials: 'Holistic Nutritionist, Yoga RYT-500',
  },
]

const partners = [
  { name: 'Sunlighten', category: 'Infrared Saunas' },
  { name: 'Morozko Forge', category: 'Ice Baths' },
  { name: 'Dynaudio', category: 'Sound Systems' },
  { name: 'Quicksilver Scientific', category: 'IV Therapy' },
  { name: 'Bulletproof', category: 'Biohacking' },
  { name: 'Four Sigmatic', category: 'Functional Mushrooms' },
]

export default function Team() {
  return (
    <section className="py-24 md:py-32 px-4 bg-bg-dark text-white" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            Equipo &{' '}
            <span className="text-aura-gold font-medium italic">filosofía</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Expertos dedicados a tu transformación integral
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-aura-gold/30 to-aura-terracota/30">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-serif text-white/30">CH</div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-aura-gold/20 rounded-full blur-3xl" />
            </div>

            {/* Founder Bio */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-aura-gold" />
                <span className="text-aura-gold font-semibold uppercase tracking-wider text-sm">
                  Founder Story
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-aura-gold text-lg mb-6">{founder.role}</p>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {founder.bio}
              </p>

              <div className="space-y-3">
                {founder.credentials.map((cred, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-aura-gold" />
                    <span className="text-white/70">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-serif font-light text-center text-white mb-12">
            Nuestros valores
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Comunidad primero',
                description: 'El bienestar es más poderoso cuando se comparte',
              },
              {
                icon: Sparkles,
                title: 'Ciencia + tradición',
                description: 'Honramos lo ancestral con investigación moderna',
              },
              {
                icon: Award,
                title: 'Excelencia',
                description: 'Los mejores equipos, protocolos y experiencias',
              },
              {
                icon: Users,
                title: 'Inclusión',
                description: 'Wellness accesible para todas las personas',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aura-gold/20 mb-4">
                    <Icon className="w-8 h-8 text-aura-gold" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-serif font-medium text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-serif font-light text-center text-white mb-12">
            Equipo de wellness practitioners
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aura-gold/30 to-aura-terracota/30 flex items-center justify-center text-white text-2xl font-serif mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-serif font-medium text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-aura-gold text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-white/70 text-sm mb-3">
                  {member.specialty}
                </p>
                <p className="text-white/50 text-xs">
                  {member.credentials}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-3xl font-serif font-light text-center text-white mb-12">
            Partnerships & Marcas aliadas
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors border border-white/10">
                  <span className="text-white/50 text-sm font-medium">
                    {partner.name}
                  </span>
                </div>
                <p className="text-white/40 text-xs">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
