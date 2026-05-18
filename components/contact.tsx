"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { person } from "@/lib/data";
import { FadeInView } from "./motion-wrapper";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${person.email}`, text: person.email },
  { icon: Linkedin, label: "LinkedIn", href: person.linkedin, text: "linkedin.com/in/rabi-rashid" },
  { icon: Github, label: "GitHub", href: person.github, text: "github.com/r129rashid" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="relative rounded-lg border border-border bg-bg-surface overflow-hidden p-8 md:p-16 text-center">
          {/* Background glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, var(--accent-glow) 0%, transparent 65%)",
            }}
          />
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="relative">
            <FadeInView>
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
                Let&apos;s Connect
              </p>
            </FadeInView>
            <FadeInView delay={0.05}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-4">
                Open to the right conversation.
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="font-sans text-base text-fg-secondary max-w-md mx-auto mb-12">
                Whether it&apos;s a leadership opportunity, advisory conversation, or a product challenge worth solving — reach out.
              </p>
            </FadeInView>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {links.map(({ icon: Icon, label, href, text }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group flex items-center gap-3 border border-border bg-bg-elevated hover:border-accent rounded px-5 py-3.5 transition-colors duration-200 min-h-[44px] min-w-[180px]"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <Icon size={15} className="text-accent shrink-0" />
                  <span className="font-sans text-sm text-fg-secondary group-hover:text-fg-primary transition-colors duration-200 truncate">
                    {text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
