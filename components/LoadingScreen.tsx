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
    // Đảm bảo trang luôn ở trên cùng khi đang load
    window.scrollTo(0, 0);

    // Khóa scroll khi đang loading
    document.body.style.overflow = "hidden";

    // Giả lập thời gian loading để assets kịp render
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
      onFinished?.();
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
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
            {/* Vòng tròn chữ xoay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64 flex items-center justify-center"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="fill-primary font-cormorant-unicase text-[12px] uppercase tracking-[0.35em]">
                  <textPath href="#circlePath" startOffset="0%">
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •{" "}
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •{" "}
                    {WEDDING_INFO.groom.name} & {WEDDING_INFO.bride.name} •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Chữ Wedding ở giữa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
              >
                <span className="font-pinyon-script text-4xl text-primary">
                  Wedding
                </span>
                <div className="h-[1px] w-12 bg-primary/30 mt-1" />
              </motion.div>
            </div>
          </div>

          {/* <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-cormorant-unicase tracking-[0.2em] text-primary/60 text-sm uppercase"
          >
            Đang tải lời mời...
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
