import Image from "next/image";
import { ArrowRight, PawPrint, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/content";
import { Blob } from "./decorative";
import { FadeIn } from "./fade-in";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative scroll-mt-24 overflow-hidden"
    >
      {/* Blobs decorativos de fondo */}
      <Blob
        variant={2}
        className="-left-28 top-16 h-80 w-80 text-tan-200 opacity-60 md:h-[26rem] md:w-[26rem]"
      />
      <Blob
        variant={1}
        className="-right-32 top-1/3 h-96 w-96 text-olive-500 opacity-10"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        {/* Texto */}
        <div className="max-w-xl">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-olive-600/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-olive-700 shadow-soft md:text-[13px]">
              <Sprout aria-hidden="true" className="size-4" />
              {HERO.badge}
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              id="hero-title"
              className="mt-6 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-forest-900 md:text-6xl lg:text-7xl"
            >
              {HERO.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mt-4 font-heading text-xl italic text-tan-500 md:text-2xl">
              {HERO.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-forest-800/85 md:text-lg">
              {HERO.description}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.26}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-olive-600 px-7 text-base font-bold text-cream-50 shadow-card hover:bg-olive-700"
            >
              <a href={HERO.primaryCta.href} target="_blank" rel="noopener noreferrer">
                {HERO.primaryCta.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-olive-600/35 bg-white/60 px-7 text-base font-bold text-olive-700 hover:border-olive-600/60 hover:bg-olive-600/10 hover:text-olive-700"
            >
              <a href={HERO.secondaryCta.href}>{HERO.secondaryCta.label}</a>
            </Button>
          </FadeIn>
        </div>

        {/* Imagen con marco orgánico */}
        <FadeIn delay={0.15} y={36} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative">
            <Blob
              variant={1}
              className="-right-10 -top-10 h-56 w-56 text-tan-200 opacity-80 md:h-72 md:w-72"
            />
            <Blob
              variant={3}
              className="-bottom-12 -left-12 h-64 w-64 text-olive-500 opacity-15"
            />

            {/* Marco desplazado */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-1 rounded-[2.5rem] rounded-tl-[7rem] rounded-br-[7rem] border border-tan-300/60"
            />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-tl-[7rem] rounded-br-[7rem] shadow-card ring-4 ring-tan-200/70">
              <Image
                src={HERO.image.src}
                alt={HERO.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card ring-1 ring-tan-200/60 backdrop-blur sm:flex md:left-8">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-olive-600/10 text-olive-700"
              >
                <PawPrint className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-forest-900">
                  {HERO.floatingCard.title}
                </p>
                <p className="mt-0.5 text-xs text-forest-800/70">
                  {HERO.floatingCard.subtitle}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
