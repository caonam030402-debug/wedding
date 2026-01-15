"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  once?: boolean;
}

export const TextReveal = React.memo(({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.02,
  once = true,
}: TextRevealProps) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap">
          <motion.span variants={childVariants} className="inline-block mr-[0.25em]">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
});

TextReveal.displayName = "TextReveal";
