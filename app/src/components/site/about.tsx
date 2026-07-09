import { Reveal } from "../reveal";
import { CursorGlowPhoto } from "./cursor-glow-photo";
import { useLanguage } from "../../lib/i18n/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#7B2FFF]/25 blur-3xl" />
            <CursorGlowPhoto
              src="/assets/about-photo.png"
              alt={t.about.title}
              aspectClassName="aspect-square"
              imageClassName="object-cover object-[center_74%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>

          <div className="mt-5 max-w-xl space-y-4">
            {t.about.bioParagraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-lg italic leading-relaxed text-white/70 sm:text-xl"
              >
                {paragraph.map((segment, sIndex) =>
                  segment.highlight ? (
                    <span
                      key={sIndex}
                      className="ds-gradient-text font-bold not-italic"
                    >
                      {segment.text}
                    </span>
                  ) : (
                    <span key={sIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

