import Image from "next/image";
import Seo from '@/src/components/seo'
import SectionOne from '@/src/components/pharmacy/sectionone'
import SectionTwo from '@/src/components/pharmacy/sectiontwo'
import WhyChooseUs from '@/src/components/pharmacy/whychoose'
import QuestionsSection from '@/src/components/pharmacy/anymoresection'
import HealthSquareFacilities from "@/src/components/contactus/healthsquarefacilities"
import PharmaFaq from '@/src/components/pharmacy/faqsection'




export default function Pharmacy() {
  return (
      <>
      <Seo
        title="Pharmacy | Dental Clinic in Jaipur | Health Square"
        description="Your one-stop dental clinic in Jaipur for comprehensive dental care and pharmacy needs. Visit our modern clinic today!"/>
       <main>
     <SectionOne/>
     <SectionTwo/>  
     <WhyChooseUs/>  
     <QuestionsSection/>  
     <HealthSquareFacilities/>  
     <PharmaFaq/>

      
      
    </main>
     </>
  );
}
