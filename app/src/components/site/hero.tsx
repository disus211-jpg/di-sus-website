import { motion, useReducedMotion } from "motion/react";
import { Play } from "@phosphor-icons/react";
import { ClientOnly } from "../client-only";
import { ParticleField } from "./particle-field";
import { CursorGlowCard } from "./cursor-glow-card";
import { useLanguage } from "../../lib/i18n/language-context";

const WHATSAPP_URL = "https://wa.link/wvrtht";
// Calendar link pending — Di will provide it later. Points at the contact
// section for now so the CTA stays functional instead of a dead "#" link.
const CALENDAR_URL = "#contacto";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(196,165,255,0.6) 1.4px, transparent 1.4px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 80%)",
          }}
        />
        <ClientOnly>
          <ParticleField className="h-full w-full opacity-70" />
        </ClientOnly>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.headlinePre}
            <span className="ds-gradient-text">{t.hero.headlineAccent}</span>
            {t.hero.headlinePost}
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 w-full"
        >
          <CursorGlowCard
            aspectClassName="aspect-video"
            className="mx-auto max-w-2xl"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0e0e12]">
              <img
                src="/assets/hero-avatar.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#7B2FFF]/50 bg-[#7B2FFF]/10 backdrop-blur-sm">
                <Play size={28} weight="fill" className="text-white/85" />
              </div>
              <p className="relative text-sm text-white/70">{t.hero.videoSoon}</p>
            </div>
          </CursorGlowCard>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={CALENDAR_URL}
            className="rounded-full border border-[#7B2FFF] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(123,47,255,0.7)] transition-transform hover:bg-[#7B2FFF]/10 active:scale-[0.98]"
          >
            {t.hero.ctaSchedule}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25d366] px-6 py-3 text-center text-sm font-semibold text-black transition-transform active:scale-[0.98]"
          >
            {t.hero.ctaWhatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}







