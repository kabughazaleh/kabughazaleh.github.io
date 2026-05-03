import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    company: "Teradyne · LitePoint",
    role: "Field Application Engineer",
    years: "2022 – 2024",
    text: "Delivered consultations to clients on LitePoint's wireless and connectivity test platform, offering expertise in hardware, software, and technology. Developed tailored test solutions for various Wi-Fi and Bluetooth standards. Conducted research on relevant technologies, enhancing customer inquiries with valuable insights.",
  },
  {
    company: "Qorvo (formerly TriQuint)",
    role: "Product Development Engineer",
    years: "2013 – 2022",
    text: "Completed critical milestones on multiple RF IC UHB development programs, characterized by early design engagement, key sample delivery, various quality analyses, and successful production release. Engaged stakeholders across design, program management, fabrication process, and packaging.",
  },
  {
    company: "Dongbu HiTek USA",
    role: "RF Applications Support & Bench Verification",
    years: "2011 – 2012",
    text: "Contributed to design characterization effort in lab and leveraged experiences in product and test engineering to efficiently assist overseas manufacturing.",
  },
  {
    company: "Apolent Corporation",
    role: "Principal Engineer · Texas Instruments contract",
    years: "2010 – 2011",
    text: "Assisted with verification efforts as an integral member of a ferroelectric RAM design and verification team.",
  },
  {
    company: "Texas Instruments",
    role: "Product Engineer",
    years: "2003 – 2009",
    text: "Executed time-sensitive production releases, achieving quality through process corner characterization, optimizing test coverage, and assessing statistical data for audits. Built relationships and collaborated effectively with colleagues, overseas counterparts, manufacturing, and skilled technicians to release custom ASIC products and deliver quality samples.",
  },
  {
    company: "Teradyne",
    role: "Test Applications",
    years: "2000 – 2003",
    text: "Delivered customized technical solutions, project proposals with key deliverables, and formal ATE class training. Diverse customer base included semiconductor manufacturers, development teams, U.S. government labs, and university graduate program students.",
  },
];

export const Accomplishments = () => (
  <section id="accomplishments" className="py-12 md:py-16 border-t border-rule">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="03" label="Selected Accomplishments" title="What each chapter set out to do." />

      <div className="col-span-12 md:col-span-9 md:col-start-4 space-y-14 md:space-y-16">
        {items.map((it, i) => (
          <Reveal key={it.company + it.years} delay={i * 60} as="article">
            <div className="grid grid-cols-12 gap-x-6 gap-y-3">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow">{it.years}</p>
                <h3 className="mt-2 font-display text-lg md:text-xl text-ink leading-snug font-normal">
                  {it.company}
                </h3>
                <p className="mt-1 font-body text-sm text-ink-soft italic">{it.role}</p>
              </div>
              <p className="col-span-12 md:col-span-8 font-body text-[1.02rem] md:text-[1.08rem] leading-[1.7] text-ink-soft">
                {it.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
