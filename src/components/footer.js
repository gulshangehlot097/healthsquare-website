import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#03254C] via-[#052E5E] to-[#041C32] text-white w-full">
      {/* Accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#00C6FF]" />

      {/* === Main Section === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* --- Brand --- */}
        <div className="flex flex-col">
          <div className="text-start">
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo.png"
                alt="Health Square Logo"
                width={286}
                height={83}
                priority
                quality={90}
                sizes="286px"
                className="object-contain w-[286px] h-[100px] transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Health Square is a modern dental clinic and pharmacy equipped with
            world-class technology. We ensure premium care, expert consultation,
            and home delivery of medical supplies from{" "}
            <span className="text-[#00A859] font-semibold">7 AM – 11 PM</span>.
          </p>

          <div className="flex space-x-3 mt-auto">
            {[
              { icon: <FaFacebookF />, color: "#1877F2", link: "https://www.facebook.com/healthsquarejaipur" },
              { icon: <FaInstagram />, color: "#E4405F", link: "https://www.instagram.com/healthsquarejaipur/" },
              { icon: <FaWhatsapp />, color: "#25D366", link: "https://wa.me/7403330777" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
                           hover:scale-110 transition-all duration-300"
                style={{ color: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = s.color)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[#00A859]">Contact Info</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-[#00A859] mt-1 flex-shrink-0" />
              <span>
                22, Ground Floor, Biswa Nagar, Opp. Metro Pillar No. 75, New Sanganer Road, Jaipur – 302019
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#00A859]" />
              <span>7403330888 / 7403330777</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-[#00A859]" />
              <span>info@healthsquare.in</span>
            </li>
          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[#00A859]">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Dental Care Services", path: "/dental-care" },
              { name: "Pharmacy", path: "/pharmacy" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="flex items-center gap-2 hover:text-[#00A859] transition-all duration-300"
                >
                  <span className="text-[#00A859]">➜</span> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5 text-[#00A859]">Stay Updated</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter for health tips, offers and updates.
          </p>

          <form className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full bg-white/10 border border-white/20 text-white 
                         placeholder-gray-400 rounded-full px-4 py-2 text-sm 
                         focus:outline-none focus:border-[#00A859]"
            />
            <button
              type="submit"
              className="bg-[#00A859] hover:bg-[#0E76CD] text-white px-5 py-2 rounded-full 
                         text-sm font-semibold transition-all duration-300 hover:scale-105 
                         w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* === Bottom Strip === */}
      <div className="border-t border-white/10 mt-6 py-4 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Health Square — All Rights Reserved | Powered by{" "}
        <Link
          href="https://proactivedigital.in"
          className="text-[#00A859] hover:underline"
        >
          Proactive Digital
        </Link>
      </div>
    </footer>
  );
}
