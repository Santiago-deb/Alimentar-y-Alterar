# Worklog — Proyecto "Alimentar y Alterar" (Extensión FCV-UNICEN)

Sitio web del proyecto de extensión e intervención sanitaria "Alimentar y Alterar" — Lago del Fuerte, Tandil.
Objetivo: prototipo escalable, deployeable en Vercel, single-page con contenido centralizado.

---
Task ID: 2
Agent: main (Z.ai Code)
Task: Generación de imágenes del sitio con estética del flyer (fotos realistas de fauna y lago)

Work Log:
- Se generaron 4 imágenes con z-ai CLI (skill image-generation) en /home/z/my-project/public/images/:
  - hero-capybara.png (1344x768) — capibara al borde del lago con sierras de fondo (hero principal)
  - especie-carpincho.png (1024x1024) — carpincho en agua entre juncos (tarjeta especie)
  - especie-aves.png (1024x1024) — patos silvestres nativos en el lago (tarjeta especie)
  - especie-ganso.png (1024x1024) — ganso gris/ganso europeo en la costa (tarjeta especie)
- Nota técnica: la API de imágenes requiere tamaños múltiplos de 32 px (1440x720 falla, usar 1344x768). Hubo 429 rate-limit al paralelizar: generar secuencialmente con sleep entre llamadas.

Stage Summary:
- Imágenes listas en public/images/. El build del sitio (Task 3) las consume desde ahí.
- Paleta del flyer a respetar: crema #F7F2E4, verde oliva #55683F/#3E4E30, tan #C8B88C, texto verde oscuro #2E3B26.
---
Task ID: 3
Agent: full-stack-developer
Task: Sitio single-page Next.js 16 "Alimentar y Alterar" (es-AR) — contenido centralizado, design system del flyer, secciones completas, listo para Vercel

Work Log:
- Creado src/data/content.ts como única fuente de verdad tipada: JOIN_FORM_URL, SURVEY_FORM_URL (vacío → estado "Disponible próximamente"), NAV_LINKS, CONTACTS (WhatsApp), HERO, HIGHLIGHTS (4 stats), ABOUT (párrafos + 8 fichas), SPECIES (3 especies con img/científico), FACULTIES (5 facultades con iconos Lucide), ACTION_PLAN (bloques A/B/C con cita destacada), JOIN (chips + CTA + encuesta), FOOTER, SITE_METADATA.
- src/app/globals.css: tokens @theme (cream/olive/forest/tan + shadow-soft/card/card-hover con tinte oliva), --font-heading (Lora) y --font-sans (Nunito Sans), scroll suave, ::selection tan, scrollbar personalizada, @media prefers-reduced-motion, utilidad @utility pb-safe (safe-area). Variables shadcn intactas.
- src/app/layout.tsx: lang="es", Lora + Nunito_Sans (next/font/google, variables CSS), metadata SEO (title/description/keywords/OpenGraph es_AR con /images/hero-capybara.png 1344x768, Twitter card), metadataBase vía NEXT_PUBLIC_SITE_URL (fallback vercel.app). Toaster conservado.
- src/app/icon.svg: favicon hoja oliva sobre crema.
- Componentes src/components/site/: fade-in.tsx (Framer Motion whileInView once + useReducedMotion), decorative.tsx (blobs SVG orgánicos + juncos/totoras SVG), section.tsx (SectionShell anclado con scroll-mt-24 + aria-labelledby, SectionHeading con eyebrow pill, BlockHeader A/B/C), navbar.tsx (client: sticky con blur/sombra al scrollear, Sheet móvil, targets ≥44px), hero.tsx (badge pill, tagline serif itálica tan, imagen marco orgánico rounded-tl-[7rem] con ring tan + tarjeta flotante), highlight-strip.tsx, about.tsx, species.tsx, faculties.tsx (grid lg:col-span 3+2), action-plan.tsx (pasos numerados, bullets encuesta, cita destacada), join.tsx (client: banda forest-800, chips facultades, CTA tan-300, tarjetas WhatsApp, tarjeta encuesta con estado deshabilitado), footer.tsx (sticky via mt-auto, 3 columnas, pb-safe).
- src/app/page.tsx: compone todo; skip-link accesible, main flex-1, footer sticky (min-h-screen flex flex-col).
- QA: bun run lint → 0 errores; curl / → 200 con todo el copy exacto verificado (grep de textos, anclas, wa.me, forms); imágenes 200; /icon.svg 200; tsc --noEmit sin errores en src/; dev.log sin errores de compilación.
- Nota dev: el watcher de Turbopack no recompiló globals.css en algunas ediciones (CSS servido stale); un append de contenido disparó el rebuild y quedó verificado en el CSS servido (tokens, utilidades, pb-safe presentes).

Stage Summary:
- Sitio completo y funcional en / (única ruta), copy 100% en src/data/content.ts.
- Para habilitar la encuesta «Antes y Después»: completar SURVEY_FORM_URL en src/data/content.ts (1 línea) — la tarjeta cambia sola de "Disponible próximamente" a botón activo.
- Para producción: definir NEXT_PUBLIC_SITE_URL con el dominio real de Vercel (metadataBase para OG/Twitter).
- Paleta del flyer aplicada vía tokens Tailwind (bg-olive-600, bg-cream-50, text-forest-900, bg-tan-300, etc.); tipografías Lora/Nunito Sans listas; accesibilidad (ARIA, alt, targets 44px, skip link) y footer sticky verificados.

---
Task ID: 4
Agent: main (Z.ai Code)
Task: Verificación end-to-end con Agent Browser + lint

Work Log:
- Se abrió http://localhost:3000 con agent-browser (viewport 1280x800): página renderiza sin errores, título correcto "Alimentar y Alterar — Proyecto de Extensión FCV · UNICEN".
- Verificadas visualmente TODAS las secciones scrolleando: hero, highlight strip, ¿De qué se trata? + Ficha del proyecto, Especies (3 tarjetas con imágenes), Red UNICEN (5 facultades), Propuesta de acción (stand + encuestas + datos), Sumate (chips, CTA form, WhatsApp, placeholder encuesta) y footer pegado al final.
- Nota: la captura "full-page" mostraba secciones vacías por las animaciones whileInView de Framer Motion; al scrollear como usuario real todas las secciones se renderizan correctamente (confirmado con screenshots por sección).
- Validados los 3 links del Google Form de inscripción (ID 1FAIpQLSe0aZD4092QcUHujSw2XPkT1Sy27U6y6pCB6hen6wDEKovsuA) y 6 links wa.me (3 en Sumate + 3 en footer).
- Vista móvil 390x844: hero apilado, botones full-width, menú hamburguesa (Sheet) abre/cierra y navega a #especies correctamente (scrollY=3085), menú se cierra solo tras navegar.
- agent-browser errors: 0 errores de consola. bun run lint: limpio. dev.log: sin errores de compilación.

Stage Summary:
- Sitio 100% funcional y verificado en desktop + móvil. Listo para deploy en Vercel.
- Pendiente futuro: pegar URL de encuesta en SURVEY_FORM_URL (src/data/content.ts) — el estado "Disponible próximamente" se convierte en botón activo automáticamente.
- Para Vercel: opcionalmente definir NEXT_PUBLIC_SITE_URL con el dominio real (metadata OG).

---
Task ID: 5
Agent: main (Z.ai Code)
Task: Correcciones pedidas por el usuario — overflow horizontal en mobile + quitar teléfonos de contacto

Work Log:
- Diagnóstico del scroll horizontal: blobs decorativos con offsets negativos (-right-24, -right-28, -left-24) en secciones sin clipping (about, action-plan, faculties) expandían el ancho del documento.
- Fix global: `overflow-x: hidden` + `overflow-x: clip` en html y body (globals.css). `clip` como preferente (no crea contenedor de scroll, no rompe sticky).
- Fix estructural: SectionShell ahora incluye `overflow-clip` en sus clases base → cada sección recorta sus propios blobs decorativos, a prueba de futuros agregados.
- Quitados los contactos: bloque "Si te interesa, comunicate con:" con las 3 tarjetas WhatsApp en join.tsx; columna "Contacto" del footer; constantes CONTACTS, Contact, JOIN.contactsIntro y FOOTER.contactsTitle eliminadas de content.ts (queda solo el formulario de inscripción como vía de contacto).
- Verificación agent-browser (viewport 390x844): scrollWidth=390=innerWidth → sin scroll horizontal. Desktop 1280px: scrollWidth=1280 → OK. Secciones mobile (hero, Sumate, footer) renderizan alineadas; footer sigue pegado abajo. `agent-browser errors`: 0. Lint: limpio. dev.log: 200s sin errores.

Stage Summary:
- Responsive mobile corregido en raíz (html/body) y por sección (overflow-clip), escalable ante futuros elementos decorativos.
- Sitio sin datos de contacto personales; único CTA de contacto = Google Form de inscripción.

---
Task ID: 5
Agent: Z.ai Code (main)
Task: Correcciones reportadas por el usuario — (1) overflow horizontal en mobile, (2) quitar teléfonos de los integrantes, (3) cambiar "Prototype 2025" → "Prototype 2026" en el footer.

Work Log:
- Verificado que la eliminación de contactos ya estaba completa: grep sin matches de wa.me/teléfonos/CONTACTS/MessageCircle en src; verificado en DOM visible (0 teléfonos, 0 enlaces wa.me).
- Diagnóstico de overflow con agent-browser (viewport 390x844 y 320x684): documentElement.scrollWidth == innerWidth en ambos; html/body ya tenían overflow-x: clip; viewport meta correcta; todas las secciones ya usaban SectionShell con overflow-clip y Hero con overflow-hidden; los únicos elementos fuera del viewport son SVGs decorativos recortados por sus contenedores.
- Refuerzo aplicado: se agregó `overflow-x-clip` al wrapper raíz en src/app/page.tsx (clip no rompe position: sticky del navbar, verificado navSticky top=0 tras scroll).
- Cambio de año: FOOTER.credits en src/data/content.ts ahora dice "Prototype 2026".
- Verificación end-to-end: screenshots mobile-top-390.png y mobile-footer-2026.png correctos; lint sin errores; dev.log sin errores (GET / 200).

Stage Summary:
- El sitio no genera scroll horizontal en mobile (390px y 320px verificados), el navbar sticky sigue funcionando, el footer muestra "Prototype 2026" y no hay datos de contacto visibles.
- Archivos tocados: src/app/page.tsx (overflow-x-clip), src/data/content.ts (año del prototype).
- Pendiente por el usuario: URL de la encuesta ciudadana (SURVEY_FORM_URL), más contenido futuro, decisión sobre el punto 4 del PDF, NEXT_PUBLIC_SITE_URL al deployar.

---
Task ID: 6
Agent: Z.ai Code (main)
Task: Corregir error de hidratación reportado por el usuario ("A tree hydrated but some attributes of the server rendered HTML didn't match") en <body> (className).

Work Log:
- Reproducido en agent-browser tras recargas en dev; diagnóstico: el className SSR y el del cliente son IDÉNTICOS en carga limpia (verificado comparando curl del HTML vs document.body.className), es decir, no hay mismatch real de contenido en el código de la app.
- Causa raíz: aviso transitorio propio del modo dev — Turbopack Fast Refresh/HMR deja en el DOM la clase de un build anterior al hidratar (también lo provocan extensiones de navegador que tocan el HTML). No afecta a producción.
- Fix estándar (mismo patrón ya usado en <html>): se agregó suppressHydrationWarning a <body> en src/app/layout.tsx — solo silencia advertencias de atributos de ese elemento; los mismatches reales de los hijos siguen reportándose.
- Verificación: console --clear + 2 recargas limpias → 0 errores de hidratación/mismatch; fuentes Lora y Nunito Sans aplicadas; bun run lint sin errores; dev.log sin errores.

Stage Summary:
- src/app/layout.tsx: <body suppressHydrationWarning> añadido. Consola de dev limpia tras recargas; tipografías intactas; sin cambios visuales.

---
Task ID: 7
Agent: Z.ai Code (main)
Task: Investigar segundo error de hidratación reportado (aria-controls del Sheet trigger: radix-_R_bindlb_ vs radix-_R_2qindlb_).

Work Log:
- Carga limpia en agent-browser (console --clear + open): 0 errores de hidratación.
- Comparación SSR vs cliente: curl del HTML y document.body ambos con aria-controls="radix-_R_2qindlb_" → IDs idénticos, no hay mismatch real en el código actual.
- El valor del error del usuario (_R_bindlb_, más corto) corresponde a un build anterior: la pestaña del preview quedó abierta a través de varios rebuilds de HMR y al recargar mezcló HTML viejo con bundle nuevo (misma raíz que el issue anterior del body className).
- Regresión verificada: recarga limpia → 0 errores; menú móvil abre (dialogOpen=true, 5 links + CTA "Inscribirme"); lint sin errores; dev.log 200 OK.

Stage Summary:
- Sin cambios de código necesarios: error transitorio de dev (pestaña stale + HMR de Turbopack), no ocurre en producción ni en carga limpia. Recomendación al usuario: recargar/reesperar el preview tras cada cambio; en Vercel no aplica.

---
Task ID: 8
Agent: Z.ai Code (main)
Task: Preparar el proyecto para deploy en Vercel y documentar el proceso al usuario.

Work Log:
- package.json: renombrado a "alimentar-y-alterar"; script "build" simplificado a "next build" (los cp -r de standalone eran específicos del sandbox; Vercel corre su propio pipeline y no usa "start").
- .gitignore: añadidos .screens/ (screenshots de verificación), /db/ y *.db (sqlite del scaffold sin uso — verificado con rg que no hay imports de lib/db).
- git rm --cached db/custom.db + commit "chore: preparar proyecto para deploy en Vercel".
- Verificado: repo git inicializado con identity, bun.lock presente (Vercel detecta Bun), dev server sigue en 200.

Stage Summary:
- Proyecto listo para deploy: build portable, repo limpio, sin variables de entorno obligatorias. Única env opcional: NEXT_PUBLIC_SITE_URL (metadataBase para imágenes OG) tras conocer el dominio final.

---
Task ID: 9
Agent: Z.ai Code (main)
Task: Quitar contenido interno (bloque B de encuestas «Antes y Después»), actualizar nombres del equipo en la ficha del proyecto.

Work Log:
- content.ts: eliminado ACTION_PLAN.surveyBlock completo (QR, bullets antes/después y pregunta clave de validación — interno del proyecto); dataBlock re-letra "C" → "B".
- content.ts ABOUT.facts: "Agustina Pereyra" → "Agustina Lucía Pereyra"; añadido "Docentes Tutores" (Guillermo Milano, María Laura Doumecq y María Silvia Alzuagaray); añadido "Desarrollo e Infraestructura Web" (Santiago Santillan y Eliana Melina Choque — FCEx).
- action-plan.tsx: eliminado render del bloque de encuestas y imports sin usar (CircleCheck, Quote); destructuring actualizado.
- Verificación: lint OK; en DOM ya no están las preguntas internas; ficha muestra nuevos nombres (screenshot); "El stand" queda A → B coherente (screenshot); GET 500 transitorios del hot reload entre ediciones (resueltos, reload 200 y consola 0 errores); commit "content: quitar bloque interno de encuestas...".

Stage Summary:
- El sitio ya no expone la mecánica interna de encuestas. Se mantienen: tarjeta pública "Encuesta ciudadana (próximamente)" en #participa y mención de "resultados de las encuestas" en Plataforma digital (marcado al usuario por si quiere ajustar).
- Pendiente: git push del usuario para reflejar en Vercel (el sandbox no tiene remote configurado).

---
Task ID: 10
Agent: Z.ai Code (main)
Task: Confirmación del usuario sobre elementos dejados en el sitio (sin cambios de código).

Work Log:
- El usuario confirma: mantener tarjeta pública "Encuesta ciudadana (próximamente)" en #participa y mantener mención de "resultados de las encuestas" en "Plataforma digital (Exactas)".

Stage Summary:
- Sin cambios. Pendientes de siempre: URL de la encuesta ciudadana cuando esté disponible (SURVEY_FORM_URL en src/data/content.ts), y git push del usuario para publicar los cambios en Vercel.

---
Task ID: 11
Agent: Z.ai Code (main)
Task: Quitar la mención a "Grupo de Estudio de Fauna Serrano (GEFS)" (no participa; es algo aparte).

Work Log:
- Grep en src: 2 menciones, ambas en src/data/content.ts.
- Eliminada la fila "Espacio Institucional" de ABOUT.facts (existía solo para nombrar GEFS); la ficha queda con 9 filas.
- FOOTER.institution → "Facultad de Ciencias Veterinarias — UNICEN" (sin GEFS).
- Verificado en navegador: 0 menciones de GEFS/Fauna Serrano en el DOM; footer correcto; lint sin errores; commit "content: quitar mencion de GEFS...".

Stage Summary:
- Sitio sin referencias a GEFS. Pendiente habitual: git push del usuario para publicar en Vercel.
