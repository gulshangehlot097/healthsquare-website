"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:h-[80vh] h-screen overflow-hidden">
      <Image
        src="/images/services/health-service-01.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 lg:px-16">
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
            <span className="text-[#0E76CD] font-bold text-base sm:text-lg md:text-2xl">
              Health Square
            </span>
            &nbsp; is Jaipur’s leading <b>Pharmacy</b> and <b>Dental Clinic</b>,
            delivering comprehensive healthcare solutions for families. We
            provide expert dental treatments, cosmetic dentistry, oral hygiene
            care, and trusted pharmacy services with free home medicine delivery
            in Jaipur.
          </p>

          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
            Combining advanced dental technology, certified pharmacists, and a
            patient-first approach, we ensure affordable, reliable, and
            high-quality healthcare that promotes long-term wellness and smiles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
