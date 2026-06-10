"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { person } from "@/lib/data";
import { FadeInView, staggerContainer, EASE_OUT } from "./motion-wrapper";
import { PlusMarker } from "./plus-marker";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${person.email}`, text: person.email },
  { icon: Linkedin, label: "LinkedIn", href: person.linkedin, text: "linkedin.com/in/rabi-rashid" },
  { icon: Github, label: "GitHub", href: person.github, text: "github.com/r129rashid" },
];

function RiyadhClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Riyadh",
      }).format(new Date());
    setTime(format());
    const interval = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-sans text-xs font-medium uppercase tracking-wider text-fg-muted tabular-nums">
      Riyadh <span className="text-accent">→</span> {time ?? "--:--"}
    </span>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <PlusMarker className="top-6 left-6 md:left-12" />
      <PlusMarker className="top-6 right-6 md:right-12" />

      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Label + live clock */}
        <div className="flex items-center justify-between mb-10">
          <FadeInView>
            <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent">
              Let&apos;s Connect
            </p>
          </FadeInView>
          <FadeInView delay={0.05}>
            <RiyadhClock />
          </FadeInView>
        </div>

        {/* Oversized headline */}
        <FadeInView delay={0.05}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-fg-primary leading-[1.08] mb-6 max-w-3xl">
            Open to the right conversation.
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="font-sans text-base text-fg-secondary max-w-md mb-12">
            Whether it&apos;s a leadership opportunity, advisory conversation, or a product challenge worth solving — reach out.
          </p>
        </FadeInView>

        {/* Single underlined CTA */}
        <FadeInView delay={0.15}>
          <a
            href={`mailto:${person.email}`}
            className="group inline-flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-2 hover:border-accent transition-colors duration-200 min-h-[44px]"
          >
            Start a conversation
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </FadeInView>

        {/* Secondary links */}
        <motion.div
          className="mt-16 pt-8 border-t border-border flex flex-wrap gap-x-10 gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer(0.08)}
        >
          {links.map(({ icon: Icon, label, href, text }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex items-center gap-2.5 min-h-[44px]"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
              }}
            >
              <Icon size={14} className="text-accent shrink-0" />
              <span className="font-sans text-sm text-fg-muted group-hover:text-fg-primary transition-colors duration-200">
                {text}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
