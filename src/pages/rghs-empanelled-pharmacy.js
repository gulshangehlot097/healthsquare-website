import Image from "next/image";
import Seo from '@/src/components/seo'
import SectionOne from "@/src/components/rghsempanelled/sectionone"
import SectionTwo from "@/src/components/rghsempanelled/sectiontwo"
import RghsFaq from "@/src/components/rghsempanelled/rghsfaq"


export default function Rghs() {
  return (
      <>
      <Seo
        title="RGHS Empanelled Clinic & Pharmacy in Jaipur | Health Square"
        description="Health Square is an RGHS-empanelled dental clinic and pharmacy in Jaipur providing cashless treatment, authentic medicines, and trusted healthcare."/>
       <main>
      <SectionOne/>
      <SectionTwo/>
        <RghsFaq/>
    
      
      
    </main>
     </>
  );
}
