"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
}

/**
 * Typewriter component optimized for performance.
 * Updates the DOM directly via ref to avoid React re-renders for every character.
 * Uses native Intersection Observer via useInView for efficiency.
 */
export const Typewriter = React.memo(({
  text,
  className,
  delay = 0,
  speed = 30,
  once = true,
}: TypewriterProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  // Sử dụng amount: 0.1 để nhạy hơn, không bị trễ khi cuộn tới
  const isInView = useInView(containerRef, { once, amount: 0.1 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      
      let currentIndex = 0;
      let timeoutId: NodeJS.Timeout;

      const type = () => {
        if (currentIndex <= text.length) {
          if (containerRef.current) {
            containerRef.current.textContent = text.slice(0, currentIndex);
          }
          currentIndex++;
          timeoutId = setTimeout(type, speed);
        }
      };

      const startTimeout = setTimeout(type, delay * 1000);

      return () => {
        clearTimeout(startTimeout);
        clearTimeout(timeoutId);
      };
    }
  }, [isInView, text, speed, delay]);

  return (
    <span ref={containerRef} className={className} />
  );
});

Typewriter.displayName = "Typewriter";
