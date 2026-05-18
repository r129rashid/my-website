"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, Download, Mail, Briefcase } from "lucide-react";
import Image from "next/image";
import { person } from "@/lib/data";
import { EASE_OUT } from "./motion-wrapper";

const words = person.shortName.split(" ");

export function Hero() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  /* Mouse parallax */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const photoX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const photoY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const glowX  = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const glowY  = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh flex flex-col justify-center noise-overlay overflow-hidden"
    >
      {/* Radial gradient — mouse-tracked */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 20% 50%, var(--accent-glow) 0%, transparent 70%)",
          x: glowX,
          y: glowY,
        }}
      />
      {/* Static secondary glow */}
      <div
        aria-hidden
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
      {/* Decorative corner lines */}
      <svg aria-hidden className="absolute top-24 left-6 md:left-12 w-16 h-16 opacity-10" viewBox="0 0 64 64" fill="none">
        <path d="M0 64V0h64" stroke="var(--accent)" strokeWidth="1" />
      </svg>
      <svg aria-hidden className="absolute bottom-24 right-6 md:right-12 w-16 h-16 opacity-10" viewBox="0 0 64 64" fill="none">
        <path d="M64 0v64H0" stroke="var(--accent)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        {/* Mobile: column (photo top, text bottom). Desktop: row (text left, photo right). */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center md:items-center">

          {/* ── TEXT ─────────────────────────────────────────── */}
          {/* order-2 = below photo on mobile; md:order-1 = left on desktop */}
          <div className="order-2 md:order-1 w-full">
            {/* Location */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.1 }}
            >
              <MapPin size={12} className="text-accent" />
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-fg-muted">
                {person.location}
              </span>
            </motion.div>

            {/* Name — character stagger */}
            <h1 className="font-serif font-bold leading-[1.05] mb-5" aria-label={person.shortName}>
              {reduce ? (
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-fg-primary block">
                  {person.shortName}
                </span>
              ) : (
                words.map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="block overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.2 + wi * 0.15,
                        },
                      },
                    }}
                  >
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        className="inline-block text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-fg-primary"
                        variants={{
                          hidden: { y: "110%", opacity: 0, rotateX: -20 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            rotateX: 0,
                            transition: { duration: 0.55, ease: EASE_OUT },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))
              )}
            </h1>

            {/* Title with animated underline */}
            <motion.div
              className="mb-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.55 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-sans font-light text-fg-secondary inline-block relative">
                {person.title}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-accent/40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </p>
            </motion.div>

            {/* Tagline chip */}
            <motion.div
              className="inline-flex items-center gap-2 border border-accent/30 rounded px-3 py-1 mb-10"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.75 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <span className="text-xs font-sans font-medium text-accent tracking-wide">
                {person.tagline}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.95 }}
            >
              <a
                href="/resume"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-bg-base font-sans font-semibold text-sm px-6 py-3 rounded transition-all duration-200 cursor-pointer min-h-[44px] hover:shadow-[0_0_24px_var(--accent-glow)]"
              >
                <Download size={14} />
                View Full Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent text-fg-primary hover:text-accent font-sans font-medium text-sm px-6 py-3 rounded transition-colors duration-200 cursor-pointer min-h-[44px]"
              >
                <Mail size={14} />
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* ── PHOTO ─────────────────────────────────────────── */}
          {/* order-1 = above text on mobile; md:order-2 = right on desktop */}
          <motion.div
            className="order-1 md:order-2 relative mx-auto md:mx-0"
            style={reduce ? {} : { x: photoX, y: photoY }}
            initial={reduce ? false : { opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
          >
            {/* Animated ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-3 rounded-2xl opacity-30"
              style={{
                background: "conic-gradient(from 0deg, var(--accent), transparent 40%, transparent 60%, var(--accent) 100%)",
                borderRadius: "20px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Outer glow frame */}
            <div
              className="absolute -inset-[2px] rounded-xl opacity-60"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, transparent 50%, var(--accent) 100%)",
                borderRadius: "14px",
              }}
            />
            {/* Photo container */}
            <div className="relative w-36 h-44 sm:w-48 sm:h-60 md:w-72 md:h-[360px] rounded-xl overflow-hidden border border-border">
              <Image
                src="/profile-placeholder.svg"
                alt={person.shortName}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle dark vignette at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating badge — current role */}
            <motion.div
              className="absolute -bottom-4 left-0 md:-left-8 bg-bg-surface border border-border rounded-lg px-2.5 py-2 md:px-3 md:py-2.5 shadow-xl flex items-center gap-2 md:gap-2.5 min-w-[140px] md:min-w-[160px]"
              initial={reduce ? false : { opacity: 0, x: -12, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.85 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Briefcase size={13} className="text-accent" />
              </div>
              <div>
                <p className="font-sans text-[10px] text-fg-muted uppercase tracking-wider leading-none mb-0.5">
                  Currently at
                </p>
                <p className="font-sans text-xs font-semibold text-fg-primary leading-none">
                  SAIB · Senior Manager
                </p>
              </div>
            </motion.div>

            {/* Floating badge — experience */}
            <motion.div
              className="absolute -top-4 -right-1 md:-right-6 bg-bg-surface border border-border rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 shadow-xl"
              initial={reduce ? false : { opacity: 0, x: 12, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 1.05 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <p className="font-serif text-2xl font-bold text-accent leading-none">12+</p>
              <p className="font-sans text-[10px] text-fg-muted uppercase tracking-wider mt-0.5">
                Yrs Experience
              </p>
            </motion.div>

            {/* Decorative dot grid behind photo */}
            <div
              aria-hidden
              className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!reduce && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <motion.span
            className="text-[10px] font-sans font-medium uppercase tracking-widest text-fg-muted mt-1"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          >
            Scroll
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
