"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaHeartbeat,
  FaLeaf,
  FaAppleAlt,
  FaThermometerHalf,
  FaCarrot,
  FaPills,
  FaHandsWash,
  FaTooth,
  FaSyringe,
  FaShieldAlt,
} from "react-icons/fa";

const categories = [
  { id: "health", name: "Health", icon: <FaHeartbeat /> },
  { id: "cosmetics", name: "Cosmetics", icon: <FaLeaf /> },
  { id: "supplements", name: "Dietary Supplements", icon: <FaAppleAlt /> },
  { id: "cough", name: "Cough, Cold, Fever", icon: <FaThermometerHalf /> },
  { id: "nutrition", name: "Nutrition", icon: <FaCarrot /> },
  { id: "medicine", name: "Medicine", icon: <FaPills /> },
  { id: "pollen", name: "Pollen Sneeze", icon: <FaHandsWash /> },
  { id: "allergies", name: "Allergies", icon: <FaHandsWash /> },
  { id: "teeth", name: "Mouth & Teeth", icon: <FaTooth /> },
  { id: "medication", name: "Medication", icon: <FaSyringe /> },
  { id: "protection", name: "Protection", icon: <FaShieldAlt /> },
];

const products = {
  health: [
    {
      title: "Vitamins Pack",
      img: "/images/products/hero01.png",
      price: "₹299",
      desc: "Boosts immunity and supports daily wellness.",
    },
    {
      title: "Heart Care",
      img: "/images/products/hero02.png",
      price: "₹499",
      desc: "Maintains healthy cholesterol and blood pressure.",
    },
  ],
  cosmetics: [
    {
      title: "Organic Cream",
      img: "/images/products/hero03.png",
      price: "₹199",
      desc: "Made with natural extracts for glowing skin.",
    },
    {
      title: "Skin Lotion",
      img: "/images/products/hero01.png",
      price: "₹249",
      desc: "Hydrating formula for all skin types.",
    },
  ],
  supplements: [
    {
      title: "Protein Powder",
      img: "/images/products/hero02.png",
      price: "₹699",
      desc: "Whey blend for muscle recovery and strength.",
    },
    {
      title: "Omega Capsules",
      img: "/images/products/hero03.png",
      price: "₹399",
      desc: "Supports heart and brain health naturally.",
    },
  ],
};

export default function OurProducts() {
  const [active, setActive] = useState("health");

  return (
    <section className="py-16 bg-gray-50" id="our-products">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all 
                ${
                  active === cat.id
                    ? "bg-green-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-green-100"
                }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(products[active] || []).map((item, index) => (
            <div
              key={index}
              className="group relative w-full h-72"
              style={{ perspective: "1000px" }}
            >
         
              <div className="relative w-full h-full cursor-pointer transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0.2,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform">
            
                <div className="absolute inset-0 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between backface-hidden [transform:rotateY(0deg)]">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-fill select-none pointer-events-none"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                </div>

     
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-600/90 to-emerald-500 text-white p-6 flex flex-col justify-center items-center text-center backface-hidden [transform:rotateY(180deg)]">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                  <p className="text-lg font-bold mt-4">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
