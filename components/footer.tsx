import { person } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-fg-muted">
          © {new Date().getFullYear()} {person.shortName}. All rights reserved.
        </p>
        <p className="font-sans text-xs text-fg-muted">
          Riyadh, Saudi Arabia
        </p>
      </div>
    </footer>
  );
}
