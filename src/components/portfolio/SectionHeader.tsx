interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
}

export const SectionHeader = ({ number, label, title }: SectionHeaderProps) => (
  <header className="col-span-12 md:col-span-3 md:sticky md:top-24 self-start pb-2 md:pb-0 border-b border-rule md:border-b-0">
    <p className="eyebrow text-primary">{number} — {label}</p>
    <h2 className="mt-2 md:mt-3 font-display text-xl md:text-[1.75rem] leading-[1.15] tracking-tight font-light max-w-[28ch]">
      {title}
    </h2>
    <span aria-hidden className="hidden md:hidden" />
    <span aria-hidden className="mt-3 block h-px w-10 bg-primary/60 md:hidden" />
  </header>
);
