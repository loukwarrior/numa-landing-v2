# NUMA Social Wellness Club - Landing Page V2

Landing page premium para NUMA Social Wellness Club, inspirada en el diseño de **Remedy Place**, **Othership** y **Aman Tokyo**.

![NUMA Social Wellness Club](public/og-image.jpg)

## 🎨 Diseño & Stack

### Stack Técnico
- **Framework**: Next.js 16 con App Router
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Cormorant Garamond (serif) + Inter (sans-serif)

### Paleta de Colores

```css
--color-aura-black: #1A1816;      /* Negro principal */
--color-aura-white: #FAF9F7;      /* Blanco cálido */
--color-aura-gold: #C9A961;       /* Oro - Accent luxury */
--color-aura-terracota: #D4826C;  /* Terracota mexicana */
--color-aura-jade: #6B8E7F;       /* Verde jade */
--color-aura-obsidiana: #2D3332;  /* Obsidiana oscura */
```

### Tipografía

**Headlines**: Cormorant Garamond (elegante pero accesible)
- Font-weight: 300 (light), 500 (medium)
- Tamaños: 64px (Display), 48px (H2), 32px (H3)

**Body**: Inter / SF Pro Display (moderna y legible)
- Font-weight: 400 (regular), 600 (semibold)
- Tamaños: 18px (Body), 14px (Small)

## 📐 Estructura del Sitio

### SECCIÓN 1: HERO
- Video background loop (placeholder con gradientes animados)
- Headline emocional: "Reconecta con tu esencia"
- Subheadline: "El primer club de bienestar social en México"
- CTA Primario: "Reserva tu experiencia"
- CTA Secundario: "Conoce NUMA" (scroll down)
- Trust Badge: "Próxima apertura: Cancún Q3-Q4 2026"

### SECCIÓN 2: POSICIONAMIENTO
- 3-Column Grid con íconos:
  - Sauna + Hielo (Contrast Therapy)
  - Conexión Humana (Social Wellness)
  - Medicina Ancestral (Cultural Heritage)
- Video testimonial placeholder

### SECCIÓN 3: EXPERIENCIAS CORE
Cards con hover reveal:
- Temazcal Moderno
- Breathwork + Ice Bath
- Cenote Therapy
- Sound Healing
- Functional IV Therapy
- Medicina Funcional

Cada card muestra:
- Temperatura/duración (copying Othership)
- Intensidad
- Descripción al hover

### SECCIÓN 4: EL ESPACIO
- Gallery slider estilo Aman con swipe gesture
- 5 espacios destacados con placeholders
- Navegación con thumbnails
- Badge "Tour Virtual 360°"
- Info de materiales locales y diseño sostenible

### SECCIÓN 5: BENEFICIOS
Grid 2x3 con datos científicos:
- Reducción estrés (cortisol -30%)
- Mejora sueño (calidad +45%)
- Metabolismo (boost +20%)
- Conexión social (soledad -60%)
- Claridad mental (focus +35%)
- Recuperación atlética (tiempo -40%)

### SECCIÓN 6: COMUNIDAD
- "No es un spa, es un movimiento"
- Stats: Miembros, sesiones, eventos, rating
- Testimonial slider con 3 testimonios
- User-generated content grid (6 fotos)
- Link a Instagram @numasocialclub

### SECCIÓN 7: MEMBRESÍAS
3 tiers con pricing:
- **Day Pass**: $80-120 USD por día
- **Social**: $250 USD/mes (5 clases, horarios amplios)
- **Founder**: $400 USD/mes (ilimitado, solo 100 spots)

Incluye:
- Comparison table detallada
- "Lo que incluye" por tier
- Diseño con glassmorphism y hover effects

### SECCIÓN 8: EQUIPO & FILOSOFÍA
- **Founder story**: Cristian Haro con bio y credenciales
- **Core values**: 4 valores con íconos
- **Team**: 3 wellness practitioners
- **Partnerships**: 6 marcas aliadas (Sunlighten, Morozko, etc.)

### SECCIÓN 9: UBICACIÓN
- Mapa interactivo placeholder
- "Por qué Cancún": 4 razones (clima, mar, conectividad, hub wellness)
- **Planes de expansión**:
  - Tulum (Q1 2027)
  - Ciudad de México (Q3 2027)
  - Monterrey (Q1 2028)

### SECCIÓN 10: WAITLIST
- **Countdown timer** a Q3 2026 (días, horas, minutos, segundos)
- Social proof: "1,247 personas en lista"
- **Beneficios Founder Member**:
  - Pricing garantizado de por vida
  - Sin fee de inscripción ($500 USD valor)
  - Acceso prioritario a eventos
  - Nombre en placa fundadora
  - The Inner Circle
  - Solo 100 spots
- **Form de captura**:
  - Nombre, email, teléfono
  - Interés de membresía (Day Pass, Social, Founder)
  - Fuente (opcional)
  - Validación con React Hook Form + Zod

### FOOTER
- Newsletter signup con feedback visual
- Brand info + social links (Instagram, LinkedIn, Email)
- Quick links a secciones
- Contacto completo (dirección, email, teléfono)
- Press kit link
- Legal links (Privacidad, Términos, Cookies)

## 🚀 Quick Start

### Instalación

```bash
cd numa-landing-v2
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Build para Producción

```bash
npm run build
npm run start
```

## 📁 Estructura de Archivos

```
numa-landing-v2/
├── app/
│   ├── layout.tsx          # Root layout con fuentes
│   ├── page.tsx            # Home page (importa todas las secciones)
│   └── globals.css         # Tailwind v4 + theme + custom styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Positioning.tsx
│   │   ├── CoreExperiences.tsx
│   │   ├── TheSpace.tsx
│   │   ├── Benefits.tsx
│   │   ├── Community.tsx
│   │   ├── Memberships.tsx
│   │   ├── Team.tsx
│   │   ├── Location.tsx
│   │   ├── Waitlist.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Future UI components
├── lib/
│   └── utils.ts            # Helper functions
├── public/
│   ├── images/             # Image placeholders
│   └── videos/             # Video placeholders
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎯 Características Destacadas

### Animaciones
- **Scroll-triggered**: Intersection Observer nativo
- **Fade-in**: 600ms ease-out
- **Slide-up**: 800ms cubic-bezier(0.16, 1, 0.3, 1)
- **Hover effects**:
  - Buttons: scale(1.05) + shadow
  - Images: scale(1.1) + overlay fade
  - Cards: translateY(-8px) lift

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados para todas las secciones
- Touch gestures en gallery slider

### Performance
- Tailwind CSS v4 (más rápido que v3)
- Next.js 16 con Turbopack
- Lazy loading de componentes
- Optimized font loading con `next/font`

## 📝 Próximos Pasos

### Contenido
- [ ] Reemplazar placeholders con imágenes reales
- [ ] Añadir video hero background real
- [ ] Foto profesional de Cristian Haro
- [ ] Fotos reales de los espacios
- [ ] User-generated content del Instagram

### Funcionalidad
- [ ] Integrar API real para waitlist (Resend, Airtable, o Supabase)
- [ ] Implementar Google Analytics 4
- [ ] Añadir Hotjar para heatmaps
- [ ] Integrar mapa real (Google Maps o Mapbox)
- [ ] Instagram feed real vía API

### Optimización
- [ ] Lighthouse audit (target: 95+)
- [ ] SEO on-page completo
- [ ] Open Graph images optimizadas
- [ ] Sitemap y robots.txt

### Legal
- [ ] Página de Privacidad
- [ ] Términos y Condiciones
- [ ] Aviso de Privacidad (LFPDPPP México)
- [ ] Cookie banner

## 🌟 Inspiración

Este diseño se inspira en:
- **Remedy Place** (Los Angeles) - Premium wellness social club
- **Othership** (Toronto/NYC) - Modern breathwork + sauna
- **Aman Tokyo** - Luxury minimalism y hospitalidad japonesa

## 📧 Contacto

**NUMA Social Wellness Club**
- Email: hola@numasocialwellness.club
- Tel: +52 55 8104 2398
- Instagram: [@numasocialclub](https://instagram.com/numasocialclub)
- Location: Cancún, Quintana Roo, México

---

© 2025 NUMA Social Wellness Club. El primer social wellness club de México.
