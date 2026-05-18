import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PrintButton } from "@/components/print-button";
import { person, experience, certifications, skills, education } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume — ${person.shortName}`,
  description: `Full resume of ${person.shortName}, ${person.title}`,
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 no-print-padding">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">

          {/* Print button */}
          <div className="flex justify-end mb-8 no-print">
            <PrintButton />
          </div>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="font-serif text-4xl md:text-5xl text-fg-primary font-bold mb-2">
              {person.shortName}
            </h1>
            <p className="font-sans text-base text-accent font-medium mb-4">{person.title}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <ContactItem icon={MapPin} text={person.location} />
              <ContactItem icon={Mail} text={person.email} href={`mailto:${person.email}`} />
              <ContactItem icon={Linkedin} text="LinkedIn" href={person.linkedin} />
              <ContactItem icon={Github} text="GitHub" href={person.github} />
            </div>
          </header>

          {/* Summary */}
          <Section title="Professional Summary">
            <p className="font-sans text-sm leading-relaxed text-fg-secondary">{person.summary}</p>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <div className="space-y-8">
              {experience.map((role, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-fg-primary">{role.company}</h3>
                      <p className="font-sans text-sm text-accent font-medium">{role.role}</p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <p className="font-sans text-xs text-fg-muted font-medium uppercase tracking-wide">{role.period}</p>
                      <p className="font-sans text-xs text-fg-muted">{role.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 ml-0">
                    {role.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="font-sans text-sm leading-relaxed text-fg-secondary">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {i < experience.length - 1 && <div className="mt-6 border-b border-border" />}
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="space-y-5">
              {education.map((ed, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <p className="font-sans font-semibold text-sm text-fg-primary">{ed.degree}</p>
                    <p className="font-sans text-sm text-fg-secondary">{ed.field}</p>
                    <p className="font-sans text-xs text-fg-muted">{ed.institution}</p>
                  </div>
                  <p className="font-sans text-xs text-fg-muted font-medium uppercase tracking-wide shrink-0">{ed.year}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm font-medium text-fg-primary">{cert.name}</p>
                    <p className="font-sans text-xs text-fg-muted">{cert.issuer}</p>
                  </div>
                  <p className="font-sans text-xs text-fg-muted font-medium uppercase tracking-wide shrink-0">{cert.year}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section title="Skills & Tools">
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="font-sans text-xs font-medium uppercase tracking-wider text-fg-muted mb-2">
                    {group.category}
                  </p>
                  <p className="font-sans text-sm text-fg-secondary">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href?: string;
}) {
  const cls = "flex items-center gap-1.5 font-sans text-xs text-fg-muted hover:text-fg-primary transition-colors duration-200";
  const inner = (
    <>
      <Icon size={11} className="text-accent" />
      {text}
    </>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}
