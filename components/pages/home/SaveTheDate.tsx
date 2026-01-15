"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Thu1 from "@/public/images/thu1_v2.png";
import Thu2 from "@/public/images/thu2_v2.png";
import Thu3 from "@/public/images/thu3_v2.png";
import Image5 from "@/public/images/image5_v2.jpg";
import Image4 from "@/public/images/image4_v2.png";
import Countdown from "./Countdown";

export default function SaveTheDate() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const elements = [
    {
      src: "https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0020_14-20251010160528-z-man.png",
      className:
        "w-[20%] absolute right-[50%] translate-x-1/2 bottom-[20%] z-20",
    },
    {
      src: "https://w.ladicdn.com/s450x550/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0017_17-20251010160529-gulgj.png",
      className: "w-[40%] absolute bottom-[-25%] -left-[10%] z-20",
    },
    {
      src: "https://w.ladicdn.com/s450x600/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0019_15-20251010160529-kgwqz.png",
      className: "w-[30%] absolute bottom-[20%] right-[-10%] z-20",
    },
    // {
    //   src: "https://w.ladicdn.com/s400x450/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0026_8-20251010160529-58dj0.png",
    //   className: "w-[100px] absolute bottom-[34%] left-[-10%] z-4",
    // },
  ];

  return (
    <div
      className="flex flex-col items-center px-6 relative space-y-3"
      ref={ref}
    >
      <motion.div
        className="text-center text-2xl w-[80%] mx-auto font-cormorant-unicase font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        QUYẾT ĐỊNH BÊN NHAU TRỌN ĐỜI.
      </motion.div>
      <div className="h-[30px] w-px bg-primary"></div>
      <motion.div
        className="flex gap-2 items-center font-pinyon-script text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Save the date
      </motion.div>
      <Countdown />
      {/* <motion.div
        className="text-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {WEDDING_INFO.wedding.date.toString().padStart(2, "0")}.
        {WEDDING_INFO.wedding.month.toString().padStart(2, "0")}.
        {WEDDING_INFO.wedding.year}
      </motion.div> */}
      <motion.div
        ref={ref}
        initial="closed"
        animate={isInView ? "open" : "closed"}
        variants={{
          closed: {},
          open: {
            transition: {
              staggerChildren: 0.35,
            },
          },
        }}
        className="w-[90%] relative mt-10 perspective-distant"
      >
        <Image
          src={Thu1}
          alt="Save the date"
          width={400}
          height={430}
          className="w-full"
        />
        <motion.div
          variants={{
            closed: { rotateX: 180 },
            open: {
              rotateX: 0,
              transition: {
                duration: 3,
                ease: [0.25, 1, 0.35, 1],
              },
            },
          }}
          style={{
            transformOrigin: "bottom center",
            transformStyle: "preserve-3d",
          }}
          className="w-full absolute top-0 right-0 z-3"
        >
          <Image src={Thu2} alt="Save the date" width={400} height={340} />
        </motion.div>
        <Image
          src={Thu3}
          alt="Save the date"
          width={400}
          height={430}
          className="w-full absolute bottom-0 left-0 z-10"
        />

        {/* Element */}
        {elements.map((element, index) => (
          <motion.div
            key={index}
            variants={{
              closed: { opacity: index === 0 ? 1 : 0 },
              open: {
                opacity: 1,
                transition: { duration: index === 0 ? 1 : 0.6 },
              },
            }}
            className={element.className}
          >
            <Image
              src={element.src}
              alt="Save the date decoration"
              width={120}
              height={120}
            />
          </motion.div>
        ))}

        <motion.div
          variants={{
            closed: { y: 30, opacity: 0, rotate: -15 },
            open: {
              y: 0,
              opacity: 1,
              rotate: -8,
              transition: {
                duration: 1.2,
                ease: [0.25, 1, 0.35, 1],
              },
            },
          }}
          className="absolute top-[10%] left-[5%] z-8 w-[50%] h-[60%] object-cover"
        >
          <Image
            src={Image4}
            alt="Wedding memory"
            width={300}
            height={440}
            className="w-full h-full object-cover border-10 border-b-20 border-white shadow"
          />
        </motion.div>
        <motion.div
          variants={{
            closed: { y: 40, opacity: 0, rotate: 15 },
            open: {
              y: 0,
              opacity: 1,
              rotate: 8,
              transition: {
                duration: 1.1,
                ease: [0.25, 1, 0.35, 1],
              },
            },
          }}
          className="absolute top-[-3%] right-[5%] z-3 w-[60%] h-[60%] object-cover"
        >
          <Image
            src={Image5}
            alt="Wedding memory"
            width={400}
            height={500}
            className="w-full h-[250px] object-cover border-10 border-b-20 border-white shadow"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
