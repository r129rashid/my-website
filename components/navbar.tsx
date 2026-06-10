"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { person } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  // Root-prefixed so section links resolve from /resume too, not just the homepage
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
  { label: "Full Resume", href: "/resume" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-base/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-sm font-medium tracking-wide text-fg-primary hover:text-accent transition-colors duration-200"
        >
          {person.shortName.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-xs font-sans font-medium tracking-wider uppercase text-fg-muted",
                "hover:text-fg-primary transition-colors duration-200",
                link.label === "Full Resume" &&
                  "text-accent hover:text-accent-hover border border-accent/30 px-3 py-1.5 rounded hover:border-accent"
              )}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded text-fg-muted hover:text-fg-primary transition-colors duration-200 cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded text-fg-muted hover:text-fg-primary cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded text-fg-muted hover:text-fg-primary cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-b border-border">
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "text-sm font-sans py-3 text-fg-secondary hover:text-fg-primary transition-colors duration-200 border-b border-border last:border-0",
                  link.label === "Full Resume" && "text-accent"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
