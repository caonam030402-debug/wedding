import Image from "next/image";
import React from "react";

export default function PolaroidPhotos() {
  return (
    <div className="w-full max-w-[420px] mx-auto px-6 py-12 bg-[#f5f0e8]">
      {/* Polaroid Photos Container */}
      <div className="relative h-[500px] flex items-center justify-center">
        {/* Left Polaroid - Groom */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-3 pb-12 shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="relative w-[240px] h-[320px] overflow-hidden">
              <Image
                src="/images/hero_banner_v2.jpg"
                alt="Groom photo"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </div>
        </div>

        {/* Right Polaroid - Bride */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-3 pb-12 shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="relative w-[240px] h-[320px] overflow-hidden">
              <Image
                src="/images/hero_banner_v2.jpg"
                alt="Bride photo"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add a title or caption */}
      <div className="text-center mt-8">
        <h2 className="text-4xl font-pinyon-script text-primary">
          Our Love Story
        </h2>
      </div>
    </div>
  );
}
