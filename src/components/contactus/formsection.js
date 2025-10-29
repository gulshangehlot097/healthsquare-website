"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CallApi } from "@/src/api";
import constant from "@/src/env";
import { showSuccess, showError } from "@/src/components/toaster";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiPhone,
  HiClock,
  HiHome,
  HiOfficeBuilding,
} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
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
    <section className="w-full bg-gradient-to-b from-[#e0f0ff] to-[#ffffff] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#0070C9]/20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-start gap-8 md:gap-12 relative z-10">
        {/* RIGHT SIDE FORM */}
        <div className="w-full lg:w-[60%] bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0070C9] mb-4 text-center lg:text-left">
            HEALTH SQUARE
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 text-center lg:text-left">
            Health Square Jaipur is a dental clinic cum pharmacy. Get 360°
            dental care and all your Medicines &amp; Health Care Products in one
            place!
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
                    onChange={(e) =>
                      setUserCaptcha(e.target.value.toUpperCase())
                    }
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
                <Link href="/tnc"><span className="text-[#0070C9] underline">
                  Terms and Conditions
                </span></Link>
                .
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
        </div>

        {/* LEFT SIDE IMAGE + DETAILS */}
        {/* LEFT SIDE (same look, fully responsive) */}
        <div className="flex-1 relative w-full md:w-[45%]">
          {/* Image fills parent */}
          <div className="absolute top-0 left-0 w-full h-[400px] sm:h-[450px] md:h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/appointment.jpg"
              alt="Contact Illustration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0070C9]/40 via-transparent to-transparent"></div>
          </div>

          {/* Info Card overlays image on large, stacks below on small */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 mt-[340px] sm:mt-[420px] md:mt-0 shadow-xl flex flex-col gap-6 z-20">
            <h3 className="font-bold text-[#0070C9] text-lg flex items-center gap-2">
              <HiOfficeBuilding className="text-xl animate-bounce" /> General
              Enquiries
            </h3>
            <p className="flex items-center gap-3 text-sm sm:text-base">
              <HiPhone className="text-[#0070C9]" /> 7403330888, 7403330777
            </p>
            <p className="flex items-center gap-3 text-sm sm:text-base">
              <HiOutlineMail className="text-[#0070C9]" /> info@healthsquare.in
            </p>
           <p className="flex items-start gap-3 text-sm sm:text-base">
  <HiOutlineLocationMarker className="text-[#0070C9] text-3xl mt-[2px]" />
  22, Ground Floor, Biswa Nagar, Opp. Metro Pillar No. 75, New
  Sanganer Road, Jaipur – 302019
</p>


            <div className="border-t border-blue-200 pt-3"></div>

            <h3 className="font-bold text-[#0070C9] text-lg flex items-center gap-2 mt-2">
              <HiClock className="text-xl animate-pulse" /> Timings
            </h3>
            <div className="space-y-1 text-gray-700 text-sm sm:text-base">
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <p className="flex items-center gap-2 text-black">
                  <HiOfficeBuilding className="text-[#0070C9]" /> Pharmacy
                </p>
                <p>7 AM – 11 PM</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <p className="flex items-center gap-2">
                  <HiHome className="text-[#0070C9]" /> Home Delivery
                </p>
                <p>7 AM – 11 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-2">
                  <HiClock className="text-[#0070C9]" /> Sunday
                </p>
                <p>11 AM – 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
