"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionOne() {
  return (
    <section className="relative w-full lg:h-[80vh] h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/background1.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Centered Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
         <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
                >
                  <span className="text-[#0E76CD]">HEALTH</span>{" "}
                  <span className="text-[#00A859]">SQUARE</span>
                </motion.h1>
 <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="bg-black/40 p-4 sm:p-6 rounded-lg max-w-3xl"
        >
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            <span className="text-[#0E76CD] font-bold text-base sm:text-lg md:text-2xl">Health Square</span>&nbsp;
            is a pharmacy cum modern-day dental clinic in Jaipur, providing a full range of top-notch dental services via our dental clinic, as well as free home delivery of medicines via our pharmacy in Jaipur.
          </p>

          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
            Health Square is your trusted healthcare partner that provides accessible, high-quality, and affordable dental and pharmacy services. Our mission is to bridge the gap between healthcare accessibility and excellence, ensuring every patient receives personalized care in a comfortable and professional environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
