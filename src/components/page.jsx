"use client"

import React from "react";
import FAQ from "../component/FAQ";
import Image from "next/image";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit your dentist every six months for a routine checkup and cleaning.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "If you have a dental emergency, contact your dentist immediately. If it’s severe, seek emergency medical care.",
  },
  {
    question: "Do you offer services for kids?",
    answer:
      "Yes, we offer a full range of dental services for children including cleanings, sealants, and fluoride treatments.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "If you have a dental emergency, contact your dentist immediately. If it’s severe, seek emergency medical care.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit your dentist every six months for a routine checkup and cleaning.",
  },
];

const ExamplePage = () => {
  return (
    <div className="px-4 md:px-16 py-10">
      <div className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions (FAQs)
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* FAQ Section */}
        <div className="w-full md:w-2/3">
          <div className="max-w-2xl mx-auto px-2 md:px-0">
            <FAQ faqs={faqData} />
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/smile.png"
            alt="Smile"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ExamplePage;




