import Image from "next/image";
import React, { useRef } from "react";
// import RomanticHeroImage from "@/public/images/image2.jpg";
import RomanticHeroImage from "@/public/images/0C7A9620_sl2dny_v2.jpg";
import { motion, useInView } from "motion/react";

export default function RomanticHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="relative" ref={ref}>
      <motion.div
        className="text-4xl font-pinyon-script text-white absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        All of me loves <br /> all of you
      </motion.div>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)", y: 30 }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)", y: 0 }
            : { clipPath: "inset(100% 0% 0% 0%)", y: 30 }
        }
        transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <Image
          src={RomanticHeroImage}
          alt="Romantic Hero"
          sizes="100vw"
          placeholder="blur"
          priority // Thêm priority để tải ngay trong lúc loading
          className="w-full h-auto object-cover transition-opacity duration-500"
          quality={75}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-[-13%] right-1/2 translate-x-1/2 w-[25%] z-20"
      >
        <Image
          src="https://w.ladicdn.com/s450x500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0002_32-20251010170122-ijn7k.png"
          alt="Romantic Hero"
          width={96}
          height={107}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
