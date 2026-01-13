"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Photo1 from "@/public/images/hero_banner.jpg";
import { motion } from "motion/react";

// Component riêng cho từng ảnh với detection chính xác
interface PhotoItemProps {
  photo: {
    id: number;
    src: string;
    alt: string;
    className: string;
  };
  direction: string;
}

function PhotoItem({ photo, direction }: PhotoItemProps) {
  const ref = useRef(null);
  const initialX = direction === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      className={`${photo.className} relative overflow-hidden`}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5, margin: "0px 0px -150px 0px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{ willChange: "transform, opacity" }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />
    </motion.div>
  );
}

export default function OurMemories() {
  const photos = [
    {
      id: 1,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 1",
      className: "col-span-6 h-[180px]",
    },
    {
      id: 2,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 2",
      className: "row-span-2 col-span-4 h-full",
    },
    {
      id: 3,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 3",
      className: "h-[180px] col-span-2",
    },
    {
      id: 4,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 4",
      className: "h-[180px] col-span-2",
    },
    {
      id: 5,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 4",
      className: "h-[180px] col-span-3",
    },
    {
      id: 6,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 4",
      className: "h-[180px] col-span-3",
    },
    {
      id: 7,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 4",
      className: "h-[180px] col-span-3",
    },
    {
      id: 8,
      src: "/images/hero_banner.jpg",
      alt: "Wedding memory 4",
      className: "h-[180px] col-span-3",
    },
  ];

  const getAnimationDirection = (index: number) => {
    const pattern = [
      "left",
      "right",
      "right",
      "left",
      "left",
      "right",
      "left",
      "right",
    ];
    return pattern[index] || "left";
  };

  return (
    <div className="w-full mx-auto bg-black text-white">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.8 }}
        style={{ willChange: "opacity" }}
      >
        <Image
          src={Photo1}
          alt="Wedding memory 1"
          className="object-cover w-full h-[450px]"
          priority
          quality={85}
          placeholder="blur"
          sizes="100vw"
        />
        {/* Gradient overlay - mờ dần từ dưới lên */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-linear-to-t from-black to-transparent">
          <motion.div
            className="text-5xl font-pinyon-script whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ willChange: "transform, opacity" }}
          >
            Our memories
          </motion.div>
        </div>
      </motion.div>
      <div className="px-6 pb-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex items-center gap-4 mb-4">
            {/* <h2 className="text-5xl font-pinyon-script whitespace-nowrap">
              Our memories
            </h2>
            <div className="h-px bg-white flex-1"></div> */}
          </div>

          <p className="text-sm leading-relaxed text-justify">
            This album captures the most beautiful moments of our special
            day—filled with love, joy, and unforgettable memories. From our
            heartfelt vows to the first dance, every photo tells a story of our
            journey together. Surrounded by family and friends, we celebrated a
            love that will last a lifetime.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-6 gap-2">
          {photos.map((photo, index) => {
            const direction = getAnimationDirection(index);
            return (
              <PhotoItem key={photo.id} photo={photo} direction={direction} />
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute top-[-3%] right-[-5%]"
        style={{ willChange: "opacity" }}
      >
        <Image
          src="https://w.ladicdn.com/s450x550/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0011_23-20251010163910-afce_.png"
          alt="Image Wedding"
          className="w-[100px]"
          width={150}
          height={150}
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute bottom-[-9%] left-[-5%]"
        style={{ willChange: "opacity" }}
      >
        <Image
          src="https://w.ladicdn.com/s450x600/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0013_21-20251010163910-jjqab.png"
          alt="Image Wedding"
          width={150}
          height={150}
          className="w-[100px]"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
