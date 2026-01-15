"use client";

import { pinyonScript } from "@/app/fonts";
import { WEDDING_INFO } from "@/constants";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Image6 from "@/public/images/image6_v2.jpg";

const DAYS_OF_WEEK = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];

export default function WeddingCalendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -50px 0px",
  });
  const { date, month, year } = WEDDING_INFO.wedding;

  const weddingDay = parseInt(date, 10);
  const monthNumber = parseInt(month, 10);
  const yearNumber = parseInt(year, 10);

  const firstDayOfMonth = new Date(yearNumber, monthNumber - 1, 1).getDay();
  const totalDaysInMonth = new Date(yearNumber, monthNumber, 0).getDate();

  // Align the calendar to start on Monday instead of Sunday
  const offsetForMondayStart = (firstDayOfMonth + 6) % 7;
  const totalCells = Math.ceil((offsetForMondayStart + totalDaysInMonth) / 7);

  const cells = Array.from({ length: totalCells * 7 }, (_, cellIndex) => {
    const dayNumber = cellIndex - offsetForMondayStart + 1;
    return dayNumber > 0 && dayNumber <= totalDaysInMonth ? dayNumber : null;
  });

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
            : { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 }
        }
        transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
        className="w-full"
      >
        <Image
          src={Image6}
          alt="anhcamnhan"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="flex flex-col h-full items-center p-6 gap-6">
          <motion.div
            className={`${pinyonScript.className} text-3xl leading-none`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Tháng {monthNumber}
          </motion.div>

          <motion.div
            className="grid grid-cols-7 gap-y-3 w-full text-center font-cormorant-unicase text-xs uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {DAYS_OF_WEEK.map((day, index) => (
              <motion.div
                key={day}
                className="font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                {day}
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-7 gap-y-4 w-full text-center text-sm flex-1 content-start">
            {cells.map((day, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.01 }}
              >
                {day && (
                  <>
                    <span className="z-10">{day}</span>
                    {day === weddingDay && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={
                          isInView ? { scale: [0, 1, 0.9, 1] } : { scale: 0 }
                        }
                        className="absolute inset-0 flex items-center justify-center"
                        transition={{
                          scale: {
                            duration: 0.8,
                            delay: 0.8,
                            times: [0, 0.6, 0.8, 1],
                          },
                        }}
                      >
                        <motion.img
                          src="https://w.ladicdn.com/s350x350/6322a62f2dad980013bb5005/png-clipart-computer-icons-arrow-miscellaneous-angle-20250323082200-ub0dm.png"
                          alt="wedding day"
                          className="w-11 h-11 object-contain"
                          animate={{ scale: [1, 0.9, 1] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                          }}
                        />
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
