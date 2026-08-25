import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Programs } from "@/sections/Programs";
import { WhyUs } from "@/sections/WhyUs";
import { Trainers } from "@/sections/Trainers";
import { Results } from "@/sections/Results";
import { Pricing } from "@/sections/Pricing";
import { CtaSection } from "@/sections/CtaSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismail Digital | Premium Gym & Fitness Center" },
      {
        name: "description",
        content:
          "Build your strongest self at Ismail Digital — a premium 24/7 gym with expert trainers, modern equipment and results-driven programs. Join today.",
      },
      { property: "og:title", content: "Ismail Digital | Premium Gym & Fitness Center" },
      {
        property: "og:description",
        content:
          "Train harder. Move better. Become stronger. Premium gym, expert coaching and a motivating community — 24/7 access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Trainers />
        <Results />
        <Pricing />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
