import { HIGHLIGHTS } from "@/data/content";
import { FadeIn } from "./fade-in";

export function HighlightStrip() {
  return (
    <section
      aria-label="Datos clave del proyecto"
      className="relative py-10 md:py-14"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:gap-6 lg:grid-cols-4 lg:px-8">
        {HIGHLIGHTS.map((item, index) => (
          <FadeIn key={item.value} delay={index * 0.08} className="h-full">
            <div className="flex h-full flex-col gap-3 rounded-3xl border border-tan-200/50 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover md:p-6">
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-2xl bg-olive-600/10 text-olive-700"
              >
                <item.icon className="size-5" />
              </span>
              <div>
                <p className="font-heading text-xl font-semibold leading-tight text-forest-900 md:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-forest-800/70 md:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
