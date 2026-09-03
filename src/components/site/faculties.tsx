import { FACULTIES } from "@/data/content";
import { cn } from "@/lib/utils";
import { Blob } from "./decorative";
import { FadeIn } from "./fade-in";
import { SectionHeading, SectionShell } from "./section";

export function Faculties() {
  return (
    <SectionShell
      id={FACULTIES.id}
      labelledById="red-unicen-title"
      className="bg-cream-100"
    >
      <Blob
        variant={3}
        className="-left-24 bottom-8 h-72 w-72 text-olive-500 opacity-10"
      />

      <SectionHeading
        id="red-unicen-title"
        eyebrow={FACULTIES.eyebrow}
        title={FACULTIES.title}
        description={FACULTIES.intro}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-6 lg:gap-6">
        {FACULTIES.items.map((faculty, index) => (
          <FadeIn
            key={faculty.name}
            delay={index * 0.06}
            className={cn(
              "h-full",
              index < 3 ? "lg:col-span-2" : "lg:col-span-3"
            )}
          >
            <article className="flex h-full flex-col rounded-3xl border border-tan-200/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-2xl bg-olive-600/10 text-olive-700"
              >
                <faculty.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-forest-900">
                {faculty.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-forest-800/75">
                {faculty.contribution}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
