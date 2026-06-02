import { useState } from "react";

const themes = [
  { id: "bone-rust",      label: "Bone & Rust",          swatch: "#b04a2c" },
  { id: "bone-darkorange", label: "Bone · Dark Orange Hdrs", swatch: "#7a2e0a" },
  { id: "slate-gold",     label: "Slate & Gold",            swatch: "#b58a1a" },
  { id: "slate-navy",     label: "Slate · Navy Hdrs",       swatch: "#162040" },
  { id: "forest-sage",   label: "Forest & Sage",         swatch: "#2d6b3a" },
  { id: "charcoal-blue", label: "Charcoal & Blue",       swatch: "#3b82f6" },
];

export const ThemeSwitcher = () => {
  const [active, setActive] = useState("bone-rust");

  const apply = (id: string) => {
    document.documentElement.setAttribute("data-theme", id === "bone-rust" ? "" : id);
    setActive(id);
  };

  return (
    <div style={{
      position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999,
      background: "#fff", border: "1px solid #d0d0d0", borderRadius: "0.5rem",
      padding: "0.75rem 0.875rem", boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999" }}>
        DEV · Theme
      </div>
      {themes.map(t => (
        <button
          key={t.id}
          onClick={() => apply(t.id)}
          style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            width: "100%", padding: "0.3rem 0.4rem",
            borderRadius: "0.25rem", border: "none", cursor: "pointer",
            background: active === t.id ? "#f0f0f0" : "transparent",
            fontWeight: active === t.id ? 600 : 400,
            fontSize: "0.75rem", color: "#222",
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: t.swatch, flexShrink: 0, display: "inline-block" }} />
          {t.label}
          {active === t.id && <span style={{ marginLeft: "auto", fontSize: "0.6rem", color: "#999" }}>✓</span>}
        </button>
      ))}
    </div>
  );
};
