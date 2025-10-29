"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  // Animation variants for staggered entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each element
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 py-16 px-6 flex justify-center items-center text-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-medium  mb-4"
        >
        Why choose <span className="text-[#0e76cd]">HEALTH</span> <span className="text-[#00afef]">SQUARE</span> ?
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-48 h-[2px] bg-gray-300 mx-auto mb-6"
        ></motion.div>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg"
        >
         Our Dental clinic in Jaipur is fully equipped with world-class facilities and the latest medical technology to provide people with the best dental services available. Meanwhile, the Health Square Pharmacy is managed by medical experts who are familiar with all the medical, healthcare, and personal care products. Health Square’s prime location and delivery services also offer a great deal of convenience.
        </motion.p>

      
      </motion.div>
    </section>
  );
}
