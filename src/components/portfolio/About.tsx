import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const About = () => (
  <section id="about" className="py-16 md:py-20 border-t-2 border-rule">
    <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="01" label="About" title="A practitioner who likes the whole picture." />

      <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-6 font-body text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-ink-soft">
        <Reveal>
          <p>
            I'm an electrical engineer who spends his days at the seam between
            silicon, test equipment, and the people who depend on both. Most of
            my career has been about taking a complicated thing — a chipset, a
            module, a measurement flow — and walking it carefully into production.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p>
            I work the way a maker works. I look at a system the way someone else
            might look at a blank canvas: the parts are interesting on their own,
            but the real work is arranging them into something that holds together.
            That mindset shows up in how I run a debug, write a guide, or sit with
            a customer through a hard week.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p>
            Across product engineering, applications, and field roles, the constant
            has been the same: clear technical communication, attention to the small
            things, and a calm, methodical approach when the schedule gets loud.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
