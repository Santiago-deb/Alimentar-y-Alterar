import type { ReactNode } from "react";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

/* ------------------------------------------------------------------ */
/*  Envoltura de sección (semántica + ancla + ritmo vertical)          */
/* ------------------------------------------------------------------ */

type SectionShellProps = {
  id: string;
  /** id del <h2> interno para aria-labelledby. */
  labelledById?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  labelledById,
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledById}
      className={cn("relative scroll-mt-24 py-16 md:py-24", className)}
    >
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Encabezado de sección (eyebrow + título + descripción)             */
/* ------------------------------------------------------------------ */

type SectionHeadingProps = {
  /** id del h2 (usar como labelledById en SectionShell). */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Versión sobre fondo oscuro (banda oliva). */
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]",
          dark ? "bg-cream-50/10 text-tan-300" : "bg-olive-600/10 text-olive-700"
        )}
      >
        <Sprout aria-hidden="true" className="size-3.5" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={cn(
          "mt-4 font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl",
          dark ? "text-cream-50" : "text-forest-900"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-cream-100/80" : "text-forest-800/75"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Encabezado de sub-bloque (letra A/B/C + título)                    */
/* ------------------------------------------------------------------ */

export function BlockHeader({
  letter,
  title,
  dark = false,
}: {
  letter: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold",
          dark
            ? "bg-tan-300 text-forest-900"
            : "bg-olive-600 text-cream-50 shadow-soft"
        )}
      >
        {letter}
      </span>
      <h3
        className={cn(
          "font-heading text-xl font-semibold md:text-2xl",
          dark ? "text-cream-50" : "text-forest-900"
        )}
      >
        {title}
      </h3>
    </div>
  );
}
