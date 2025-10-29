import Image from "next/image";
import Seo from '@/src/components/seo'
import ContactForm from "@/src/components/contactus/formsection"
import HealthSquareFacilities from "@/src/components/contactus/healthsquarefacilities"


export default function Contact() {
  return (
      <>
      <Seo
        title="Pharmacy | Dental Clinic in Jaipur | Health Square"
        description="Your one-stop dental clinic in Jaipur for comprehensive dental care and pharmacy needs. Visit our modern clinic today!"/>
       <main>
      <ContactForm/>
      <HealthSquareFacilities/>
      
      
    </main>
     </>
  );
}