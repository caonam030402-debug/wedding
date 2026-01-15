"use client";

import React from "react";
import Image from "next/image";
import Background from "@/public/images/image3_v2.jpg";
import { WEDDING_INFO } from "@/constants";
import { motion, Variants } from "motion/react";

export default function HeroBanner({ isReady = true }: { isReady?: boolean }) {
  const nameContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.8,
      },
    },
  };

  const nameContainerVariants2: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.2,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="h-dvh w-full relative overflow-hidden bg-gray-100">
      {/* Optimized background image with entry zoom-out effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isReady ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={Background}
          alt="Wedding Banner"
          fill
          priority
          quality={75}
          placeholder="blur"
          className="object-cover object-center transition-opacity duration-500"
          sizes="100vw"
        />
      </motion.div>
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-b from-transparent to-black h-[60%] z-10" />

      <motion.div
        className="font-pinyon-script text-3xl mb-2 absolute text-white top-[7%] w-full text-center left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: -10, letterSpacing: "0.2em" },
          visible: {
            opacity: 1,
            y: 0,
            letterSpacing: "0.05em",
            transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
          },
        }}
      >
        Wedding day
      </motion.div>

      {/* Content overlay */}
      <div
        className={`font-cormorant-unicase w-full flex justify-center flex-col items-center text-4xl absolute bottom-[5%] left-1/2 -translate-x-1/2 text-white z-20`}
      >
        <div className="uppercase text-center">
          <div className="text-5xl space-y-2">
            <motion.div
              className="flex justify-center overflow-hidden"
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={nameContainerVariants}
            >
              {WEDDING_INFO.groom.shortName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center overflow-hidden"
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={nameContainerVariants2}
            >
              {WEDDING_INFO.bride.shortName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div>
            <motion.div
              className="font-philosopher text-base mt-3 tracking-[0.2em]"
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: { duration: 1.2, delay: 1.8 },
                },
              }}
            >
              {WEDDING_INFO.wedding.date.toString().padStart(2, "0")}.
              {WEDDING_INFO.wedding.month.toString().padStart(2, "0")}.
              {WEDDING_INFO.wedding.year}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
