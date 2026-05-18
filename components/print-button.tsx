"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="font-sans text-sm font-medium border border-border rounded px-4 py-2 text-fg-secondary hover:border-accent hover:text-fg-primary transition-colors duration-200 cursor-pointer min-h-[44px]"
    >
      Print / Save PDF
    </button>
  );
}
