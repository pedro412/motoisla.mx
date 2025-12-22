Moto Isla — Web Brochure
========================

Sitio corporativo para Moto Isla (Ciudad del Carmen).

Stack
-----
- Next.js (App Router, TypeScript)
- Tailwind CSS (dark mode first)
- Formularios con Formspree (endpoint placeholder en `lib/constants.ts`)

Scripts
-------
- `npm run dev` — servidor de desarrollo en `http://localhost:3000`
- `npm run lint` — lint con ESLint
- `npm run build` — build de producción

Estructura
----------
- `app/` — páginas principales (Home, Convenios, Promos, Guía, Quiénes somos, Contacto)
- `components/` — layout y utilidades (header, footer, CTA flotante)
- `lib/constants.ts` — datos de marca, navegación y links de WhatsApp

Ambiente
--------
1. Instala dependencias: `npm install`
2. Inicia el proyecto: `npm run dev`

Notas
-----
- Paleta y tipografías: Oswald para headings, Inter para cuerpo.
- WhatsApp: `https://wa.me/529381082435` con mensajes precargados en `lib/constants.ts`.
