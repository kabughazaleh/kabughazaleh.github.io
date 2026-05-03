import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => (
  <section id="contact" className="py-12 md:py-16 border-t-2 border-rule">
    <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="06" label="Contact" title="Where to find me." />

      <div className="col-span-12 md:col-span-9 md:col-start-4">
        <Reveal>
          <p className="font-display font-light text-3xl md:text-5xl leading-tight text-ink tracking-tight">
            Based in Hillsboro, Oregon.<br />
            Open to thoughtful conversations.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="font-body text-base text-ink-soft">Hillsboro, OR · USA</span>
          <a
            href="https://www.linkedin.com/in/kabughazaleh/"
            target="_blank"
            rel="noreferrer"
            className="font-body text-base text-ink link-underline"
          >
            linkedin.com/in/kabughazaleh ↗
          </a>
        </Reveal>
      </div>
    </div>

    <footer className="mt-24 md:mt-32 border-t-2 border-rule">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-wrap justify-between gap-4">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Khalid Abughazaleh — Portfolio
        </p>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </section>
);
