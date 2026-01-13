"use client";

import React from "react";
import Image from "next/image";
import Background from "@/public/images/image3.jpg";
import { WEDDING_INFO } from "@/constants";
import { motion } from "motion/react";

export default function HeroBanner() {
  return (
    <div className="h-dvh w-full relative overflow-hidden bg-gray-100">
      {/* Optimized background image */}
      <Image
        src={Background}
        alt="Wedding Banner"
        fill
        priority
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-b from-transparent to-black h-[60%] z-10" />
      <motion.div
        className="font-pinyon-script text-3xl mb-2 absolute text-white top-[7%] w-full text-center left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {WEDDING_INFO.groom.shortName}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {WEDDING_INFO.bride.shortName}
            </motion.div>
          </div>
          <div>
            <motion.div
              className="font-philosopher text-base mt-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
