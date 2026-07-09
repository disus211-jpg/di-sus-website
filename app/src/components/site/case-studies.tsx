import { useRef } from "react";
import { CaretLeft, CaretRight, SpeakerSimpleX, Play } from "@phosphor-icons/react";
import { Reveal } from "../reveal";
import { useLanguage } from "../../lib/i18n/language-context";

export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-case-card]");
    const amount = (card?.offsetWidth ?? 320) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="casos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.cases.heading}
            </h2>
            <div className="hidden gap-2 sm:flex">
              <button
                aria-label={t.cases.prev}
                onClick={() => scrollByCard(-1)}
                className="ds-glow-border flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
              >
                <CaretLeft size={18} />
              </button>
              <button
                aria-label={t.cases.next}
                onClick={() => scrollByCard(1)}
                className="ds-glow-border flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
              >
                <CaretRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {t.cases.items.map((item, index) => {
            const accent = index % 2 === 0 ? "purple" : "blue";
            return (
              <div
                key={item.badge + item.handle + index}
                data-case-card
                className={`ds-card relative w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[320px] ${
                  accent === "purple" ? "ds-glow-border" : "ds-glow-border-blue"
                }`}
              >
                <div className="relative flex aspect-[9/16] w-full items-center justify-center bg-[#0e0e12]">
                  <Play size={40} weight="fill" className="text-white/25" />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${
                      accent === "purple" ? "bg-[#7B2FFF]/80" : "bg-[#2F6FFF]/80"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <button
                    aria-label={t.cases.unmute}
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur"
                  >
                    <SpeakerSimpleX size={18} />
                  </button>
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2 py-1 text-[10px] text-white/50">
                    {t.cases.videoSoon}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-white/80">{item.handle}</p>
                  <p className="mt-1 text-sm text-white/55">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

