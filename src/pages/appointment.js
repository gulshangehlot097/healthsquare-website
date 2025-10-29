"use client";

import Image from "next/image";
import Seo from "@/src/components/seo";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CallApi } from "@/src/api";
import constant from "@/src/env";
import { showSuccess, showError } from "@/src/components/toaster";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function About() {
    const [otpVisible, setOtpVisible] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState("");




  
const [captcha, setCaptcha] = useState("");
const [userCaptcha, setUserCaptcha] = useState("");


useEffect(() => {
  generateCaptcha();
}, []);

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomStr = "";
  for (let i = 0; i < 5; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  setCaptcha(randomStr);
};
  const { register, handleSubmit, watch, setError, clearErrors, reset } =
    useForm();
  const mobile = watch("mobile");

  useEffect(() => {
    let interval;
    if (timer > 0)
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = async () => {
    if (!mobile || mobile.length !== 10) {
      setError("mobile", {
        message: "Please enter valid 10-digit mobile number.",
      });
      return showError("Please enter a valid 10-digit mobile number.");
    }
    try {
      setLoading(true);
      const res = await CallApi(constant.API.USER.SENDOTP, "POST", { mobile });
      if (res?.status || res?.message) {
        setOtp("");
        setOtpVisible(true);
        setTimer(30);
        showSuccess(res.message || "OTP sent successfully!");
      } else showError(res.message || "Failed to send OTP.");
    } catch (err) {
      showError(err.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };





  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6)
      return showError("Please enter a valid 6-digit OTP.");
    try {
      setLoading(true);
      const res = await CallApi(constant.API.USER.VERIFYOTP, "POST", {
        mobile,
        otp,
      });
      if (res?.verified || res?.status) {
        setOtpVerified(true);
        setOtpVisible(false);
        showSuccess("OTP verified successfully!");
        clearErrors("otp");
      } else showError("Invalid OTP. Try again.");
    } catch (err) {
      showError(err.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {

     if (userCaptcha.toUpperCase() !== captcha) {
    showError("Invalid CAPTCHA. Please try again.");
    generateCaptcha();
    return;
  }
    if (!otpVerified)
      return showError("Please verify your mobile number first.");
    try {
      setLoading(true);
      const res = await CallApi(constant.API.USER.USERINQUIRE, "POST", data);
      showSuccess(res.message || "Inquiry submitted successfully!");
      reset();
      setOtp("");
      setOtpVisible(false);
      setOtpVerified(false);
      setTimer(0);
    } catch (err) {
      showError(err.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormError = (formErrors) => {
    const firstErrorKey = Object.keys(formErrors)[0];
    if (firstErrorKey) {
      const message =
        formErrors[firstErrorKey]?.message ||
        "Please fill all required fields correctly.";
      showError(message);
    }
  };


  return (
    <>
      <Seo
        title="About Health Square | Dental Clinic, Pharmacy & Wellness Center in Jaipur"
        description="Discover Health Square — Jaipur’s trusted dental clinic, pharmacy, and wellness hub offering expert dental care, quality medicines, and convenient home delivery. Book your appointment today!"
        keywords="Health Square Jaipur, dental clinic Jaipur, pharmacy Jaipur, dentist appointment Jaipur, wellness center, oral care, medicine home delivery"
      />

      <main>
        <section className="relative w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-[#E6F6FF] via-[#F9FBFF] to-[#FFFFFF] py-12 sm:py-16 md:py-20">
          {/* Decorative background blobs */}
          <div className="absolute -top-10 -left-10 w-56 sm:w-72 h-56 sm:h-72 bg-[#0070C9]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#00A6FB]/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 flex flex-col lg:flex-row items-stretch relative z-10 gap-6 sm:gap-8 lg:gap-0">
  
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl lg:rounded-l-3xl lg:rounded-r-none p-5 sm:p-8 md:p-10 border border-gray-100"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0070C9] mb-4">
                Book Your Appointment
              </h1>
              <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-[17px] leading-relaxed">
                Experience world-class dental care and pharmacy services under one roof.
                Book your appointment today and take the first step towards a healthier,
                more confident smile.
              </p>

             <form
            onSubmit={handleSubmit(onSubmit, handleFormError)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <input
              type="text"
              placeholder="Name *"
              {...register("name", { required: "Name is required" })}
              className="inputcls"
            />
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="inputcls"
            />

            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
               
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter Mobile Number"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid 10-digit mobile number",
                      },
                    })}
                    readOnly={otpVerified}
                    className="flex-1 inputcls"
                  />
                  {!otpVerified && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={mobile?.length !== 10 || loading || timer > 0}
                      className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#0E76CD] text-white text-sm font-medium shadow-md ${
                        mobile?.length === 10 && timer === 0
                          ? "hover:scale-105 transition"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {timer > 0 ? `Resend` : "Send OTP"}
                    </button>
                  )}
                </div>
                {!otpVerified && timer > 0 && (
                  <p className="text-xs sm:text-sm text-red-600 mt-1">
                    You can resend OTP in 00:{timer.toString().padStart(2, "0")}
                  </p>
                )}
              </div>

              {/* OTP or Department */}
              {!otpVisible ? (
                <>
                <div className="flex flex-col gap-2">
                  <select
                    {...register("department", {
                      required: "Please select a department",
                    })}
                    className="inputcls"
                  >
                    <option value="">Select Department</option>
                    <option value="dentalcare">DENTAL CARE</option>
                    <option value="pharmacy">PHARMACY</option>
                  </select>
                </div>
                 <div className="flex flex-col gap-2 mt-3">
                    
                   
                    <input
                  type="date"
                  {...register("date", {
  required: "Date is required",
  validate: (value) => {
    const today = new Date();
    const selected = new Date(value);
    today.setHours(0, 0, 0, 0);
    return selected >= today || "Please select today or a future date.";
  },
})}
              className="inputcls"
                />
                  </div>
                </>
              ) : (
                <>
                  {/* OTP verify field */}
                  <div className="flex flex-col gap-2">
                   
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <input
                        type="tel"
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, ""))
                        }
                        className="flex-1 inputcls"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otp.length !== 6 || loading}
                        className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full text-white text-sm font-medium shadow-md ${
                          otp.length === 6
                            ? "bg-[#0E76CD] hover:scale-105 transition"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {loading ? "Verifying..." : "Verify OTP"}
                      </button>
                    </div>
                  </div>

                  {/* Department below on small screens */}
                  <div className="flex flex-col gap-2 mt-3">
                    
                    <select
                      {...register("department", {
                        required: "Please select a department",
                      })}
                     
                      className="border border-gray-300 rounded-xl px-3 py-2 sm:py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0070C9]"
                    >
                      <option value="">Select Department</option>
                    <option value="dentalcare">DENTAL CARE</option>
                    <option value="pharmacy">PHARMACY</option>
                    </select>
                  
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    
                   
                    <input
                  type="date"
                   {...register("date", {
  required: "Date is required",
  validate: (value) => {
    const today = new Date();
    const selected = new Date(value);
    today.setHours(0, 0, 0, 0);
    return selected >= today || "Please select today or a future date.";
  },
})}
              className="inputcls"
                />
                  </div>
                </>
              )}
            </div>

            {/* Message */}
            <textarea
              placeholder="How can we help?"
              rows="4"
              {...register("message")}
              className="w-full sm:col-span-2 bg-white/70 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 inputcls"
            ></textarea>

              {/* CAPTCHA Section */}
<div className="sm:col-span-2 flex flex-col gap-2 mt-2">
  {/* Captcha Row */}
  <div className="flex items-center gap-3">
    {/* Captcha Box (1/4 width) */}
    <div className="w-1/4 px-4 py-2 bg-gray-100 text-lg font-semibold tracking-widest rounded-lg border border-gray-300 text-center select-none">
      {captcha}
    </div>

    {/* Captcha Input (3/4 width) */}
    <div className="w-3/4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Enter CAPTCHA"
        value={userCaptcha}
        onChange={(e) => setUserCaptcha(e.target.value.toUpperCase())}
        className="inputcls w-full"
      />
      <button
        type="button"
        onClick={generateCaptcha}
        className="text-[#0070C9] text-sm font-medium underline  cursor-pointer hover:text-[#005fa3]"
      >
        Refresh
      </button>
    </div>
  </div>
</div>




            {/* Terms */}
<label className="flex items-center gap-2 sm:col-span-2 mt-2 cursor-pointer select-none">
  <input
    type="checkbox"
    {...register("terms", {
      required: "Accept Terms & Conditions",
    })}
    className="w-4 h-4 accent-[#04A868] cursor-pointer"
  />

  <span className="text-gray-600 text-sm">
    I agree to all{" "}
    <Link
      href="/tnc"
      target="_blank"
      className="text-[#0070C9] underline hover:text-[#005fa3] transition-colors"
    >
      Terms and Conditions
    </Link>.
  </span>
</label>


            {/* Submit */}
            <div className="text-center sm:text-start">
                  <button
                    type="submit"
                    className="relative overflow-hidden bg-[#0072CE] text-white font-semibold py-3 px-10 rounded-full shadow-md transition-all duration-500 ease-in-out group w-full sm:w-auto"
                  >
                    <span className="relative z-10 transition-colors duration-500 ease-in-out">
                     {loading ? "Submitting..." : "SUBMIT FORM"}
                    </span>
                    <span className="absolute inset-0 bg-[#00B388] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  </button>
                </div>
          </form>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative flex-1 w-full"
            >
              <div className="relative h-52 sm:h-72 md:h-[520px] lg:h-full rounded-2xl lg:rounded-r-3xl lg:rounded-l-none overflow-hidden shadow-2xl">
                <Image
                  src="/images/appointment/appointment-01.png"
                  alt="Health Square Dental Clinic and Pharmacy Jaipur"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Info Box */}
              <div
                className="
                md:absolute md:bottom-0 md:right-0
                w-full md:w-[85%] lg:w-[70%]
                bg-white/95 backdrop-blur-md border border-[#E0F2FF]
                rounded-2xl md:rounded-tl-3xl shadow-2xl
                p-5 sm:p-6 md:p-8
                mt-4 md:mt-0
              "
              >
                <h2 className="text-[#0070C9] font-bold text-lg md:text-xl mb-4 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#0070C9] rounded-full"></span>
                  Visit Us Anytime
                </h2>

                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#0070C9] text-lg mt-[2px]" />
                    <p>22, Ground Floor, Biswa Nagar, Opp. Metro Pillar No. 75, Jaipur</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#0070C9] text-lg" />
                    <p>7403330888, 7403330777</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-[#0070C9] text-lg" />
                    <p>info@healthsquare.in</p>
                  </li>
                </ul>

                <div className="mt-6 border-t border-[#E3EAF5] pt-4">
                  <h3 className="text-[#0070C9] font-semibold mb-2 flex items-center gap-2">
                    <FaClock className="text-[#0070C9] text-lg" />
                    Working Hours
                  </h3>
                  <ul className="text-sm sm:text-base text-gray-700 space-y-1">
                    <li className="flex justify-between">
                      <span>Pharmacy</span>
                      <span className="font-medium">7 AM – 11 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Home Delivery</span>
                      <span className="font-medium">7 AM – 11 PM</span>
                    </li>
                    <li className="flex justify-between border-t border-gray-200 pt-2">
                      <span>Sunday</span>
                      <span className="font-medium">11 AM – 4 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
