"use client";

import { pinyonScript } from "@/app/fonts";
import { WEDDING_INFO } from "@/constants";
import { motion, useInView } from "motion/react";
import React, { useRef, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { formatGuestName } from "@/lib/utils";

function InvitationContent() {
  const { wedding } = WEDDING_INFO;
  const searchParams = useSearchParams();
  const guestName = formatGuestName(searchParams.get("u"));
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="relative" ref={ref}>
      <div className="text-center px-6">
        {/* <div className="text-5xl font-cormorant-unicase uppercase mb-10 flex-col flex gap-3 relative text-primary">
          <div>{WEDDING_INFO.groom.shortName}</div>
          <div>{WEDDING_INFO.bride.shortName}</div>
          <div className="font-pinyon-script text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            &
          </div>
        </div> */}

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold uppercase font-cormorant-unicase">
            Trân trọng kính mời
          </div>
          <motion.div
            className={`${pinyonScript.className} text-5xl leading-normal text-primary`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {guestName}
          </motion.div>
          <h1 className="text-lg text-center mx-auto uppercase font-cormorant-unicase">
            Đến tham dự buổi tiệc chung vui cùng gia đình chúng tôi vào lúc
          </h1>
        </motion.div>

        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <div className="text-xl">
            {wedding.time}, {wedding.dayOfWeek}
          </div>
          <div className="flex justify-center gap-4 text-xl uppercase items-center">
            <motion.div
              className="border-t border-b border-primary py-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              Tháng {wedding.month}
            </motion.div>
            <motion.div
              className="text-7xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              {wedding.date}
            </motion.div>
            <motion.div
              className="border-t border-b border-primary py-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              Năm {wedding.year}
            </motion.div>
          </div>
          <div className="text-md mt-2">({wedding.lunarDate})</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Image
            className="w-10 h-10 mx-auto mt-2"
            src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/untitled-1_0001_untitled-1_0004_vector-smart-object-20250619035202-sifjn-20250804081821-6svto.png"
            alt="Image Wedding"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="text-base underline mb-2">Tổ chức tại</div>
          <div className="text-xl uppercase font-bold font-cormorant-unicase">
            {WEDDING_INFO.venue.name}
          </div>
          <div className="text-md">({WEDDING_INFO.venue.address})</div>
        </motion.div>

        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          animate={
            isInView ? { opacity: 1, scale: [1, 0.95, 1] } : { opacity: 0 }
          }
          transition={{
            opacity: { duration: 0.4, delay: 0.7 },
            scale: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          <a
            href={WEDDING_INFO.venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-cormorant-unicase gap-2 text-lg font-bold hover:opacity-70 transition-opacity"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
            </svg>
            <span>CHỈ ĐƯỜNG</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function InvitationCard() {
  return (
    <Suspense>
      <InvitationContent />
    </Suspense>
  );
}
