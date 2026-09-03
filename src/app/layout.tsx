import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE_METADATA } from "@/data/content";

/* Tipografía del proyecto: Lora (títulos, serif) + Nunito Sans (cuerpo) */
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Dominio de producción para resolver las imágenes de OG/Twitter.
  // Al deployar en Vercel, definir NEXT_PUBLIC_SITE_URL con el dominio real.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alimentar-y-alterar.vercel.app"
  ),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [
    {
      name: "Facultad de Ciencias Veterinarias — UNICEN",
      url: "https://www.vet.unicen.edu.ar/",
    },
  ],
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "Alimentar y Alterar",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: SITE_METADATA.ogImage.src,
        width: SITE_METADATA.ogImage.width,
        height: SITE_METADATA.ogImage.height,
        alt: SITE_METADATA.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${nunitoSans.variable} font-sans antialiased bg-cream-50 text-forest-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
