import React, { useRef, useState, KeyboardEvent } from "react";

type TabItem = {
  id: string;
  label: React.ReactNode;
  panel?: React.ReactNode;
  disabled?: boolean;
};

interface WrapTabsProps {
  tabs: TabItem[];
  defaultActiveId?: string;
  className?: string;
}

export default function WrapTabs({ tabs, defaultActiveId, className }: WrapTabsProps) {
  const initial = defaultActiveId ?? tabs[0]?.id;
  const [activeId, setActiveId] = useState<string | undefined>(initial);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (idx: number) => {
    const el = refs.current[idx];
    if (el) el.focus();
  };

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = tabs.length - 1;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = index === last ? 0 : index + 1;
      focusTab(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = index === 0 ? last : index - 1;
      focusTab(prev);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(last);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(tabs[index].id);
    }
  };

  return (
    <div className={className ?? "wraptabs"}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[i] = el)}
            id={`tab-${t.id}`}
            role="tab"
            aria-selected={activeId === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={activeId === t.id ? 0 : -1}
            onClick={() => !t.disabled && setActiveId(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            disabled={t.disabled}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: activeId === t.id ? "1px solid #111" : "1px solid transparent",
              background: activeId === t.id ? "rgba(0,0,0,0.06)" : "transparent",
              cursor: t.disabled ? "not-allowed" : "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        {tabs.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={activeId !== t.id}
          >
            {t.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
