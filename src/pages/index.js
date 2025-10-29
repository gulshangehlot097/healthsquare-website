import Image from "next/image";
import Seo from '@/src/components/seo'
import HeroSection from "@/src/components/home/herosection"
import HeroTwo from "@/src/components/home/herotwo"
import ServicesSection from "@/src/components/home/servicessection"
import StoreTimings from "@/src/components/home/stortime"
import HealthServicesSection from "@/src/components/home/healthservices"
import DentalSpecialist from "@/src/components/home/dentalspecialist"
import AppointmentBanner from "@/src/components/home/appointmentbanner"
import DentalServices from "@/src/components/home/dentalservices"


export default function Home() {
  return (
      <>
      <Seo
        title="Pharmacy | Dental Clinic in Jaipur | Health Square"
        description="Your one-stop dental clinic in Jaipur for comprehensive dental care and pharmacy needs. Visit our modern clinic today!"/>
       <main>
            <HeroTwo/>
      {/* <HeroSection/> */}

      <ServicesSection/>
        <StoreTimings/>
        <HealthServicesSection/>
        <DentalServices/>
      <AppointmentBanner/>
      <DentalSpecialist/>
      
      
    </main>
     </>
  );
}
