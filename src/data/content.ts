import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarDays,
  Code2,
  Globe,
  MapPin,
  Palette,
  PawPrint,
  Presentation,
  Stethoscope,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Enlaces / formularios                                              */
/* ------------------------------------------------------------------ */

/** Formulario de inscripción de voluntariado (Google Forms). */
export const JOIN_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0aZD4092QcUHujSw2XPkT1Sy27U6y6pCB6hen6wDEKovsuA/viewform";

/**
 * URL de la encuesta ciudadana «Antes y Después» (Google Forms).
 * Todavía no está disponible: mientras la constante esté vacía, la UI muestra
 * el estado "Disponible próximamente". Para habilitarla, completar el valor.
 */
export const SURVEY_FORM_URL = "";

/* ------------------------------------------------------------------ */
/*  Identidad del sitio                                                */
/* ------------------------------------------------------------------ */

export const SITE_NAME = "Alimentar y Alterar";
export const SITE_TAGLINE =
  "«Estar presentes sin interferir: el arte de convivir»";

export const SITE_METADATA = {
  title: "Alimentar y Alterar — Proyecto de Extensión FCV · UNICEN",
  description:
    "Proyecto de extensión e intervención sanitaria de la Facultad de Ciencias Veterinarias (UNICEN, Tandil) en el Dique del Fuerte: concientización sobre el impacto de la alimentación antrópica en carpinchos y aves acuáticas.",
  keywords: [
    "Alimentar y Alterar",
    "Proyecto de extensión",
    "FCV UNICEN",
    "Facultad de Ciencias Veterinarias",
    "Lago del Fuerte",
    "Dique del Fuerte",
    "Tandil",
    "carpinchos",
    "fauna urbana",
    "aves acuáticas",
    "alimentación antrópica",
    "salud pública",
    "zoonosis",
    "extensión universitaria",
  ],
  ogImage: {
    src: "/images/hero-capybara.png",
    alt: "Carpincho en la costa del Lago del Fuerte de Tandil, con las sierras de fondo",
    width: 1344,
    height: 768,
  },
};

/* ------------------------------------------------------------------ */
/*  Navegación                                                         */
/* ------------------------------------------------------------------ */

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "El proyecto", href: "#proyecto" },
  { label: "Especies", href: "#especies" },
  { label: "Red UNICEN", href: "#red-unicen" },
  { label: "El stand", href: "#stand" },
  { label: "Sumate", href: "#participa" },
];

export const NAV_CTA = { label: "Inscribirme", href: JOIN_FORM_URL };

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const HERO = {
  badge: "Proyecto de Extensión · FCV – UNICEN",
  title: "Alimentar y Alterar",
  tagline: SITE_TAGLINE,
  description:
    "Intervención en el Dique del Fuerte con un stand itinerante para concientizar sobre el impacto de la alimentación antrópica en carpinchos y aves. Con juegos, tecnología, encuestas y material visual, buscamos transformar la relación entre los visitantes y la fauna local.",
  primaryCta: {
    label: "Quiero sumarme al equipo",
    href: JOIN_FORM_URL,
  },
  secondaryCta: {
    label: "Conocer el proyecto",
    href: "#proyecto",
  },
  image: {
    src: "/images/hero-capybara.png",
    alt: "Carpincho en la costa del Lago del Fuerte de Tandil, con las sierras de fondo",
  },
  floatingCard: {
    title: "Fauna del Lago del Fuerte",
    subtitle: "Carpinchos · aves acuáticas · gansos",
  },
};

/* ------------------------------------------------------------------ */
/*  Franja de datos destacados                                         */
/* ------------------------------------------------------------------ */

export type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const HIGHLIGHTS: StatItem[] = [
  { icon: MapPin, value: "Lago del Fuerte", label: "Tandil, Buenos Aires" },
  { icon: CalendarDays, value: "Sept – Dic 2026", label: "Período de relevamiento" },
  { icon: Presentation, value: "4 jornadas", label: "presenciales en puntos estratégicos" },
  { icon: PawPrint, value: "3 especies", label: "objetivo de la intervención" },
];

/* ------------------------------------------------------------------ */
/*  Sección: El proyecto                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  id: "proyecto",
  eyebrow: "El proyecto",
  title: "¿De qué se trata?",
  paragraphs: [
    "El Lago del Fuerte es un embalse urbano clave de la ciudad de Tandil que funciona como espacio recreativo masivo para residentes y turistas, actuando simultáneamente como refugio de fauna. La convivencia entre visitantes y animales genera una interfaz urbano-silvestre con importantes implicancias ecológicas, etológicas y de salud pública.",
    "El relevamiento directo demuestra que la entrega indiscriminada de alimentos procesados es el detonante primario de un ciclo de afecciones nutricionales, alteración conductual y riesgos zoonóticos. Para abordar esta problemática desde el respeto y la coexistencia, la UNICEN propone una intervención directa en territorio, basada en un stand itinerante, dinámicas lúdicas, herramientas tecnológicas y evaluación de impacto educativo directo sobre la población.",
  ],
  factsTitle: "Ficha del proyecto",
  facts: [
    {
      label: "Unidad Académica Responsable",
      value: "Facultad de Ciencias Veterinarias (FCV) – UNICEN",
    },
    {
      label: "Espacio Institucional",
      value: "Grupo de Estudio de Fauna Serrano (GEFS)",
    },
    {
      label: "Eje Temático / Cátedra Sostén",
      value: "Nutrición Animal y Ecológico (FCV)",
    },
    {
      label: "Cátedras Integradas de Apoyo",
      value: "Microbiología y Virología (FCV)",
    },
    {
      label: "Autora e Impulsora Principal",
      value: "Micaela Noemí Guzmán",
    },
    {
      label: "Equipo Estudiantil Ejecutor",
      value: "Abril Petz y Agustina Pereyra",
    },
    {
      label: "Lugar de Relevamiento",
      value: "Dique / Lago del Fuerte, Tandil, Buenos Aires",
    },
    {
      label: "Fecha de Relevamiento",
      value: "Septiembre – Diciembre 2026",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Sección: Especies                                                  */
/* ------------------------------------------------------------------ */

export type SpeciesItem = {
  name: string;
  scientificName: string;
  description: string;
  image: string;
  alt: string;
};

export const SPECIES = {
  id: "especies",
  eyebrow: "Fauna del lago",
  title: "Especies objetivo de la intervención",
  items: [
    {
      name: "Carpinchos",
      scientificName: "Hydrochoerus hydrochaeris",
      description:
        "Herbívoros mamíferos semi-acuáticos y fermentadores cecales.",
      image: "/images/especie-carpincho.png",
      alt: "Carpincho (Hydrochoerus hydrochaeris) en el agua entre juncos del Lago del Fuerte",
    },
    {
      name: "Aves acuáticas nativas",
      scientificName: "Anas flavirostris · Anas georgica · Dendrocygna viduata",
      description:
        "Patos silvestres, gallaretas y macás que habitan las orillas del lago.",
      image: "/images/especie-aves.png",
      alt: "Patos silvestres nativos nadando en el Lago del Fuerte",
    },
    {
      name: "Gansos domésticos / asilvestrados",
      scientificName: "Anser anser",
      description:
        "Población introducida de alto contacto e interacción alimentaria directa con el público.",
      image: "/images/especie-ganso.png",
      alt: "Ganso doméstico asilvestrado en la costa del Lago del Fuerte",
    },
  ] satisfies SpeciesItem[],
};

/* ------------------------------------------------------------------ */
/*  Sección: Red UNICEN (facultades)                                   */
/* ------------------------------------------------------------------ */

export type FacultyItem = {
  icon: LucideIcon;
  name: string;
  contribution: string;
};

export const FACULTIES = {
  id: "red-unicen",
  eyebrow: "Red UNICEN",
  title: "Articulación interdisciplinaria (Red UNICEN)",
  intro:
    "Cinco facultades de la UNICEN articulan sus saberes para potenciar el alcance técnico, social y estético de la intervención.",
  items: [
    {
      icon: Stethoscope,
      name: "Ciencias Veterinarias (FCV)",
      contribution:
        "Diagnóstico biológico, nutricional, etológico y de bioseguridad/zoonosis.",
    },
    {
      icon: Users,
      name: "Ciencias Humanas (FCH)",
      contribution:
        "Abordaje comunitario, dinamización del espacio público y evaluación de impacto socioambiental. Preparación de juegos didácticos para los niños y charlas a los adultos (recursos pedagógicos y expresivos).",
    },
    {
      icon: Palette,
      name: "Facultad de Arte (FA)",
      contribution:
        "Diseño visual del stand, estética de cartelería móvil, identidad gráfica y recursos expresivos/pedagógicos.",
    },
    {
      icon: Code2,
      name: "Ciencias Exactas (FCEx)",
      contribution:
        "Desarrollo web informativo y arquitectura digital mediante códigos QR dinámicos para encuestas accesibles.",
    },
    {
      icon: BarChart3,
      name: "Ciencias Económicas (FCE)",
      contribution:
        "Procesamiento estadístico de datos muestrales (impacto pedagógico de las encuestas) y estrategia de marketing/comunicación institucional para convocar colegios mediante flyers.",
    },
  ] satisfies FacultyItem[],
};

/* ------------------------------------------------------------------ */
/*  Sección: Propuesta de acción (el stand)                            */
/* ------------------------------------------------------------------ */

export type PlanStep = { title: string; description: string };
export type PlanCard = { icon: LucideIcon; title: string; description: string };

export const ACTION_PLAN = {
  id: "stand",
  eyebrow: "El stand",
  title: "Propuesta de acción",
  intro:
    "El proyecto se ejecutará a lo largo de cuatro (4) jornadas presenciales en puntos estratégicos del Lago del Fuerte.",
  standBlock: {
    letter: "A",
    title: "Stand de concientización itinerante",
    steps: [
      {
        title: "Espacio didáctico infantil «Aprender Jugando»",
        description:
          "Dinámicas de clasificación de dieta natural vs. antrópica y acreditación de «Cuidadores de la Fauna».",
      },
      {
        title: "Atención a adultos y divulgación",
        description:
          "Paneles informativos diseñados con la Facultad de Arte y asesoramiento técnico veterinario.",
      },
      {
        title: "Convocatoria a escuelas",
        description:
          "Estrategia de comunicación de la Facultad de Económicas mediante la elaboración y difusión de flyers institucionales para atraer delegaciones escolares invitadas.",
      },
    ] satisfies PlanStep[],
  },
  surveyBlock: {
    letter: "B",
    title:
      "Evaluación de impacto pedagógico — encuestas «Antes y Después»",
    description:
      "A través de un código QR desarrollado por la Facultad de Exactas, los visitantes accederán a una plataforma rápida de evaluación:",
    bullets: [
      {
        lead: "Encuesta pre-intervención (antes):",
        text: "diagnóstico de percepción del público sobre la alimentación de la fauna, mitos digestivos y conducta habitual en el Dique.",
      },
      {
        lead: "Encuesta post-intervención (después):",
        text: "medición directa del aprendizaje obtenido tras recorrer el stand.",
      },
    ],
    quote: {
      label: "Pregunta clave de validación ciudadana",
      text: "«Luego de conocer el impacto biológico, ¿considera que esta cartelería/información explicativa debería estar instalada de forma permanente en el Lago del Fuerte?»",
    },
  },
  dataBlock: {
    letter: "C",
    title: "Procesamiento de datos y difusión web",
    items: [
      {
        icon: BarChart3,
        title: "Tratamiento de datos (Económicas)",
        description:
          "Tabulación, análisis estadístico y elaboración de un informe cuantitativo de impacto social.",
      },
      {
        icon: Globe,
        title: "Plataforma digital (Exactas)",
        description:
          "Este sitio: publicación de infografías, material educativo digital, resultados de las encuestas y memoria del proyecto.",
      },
    ] satisfies PlanCard[],
  },
};

/* ------------------------------------------------------------------ */
/*  Sección: Participá (sumate al equipo)                              */
/* ------------------------------------------------------------------ */

export type JoinChip = { label: string; icon: LucideIcon };

export const JOIN = {
  id: "participa",
  eyebrow: "Sumate",
  title: "¡Estamos buscando estudiantes para sumar al equipo!",
  description:
    "Convocamos estudiantes de las cinco facultades de la UNICEN. Completá el formulario de inscripción y súmate al equipo ejecutor del proyecto.",
  chips: [
    { label: "Veterinaria", icon: PawPrint },
    { label: "Humanas", icon: Users },
    { label: "Económicas", icon: BarChart3 },
    { label: "Arte", icon: Palette },
    { label: "Exactas", icon: Code2 },
  ] satisfies JoinChip[],
  ctaLabel: "Completar formulario de inscripción",
  survey: {
    title: "Encuesta ciudadana",
    description:
      "Próximamente vas a poder participar de la encuesta «Antes y Después» sobre convivencia con la fauna del lago.",
    ctaLabel: "Participar de la encuesta",
    disabledLabel: "Disponible próximamente",
  },
};

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  institution:
    "Facultad de Ciencias Veterinarias — UNICEN · Grupo de Estudio de Fauna Serrano (GEFS)",
  linksTitle: "Secciones",
  credits:
    "Proyecto de Extensión FCV – UNICEN · Sitio desarrollado por Ciencias Exactas (FCEx) · Prototype 2025",
};
