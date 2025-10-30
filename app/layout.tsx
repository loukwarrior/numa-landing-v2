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
  title: 'NUMA Wellness Club Cancún | Founding Members Pre-Sale - 40% Off',
  description: 'Sé uno de los primeros 100 Founding Members de NUMA, el primer club de bienestar social de México. 40% de descuento de por vida. Solo 47 spots restantes.',
  keywords: ['wellness', 'social club', 'sauna', 'ice bath', 'breathwork', 'cancun', 'bienestar', 'temazcal', 'founding members', 'wellness club mexico'],
  authors: [{ name: 'NUMA Social Wellness Club' }],
  openGraph: {
    title: 'NUMA Wellness Club - Founding Members Pre-Sale',
    description: '40% de descuento de por vida para los primeros 100 miembros. El primer club de bienestar social de Cancún abre Q3-Q4 2026.',
    url: 'https://www.numawellness.mx',
    siteName: 'NUMA Social Wellness Club',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NUMA Wellness Club - Founding Members',
    description: 'Solo 47 spots restantes para Founding Members. 40% off de por vida en el primer club de bienestar social de México.',
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
