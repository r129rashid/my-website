"use client";

import { useReducedMotion, motion, type MotionProps } from "framer-motion";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN = [0.7, 0, 1, 0.3] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "scaleIn";
} & Omit<MotionProps, "variants" | "initial" | "whileInView">;

const variantMap = { fadeUp, fadeIn, slideLeft, scaleIn };

export function FadeInView({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  ...props
}: FadeInViewProps) {
  const shouldReduce = useReducedMotion();
  const v = variantMap[variant];

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
