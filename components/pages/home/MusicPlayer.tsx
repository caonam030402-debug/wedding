"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MusicNote01Icon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to auto-play when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.log("Autoplay blocked. Waiting for interaction.");
        setIsPlaying(false);

        // If blocked, add one-time listeners to start music on first touch/click
        const startOnInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
          } catch (e) {
            console.error("Failed to play on interaction", e);
          }
        };

        window.addEventListener("click", startOnInteraction, { once: true });
        window.addEventListener("touchstart", startOnInteraction, {
          once: true,
        });
      }
    };

    playAudio();

    return () => {
      // Clean up is handled by { once: true } but for safety:
      window.removeEventListener("click", () => {});
      window.removeEventListener("touchstart", () => {});
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-100">
      <audio
        ref={audioRef}
        src="https://camcui.vn/bai50.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all active:scale-95",
          "bg-[#1a4d2e] text-white overflow-hidden"
        )}
      >
        <div className="absolute inset-1 rounded-full border border-dashed border-white/30" />

        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { repeat: Infinity, duration: 8, ease: "linear" }
              : { duration: 0.5 }
          }
          className="relative z-10 flex items-center justify-center"
        >
          <HugeiconsIcon icon={MusicNote01Icon} size={18} strokeWidth={2} />
        </motion.div>

        {!isPlaying && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute z-20 h-0.5 w-6 rotate-45 bg-white shadow-sm"
          />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
