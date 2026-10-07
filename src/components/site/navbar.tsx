"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Leaf, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  INSCRIPCIONES_ABIERTAS,
  NAV_CTA,
  NAV_LINKS,
  SITE_NAME,
} from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-olive-700/10 bg-cream-50/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-cream-50/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[4.5rem] lg:px-8">
        {/* Marca */}
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-600/50"
          aria-label={`${SITE_NAME} — ir al inicio`}
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-2xl bg-olive-600 text-cream-50 shadow-soft"
          >
            <Leaf className="size-4.5" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-forest-900 md:text-xl">
            {SITE_NAME}
          </span>
        </a>

        {/* Links de escritorio */}
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-forest-800/85 transition-colors hover:bg-olive-600/10 hover:text-olive-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-600/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA escritorio */}
          {INSCRIPCIONES_ABIERTAS ? (
            <Button
              asChild
              className="hidden h-11 rounded-full bg-olive-600 px-5 text-sm font-bold text-cream-50 shadow-soft hover:bg-olive-700 lg:inline-flex"
            >
              <a href={NAV_CTA.href} target="_blank" rel="noopener noreferrer">
                {NAV_CTA.label}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
          ) : null}

          {/* Menú móvil */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Abrir menú de navegación"
                className="size-11 rounded-xl text-forest-900 hover:bg-olive-600/10 hover:text-olive-700 lg:hidden"
              >
                <Menu aria-hidden="true" className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[19rem] border-tan-200/70 bg-cream-50"
              aria-describedby={undefined}
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5 font-heading text-lg font-semibold text-forest-900">
                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-xl bg-olive-600 text-cream-50"
                  >
                    <Leaf className="size-4" />
                  </span>
                  {SITE_NAME}
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menú de navegación del sitio
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Navegación móvil" className="flex-1 px-4">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="flex min-h-11 items-center rounded-xl px-3 text-base font-semibold text-forest-800 transition-colors hover:bg-olive-600/10 hover:text-olive-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-600/50"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              {INSCRIPCIONES_ABIERTAS ? (
                <div className="px-4 pb-6">
                  <Button
                    asChild
                    className="h-12 w-full rounded-full bg-olive-600 text-base font-bold text-cream-50 hover:bg-olive-700"
                  >
                    <a href={NAV_CTA.href} target="_blank" rel="noopener noreferrer">
                      {NAV_CTA.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
