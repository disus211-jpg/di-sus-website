import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/site/navbar";
import { Hero } from "../components/site/hero";
import { About } from "../components/site/about";
import { Services } from "../components/site/services";
import { Process } from "../components/site/process";
import { CaseStudies } from "../components/site/case-studies";
import { CtaContact } from "../components/site/cta-contact";
import { Footer } from "../components/site/footer";
import { HelpChatbot } from "../components/site/help-chatbot";
import { ClientOnly } from "../components/client-only";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Di Sustaita — Marketing + IA para tu negocio" },
      {
        name: "description",
        content:
          "Páginas web que venden. Redes sociales que crecen. Marketing con IA que funciona.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <CaseStudies />
        <CtaContact />
      </main>
      <Footer />
      <ClientOnly>
        <HelpChatbot />
      </ClientOnly>
    </div>
  );
}

