"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export const IS_GROOM_SIDE = process.env.NEXT_PUBLIC_SIDE === "groom";

export default function Timeline() {
  const timelineEvents = [
    {
      time: IS_GROOM_SIDE ? "10:30" : "10:00",
      title: "Đón khách",
      icon: "https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/untitled-6-20250420030805-cyjyq.png",
    },
    // {
    //   time: "10:30",
    //   title: "Nghi thức",
    //   icon: "https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/untitled-4-20250420023945-8bthf.png",
    // },
    {
      time: IS_GROOM_SIDE ? "11:00" : "11:30",
      title: "Khai tiệc",
      icon: "https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/untitled-5-20250420024050-0e1lg.png",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="text-center text-4xl font-pinyon-script"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6 }}
        style={{ willChange: "transform, opacity" }}
      >
        Time line
      </motion.div>
      <div className="relative mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <div className="">
          <motion.div
            className="absolute inset-x-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/35 via-primary/45 to-primary/25"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ willChange: "transform", transformOrigin: "top" }}
          />

          <div className="space-y-12 sm:space-y-14">
            {timelineEvents.map((event, index) => {
              const textOnRight = index % 2 === 0;
              return (
                <motion.div
                  key={`${event.time}-${event.title}`}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.div
                    className="flex justify-end "
                    initial={{ opacity: 0, x: textOnRight ? 30 : 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                      margin: "0px 0px -50px 0px",
                    }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    {textOnRight ? (
                      <Image
                        src={event.icon}
                        alt={event.title}
                        width={50}
                        height={50}
                      />
                    ) : (
                      <TimeBlock align="right" {...event} />
                    )}
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                      margin: "0px 0px -50px 0px",
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    style={{ willChange: "transform" }}
                  >
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      <span className="relative h-3 w-3 rounded-full border-4 border-white bg-primary shadow-[0_8px_24px_rgba(66,89,113,0.32)]" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: textOnRight ? 0 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                      margin: "0px 0px -50px 0px",
                    }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    {textOnRight ? (
                      <TimeBlock align="left" {...event} />
                    ) : (
                      <Image
                        src={event.icon}
                        alt={event.title}
                        width={50}
                        height={50}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBlock({
  time,
  title,
  align,
}: {
  time: string;
  title: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`max-w-[200px] text-primary ${
        align === "right"
          ? "text-right sm:text-right"
          : "text-left sm:text-left"
      }`}
    >
      <div className="text-3xl font-cormorant-unicase tracking-[0.08em]">
        {time}
      </div>
      <div className="mt-1 text-lg leading-tight font-cormorant-unicase uppercase text-primary/85">
        {title}
      </div>
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-28 w-28 place-items-center rounded-full border border-primary/10 bg-[radial-gradient(circle_at_35%_30%,rgba(142,164,189,0.25),rgba(236,243,250,0.95))] shadow-[0_12px_28px_rgba(77,98,123,0.18)]">
      <div className="absolute inset-1 rounded-full border border-white/60" />
      {children}
    </div>
  );
}

function CameraIcon() {
  const stroke = "#5c748f";
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      stroke={stroke}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="20" width="44" height="28" rx="8" fill="#e7eef6" />
      <path d="M22 20.5l4-7h12l4 7" fill="#d9e3ef" />
      <rect x="14" y="24" width="8" height="5" rx="2" />
      <circle cx="32" cy="34" r="12" fill="#eef3f9" />
      <circle cx="32" cy="34" r="6.5" />
      <path d="M25 18h14" />
    </svg>
  );
}

function RingsIcon() {
  const stroke = "#5f7794";
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      stroke={stroke}
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="12" y="16" width="40" height="32" rx="10" fill="#e8eff6" />
      <circle cx="28" cy="32.5" r="8.5" />
      <circle cx="36" cy="30.5" r="8.5" />
      <path d="M31 25l3-5 5 3" />
      <path d="M23 39c2 2.5 5.5 4 9 4s6.5-1.3 8.5-3.3" />
    </svg>
  );
}

function DinnerIcon() {
  const stroke = "#5c748f";
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      stroke={stroke}
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="32" cy="32" r="14" fill="#e8eff6" />
      <circle cx="32" cy="32" r="8" />
      <line x1="18" y1="22" x2="18" y2="42" />
      <path d="M18 24h6M18 32h6M18 40h6" />
      <line x1="44" y1="22" x2="44" y2="42" />
      <path d="M44 24c2 0 4 2 4 5 0 3-2 5-4 5" />
    </svg>
  );
}

function DiscoIcon() {
  const stroke = "#5f7794";
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      stroke={stroke}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="32" cy="32" r="15" fill="#e8eff6" />
      <path d="M32 17v30" />
      <path d="M17 32h30" />
      <path d="M22 20c2.5 1.8 7 3 10 3s7.5-1 10-3" />
      <path d="M22 44c2.5-1.8 7-3 10-3s7.5 1 10 3" />
      <path d="M23 27c2 1 5.5 1.7 9 1.7s7-.7 9-1.7" />
      <path d="M23 37c2-1 5.5-1.7 9-1.7s7 .7 9 1.7" />
    </svg>
  );
}
