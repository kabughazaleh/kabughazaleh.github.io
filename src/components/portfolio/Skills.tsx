import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Engineering & Test",
    items: [
      "Customer-facing engagement",
      "Post-silicon verification",
      "Product ramp & release",
      "Design of experiment (DOE)",
      "ATE & bench measurement",
      "Mixed-signal, digital, and RF debug",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "IQfact+, Litepoint IQxel",
      "Teradyne, LTX",
      "LabVIEW, MATLAB",
      "Spotfire, JMP",
      "AWR Microwave Office",
      "Perplexity / ChatGPT, MS Project",
    ],
  },
  {
    label: "Programming & Communication",
    items: [
      "Statistical data analysis",
      "Python, C++",
      "Unix / Linux shell scripting",
      "Technical writing & documentation",
      "Mentoring & cross-team collaboration",
      "Pre- and post-sale support",
    ],
  },
];

export const Skills = () => (
  <section id="skills" className="section-card mx-auto max-w-7xl my-6 md:my-8 px-2 py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="02" label="Core Skills" title="Where I am useful." />

      <div className="col-span-12 md:col-span-9 md:col-start-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 100}>
            <h3 className="font-display text-sm uppercase tracking-[0.18em] text-ink mb-5 min-h-[2.5rem]">
              {g.label}
            </h3>
            <ul className="space-y-2 font-body text-[0.95rem] leading-relaxed text-ink-soft">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
