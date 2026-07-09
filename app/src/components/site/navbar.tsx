import { useState } from "react";
import { List, X, Globe } from "@phosphor-icons/react";
import { useLanguage } from "../../lib/i18n/language-context";

const WHATSAPP_URL = "https://wa.link/wvrtht";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#080808]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-bold tracking-tight">
          DISUS<span className="ds-gradient-text">21</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
            className="ds-glow-border flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            <Globe size={16} />
            {lang === "es" ? "ES" : "EN"}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-black transition-transform active:scale-[0.98]"
          >
            {t.nav.whatsapp}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
            className="ds-glow-border flex h-10 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-white"
          >
            <Globe size={15} />
            {lang === "es" ? "ES" : "EN"}
          </button>
          <button
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#080808] px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#25d366] px-4 py-3 text-center text-sm font-semibold text-black"
            >
              {t.nav.mobileWhatsapp}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

