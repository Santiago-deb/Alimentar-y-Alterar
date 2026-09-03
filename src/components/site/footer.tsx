import { Leaf, MessageCircle } from "lucide-react";
import { CONTACTS, FOOTER, NAV_LINKS, SITE_TAGLINE } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-olive-700 text-cream-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.1fr] md:gap-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-2xl bg-cream-50/10 text-tan-300"
              >
                <Leaf className="size-5" />
              </span>
              <span className="font-heading text-xl font-semibold text-cream-50">
                {FOOTER.name}
              </span>
            </div>
            <p className="mt-4 font-heading text-base italic text-tan-200">
              {FOOTER.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-100/75">
              {FOOTER.institution}
            </p>
          </div>

          {/* Secciones */}
          <nav aria-label="Secciones del sitio">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-tan-300">
              {FOOTER.linksTitle}
            </h3>
            <ul className="mt-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-cream-100/80 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan-300/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-tan-300">
              {FOOTER.contactsTitle}
            </h3>
            <ul className="mt-3">
              {CONTACTS.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp de ${contact.name}, teléfono ${contact.phone}`}
                    className="inline-flex min-h-11 items-center gap-2.5 text-sm text-cream-100/80 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan-300/60"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="size-4 shrink-0 text-tan-300"
                    />
                    {contact.name} · {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="pb-safe mt-10 flex flex-col gap-2 border-t border-cream-100/15 pt-6 text-xs text-cream-100/70 md:flex-row md:items-center md:justify-between md:text-sm">
          <p>{FOOTER.credits}</p>
          <p className="font-heading italic text-tan-200">{SITE_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
