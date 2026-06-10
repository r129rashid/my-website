import { cn } from "@/lib/utils";

/* Blueprint-style "+" glyph for section grid intersections */
export function PlusMarker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute font-sans text-sm font-light text-fg-muted/50 select-none pointer-events-none leading-none",
        className
      )}
    >
      +
    </span>
  );
}
