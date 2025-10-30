"use client";

import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaHeart, FaPills, FaStethoscope, FaSyringe, FaBandAid } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingIcons = [
  { icon: <FaHeart />, color: "#FF4D4D", size: "text-2xl", top: "5%", left: "5%", duration: 6 },
  { icon: <FaPills />, color: "#00B388", size: "text-xl", top: "10%", left: "10%", duration: 8 },
  { icon: <FaStethoscope />, color: "#0072CE", size: "text-xl", top: "15%", left: "5%", duration: 10 },
  { icon: <FaSyringe />, color: "#FF8C00", size: "text-xl", top: "80%", left: "90%", duration: 7 },
  { icon: <FaBandAid />, color: "#8A2BE2", size: "text-xl", top: "85%", left: "95%", duration: 9 },
];



export default function AppointmentSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#E0F4FF] via-white to-[#E6F4FF] py-20 px-6 md:px-16 overflow-hidden">

 
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.size}`}
          style={{ top: item.top, left: item.left, color: item.color, opacity: 0.2 + Math.random() * 0.1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: item.duration, ease: "easeInOut", delay: idx * 0.5 }}
        >
          {React.cloneElement(item.icon)}
        </motion.div>
      ))}


      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0072CE] mb-10">
        MAKE <span className="text-[#00B388]">APPOINTMENT</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden relative border border-[#E6F4FF]">

        <div className="flex-1 relative">
          <Image
            src="/images/about/appointment.jpg"
            alt="Doctor consulting patient"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />
          <motion.div
        animate={{ rotateY: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute right-[-25px] top-1/3 transform -translate-y-1/2 z-20 [transform-style:preserve-3d]"
      >
        <Image
          src="/images/heart.png"
          alt="Heart Icon"
          width={50}
          height={50}
          className="drop-shadow-lg"
        />
      </motion.div>
        </div>

        <div className="flex-1 w-full p-8 md:p-10 bg-white h-full">
          <p className="text-sm text-[#00B388] font-semibold mb-1 uppercase tracking-wide">
            Health Square Care
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-[#0072CE] mb-8 leading-snug">
            Book an Online Appointment for Expert Consultation
          </h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Name*"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-[#00B388]/50 outline-none"
              />
              <div className="relative">
                <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter E-mail*"
                  className="border border-gray-300 rounded-md p-3 w-full pr-10 focus:ring-2 focus:ring-[#00B388]/50 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-[#00B388]/50 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Your Subject
                </option>
                <option>Dental Care</option>
                <option>Skin Treatment</option>
                <option>Consultation</option>
                <option>Health Checkup</option>
              </select>

              <div className="relative">
                <FaPhone className="absolute right-3 top-3.5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Enter Number*"
                  className="border border-gray-300 rounded-md p-3 w-full pr-10 focus:ring-2 focus:ring-[#00B388]/50 outline-none"
                />
              </div>
            </div>

            <textarea
              placeholder="Write a short message..."
              rows={3}
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-[#00B388]/50 outline-none resize-none"
            ></textarea>

            <div className="text-start">
              <button
                type="submit"
                className="
                  relative overflow-hidden bg-[#0072CE] text-white font-semibold
                  py-3 px-10 rounded-full
                  shadow-md transition-all duration-500 ease-in-out
                  group
                "
              >
                <span className="relative z-10 transition-colors duration-500 ease-in-out ">
                  Send Now →
                </span>
                <span
                  className="
                    absolute inset-0 bg-[#00B388]
                    -translate-x-full group-hover:translate-x-0
                    transition-transform duration-500 ease-in-out
                  "
                ></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
