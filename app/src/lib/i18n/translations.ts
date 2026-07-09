export type Language = "es" | "en";

export type QuickQuestion = {
  label: string;
  answer: string;
  keywords: string[];
};

export type Translations = {
  nav: {
    links: { label: string; href: string }[];
    whatsapp: string;
    openMenu: string;
    closeMenu: string;
    mobileWhatsapp: string;
  };
  hero: {
    headlinePre: string;
    headlineAccent: string;
    headlinePost: string;
    subheadline: string;
    ctaSchedule: string;
    ctaWhatsapp: string;
    photoAlt: string;
    videoSoon: string;
  };
  about: {
    title: string;
    bioParagraphs: { text: string; highlight?: boolean }[][];
    photoAlt: string;
  };
  services: {
    heading: string;
    items: string[];
  };
  process: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  cases: {
    heading: string;
    prev: string;
    next: string;
    unmute: string;
    videoSoon: string;
    items: { badge: string; handle: string; description: string }[];
  };
  cta: {
    headlinePre: string;
    headlineAccent: string;
    headlinePost: string;
    subheadline: string;
    ctaSchedule: string;
    ctaWhatsapp: string;
  };
  footer: {
    tagline: string;
    socialLabels: {
      instagram: string;
      tiktok: string;
      youtube: string;
      telegram: string;
    };
    whatsapp: string;
    copyright: string;
  };
  chat: {
    bubbleLabel: string;
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    close: string;
    greeting: string;
    fallback: string;
    quickQuestions: QuickQuestion[];
  };
};

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      links: [
        { label: "Servicios", href: "#servicios" },
        { label: "Cómo funciona", href: "#proceso" },
        { label: "Casos de éxito", href: "#casos" },
        { label: "Contacto", href: "#contacto" },
      ],
      whatsapp: "WhatsApp",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mobileWhatsapp: "Contactar por WhatsApp",
    },
    hero: {
      headlinePre: "Marketing + ",
      headlineAccent: "IA",
      headlinePost: " para tu negocio",
      subheadline:
        "Páginas web que venden. Redes sociales que crecen. Marketing con IA que funciona.",
      ctaSchedule: "Agendar llamada",
      ctaWhatsapp: "Contactar por WhatsApp",
      photoAlt: "Foto de Di Sustaita aquí",
      videoSoon: "Video de introducción próximamente",
    },
    about: {
      title: "CEO",
      bioParagraphs: [
        [
          { text: "Soy ", highlight: false },
          { text: "Di Sustaita", highlight: true },
          { text: ". ", highlight: false },
          { text: "Ayudo", highlight: true },
          { text: " a negocios a enseñarles el ", highlight: false },
          { text: "método", highlight: true },
          { text: " para ganar ", highlight: false },
          { text: "100.000", highlight: true },
          { text: " Seguidores y ", highlight: false },
          { text: "+20.000$ / mes", highlight: true },
          {
            text: ", en menos de 90 días. (todo orgánico. Sin publicidad ni anuncios).",
            highlight: false,
          },
        ],
        [
          {
            text: "Diseño páginas web que convierten, redes sociales que crecen, e inteligencia artificial que automatiza. Si necesitas resultados medibles en menos de 90 días, hablemos.",
            highlight: false,
          },
        ],
      ],
      photoAlt: "Foto de Di Sustaita aquí",
    },
    services: {
      heading: "Lo que hago",
      items: [
        "Desarrollo de sitios web",
        "Manejo de redes sociales",
        "Growth Instagram (100k seguidores)",
        "Publicidad pagada",
        "Email marketing con IA",
        "SEO con IA",
        "Content marketing con IA",
        "Diseño gráfico",
      ],
    },
    process: {
      heading: "Cómo funciona",
      steps: [
        {
          title: "Agendamos una llamada",
          body: "entendemos tu negocio y objetivos",
        },
        {
          title: "Diseñamos tu estrategia",
          body: "creamos un plan personalizado con IA",
        },
        {
          title: "Entregamos resultados",
          body: "ejecutamos y medimos cada resultado",
        },
      ],
    },
    cases: {
      heading: "Casos de éxito",
      prev: "Anterior",
      next: "Siguiente",
      unmute: "Activar sonido",
      videoSoon: "Video próximamente",
      items: [
        {
          badge: "Página Web",
          handle: "@clienthandle",
          description: "Sitio nuevo, +40% en conversión de leads en 60 días.",
        },
        {
          badge: "100K Seguidores",
          handle: "@clienthandle",
          description: "Growth orgánico de Instagram con contenido con IA.",
        },
        {
          badge: "Publicidad en Línea",
          handle: "@clienthandle",
          description: "Campañas pagadas con costo por lead reducido a la mitad.",
        },
        {
          badge: "Email Marketing",
          handle: "@clienthandle",
          description: "Flujos automatizados con IA, +25% en recompra.",
        },
      ],
    },
    cta: {
      headlinePre: "¿Listo para ",
      headlineAccent: "crecer",
      headlinePost: "?",
      subheadline: "Agenda una llamada gratuita y hablemos de tu negocio.",
      ctaSchedule: "Agendar llamada",
      ctaWhatsapp: "Contactar por WhatsApp",
    },
    footer: {
      tagline: "Marketing + IA para tu negocio",
      socialLabels: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        telegram: "Telegram",
      },
      whatsapp: "WhatsApp",
      copyright: "© 2026 Di Sustaita. Todos los derechos reservados.",
    },
    chat: {
      bubbleLabel: "Abrir chat de ayuda",
      title: "Asistente Di Sustaita",
      subtitle: "Resolvemos tus dudas al instante",
      placeholder: "Escribe tu pregunta...",
      send: "Enviar",
      close: "Cerrar chat",
      greeting:
        "¡Hola! Soy el asistente virtual de Di Sustaita. Elige una pregunta o escribe la tuya.",
      fallback:
        "No tengo una respuesta exacta para eso todavía. Escríbenos por WhatsApp y te ayudamos directamente.",
      quickQuestions: [
        {
          label: "¿Qué servicios ofrecen?",
          answer:
            "Ofrecemos desarrollo de sitios web, manejo de redes sociales, growth de Instagram, publicidad pagada, email marketing con IA, SEO con IA, content marketing con IA y diseño gráfico.",
          keywords: ["servicio", "servicios", "ofrec", "hacen"],
        },
        {
          label: "¿Cómo funciona el proceso?",
          answer:
            "En 3 pasos: agendamos una llamada para entender tu negocio, diseñamos una estrategia personalizada con IA, y ejecutamos midiendo cada resultado.",
          keywords: ["proceso", "funciona", "pasos", "trabajan"],
        },
        {
          label: "¿Cuánto cuesta?",
          answer:
            "Cada proyecto es diferente, así que preferimos cotizar según tus objetivos. Escríbenos por WhatsApp y te damos una propuesta a tu medida.",
          keywords: ["precio", "costo", "cuanto", "tarifa", "cotiz"],
        },
        {
          label: "¿Cómo agendo una llamada?",
          answer:
            "Puedes escribirnos directo por WhatsApp y coordinamos el mejor horario para tu llamada gratuita.",
          keywords: ["agendar", "llamada", "cita", "cuando"],
        },
        {
          label: "¿Dónde veo resultados reales?",
          answer:
            'Revisa la sección "Casos de éxito" más arriba en la página, ahí subimos ejemplos reales de clientes.',
          keywords: ["resultado", "caso", "ejemplo", "cliente"],
        },
        {
          label: "¿Cómo los sigo en redes?",
          answer:
            "Nos encuentras en Instagram, TikTok, YouTube y Telegram, los íconos están en el footer de la página.",
          keywords: ["redes", "instagram", "tiktok", "youtube", "telegram", "seguir"],
        },
      ],
    },
  },
  en: {
    nav: {
      links: [
        { label: "Services", href: "#servicios" },
        { label: "How it works", href: "#proceso" },
        { label: "Success stories", href: "#casos" },
        { label: "Contact", href: "#contacto" },
      ],
      whatsapp: "WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mobileWhatsapp: "Message on WhatsApp",
    },
    hero: {
      headlinePre: "Marketing + ",
      headlineAccent: "AI",
      headlinePost: " for your business",
      subheadline:
        "Websites that sell. Social media that grows. AI marketing that works.",
      ctaSchedule: "Book a call",
      ctaWhatsapp: "Message on WhatsApp",
      photoAlt: "Di Sustaita photo here",
      videoSoon: "Intro video coming soon",
    },
    about: {
      title: "CEO",
      bioParagraphs: [
        [
          { text: "I'm ", highlight: false },
          { text: "Di Sustaita", highlight: true },
          { text: ". I help", highlight: false },
          { text: " businesses learn the ", highlight: false },
          { text: "method", highlight: true },
          { text: " to gain ", highlight: false },
          { text: "100,000", highlight: true },
          { text: " ", highlight: false },
          { text: "followers", highlight: true },
          { text: " and ", highlight: false },
          { text: "+$20,000 / month", highlight: true },
          {
            text: ", in less than 90 days. (all organic. No ads, no paid promotion).",
            highlight: false,
          },
        ],
        [
          {
            text: "I design websites that convert, social media that grows, and AI that automates. If you need measurable results in less than 90 days, let's talk.",
            highlight: false,
          },
        ],
      ],
      photoAlt: "Di Sustaita photo here",
    },
    services: {
      heading: "What I do",
      items: [
        "Website development",
        "Social media management",
        "Instagram growth (100k followers)",
        "Paid advertising",
        "AI email marketing",
        "AI SEO",
        "AI content marketing",
        "Graphic design",
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        {
          title: "We book a call",
          body: "we get to know your business and goals",
        },
        {
          title: "We design your strategy",
          body: "we build a custom plan with AI",
        },
        {
          title: "We deliver results",
          body: "we execute and measure every result",
        },
      ],
    },
    cases: {
      heading: "Success stories",
      prev: "Previous",
      next: "Next",
      unmute: "Unmute",
      videoSoon: "Video coming soon",
      items: [
        {
          badge: "Website",
          handle: "@clienthandle",
          description: "New site, +40% lead conversion in 60 days.",
        },
        {
          badge: "100K Followers",
          handle: "@clienthandle",
          description: "Organic Instagram growth with AI content.",
        },
        {
          badge: "Online Advertising",
          handle: "@clienthandle",
          description: "Paid campaigns with cost per lead cut in half.",
        },
        {
          badge: "Email Marketing",
          handle: "@clienthandle",
          description: "Automated AI flows, +25% repeat purchases.",
        },
      ],
    },
    cta: {
      headlinePre: "Ready to ",
      headlineAccent: "grow",
      headlinePost: "?",
      subheadline: "Book a free call and let's talk about your business.",
      ctaSchedule: "Book a call",
      ctaWhatsapp: "Message on WhatsApp",
    },
    footer: {
      tagline: "Marketing + AI for your business",
      socialLabels: {
        instagram: "Instagram",
        tiktok: "TikTok",
        youtube: "YouTube",
        telegram: "Telegram",
      },
      whatsapp: "WhatsApp",
      copyright: "© 2026 Di Sustaita. All rights reserved.",
    },
    chat: {
      bubbleLabel: "Open help chat",
      title: "Di Sustaita Assistant",
      subtitle: "We answer your questions instantly",
      placeholder: "Type your question...",
      send: "Send",
      close: "Close chat",
      greeting:
        "Hi! I'm Di Sustaita's virtual assistant. Pick a question or type your own.",
      fallback:
        "I don't have an exact answer for that yet. Message us on WhatsApp and we'll help you directly.",
      quickQuestions: [
        {
          label: "What services do you offer?",
          answer:
            "We offer website development, social media management, Instagram growth, paid advertising, AI email marketing, AI SEO, AI content marketing, and graphic design.",
          keywords: ["service", "services", "offer", "do you do"],
        },
        {
          label: "How does the process work?",
          answer:
            "In 3 steps: we book a call to understand your business, design a custom AI strategy, and execute while measuring every result.",
          keywords: ["process", "work", "steps", "how do you"],
        },
        {
          label: "How much does it cost?",
          answer:
            "Every project is different, so we prefer to quote based on your goals. Message us on WhatsApp and we'll send you a tailored proposal.",
          keywords: ["price", "cost", "how much", "quote"],
        },
        {
          label: "How do I book a call?",
          answer:
            "Just message us on WhatsApp and we'll coordinate the best time for your free call.",
          keywords: ["book", "call", "schedule", "when"],
        },
        {
          label: "Where can I see real results?",
          answer:
            'Check the "Success stories" section above on the page, we post real client examples there.',
          keywords: ["result", "case", "example", "client"],
        },
        {
          label: "How do I follow you on social media?",
          answer:
            "Find us on Instagram, TikTok, YouTube, and Telegram, the icons are in the footer of the page.",
          keywords: ["social", "instagram", "tiktok", "youtube", "telegram", "follow"],
        },
      ],
    },
  },
};








