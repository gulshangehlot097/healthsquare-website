"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ShopByConcern() {
  const scrollRef = useRef(null);

  const [zoomState, setZoomState] = useState({
    activeIndex: null,
    x: 50,
    y: 50,
  });

  const concerns = [
    { name: "Heart Care", img: "/images/products/hero01.png" },
    { name: "Stomach Care", img: "/images/products/hero02.png" },
    { name: "Liver Care", img: "/images/products/hero01.png" },
    { name: "Bone, Joint & Muscle", img: "/images/products/hero02.png" },
    { name: "Kidney Care", img: "/images/products/hero01.png" },
    { name: "Derma Care", img: "/images/products/hero02.png" },
    { name: "Diabetes", img: "/images/products/hero01.png" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleZoomMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomState({
      activeIndex: index,
      x,
      y,
    });
  };

  const handleZoomLeave = () => {
    setZoomState({
      activeIndex: null,
      x: 50,
      y: 50,
    });
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Shop by Concern</h2>
        <p className="text-gray-500 mt-2 text-base">
          Choose your health priority and explore expert care
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-8 md:px-10">
       
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 sm:-left-4 md:-left-6 top-1/2
          -translate-y-1/2 bg-white border border-gray-300 text-gray-700 
          hover:bg-green-50 shadow-md p-3 rounded-full transition z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

    
        <div
          ref={scrollRef}
          className="flex gap-8 scroll-smooth w-full overflow-x-hidden 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {concerns.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center 
              min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] 
              cursor-pointer hover:scale-105 transition-transform duration-500"
            >
       
              <div
                className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 
                flex items-center justify-center bg-white border border-[#E6EBF4] 
                rounded-2xl overflow-hidden cursor-zoom-in"
                onMouseMove={(e) => handleZoomMove(e, i)}
                onMouseLeave={handleZoomLeave}
              >
             
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className={`w-full h-full object-contain transition-opacity duration-150 ${
                    zoomState.activeIndex === i ? "opacity-0" : "opacity-100"
                  }`}
                />

              
                {zoomState.activeIndex === i && (
                  <div
                    className="absolute inset-0 bg-no-repeat"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: `${zoomState.x}% ${zoomState.y}%`,
                      backgroundSize: "260%", // zoom level 200–350%
                    }}
                  />
                )}
              </div>

      
              <p className="text-gray-800 mt-4 font-semibold text-sm md:text-base text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 sm:-right-4 md:-right-6 top-1/2
          -translate-y-1/2 bg-white border border-gray-300 text-gray-700 
          hover:bg-green-50 shadow-md p-3 rounded-full transition z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
