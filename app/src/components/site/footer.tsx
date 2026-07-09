import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useLanguage } from "../../lib/i18n/language-context";

const WHATSAPP_URL = "https://wa.link/wvrtht";

export function Footer() {
  const { t } = useLanguage();

  const socials = [
    { label: t.footer.socialLabels.instagram, href: "https://www.instagram.com/dimm.a21/", Icon: InstagramLogo },
    { label: t.footer.socialLabels.tiktok, href: "https://www.tiktok.com/@disus211", Icon: TiktokLogo },
    { label: t.footer.socialLabels.youtube, href: "https://www.youtube.com/@Disus21", Icon: YoutubeLogo },
    { label: t.footer.socialLabels.telegram, href: "https://t.me/disustaita", Icon: TelegramLogo },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-lg font-bold tracking-tight">
            Di<span className="ds-gradient-text">Sustaita</span>
          </p>
          <p className="mt-1 text-sm text-white/50">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="ds-glow-border flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-black"
        >
          <WhatsappLogo size={18} weight="fill" />
          {t.footer.whatsapp}
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-white/35">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}


