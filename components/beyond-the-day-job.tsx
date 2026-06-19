"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  GraduationCap,
  Network,
  Languages,
  Sparkles,
  Zap,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { aiDecks } from "@/lib/ai-cards";
import { FadeInView, EASE_OUT } from "./motion-wrapper";
import { PlusMarker } from "./plus-marker";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Cpu,
  GraduationCap,
  Network,
  Languages,
  Sparkles,
  Zap,
};

const STORAGE_KEY = "rr-ai-cards-progress";
type Progress = Record<string, number[]>;

export function BeyondTheDayJob() {
  const reduce = useReducedMotion();

  const [deckId, setDeckId] = useState(aiDecks[0].id);
  const [cardIndex, setCardIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState<Progress>({});

  const deck = aiDecks.find((d) => d.id === deckId)!;
  const total = deck.cards.length;
  const card = deck.cards[cardIndex];

  // Load saved progress once on mount (SSR-safe).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw));
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Mark the current card seen whenever it changes (skip the completion state).
  useEffect(() => {
    if (completed) return;
    setProgress((prev) => {
      const seen = prev[deckId] ?? [];
      if (seen.includes(cardIndex)) return prev;
      const next = { ...prev, [deckId]: [...seen, cardIndex] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage may be unavailable */
      }
      return next;
    });
  }, [deckId, cardIndex, completed]);

  const selectDeck = useCallback(
    (id: string) => {
      if (id === deckId && !completed) return;
      setDeckId(id);
      setCardIndex(0);
      setCompleted(false);
    },
    [deckId, completed]
  );

  const next = () => {
    if (cardIndex < total - 1) setCardIndex((i) => i + 1);
    else setCompleted(true);
  };
  const prev = () => cardIndex > 0 && setCardIndex((i) => i - 1);
  const restart = () => {
    setCardIndex(0);
    setCompleted(false);
  };

  const seenCount = (id: string) => (progress[id] ?? []).length;

  return (
    <section id="beyond" className="relative py-24 md:py-32 border-t border-border">
      <PlusMarker className="top-6 left-6 md:left-12" />
      <PlusMarker className="top-6 right-6 md:right-12" />

      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeInView>
          <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
            Beyond the Day Job
          </p>
        </FadeInView>
        <FadeInView delay={0.05}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fg-primary leading-tight mb-4 max-w-2xl">
            I build the things I want to understand.
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="font-sans text-sm text-fg-secondary mb-12 max-w-xl leading-relaxed">
            Outside banking, I prototype with code to pressure-test ideas. This one&apos;s a
            self-initiated micro-learning tool that explains Generative AI from first principles —
            plain mental models, no buzzwords. Built with Next.js and Claude Code. Pick a topic and
            step through it.
          </p>
        </FadeInView>

        {/* Deck selector */}
        <FadeInView delay={0.12}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
            {aiDecks.map((d) => {
              const Icon = ICONS[d.icon] ?? Cpu;
              const active = d.id === deckId;
              const pct = Math.round((seenCount(d.id) / d.cards.length) * 100);
              return (
                <button
                  key={d.id}
                  onClick={() => selectDeck(d.id)}
                  aria-pressed={active}
                  className={cn(
                    "group relative text-left rounded-sm border p-3 md:p-4 overflow-hidden transition-colors duration-200 cursor-pointer min-h-[44px]",
                    active
                      ? "bg-bg-elevated border-accent"
                      : "bg-bg-surface border-border hover:border-accent/40"
                  )}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon
                      size={16}
                      className={cn(
                        "shrink-0 transition-colors duration-200",
                        active ? "text-accent" : "text-fg-muted group-hover:text-accent"
                      )}
                    />
                    <span
                      className={cn(
                        "font-sans text-xs md:text-sm font-medium leading-tight",
                        active ? "text-fg-primary" : "text-fg-secondary"
                      )}
                    >
                      {d.title}
                    </span>
                  </div>
                  {/* Progress underline */}
                  <div className="h-0.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </FadeInView>

        {/* Card viewer */}
        <FadeInView delay={0.15}>
          <div
            className="relative bg-bg-surface border border-border rounded overflow-hidden"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px var(--border)" }}
          >
            {/* Gold top accent */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-accent" />

            {completed ? (
              <div className="p-6 md:p-10 flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-bg-elevated border border-accent mb-4">
                  <Check size={18} className="text-accent" />
                </div>
                <p className="font-serif text-2xl text-fg-primary mb-2">Deck complete.</p>
                <p className="font-sans text-sm text-fg-muted mb-6 max-w-sm">
                  You&apos;ve stepped through all {total} cards in {deck.title}. Pick another topic
                  above, or run it again.
                </p>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold rounded-sm bg-accent text-bg-base px-4 py-2.5 hover:bg-accent-hover transition-colors duration-200 cursor-pointer min-h-[44px]"
                >
                  Start over
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <motion.div
                key={`${deckId}-${cardIndex}`}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="p-6 md:p-10"
              >
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-fg-muted mb-3">
                  Card {cardIndex + 1} of {total}
                </p>
                <h3 className="font-sans text-xl md:text-2xl font-semibold text-fg-primary leading-snug mb-5">
                  {card.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-fg-secondary leading-relaxed whitespace-pre-line mb-6">
                  {card.concept}
                </p>

                {/* Where it's used callout */}
                <div className="bg-bg-elevated border-l-2 border-accent rounded-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={14} className="text-accent shrink-0" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                      Where it&apos;s used
                    </span>
                  </div>
                  <p className="font-sans text-sm text-fg-secondary leading-relaxed">
                    {card.realWorld}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </FadeInView>

        {/* Controls */}
        {!completed && (
          <FadeInView delay={0.18}>
            <div className="flex items-center justify-between gap-4 mt-6">
              {/* Progress dots */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {deck.cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCardIndex(i)}
                    aria-label={`Go to card ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-200 cursor-pointer",
                      i === cardIndex
                        ? "w-5 bg-accent"
                        : (progress[deckId] ?? []).includes(i)
                        ? "w-1.5 bg-accent/50 hover:bg-accent"
                        : "w-1.5 bg-border hover:bg-fg-muted"
                    )}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={prev}
                  disabled={cardIndex === 0}
                  aria-label="Previous card"
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-medium rounded-sm border border-border text-fg-secondary px-3.5 py-2.5 hover:border-accent/40 hover:text-fg-primary transition-colors duration-200 cursor-pointer min-h-[44px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-fg-secondary"
                >
                  <ArrowLeft size={15} />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  onClick={next}
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold rounded-sm bg-accent text-bg-base px-4 py-2.5 hover:bg-accent-hover transition-colors duration-200 cursor-pointer min-h-[44px]"
                >
                  {cardIndex === total - 1 ? "Finish" : "Next"}
                  {cardIndex === total - 1 ? <Check size={15} /> : <ArrowRight size={15} />}
                </button>
              </div>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
}
