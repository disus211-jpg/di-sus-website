import { motion, useReducedMotion } from "motion/react";
import {
  Code, InstagramLogo, TrendUp, Megaphone,
  EnvelopeSimple, MagnifyingGlass, PenNib, PaintBrush,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "../../lib/i18n/language-context";

const SERVICE_ICONS: Icon[] = [
  Code, InstagramLogo, TrendUp, Megaphone,
  EnvelopeSimple, MagnifyingGlass, PenNib, PaintBrush,
];

export function Services() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      {/* vertical spine */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex justify-center"
      >
        <div className="w-px bg-gradient-to-b from-[#2F6FFF]/0 via-[#2F6FFF]/20 to-[#2F6FFF]/0" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F6FFF]"
        >
          {t.services.heading}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Lo que hago por tu negocio
        </motion.h2>

        {/* ── Stacked 3-D service cards ── */}
        <div className="flex flex-col gap-4">
          {t.services.items.map((title, index) => {
            const ServiceIcon = SERVICE_ICONS[index];
            const isBlue = index % 2 === 1;
            const glow = isBlue
              ? "border-[#2F6FFF]/35 hover:shadow-[0_0_40px_-8px_rgba(47,111,255,0.55)]"
              : "border-[#7B2FFF]/35 hover:shadow-[0_0_40px_-8px_rgba(123,47,255,0.55)]";
            const iconBg = isBlue
              ? "border-[#2F6FFF]/40 bg-[#2F6FFF]/10 text-[#7fb0ff]"
              : "border-[#7B2FFF]/40 bg-[#7B2FFF]/10 text-[#c9a6ff]";

            return (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, x: index
