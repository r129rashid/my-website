"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { featuredCerts } from "@/lib/data";
import { FadeInView, staggerContainer, EASE_OUT } from "./motion-wrapper";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeInView>
          <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
            Certifications
          </p>
        </FadeInView>
        <FadeInView delay={0.05}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-4">
            Credentials that count.
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="font-sans text-sm text-fg-muted mb-12 max-w-xl">
            Focused on the certifications most relevant to senior product leadership in digital banking.
          </p>
        </FadeInView>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuredCerts.map((cert) => (
            <motion.div
              key={cert.name}
              className="group relative bg-bg-surface border border-border rounded p-6 overflow-hidden cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: EASE_OUT },
                },
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px var(--border)",
              }}
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                {/* Category badge */}
                <span className="inline-block font-sans text-xs font-medium uppercase tracking-wider text-fg-muted border border-border rounded-sm px-2 py-0.5 mb-4">
                  {cert.category}
                </span>

                {/* Icon + short name */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-bg-elevated border border-border shrink-0">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-fg-primary leading-snug">
                      {cert.name}
                    </p>
                    <p className="font-sans text-xs text-fg-muted mt-0.5">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs leading-relaxed text-fg-muted">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
