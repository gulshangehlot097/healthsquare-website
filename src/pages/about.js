import Image from "next/image";
import Seo from '@/src/components/seo'
import FirstAbout from '@/src/components/about/aboutfirstsection'
import SectionTwo from '@/src/components/about/sectiontwo'
import SectionThree from '@/src/components/about/sectionthree'
import AppointmentSection from "@/src/components/about/appointmentsection"
import WhyChoose from "@/src/components/about/whychoosesecond"
import AboutFaq from "@/src/components/about/faqsection"

export default function About() {
  return (
    <>
      <Seo
        title="About Health Square | Dental Clinic & Pharmacy in Jaipur"
        description="Learn about Health Square, a modern dental clinic and pharmacy in Jaipur. Discover our mission, expert dental services, pharmacy offerings, and commitment to premium care."
        />
      <main>
        <FirstAbout/>
        <SectionTwo/>
        <SectionThree/>
        <WhyChoose/>
        <AppointmentSection/>  
        <AboutFaq/>
      </main>
    </>
  );
}
