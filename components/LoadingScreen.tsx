"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LINK_BACKGROUND, WEDDING_INFO } from "@/constants";

export default function LoadingScreen({
  onFinished,
}: {
  onFinished?: () => void;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinished?.();
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [onFinished]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[100] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${LINK_BACKGROUND})`,
            backgroundSize: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Vòng tròn chữ xoay - tối ưu cho mobile */}
            <div className="relative w-64 h-64 flex items-center justify-center animate-spin-slow">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text
                  className="fill-primary font-cormorant-unicase text-[12px] uppercase tracking-[0.35em]"
                  style={{ paintOrder: "stroke fill" }}
                >
                  <textPath href="#circlePath" startOffset="0%">
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •{" "}
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •{" "}
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Chữ Wedding ở giữa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <span className="font-pinyon-script text-4xl text-primary">
                  Wedding
                </span>
                <div className="h-[1px] w-12 bg-primary/30 mt-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
