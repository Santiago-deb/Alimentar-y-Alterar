import { ActionPlan } from "@/components/site/action-plan";
import { About } from "@/components/site/about";
import { SiteFooter } from "@/components/site/footer";
import { Faculties } from "@/components/site/faculties";
import { Hero } from "@/components/site/hero";
import { HighlightStrip } from "@/components/site/highlight-strip";
import { Join } from "@/components/site/join";
import { Navbar } from "@/components/site/navbar";
import { Species } from "@/components/site/species";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-cream-50 text-forest-900">
      {/* Accesibilidad: salto directo al contenido */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-olive-600 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream-50"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" className="flex-1">
        <Hero />
        <HighlightStrip />
        <About />
        <Species />
        <Faculties />
        <ActionPlan />
        <Join />
      </main>

      <SiteFooter />
    </div>
  );
}
