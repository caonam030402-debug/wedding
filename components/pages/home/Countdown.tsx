"use client";

import { useEffect, useState, useRef } from "react";
import { WEDDING_INFO } from "@/constants";
import { motion, useInView } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const { date, month, year, time } = WEDDING_INFO.wedding;
  const [hours, minutes] = time.split(":").map(Number);

  const weddingDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(date),
    hours,
    minutes,
    0
  );

  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <motion.div
        className="text-3xl flex justify-center items-center gap-3 font-philosopher tracking-tighter"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center min-w-[3rem]">
          <span>{timeLeft.days.toString().padStart(2, "0")}</span>
        </div>
        <span className="opacity-30 mb-1">:</span>
        <div className="flex flex-col items-center min-w-[3rem]">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
        </div>
        <span className="opacity-30 mb-1">:</span>
        <div className="flex flex-col items-center min-w-[3rem]">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        </div>
        <span className="opacity-30 mb-1">:</span>
        <div className="flex flex-col items-center min-w-[3rem]">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        </div>
      </motion.div>
    </div>
  );
}
