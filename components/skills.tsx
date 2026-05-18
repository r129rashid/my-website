"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { FadeInView, staggerContainer, EASE_OUT } from "./motion-wrapper";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeInView>
          <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
            Skills & Tools
          </p>
        </FadeInView>
        <FadeInView delay={0.05}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-16">
            The toolkit.
          </h2>
        </FadeInView>

        <div className="flex flex-col gap-10">
          {skills.map((group, gi) => (
            <FadeInView key={group.category} delay={gi * 0.05}>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-fg-muted mb-4">
                  {group.category}
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer(0.04)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      className="font-sans text-sm font-normal text-fg-secondary bg-bg-surface border border-border rounded px-3 py-1.5 hover:border-accent hover:text-fg-primary transition-colors duration-200 cursor-default"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.3, ease: EASE_OUT },
                        },
                      }}
                      whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
