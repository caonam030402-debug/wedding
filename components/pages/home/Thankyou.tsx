"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { pinyonScript } from "@/app/fonts";

export default function Thankyou() {
  return (
    <div className="w-full h-[400px] relative">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="w-full h-full absolute inset-0 z-0 bg-gray-100"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Lớp phủ đen nằm trong khối trượt để không bị xám đục */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent z-10" />
        <Image
          src="/images/thankyou.jpg"
          alt="Thankyou"
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </motion.div>

      <div className="text-white z-10 absolute text-center flex flex-col items-center h-full px-6 w-full pt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`${pinyonScript.className} text-4xl mb-3`}
          style={{ willChange: "transform, opacity" }}
        >
          Thank You!
        </motion.div>
        <motion.div
          className="w-full text-base leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ willChange: "transform, opacity" }}
        >
          Cảm ơn bạn đã đến chung vui cùng chúng mình. Sự hiện diện của bạn là
          món quà ý nghĩa nhất trong ngày trọng đại này.
        </motion.div>
      </div>
    </div>
  );
}
