import { Reveal } from "../reveal";
import { useLanguage } from "../../lib/i18n/language-context";

const WHATSAPP_URL = "https://wa.link/wvrtht";
const CALENDAR_URL = "#contacto";

export function CtaContact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/cta-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {t.cta.headlinePre}
            <span className="ds-gradient-text">{t.cta.headlineAccent}</span>
            {t.cta.headlinePost}
          </h2>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            {t.cta.subheadline}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CALENDAR_URL}
              className="rounded-full border border-[#7B2FFF] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(123,47,255,0.7)] transition-transform hover:bg-[#7B2FFF]/10 active:scale-[0.98]"
            >
              {t.cta.ctaSchedule}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25d366] px-6 py-3 text-center text-sm font-semibold text-black transition-transform active:scale-[0.98]"
            >
              {t.cta.ctaWhatsapp}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

