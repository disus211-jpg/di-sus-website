import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChatCircleDots, X, PaperPlaneTilt } from "@phosphor-icons/react";
import { useLanguage } from "../../lib/i18n/language-context";
import type { QuickQuestion } from "../../lib/i18n/translations";

type ChatMessage = {
  id: number;
  from: "bot" | "user";
  text: string;
};

/**
 * Floating help chatbot. Rule-based FAQ matcher (no backend call) — answers a
 * fixed set of common questions via keyword matching against the active
 * language's quickQuestions, with a WhatsApp-handoff fallback for anything else.
 * Fully re-localizes when the language toggle changes (messages already sent
 * keep their original language; the UI chrome and quick-question chips follow
 * the current language).
 */
export function HelpChatbot() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastGreetedLang = useRef<string | null>(null);

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  useEffect(() => {
    if (open && lastGreetedLang.current !== lang) {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "bot", text: t.chat.greeting },
      ]);
      lastGreetedLang.current = lang;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, lang]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function pushUser(text: string) {
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
  }

  function pushBot(text: string) {
    setMessages((prev) => [...prev, { id: nextId(), from: "bot", text }]);
  }

  function answerFor(query: string): string {
    const normalized = query.toLowerCase();
    let best: QuickQuestion | null = null;
    let bestScore = 0;
    for (const q of t.chat.quickQuestions) {
      const score = q.keywords.reduce(
        (acc, kw) => (normalized.includes(kw.toLowerCase()) ? acc + 1 : acc),
        0,
      );
      if (score > bestScore) {
        bestScore = score;
        best = q;
      }
    }
    return best ? best.answer : t.chat.fallback;
  }

  function handleQuickQuestion(q: QuickQuestion) {
    pushUser(q.label);
    setTimeout(() => pushBot(q.answer), 250);
  }

  function handleSend() {
    const value = input.trim();
    if (!value) return;
    pushUser(value);
    setInput("");
    setTimeout(() => pushBot(answerFor(value)), 300);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="ds-glow-border flex h-[28rem] w-[20rem] flex-col overflow-hidden rounded-2xl bg-[#0b0b10] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:w-[22rem]"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-[#7B2FFF]/20 to-[#2F6FFF]/20 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">{t.chat.title}</p>
                <p className="text-xs text-white/50">{t.chat.subtitle}</p>
              </div>
              <button
                type="button"
                aria-label={t.chat.close}
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-[#7B2FFF] text-white"
                        : "border border-white/10 bg-white/5 text-white/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="flex flex-col gap-2 pt-1">
                  {t.chat.quickQuestions.map((q) => (
                    <button
                      key={q.label}
                      type="button"
                      onClick={() => handleQuickQuestion(q)}
                      className="ds-glow-border rounded-xl px-3 py-2 text-left text-xs text-white/80 transition-colors hover:bg-white/5"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-white/5 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder={t.chat.placeholder}
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#7B2FFF]/60 focus:outline-none"
              />
              <button
                type="button"
                aria-label={t.chat.send}
                onClick={handleSend}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF] text-white transition-transform active:scale-95"
              >
                <PaperPlaneTilt size={16} weight="fill" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={t.chat.bubbleLabel}
        onClick={() => setOpen((v) => !v)}
        whileHover={reduce ? undefined : { scale: 1.06 }}
        whileTap={reduce ? undefined : { scale: 0.94 }}
        className="ds-glow-border flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#2F6FFF] text-white shadow-[0_0_30px_-6px_rgba(123,47,255,0.8)]"
      >
        {open ? <X size={22} /> : <ChatCircleDots size={24} weight="fill" />}
      </motion.button>
    </div>
  );
}

