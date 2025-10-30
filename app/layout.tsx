import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'NUMA Social Wellness Club | Reconecta con tu esencia',
  description: 'El primer club de bienestar social en México. Thermal Contrast, Breathwork, Medicina Ancestral y comunidad. Próxima apertura en Cancún 2026.',
  keywords: ['wellness', 'social club', 'sauna', 'ice bath', 'breathwork', 'cancun', 'bienestar', 'temazcal'],
  authors: [{ name: 'NUMA Social Wellness Club' }],
  openGraph: {
    title: 'NUMA Social Wellness Club',
    description: 'El primer club de bienestar social en México',
    url: 'https://numasocialwellness.club',
    siteName: 'NUMA Social Wellness Club',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
