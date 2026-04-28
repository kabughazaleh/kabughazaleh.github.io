import { Reveal } from "./Reveal";

export const Hero = () => (
  <section id="top" className="relative pt-36 md:pt-48 pb-24 md:pb-40">
    <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <Reveal className="col-span-12 md:col-span-3">
        <p className="eyebrow">Portfolio · 2026</p>
      </Reveal>

      <div className="col-span-12 md:col-span-9 md:col-start-4">
        <Reveal delay={80}>
          <h1 className="font-display font-light tracking-[-0.02em] text-[2.75rem] sm:text-[3.75rem] md:text-[5.5rem] lg:text-[6.25rem] leading-[0.95] text-ink">
            Khalid<br />Abughazaleh
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-10 md:mt-14 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-7 font-display text-xl md:text-2xl leading-snug text-ink-soft font-light">
            Technical Customer Interface &<br className="hidden md:block" /> Product Development Engineer.
          </p>
          <p className="col-span-12 md:col-span-5 font-body text-base md:text-[1.05rem] leading-relaxed text-ink-soft">
            Two decades of bringing RF, silicon, and systems together — quietly, carefully, and with the customer in the room.
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
