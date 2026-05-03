import { Reveal } from "./Reveal";

export const Hero = () => (
  <section id="top" className="section-card relative mx-auto max-w-7xl my-6 md:my-8 px-2 pt-28 md:pt-36 pb-14 md:pb-16">
    <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <Reveal className="col-span-12 md:col-span-3">
        <p className="eyebrow">Portfolio · 2026</p>
      </Reveal>

      <div className="col-span-12 md:col-span-9 md:col-start-4">
        <Reveal delay={80}>
          <h1 className="font-display font-light tracking-[-0.02em] text-[2rem] sm:text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] leading-[1.0] text-ink">
            Khalid<br />Abughazaleh
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-10 md:mt-14 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-9 font-display text-xl md:text-2xl leading-snug text-ink-soft font-light">
            Technical Customer Interface &<br className="hidden md:block" /> Product Development Engineer.
          </p>
          <p className="col-span-12 md:col-span-6 md:col-start-2 mt-2 font-body text-sm md:text-[0.95rem] leading-relaxed text-ink-soft/80 italic">
            Bringing RF, silicon, and systems together — quietly, carefully, and with the customer in the room.
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-14 md:mt-20 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="font-body text-sm tracking-wide text-ink-soft">Hillsboro, Oregon</span>
          <span aria-hidden className="text-rule">·</span>
          <a
            href="https://www.linkedin.com/in/kabughazaleh/"
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm tracking-wide text-ink link-underline"
          >
            LinkedIn ↗
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
