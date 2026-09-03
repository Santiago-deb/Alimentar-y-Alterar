import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Blobs orgánicos decorativos (SVG)                                  */
/* ------------------------------------------------------------------ */

const BLOB_PATHS: Record<1 | 2 | 3, string> = {
  1: "M43.9,-64.9C56.4,-57.2,65.7,-44.1,71.3,-29.6C76.9,-15.1,78.8,0.8,74.9,15.1C71,29.4,61.3,42.1,49.2,51.6C37.1,61.1,22.6,67.4,7.2,69.5C-8.2,71.6,-24.4,69.5,-37.9,62.1C-51.4,54.7,-62.2,42,-68.2,27.3C-74.2,12.6,-75.4,-4.1,-70.3,-18.6C-65.2,-33.1,-53.8,-45.4,-40.8,-53.2C-27.8,-61,-13.9,-64.3,0.9,-65.5C15.7,-66.7,31.4,-72.6,43.9,-64.9Z",
  2: "M38.4,-58.7C50.2,-51.9,60.6,-41.5,66.3,-29C72,-16.5,73,-1.9,69.6,11.2C66.2,24.3,58.4,35.9,48.2,44.7C38,53.5,25.4,59.5,11.7,63.1C-2,66.7,-16.8,67.9,-29.5,62.4C-42.2,56.9,-52.8,44.7,-59.3,31C-65.8,17.3,-68.2,2.1,-65.4,-11.9C-62.6,-25.9,-54.6,-38.7,-43.7,-45.8C-32.8,-52.9,-19,-54.3,-4.6,-56.6C9.8,-58.9,26.6,-65.5,38.4,-58.7Z",
  3: "M49.3,-63.6C62.4,-54.5,70.4,-38.5,73.4,-22.2C76.4,-5.9,74.4,10.7,67.6,24.9C60.8,39.1,49.2,50.9,35.4,58.4C21.6,65.9,5.6,69.1,-10.5,67.3C-26.6,65.5,-42.8,58.7,-54.4,46.9C-66,35.1,-73,18.3,-72.4,2.1C-71.8,-14.1,-63.6,-29.7,-52.1,-39C-40.6,-48.3,-25.8,-51.4,-11.7,-55.1C2.4,-58.8,36.2,-72.7,49.3,-63.6Z",
};

type BlobProps = {
  className?: string;
  variant?: 1 | 2 | 3;
};

/** Mancha orgánica decorativa. Color vía `text-*`, opacidad vía `opacity-*`. */
export function Blob({ className, variant = 1 }: BlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none absolute", className)}
    >
      <path d={BLOB_PATHS[variant]} fill="currentColor" transform="translate(100 100)" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Juncos / totoras decorativos (SVG)                                 */
/* ------------------------------------------------------------------ */

/** Conjunto de tres juncos (cattails) dibujados a mano. */
export function Cattails({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 150"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none absolute", className)}
    >
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M38 150V80" />
        <path d="M72 150V52" />
        <path d="M104 150V88" />
        <path d="M38 118c-10-10-16-24-14-40" />
        <path d="M72 96c12-8 18-22 16-40" />
        <path d="M104 122c-12-8-20-22-18-42" />
      </g>
      <ellipse cx="38" cy="60" rx="9" ry="22" fill="currentColor" />
      <ellipse cx="72" cy="32" rx="9" ry="22" fill="currentColor" opacity="0.85" />
      <ellipse cx="104" cy="68" rx="9" ry="22" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
