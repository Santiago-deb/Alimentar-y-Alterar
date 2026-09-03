import Image from "next/image";
import { SPECIES } from "@/data/content";
import { FadeIn } from "./fade-in";
import { SectionHeading, SectionShell } from "./section";

export function Species() {
  return (
    <SectionShell id={SPECIES.id} labelledById="especies-title">
      <SectionHeading
        id="especies-title"
        eyebrow={SPECIES.eyebrow}
        title={SPECIES.title}
      />

      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {SPECIES.items.map((species, index) => (
          <FadeIn key={species.name} delay={index * 0.08} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-tan-200/50 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={species.image}
                  alt={species.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-bold tracking-wide text-olive-700 backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold leading-snug text-forest-900">
                  {species.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold italic leading-snug text-olive-600">
                  {species.scientificName}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/75">
                  {species.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
