"use client";

import { ArrowUpRight, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  INSCRIPCIONES_ABIERTAS,
  JOIN,
  JOIN_FORM_URL,
  SURVEY_FORM_URL,
} from "@/data/content";
import { Blob, Cattails } from "./decorative";
import { FadeIn } from "./fade-in";
import { SectionHeading, SectionShell } from "./section";

export function Join() {
  const surveyEnabled = SURVEY_FORM_URL.trim().length > 0;

  return (
    <SectionShell
      id={JOIN.id}
      labelledById="participa-title"
      className="overflow-hidden bg-forest-800"
    >
      {/* Decoración de fondo */}
      <Blob
        variant={2}
        className="-left-24 top-10 h-80 w-80 text-cream-100 opacity-[0.06]"
      />
      <Blob
        variant={1}
        className="-right-28 bottom-32 h-96 w-96 text-tan-300 opacity-[0.08]"
      />
      <Cattails className="bottom-0 right-2 h-40 w-36 text-tan-300 opacity-15 md:right-14 md:h-52 md:w-48" />

      <SectionHeading
        id="participa-title"
        eyebrow={JOIN.eyebrow}
        title={INSCRIPCIONES_ABIERTAS ? JOIN.title : JOIN.closed.title}
        description={
          INSCRIPCIONES_ABIERTAS ? JOIN.description : JOIN.closed.description
        }
        dark
      />

      {/* Chips de facultades */}
      <FadeIn delay={0.05} className="mt-8">
        <ul className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {JOIN.chips.map((chip) => (
            <li
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/15 bg-cream-50/10 px-4 py-2 text-sm font-semibold text-cream-50"
            >
              <chip.icon aria-hidden="true" className="size-4 text-tan-300" />
              {chip.label}
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* CTA principal (o aviso de inscripciones cerradas) */}
      <FadeIn delay={0.1} className="mt-8 flex justify-center md:mt-10">
        {INSCRIPCIONES_ABIERTAS ? (
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-tan-300 px-8 text-base font-bold text-forest-900 shadow-card hover:bg-tan-200"
          >
            <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
              {JOIN.ctaLabel}
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
          </Button>
        ) : (
          <span className="inline-flex h-14 items-center gap-2 rounded-full bg-cream-50/10 px-8 text-base font-bold text-cream-100/80">
            <Lock aria-hidden="true" className="size-5" />
            {JOIN.closed.badge}
          </span>
        )}
      </FadeIn>

      {/* Encuesta ciudadana (próximamente) */}
      <FadeIn delay={0.1} className="mt-12 md:mt-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-3xl border border-cream-50/15 bg-cream-50/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-tan-300/20 text-tan-300 sm:flex"
            >
              <Clock className="size-6" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-cream-50 md:text-xl">
                {JOIN.survey.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-cream-100/80">
                {JOIN.survey.description}
              </p>
            </div>
          </div>

          {surveyEnabled ? (
            <Button
              asChild
              size="lg"
              className="h-12 shrink-0 rounded-full bg-tan-300 px-6 font-bold text-forest-900 hover:bg-tan-200"
            >
              <a href={SURVEY_FORM_URL} target="_blank" rel="noopener noreferrer">
                {JOIN.survey.ctaLabel}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
          ) : (
            <Button
              disabled
              size="lg"
              aria-disabled="true"
              className="h-12 shrink-0 cursor-not-allowed rounded-full bg-cream-50/10 px-6 font-bold text-cream-100/70"
            >
              <Clock aria-hidden="true" className="size-4" />
              {JOIN.survey.disabledLabel}
            </Button>
          )}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
