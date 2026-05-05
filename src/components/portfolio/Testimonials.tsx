import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const quotes = [
  {
    quote:
      "I have worked with Khalid for several years on the same team. He is a very detail-oriented, competent, and dedicated engineer. Khalid brings a very positive attitude towards work. His knowledge is vast and thorough. We worked on various projects, and I was impressed by his excellent work ethic. Through the years, he developed several successful products for our team. He learns quickly and I would have no hesitation in working with Khalid once again in the future.",
    name: "Jwalin Dholakia",
    title: "RF Product Development Engineer, Qorvo",
    relation: "Same team",
  },
  {
    quote:
      "I've worked with Khalid for many years as an internal customer. He is a proficient product engineer and working with him as a part supplier to the parts he oversees has been pleasant and smooth. There are always problems with manufacturing any part, and even in a crisis mode he maintains a calm, methodic demeanor to arrive at our solution and remedy issues. I highly recommend him.",
    name: "Darrell Lupo",
    title: "Principal Product Engineer, Qorvo",
    relation: "Internal customer",
  },
  {
    quote:
      "Working with Khalid was a pleasure. His bright, inquisitive personality and detailed analysis are a benefit to any team. His sense of responsibility and ability to clearly articulate complex RF test methodologies is important in both internal and external customer support.",
    name: "Jennifer Smith Poyaoan",
    title: "Field Application Manager, LitePoint",
    relation: "Direct manager",
  },
  {
    quote:
      "I worked with Khalid for more than nine years — part of that time on the same team, the rest collaborating across teams. Regardless of the arrangement, Khalid has a passion for making connections and building relationships with his coworkers. That not only leads to great work results, but also fosters a positive working environment. He does not hesitate to initiate communication when a project requires it. Khalid was a part of several successful, high-visibility projects for our top-tier customers. I would highly recommend him.",
    name: "Brian Kleven",
    title: "Colleague, 9+ years",
    relation: "Cross-team collaborator",
  },
  {
    quote:
      "I had the pleasure of working with Khalid at LitePoint. He is a very thorough thinker who pays attention to details. On a few projects I implemented, he helped QA them — uncovering uncommon bugs and suggesting creative improvements that complemented my work. He demonstrated a great sense of responsibility by following through on customer issues. I believe our customers are satisfied with the quality of his support.",
    name: "Chi-cheng Lin",
    title: "Sr. Applications Engineer, LitePoint",
    relation: "Same team",
  },
  {
    quote:
      "I was a client of Khalid's, receiving his application support for a LitePoint (Teradyne) tester for over a year. Khalid was extremely meticulous about working through issues and debug, usually working through complex technical issues related to Wi-Fi (6E and 7) and Bluetooth testing. He addressed every concern and always followed up with extra things that could help — going that extra mile. Khalid was a delight to work with, and would be an asset to anyone's organization in the wireless or IC test space.",
    name: "Benny Bologna",
    title: "RF / Wireless Hardware Design and Validation",
    relation: "Client",
  },
  {
    quote:
      "Khalid is a great team player and a real asset to have on board. He's known for his meticulous and detail-oriented approach, always delivering top-quality work. When it comes to dealing with customers, he addresses their concerns with genuine empathy and professionalism. Khalid's follow-through on ensuring customer satisfaction is outstanding. I highly recommend him to anyone looking for someone who is detail-oriented and excels in delivering exceptional quality work.",
    name: "Roshmi James",
    title: "Technical Program Manager, LitePoint",
    relation: "Direct manager",
  },
  {
    quote:
      "Khalid is one of the most detail-oriented engineers I have had the pleasure to work with. Given a task, I know Khalid will deliver, above and beyond expectations. Khalid has a great attitude and excellent work ethic. I expect Khalid will succeed in any technical job taken in the future.",
    name: "Mike Meyers",
    title: "Applications Engineer, Texas Instruments",
    relation: "Same team",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="section-card mx-auto max-w-7xl my-6 md:my-8 px-2 py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-12 gap-x-6 gap-y-10">
      <SectionHeader number="05" label="In Their Words" title="What people who've worked with me have said." />

      <div className="col-span-12 md:col-span-9 md:col-start-4 divide-y divide-rule border-b md:border-y border-rule">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 40} as="article">
            <div className="py-8 md:py-12 grid grid-cols-12 gap-x-6 gap-y-2 md:gap-y-4">
              <div className="hidden md:block md:col-span-3">
                <span aria-hidden className="font-display text-5xl leading-none text-ink">"</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-display italic font-light text-[1.15rem] md:text-[1.3rem] leading-[1.55] text-ink">
                  {q.quote}
                </p>
                <p className="mt-6 eyebrow">
                  {q.name} · <span className="text-ink-soft normal-case tracking-normal font-body text-[0.78rem]">{q.title}</span> · {q.relation}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
