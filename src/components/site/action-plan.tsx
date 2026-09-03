import { ACTION_PLAN } from "@/data/content";
import { Blob } from "./decorative";
import { FadeIn } from "./fade-in";
import { BlockHeader, SectionHeading, SectionShell } from "./section";

export function ActionPlan() {
  const { standBlock, dataBlock } = ACTION_PLAN;

  return (
    <SectionShell id={ACTION_PLAN.id} labelledById="stand-title">
      <Blob
        variant={1}
        className="-right-28 top-16 h-80 w-80 text-tan-200 opacity-50"
      />

      <SectionHeading
        id="stand-title"
        eyebrow={ACTION_PLAN.eyebrow}
        title={ACTION_PLAN.title}
        description={ACTION_PLAN.intro}
      />

      {/* A — Stand de concientización itinerante */}
      <FadeIn delay={0.05} className="mt-12 md:mt-16">
        <BlockHeader letter={standBlock.letter} title={standBlock.title} />
        <ol className="mt-6 grid gap-5 md:grid-cols-3 lg:gap-6">
          {standBlock.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col rounded-3xl border border-tan-200/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-semibold leading-none text-tan-300"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-4 font-heading text-lg font-semibold leading-snug text-forest-900">
                {step.title}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-forest-800/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </FadeIn>

      {/* B — Datos y difusión web */}
      <FadeIn delay={0.05} className="mt-12 md:mt-16">
        <BlockHeader letter={dataBlock.letter} title={dataBlock.title} />
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:gap-6">
          {dataBlock.items.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-3xl border border-tan-200/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-olive-600/10 text-olive-700"
              >
                <item.icon className="size-6" />
              </span>
              <div>
                <h4 className="font-heading text-lg font-semibold leading-snug text-forest-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
