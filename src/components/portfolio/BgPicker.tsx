import { useEffect, useState } from "react";

// Page background options. The first one matches the value in src/index.css (--background).
const OPTIONS: { name: string; hex: string; hsl: string; note: string }[] = [
  { name: "Oxblood (dark)",  hex: "#3a2520", hsl: "12 28% 18%",  note: "Current" },
  { name: "Light Clay",      hex: "#dccfbd", hsl: "36 22% 80%",  note: "Warm, craft" },
  { name: "Warm Stone",      hex: "#e8e6e1", hsl: "36 10% 90%",  note: "Modern, gallery" },
  { name: "Concrete",        hex: "#e4e4e2", hsl: "40 5% 89%",   note: "Neutral, minimal" },
  { name: "Sand Paper",      hex: "#d9d4c8", hsl: "40 18% 82%",  note: "Quiet warm" },
  { name: "Taupe Mist",      hex: "#dcd9d2", hsl: "40 10% 85%",  note: "Refined" },
  { name: "Espresso (dark)", hex: "#2a2724", hsl: "30 8% 16%",   note: "Premium dark" },
  { name: "Graphite (dark)", hex: "#1c1b18", hsl: "30 8% 10%",   note: "Dramatic" },
];

const CARD_HEX = "#f4f1ea"; // bone — section card color
const TEXT_HEX = "#1c1b18"; // graphite
const RUST_HEX = "#b04a2c"; // accent

export const BgPicker = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--background", OPTIONS[active].hsl);
  }, [active]);

  return (
    <div className="fixed bottom-4 right-4 z-[100] font-body">
      {open ? (
        <div className="rounded-xl bg-paper text-ink shadow-2xl ring-1 ring-black/10 p-3 w-72">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">Page background</p>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-ink-soft hover:text-ink"
              aria-label="Hide picker"
            >
              ×
            </button>
          </div>
          <div className="space-y-1.5">
            {OPTIONS.map((o, i) => {
              const isActive = i === active;
              return (
                <button
                  key={o.name}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-2 rounded-md px-2 py-1.5 text-left transition ${
                    isActive ? "ring-1 ring-ink/40 bg-black/[0.03]" : "hover:bg-black/[0.03]"
                  }`}
                >
                  {/* Mini palette: page bg → card → text → rust */}
                  <span className="flex h-5 w-16 overflow-hidden rounded-sm ring-1 ring-black/10">
                    <span className="flex-1" style={{ background: o.hex }} />
                    <span className="flex-1" style={{ background: CARD_HEX }} />
                    <span className="flex-1" style={{ background: TEXT_HEX }} />
                    <span className="flex-1" style={{ background: RUST_HEX }} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs font-medium truncate">{o.name}</span>
                    <span className="block text-[0.65rem] text-ink-soft truncate">{o.note}</span>
                  </span>
                  {isActive && (
                    <span className="text-[0.6rem] uppercase tracking-wider font-semibold text-[hsl(var(--primary))]">
                      Current
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[0.6rem] text-ink-soft leading-snug">
            Live preview only. Tell me which to make permanent.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-paper px-3 py-1.5 text-xs shadow-lg ring-1 ring-black/10"
        >
          BG picker
        </button>
      )}
    </div>
  );
};
