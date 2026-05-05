import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "Teradyne · LitePoint",
    role: "Field Application Engineer",
    years: "2022 – 2024",
    tag: "RF · Test · Customer",
  },
  {
    company: "Qorvo (formerly TriQuint)",
    role: "Product Development Engineer",
    years: "2013 – 2022",
    tag: "Modules · BAW · Ramp",
  },
  {
    company: "Dongbu HiTek USA",
    role: "RF Applications & Bench Verification",
    years: "2011 – 2012",
    tag: "Bench · Scripting",
  },
  { company: "Apolent · TI contract", role: "Principal Engineer", years: "2010 – 2011", tag: "Verification · Debug" },
  { company: "Texas Instruments", role: "Product Engineer", years: "2003 – 2009", tag: "ASIC · Production" },
  { company: "Teradyne", role: "Test Applications", years: "2000 – 2003", tag: "ATE · Training" },
];

export const Experience = () => (
  <section id="experience" className="section-card mx-auto max-w-7xl my-6 md:my-8 px-2 py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="04" label="Experience Highlights" title="Experience, at a glance." />

      <div className="col-span-12 md:col-span-9 md:col-start-4">
        <ul className="divide-y divide-rule border-y border-rule">
          {roles.map((r, i) => (
            <Reveal key={r.company + r.years} delay={i * 50} as="li">
              <div className="grid grid-cols-12 gap-x-6 py-6 md:py-7 items-baseline">
                <p className="col-span-12 md:col-span-3 font-body text-sm tracking-wide text-ink-soft">{r.years}</p>
                <div className="col-span-12 md:col-span-6 mt-1 md:mt-0">
                  <p className="font-display text-lg md:text-xl text-ink leading-tight font-normal">{r.company}</p>
                  <p className="font-body text-sm text-ink-soft mt-1">{r.role}</p>
                </div>
                <p className="col-span-12 md:col-span-3 mt-2 md:mt-0 font-body text-xs uppercase tracking-[0.18em] text-ink-soft md:text-right md:whitespace-nowrap">
                  {r.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12">
          <p className="eyebrow">Education</p>
          <p className="mt-3 font-display text-base md:text-lg text-ink">
            M.S. Electrical Engineering, University of Texas at Dallas
          </p>
          <p className="font-display text-base md:text-lg text-ink">
            B.S. Electrical Engineering, University of Texas at Austin
          </p>
          <p className="mt-6 eyebrow">Memberships & Volunteer</p>
          <p className="mt-3 font-body text-[0.98rem] text-ink-soft leading-relaxed">
            IEEE · Eta Kappa Nu Honor Society (HKN). Volunteer with Junior Achievement USA, Habitat for Humanity, and
            the Hillsboro School District Curriculum Advisory Committee.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
