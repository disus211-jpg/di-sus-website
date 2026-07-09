import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../reveal";
import { useLanguage } from "../../lib/i18n/language-context";

export function Process() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.process.heading}
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px sm:block">
            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-[#7B2FFF] via-[#7B2FFF] to-[#2F6FFF]"
            />
          </div>

          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-start gap-4"
            >
              <div className="ds-glow-border relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0e0e12] text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/60">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

