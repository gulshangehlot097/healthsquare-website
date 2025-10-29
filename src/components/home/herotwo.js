"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTooth, FaPills, FaHeartbeat } from "react-icons/fa";
import RotatingBadge from "@/src/components/rotatingbadge";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-[30px] pb-20 overflow-hidden">
      
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#0E76CD]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#00A859]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0E76CD] leading-tight">
            Your <span className="text-[#00A859]">Smile</span>,  
            <br /> Our <span className="text-[#0E76CD]">Care</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Experience advanced <b>dental care</b> and a trusted <b>pharmacy</b> — all under one roof. 
            Health Square brings you expert doctors, latest technology, and holistic health services in Jaipur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-[#0E76CD] to-[#00A859] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              Book Appointment
            </button>
            <button className="border-2 border-[#0E76CD] text-[#0E76CD] px-8 py-3 rounded-full font-semibold hover:bg-[#0E76CD] hover:text-white transition-all">
              Explore Pharmacy
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative mt-16 md:mt-0 flex justify-center"
        >
          <div className="relative w-[550px] h-[550px] md:w-[550px] md:h-[550px]">
            <Image
              src="/webhero.png"
              alt="Doctor Smiling"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating icons for subtle animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-12 left-12 text-[#0E76CD]"
          >
            <FaTooth className="text-4xl opacity-80" />
          </motion.div>

          <motion.div
            animate={{ y: [-5, 10, -5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-10 right-16 text-[#00A859]"
          >
            <FaPills className="text-4xl opacity-80" />
          </motion.div>

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-1/2 -left-8 text-[#0E76CD]"
          >
            <FaHeartbeat className="text-3xl opacity-70" />
          </motion.div>
          <div className="absolute -top-0 -right-10">
            <RotatingBadge
                text="HEALTH SQUARE • PHARMACY • DENTAL • "
                size={200}
                speed="slow"
                className="text-[#02AA66]"
              />

          </div>
        </motion.div>
      </div>
    </section>
  );
}
