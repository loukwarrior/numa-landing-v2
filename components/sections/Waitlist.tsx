'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Clock, Users, Gift, CheckCircle2 } from 'lucide-react'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido'),
  membershipInterest: z.enum(['daypass', 'social', 'founder']),
  source: z.string().optional(),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(1247)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  // Countdown to Q3 2026 (July 1, 2026)
  useEffect(() => {
    const targetDate = new Date('2026-07-01T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Waitlist submission:', data)
      setSubmitted(true)
      setWaitlistCount(prev => prev + 1)
      reset()
    } catch (error) {
      console.error('Error submitting waitlist:', error)
    }
  }

  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-numa-azul-caribe to-numa-negro text-numa-blanco" id="waitlist">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-numa-blanco mb-6">
            Únete al{' '}
            <span className="text-numa-dorado font-medium italic">Founders' Circle</span>
          </h2>
          <p className="text-xl md:text-2xl text-numa-blanco/70 max-w-2xl mx-auto mb-8 font-sans">
            Sé parte de los primeros en experimentar NUMA y obtén beneficios exclusivos
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-numa-blanco/60 font-sans">
            <Users className="w-5 h-5" />
            <span className="text-lg">
              <span className="text-numa-dorado font-bold">{waitlistCount.toLocaleString()}</span> personas en lista
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-numa-dorado" />
            <span className="text-numa-blanco/70 text-sm uppercase tracking-wider font-semibold font-sans">
              Abrimos en Q3-Q4 2026
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-numa-blanco/5 border border-numa-blanco/10 rounded-2xl p-4 md:p-6 text-center"
              >
                <div className="text-3xl md:text-5xl font-serif font-bold text-numa-dorado mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-numa-blanco/60 uppercase tracking-wider font-sans">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-br from-numa-dorado/20 to-numa-terracota/20 border-2 border-numa-dorado/30 rounded-3xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-numa-dorado" />
            <h3 className="text-2xl font-serif font-medium text-numa-blanco">
              Beneficios Founder Member
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Pricing garantizado de por vida',
              'Acceso prioritario a eventos exclusivos',
              'Sin fee de inscripción ($500 USD valor)',
              'Tu nombre en placa fundadora permanente',
              'The Inner Circle: comunidad privada',
              'Early access a nuevas experiencias',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-numa-dorado flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-numa-dorado font-bold text-lg font-sans">
              Solo 100 spots de Founder disponibles
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {submitted ? (
            <div className="bg-numa-azul-caribe/20 border-2 border-numa-azul-caribe rounded-3xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-numa-azul-caribe/30 mb-6">
                <CheckCircle2 className="w-10 h-10 text-numa-azul-caribe" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-numa-blanco mb-3">
                ¡Bienvenido a NUMA!
              </h3>
              <p className="text-numa-blanco/70 text-lg mb-6 font-sans">
                Te hemos enviado un email de confirmación. Serás el primero en enterarte de nuestro lanzamiento.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-numa-dorado hover:text-numa-azul-caribe transition-colors font-semibold"
              >
                Registrar a alguien más
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-numa-blanco/5 border border-numa-blanco/10 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-numa-blanco/90 mb-2 font-medium font-sans">
                    Nombre completo *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-numa-blanco/10 border border-numa-blanco/20 rounded-xl text-numa-blanco placeholder-numa-blanco/40 focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-numa-blanco/90 mb-2 font-medium font-sans">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-numa-blanco/10 border border-numa-blanco/20 rounded-xl text-numa-blanco placeholder-numa-blanco/40 focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-numa-blanco/90 mb-2 font-medium font-sans">
                    Teléfono *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-numa-blanco/10 border border-numa-blanco/20 rounded-xl text-numa-blanco placeholder-numa-blanco/40 focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                    placeholder="+52 998 123 4567"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                {/* Membership Interest */}
                <div>
                  <label htmlFor="membershipInterest" className="block text-numa-blanco/90 mb-2 font-medium font-sans">
                    Interés de membresía *
                  </label>
                  <select
                    {...register('membershipInterest')}
                    id="membershipInterest"
                    className="w-full px-4 py-3 bg-numa-blanco/10 border border-numa-blanco/20 rounded-xl text-numa-blanco focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                  >
                    <option value="" className="bg-numa-negro">Selecciona una opción</option>
                    <option value="daypass" className="bg-numa-negro">Day Pass ($80-120 USD)</option>
                    <option value="social" className="bg-numa-negro">Social ($250/mes)</option>
                    <option value="founder" className="bg-numa-negro">Founder ($400/mes - Limited spots)</option>
                  </select>
                  {errors.membershipInterest && (
                    <p className="mt-2 text-sm text-red-400">{errors.membershipInterest.message}</p>
                  )}
                </div>

                {/* Source */}
                <div>
                  <label htmlFor="source" className="block text-numa-blanco/90 mb-2 font-medium font-sans">
                    ¿Cómo nos conociste? (opcional)
                  </label>
                  <input
                    {...register('source')}
                    type="text"
                    id="source"
                    className="w-full px-4 py-3 bg-numa-blanco/10 border border-numa-blanco/20 rounded-xl text-numa-blanco placeholder-numa-blanco/40 focus:outline-none focus:ring-2 focus:ring-numa-dorado font-sans"
                    placeholder="Instagram, referencia, búsqueda, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hover bg-numa-terracota text-numa-blanco px-8 py-4 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed font-sans hover:bg-numa-azul-caribe"
                >
                  {isSubmitting ? 'Enviando...' : 'Reservar mi spot'}
                </button>

                <p className="text-xs text-numa-blanco/50 text-center font-sans">
                  Al registrarte, aceptas recibir comunicaciones de NUMA. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
