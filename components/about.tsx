"use client";

import { FadeInView, staggerContainer } from "./motion-wrapper";
import { motion } from "framer-motion";
import { person } from "@/lib/data";
import { useCountUp } from "@/lib/use-count-up";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 2,  suffix: "",  label: "Banking Platforms Revamped" },
  { value: 650, prefix: "$", suffix: "M+", label: "Contracts Won (Accenture)" },
  { value: 40, suffix: "+", label: "Research Studies Led" },
];

function AnimatedStat({ value, prefix = "", suffix = "", label }: {
  value: number; prefix?: string; suffix?: string; label: string;
}) {
  const { ref, count } = useCountUp(value);
  return (
    <motion.div
      className="bg-bg-surface border border-border rounded p-5 hover:border-accent/40 transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="font-serif text-3xl sm:text-4xl text-accent font-semibold mb-1 tabular-nums"
      >
        {prefix}{count}{suffix}
      </p>
      <p className="font-sans text-xs text-fg-muted uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <FadeInView>
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
                About
              </p>
            </FadeInView>
            <FadeInView delay={0.05}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-6">
                Product leader at the intersection of banking and technology.
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="font-sans text-base leading-relaxed text-fg-secondary">
                {person.summary}
              </p>
            </FadeInView>
          </div>

          {/* Right: animated counters */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
