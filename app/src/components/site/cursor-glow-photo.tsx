import { CursorGlowCard } from "./cursor-glow-card";

/**
 * Photo variant of CursorGlowCard — renders an <img> with the cursor-reactive
 * glow. Kept as a thin wrapper so existing photo call sites (About section)
 * don't need to change.
 */
export function CursorGlowPhoto({
  src,
  alt,
  aspectClassName = "aspect-[3/4]",
  imageClassName = "object-cover",
  glowIntensity = 0.28,
}: {
  src: string;
  alt: string;
  aspectClassName?: string;
  imageClassName?: string;
  glowIntensity?: number;
}) {
  return (
    <CursorGlowCard aspectClassName={aspectClassName} glowIntensity={glowIntensity}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${imageClassName}`}
        loading="eager"
        fetchPriority="high"
      />
    </CursorGlowCard>
  );
}

