# Alimentar y Alterar

Sitio del proyecto de extensión FCV – UNICEN sobre la fauna del Lago del Fuerte (Tandil).
Next.js (App Router) + Tailwind CSS v4, desplegado en Vercel desde la rama `main`.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (lo mismo que corre Vercel)
npm run lint && npm run typecheck
```

## Dónde está cada cosa

| Qué querés cambiar            | Archivo                         |
| ----------------------------- | ------------------------------- |
| Textos, links, formularios    | `src/data/content.ts`           |
| Orden de las secciones        | `src/app/page.tsx`              |
| Una sección puntual           | `src/components/site/*.tsx`     |
| Colores / tipografía          | `src/app/globals.css` (`@theme`), `src/app/layout.tsx` |
| Metadatos / SEO               | `src/app/layout.tsx` + `SITE_METADATA` en `content.ts` |
| Headers de seguridad (CSP)    | `next.config.ts`                |
| Imágenes                      | `public/images/`                |

Componentes base (`src/components/ui/`) se agregan con shadcn/ui según se necesiten:
`npx shadcn@latest add <componente>`.

## Notas de seguridad

- Nunca commitear `.env*` (ya está en `.gitignore`); las variables van en Vercel → Settings → Environment Variables. Ver `.env.example`.
- Si se embebe algo externo (un Google Form en iframe, analytics, mapas), hay que habilitar su dominio en la CSP de `next.config.ts`.
- Si se agrega un backend (API routes, base de datos), validar toda entrada del usuario en el servidor.
