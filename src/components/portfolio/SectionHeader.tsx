interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
}

export const SectionHeader = ({ number, label, title }: SectionHeaderProps) => (
  <header className="md:col-span-3 md:sticky md:top-24 self-start">
    <p className="eyebrow">{number} — {label}</p>
    <h2 className="mt-4 font-display text-2xl md:text-[1.75rem] leading-[1.1] tracking-tight font-light text-header-ink">
      {title}
    </h2>
  </header>
);
