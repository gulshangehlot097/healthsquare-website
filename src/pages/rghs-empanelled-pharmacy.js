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
        description="Health Square is an RGHS empanelled dental clinic and pharmacy in Jaipur. We offer cashless treatment for RGHS beneficiaries, advanced dental care, and trusted pharmacy services under one roof."/>
       <main>
      <SectionOne/>
      <SectionTwo/>
        <RghsFaq/>
    
      
      
    </main>
     </>
  );
}
