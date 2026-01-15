"use client";

import Image from "next/image";
import React, { useState, Suspense, useEffect } from "react";
import { WEDDING_INFO } from "@/constants";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "next/navigation";
import { pinyonScript } from "@/app/fonts";
import { formatGuestName } from "@/lib/utils";

interface Intro2Props {
  onComplete?: () => void;
}

function IntroContent({
  isExiting,
  handleClick,
}: {
  isExiting: boolean;
  handleClick: () => void;
}) {
  const searchParams = useSearchParams();
  const guestName = formatGuestName(searchParams.get("u"));

  useEffect(() => {
    if (!isExiting) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isExiting]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          onClick={handleClick}
          className="fixed inset-0 w-full flex flex-col items-center justify-center cursor-pointer overflow-hidden z-[9999] touch-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-cormorant-unicase mb-10 uppercase text-center flex-col flex gap-3 absolute top-[5%]"
          >
            <span> {WEDDING_INFO.groom.shortName}</span>
            <span> {WEDDING_INFO.bride.shortName}</span>
            <div className="text-8xl opacity-30 font-pinyon-script mb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              &
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-14"
          >
            <p className="text-lg uppercase tracking-widest mb-2">
              Trân trọng kính mời
            </p>
            <p
              className={`${pinyonScript.className} text-5xl text-primary mt-2`}
            >
              {guestName}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[30vh]"
          >
            <Image
              src="https://w.ladicdn.com/s600x550/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0031_3-20251010171938-1el86.png"
              alt="Intro2"
              width={600}
              className="w-80"
              height={550}
            />
            <Image
              src="https://w.ladicdn.com/s450x500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0028_6-20251010171938-olp-t.png"
              alt="Intro2"
              width={600}
              className="absolute top-[-25%] left-[-15%] w-30"
              height={550}
            />
            <Image
              src="https://w.ladicdn.com/s500x650/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0029_5-20251010171938-3wx4g.png"
              alt="Intro2"
              width={600}
              className="absolute bottom-[-50%] right-[-15%] w-35"
              height={550}
            />
            <motion.div
              animate={{ scale: [1, 0.9, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute right-1/2 translate-x-1/2 bottom-[20%] w-12"
            >
              <Image
                src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0030_4-20251010171938-qfleq.png"
                alt="Intro2"
                width={600}
                className=""
                height={550}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl mt-5"
          >
            {WEDDING_INFO.wedding.date.toString().padStart(2, "0")}.
            {WEDDING_INFO.wedding.month.toString().padStart(2, "0")}.
            {WEDDING_INFO.wedding.year}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Intro2({ onComplete }: Intro2Props) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 800);
  };

  return (
    <Suspense fallback={null}>
      <IntroContent isExiting={isExiting} handleClick={handleClick} />
    </Suspense>
  );
}
