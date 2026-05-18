"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { FadeInView, staggerContainer, EASE_OUT } from "./motion-wrapper";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeInView>
          <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
            Experience
          </p>
        </FadeInView>
        <FadeInView delay={0.05}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-16">
            12 years of shipping things that matter.
          </h2>
        </FadeInView>

        <div ref={timelineRef} className="relative">
          {/* Animated drawing timeline line — desktop only */}
          <div className="hidden md:block absolute left-[11px] top-2 bottom-2 w-px bg-border overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-accent/60 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {experience.map((role, i) => (
              <motion.div
                key={i}
                className="md:pl-10 relative"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: EASE_OUT },
                  },
                }}
              >
                {/* Timeline node — desktop only */}
                <motion.span
                  aria-hidden
                  className="hidden md:flex absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-accent bg-bg-base items-center justify-center"
                  style={{ boxShadow: "0 0 0 4px var(--accent-glow)" }}
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE_OUT, delay: i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </motion.span>

                {/* Card */}
                <motion.div
                  className="bg-bg-surface border border-border rounded p-6 md:p-8 transition-colors duration-300"
                  whileHover={{
                    y: -4,
                    borderColor: "var(--accent)",
                    boxShadow: "0 8px 32px var(--accent-glow)",
                    transition: { duration: 0.25 },
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="font-sans font-semibold text-base sm:text-lg text-fg-primary">
                        {role.company}
                      </h3>
                      <p className="font-sans font-normal text-sm text-accent mt-0.5">
                        {role.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="font-sans text-xs text-fg-muted font-medium uppercase tracking-wide whitespace-nowrap">
                        {role.period}
                      </span>
                      <span className="flex items-center gap-1 font-sans text-xs text-fg-muted">
                        <MapPin size={10} />
                        {role.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets with stagger */}
                  <motion.ul
                    className="space-y-2.5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                  >
                    {role.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bi}
                        className="flex items-start gap-3"
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
                        }}
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="font-sans text-sm leading-relaxed text-fg-secondary">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
