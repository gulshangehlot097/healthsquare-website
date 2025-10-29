import Image from "next/image";

export default function FeatureCards() {
  const features = [
    {
      icon: "/images/services/service01.png",
      title: "ON CALL APPOINTMENT",
      desc: "No need to come to the clinic and wait in a queue — just give a call and get the appointment!",
    },
    {
      icon: "/images/services/service02.png",
      title: "EFFECTIVE MEDICINES",
      desc: "Health Square supplies medicines that are of the best quality and highly effective.",
    },
    {
      icon: "/images/services/service03.png",
      title: "DENTAL CHECKUP",
      desc: "Highly qualified and experienced doctors for your dental checkup and examination.",
    },
    {
      icon: "/images/services/service04.png",
      title: "FREE HOME DELIVERY",
      desc: "Save your commuting time — get free home delivery of all necessary medicines!",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#E6F4FF] via-white to-[#E6F4FF] py-24 md:py-28 overflow-hidden">
      {/* Subtle background shape */}
      <div
        className="
          absolute left-[10px] top-[30px]
          w-[150px] md:w-[190px] lg:w-[210px]
          opacity-80 pointer-events-none
        "
      >
        <Image
          src="/shape-6.png"
          alt="Background Shape"
          width={210}
          height={210}
          className="object-contain"
          priority
        />
      </div>

      {/* Section Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0072CE] mb-4">
          OUR <span className="text-[#00B388]">SERVICES</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience exceptional healthcare and convenience under one roof at
          Health Square.
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#0072CE] to-[#00B388] mx-auto rounded-full" />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              group relative bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-lg transition-all duration-500 ease-out
              text-start p-8 flex flex-col items-start
            "
          >
            {/* Blue → Green gradient hover overlay */}
            <div
              className="
                absolute inset-0 bg-gradient-to-b from-[#0072CE] to-[#00B388]
                translate-y-[-102%] group-hover:translate-y-0
                transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              "
            ></div>

            {/* Icon */}
            <div className="relative w-22 h-22 rounded-full overflow-hidden mb-6 z-10 border-2 border-[#E6F4FF] shadow-sm">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3
              className="
                text-[#1E1E3E] font-semibold text-lg mb-2 relative z-10 
                transition-colors duration-500 group-hover:text-white
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-gray-600 text-sm leading-relaxed relative z-10 
                transition-colors duration-500 group-hover:text-white/90
              "
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
