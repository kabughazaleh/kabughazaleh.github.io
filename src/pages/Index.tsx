import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Accomplishments } from "@/components/portfolio/Accomplishments";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Khalid Abughazaleh",
      jobTitle: "Product Development Engineer & Technical Customer Interface",
      address: { "@type": "PostalAddress", addressLocality: "Hillsboro", addressRegion: "OR", addressCountry: "US" },
      sameAs: ["https://www.linkedin.com/in/kabughazaleh/"],
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-ink pt-6 md:pt-8 pb-8 md:pb-12">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Accomplishments />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
