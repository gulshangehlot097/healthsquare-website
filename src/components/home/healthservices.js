"use client";
import { FaTooth, FaPills } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"

export default function HealthServicesSection() {
  return (
    <div className="bg-white ">
      <section className="container mx-auto relative py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-[#0D75CD] rotate-12 rounded-md animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#00A759] -rotate-12 rounded-md animate-float-slow"></div>


        <div className="flex flex-col md:w-1/2 gap-6 relative z-10">
  <div className="flex gap-4">
    <div className="relative w-1/2 h-52 rounded-3xl overflow-hidden shadow-md">
      <Image
        src="/images/services/health-service-01.png"
        alt="Doctors discussing"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>

    <div className="relative w-1/2 h-52 rounded-3xl overflow-hidden shadow-md">
      <Image
        src="/images/services/health-service-02.png"
        alt="Doctor"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>

  <div className="flex items-center gap-4">
    <div className="relative w-1/2 h-52 rounded-3xl overflow-hidden shadow-md">
      <Image
        src="/images/services/health-service-03.png"
        alt="Clinic"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

    <div className="flex flex-col justify-center items-center bg-[#E6F4FF] rounded-3xl p-10 w-1/2 shadow-md relative overflow-hidden">
      <span className="absolute bottom-0 left-0 h-1 w-full bg-[#00A759]" />
      <h1 className="text-5xl font-extrabold text-[#0D75CD] leading-tight">
        20
      </h1>
      <p className="text-[#2B2F33]/70 text-center mt-2 text-lg">
        Years Experience
      </p>
    </div>
  </div>
</div>

        <div className="md:w-1/2 flex flex-col gap-6 z-10">
      
          <p className="font-semibold uppercase tracking-wide bg-gradient-to-r from-[#0D75CD] to-[#00A759] bg-clip-text text-transparent">
            Our Health Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2F33] leading-snug">
            Health Square — Dental & Pharmacy Care
          </h2>

          <p className="text-[#2B2F33]/75 leading-relaxed">
            Health Square is a Dental Clinic in Jaipur with a dentist
            specializing in cosmetics and world-class equipment. It also has a
            well-equipped pharmacy for all essential and premium medical needs.
          </p>

         
          <div className="grid grid-cols-2 gap-4 mt-2">
            
            <Link href="/services">
              <div className="flex items-center gap-3 bg-[#E6F4FF] hover:bg-[#D8EBFF] transition p-4 rounded-xl border border-[#B9DAFF] cursor-pointer">
                <FaTooth className="text-[#0D75CD] text-2xl" />
                <p className="font-medium text-[#2B2F33]">Dental Care</p>
              </div>
            </Link>

           
             <Link href="/pharmacy">
            <div className="flex items-center gap-3 bg-[#E8F9F1] hover:bg-[#D8F4E7] transition p-4 rounded-xl border border-[#BEEED7]">
              <FaPills className="text-[#00A759] text-2xl" />
              <p className="font-medium text-[#2B2F33]">Pharmacy</p>
            </div>
            </Link>
          </div>

  <Link href="/services">
          <button
            className="
    relative overflow-hidden bg-[#0072CE] text-white font-semibold
    px-6 py-3 rounded-lg cursor-pointer w-fit mt-6 shadow-md
    transition-all duration-500 ease-in-out
    group
  "
          >
            <span className="relative z-10 transition-colors duration-500 ease-in-out">
              Know More
            </span>
            <span
              className="
      absolute inset-0 bg-[#00B388]
      -translate-x-full group-hover:translate-x-0
      transition-transform duration-500 ease-in-out
    "
            ></span>
          </button>
           </Link>
        </div>


        <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-br from-[#0D75CD] via-white to-[#00A759]" />
       
      </section>
    </div>
  );
}
