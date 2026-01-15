import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { WEDDING_INFO } from "@/constants";
import Thu from "@/public/images/thu_v2.png";
import Thach from "@/public/images/thach_v2.png";

export default function OurStory() {
  const storyText =
    "Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại - đám cưới của chúng mình. Đám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới - nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.";

  return (
    <div>
      <div className="h-[430px] relative mt-25">
        <motion.div
          className="absolute top-0 left-[7%]"
          initial={{ opacity: 0, rotate: -15, x: -20 }}
          whileInView={{ opacity: 1, rotate: -8, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={Thach}
            alt="Our Story"
            width={400}
            height={460}
            className="w-[200px] h-[230px] object-cover border-10 border-b-20 border-white shadow"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-[10%]"
          initial={{ opacity: 0, rotate: 15, x: 20 }}
          whileInView={{ opacity: 1, rotate: 8, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={Thu}
            alt="Our Story"
            width={400}
            height={460}
            className="w-[200px] h-[230px] object-cover border-10 border-b-20 border-white shadow"
          />
        </motion.div>
        <motion.div
          className="absolute top-[10%] right-[7%]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="font-pinyon-script text-2xl">Chú rể</div>
          <div className="text-xl font-cormorant-unicase uppercase">
            {WEDDING_INFO.groom.shortName}
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] left-[15%]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="font-pinyon-script text-2xl">Cô dâu</div>
          <div className="text-xl font-cormorant-unicase uppercase">
            {WEDDING_INFO.bride.shortName}
          </div>
        </motion.div>
        <motion.div
          className="absolute right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0020_14-20251010160528-z-man.png"
            alt="Our Story"
            width={120}
            height={120}
            className="w-[60px] object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        className="text-center text-4xl font-pinyon-script mt-10 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ willChange: "opacity" }}
      >
        Our Story
      </motion.div>
      <motion.div
        className="px-6 text-justify"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ willChange: "opacity, transform" }}
      >
        {storyText}
      </motion.div>
    </div>
  );
}
