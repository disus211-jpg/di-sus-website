import { motion, useReducedMotion } from "motion/react";
import {
  Code,
  InstagramLogo,
  TrendUp,
  Megaphone,
  EnvelopeSimple,
  MagnifyingGlass,
  PenNib,
  PaintBrush,
  type Icon,
} from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { useLanguage } from "../../lib/i18n/language-context";

// Icons are positional — they map 1:1 to translations.services.items by index
// (both ES and EN keep the same 8 services in the same order).
const SERVICE_ICONS: Icon[] = [
  Code,
  InstagramLogo,
  TrendUp,
  Megaphone,
  EnvelopeSimple,
  MagnifyingGlass,
  PenNib,
  PaintBrush,
];

function ServiceCard({
  title,
  Icon,
  index,
}: {
  title: string;
  Icon: Icon;
  index: number;
}) {
  const reduce = useReducedMotion();
  const glowBlue = index % 2 === 1;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.035 }}
      className={`ds-card group flex flex-col gap-4 rounded-2xl p-6 transition-shadow ${
        glowBlue
          ? "ds-glow-border-blue hover:shadow-[0_0_36px_-8px_rgba(47,111,255,0.55)]"
          : "ds-glow-border hover:shadow-[0_0_36px_-8px_rgba(123,47,255,0.55)]"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
          glowBlue
            ? "border-[#2F6FFF]/40 bg-[#2F6FFF]/10 text-[#7fb0ff]"
            : "border-[#7B2FFF]/40 bg-[#7B2FFF]/10 text-[#c9a6ff]"
        }`}
      >
        <Icon size={24} weight="duotone" />
      </div>
      <h3 className="text-base font-semibold leading-snug text-white">
        {title}
      </h3>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.services.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((title, index) => (
            <ServiceCard
              key={title}
              title={title}
              Icon={SERVICE_ICONS[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

