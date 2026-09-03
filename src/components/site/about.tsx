import { Leaf } from "lucide-react";
import { ABOUT } from "@/data/content";
import { Blob } from "./decorative";
import { FadeIn } from "./fade-in";
import { SectionHeading, SectionShell } from "./section";

export function About() {
  return (
    <SectionShell id={ABOUT.id} labelledById="proyecto-title" className="bg-cream-100">
      <Blob
        variant={2}
        className="-right-24 top-8 h-72 w-72 text-tan-200 opacity-50"
      />

      <SectionHeading id="proyecto-title" eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

      <FadeIn
        delay={0.05}
        className="mx-auto mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-forest-800/85 md:text-lg"
      >
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </FadeIn>

      {/* Ficha del proyecto */}
      <FadeIn delay={0.1} className="mt-12 md:mt-16">
        <div className="mb-6 flex items-center gap-3 md:mb-8">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-olive-600 text-cream-50 shadow-soft"
          >
            <Leaf className="size-5" />
          </span>
          <h3 className="font-heading text-2xl font-semibold text-forest-900 md:text-3xl">
            {ABOUT.factsTitle}
          </h3>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {ABOUT.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-tan-200/60 bg-white p-5 shadow-soft transition-shadow hover:shadow-card"
            >
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-tan-500">
                {fact.label}
              </dt>
              <dd className="mt-2 font-semibold leading-snug text-forest-900">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </SectionShell>
  );
}
