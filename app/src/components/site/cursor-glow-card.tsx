import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Cursor-reactive purple/blue glow + subtle 3D tilt wrapper. As the pointer
 * moves across the card, a radial highlight follows it — motivated: it makes
 * the "AI light reacts to you" promise tangible instead of decorative. Works
 * with any content (photo, video placeholder, etc.) passed as children.
 */
export function CursorGlowCard({
  children,
  aspectClassName = "aspect-[3/4]",
  glowIntensity = 0.28,
  className = "",
}: {
  children: ReactNode;
  aspectClassName?: string;
  /** 0-1 multiplier on the glow's peak opacity. Lower = subtler light, keeps content clearer. */
  glowIntensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 120, damping: 18 });
  const springY = useSpring(my, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);
  const glowX = useTransform(springX, (v) => `${v * 100}%`);
  const glowY = useTransform(springY, (v) => `${v * 100}%`);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`ds-glow-border relative w-full overflow-hidden rounded-3xl bg-[#0e0e12] ${aspectClassName} ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(320px circle at ${gx} ${gy}, rgba(123,47,255,${glowIntensity}), rgba(47,111,255,${glowIntensity * 0.5}) 45%, transparent 70%)`,
          ),
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
    </motion.div>
  );
}

