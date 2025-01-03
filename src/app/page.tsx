"use client"
// import CourseDetailHero from "@/components/customComponents/coursesComponents/courseDetails/CourseDetailsHero";
import Tools from "@/components/customComponents/coursesComponents/Tools"
import Analyst from "@/components/customComponents/coursesComponents/courseDetails/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";


import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";

import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import MentorProfile from "@/components/customComponents/coursesComponents/courseDetails/Mentor";

import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials"
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import CareerTransformation from "@/components/customComponents/coursesComponents/courseDetails/CareerTransformation";
import CourseCurriculumModule from "@/components/customComponents/coursesComponents/CourseModules/CourseModule";

import CompaniesCarousel from "@/components/customComponents/coursesComponents/courseDetails/CompaniesCarousel";
import CourseCarrrerModule from "@/components/customComponents/coursesComponents/courseDetails/carrerSection/Carrer";
import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials";
import JobSkills from "@/components/customComponents/coursesComponents/courseDetails/JobSkills";
import ProgramCohorts from "@/components/customComponents/coursesComponents/ProgramDetails";
import CourseCarousel from "@/components/customComponents/coursesComponents/courseDetails/CourseCarousel";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";

import PlacedStudents from "@/components/customComponents/coursesComponents/courseDetails/PlacedStudents";
import BeginnerToPro from "@/components/customComponents/guaranteedPlacement/BeginnerToPro";
import BecomePlacement from "@/components/customComponents/guaranteedPlacement/BecomePlacement";
import SkillsAndTools from "@/components/customComponents/coursesComponents/skillsAndTools/skillsAndTools";
import Certificates from "@/components/customComponents/Certification/Certification";
// import BeginnerToPro from "@/components/customComponents/guaranteedPlacement/beginnerToPro";
import Hero from "@/components/customComponents/coursesComponents/courseDetails/Hero";
import TopCareerOptions from "@/components/TopCareerOptions/TopCareerOptions";
import FAQSection from "@/components/customComponents/FAQ/Faq";
const CourseDetail = ()=>{
    

    return (
        <>
        <Navbar />
        {/* <CourseDetailHero></CourseDetailHero> */}
        <Hero />
        <CompaniesCarousel/>
     <BeginnerToPro></BeginnerToPro>
<BecomePlacement></BecomePlacement>
        <CareerTransformation />
        <ProgramCohorts></ProgramCohorts>
        <CourseCurriculumModule></CourseCurriculumModule>
        <CourseCarrrerModule ></CourseCarrrerModule>
        <CourseCarousel />
     <Projects></Projects> {/*6 */}
     <MentorProfile></MentorProfile>
     <Analyst></Analyst>
  <TestimonialsSection />
     <PlacedStudents />
     <CoursePricingSection></CoursePricingSection> {/*10 */}
     {/* <Tools></Tools>  */}
        {/* <CertificateDisplay></CertificateDisplay> */}
     <SkillsAndTools></SkillsAndTools>
     <Certificates></Certificates>
     <CourseTestimonials />
        <ProgramHighlights></ProgramHighlights>
        <JobSkills />
     
     <Faq></Faq>
     
     <QueryForm />

     <TopCareerOptions></TopCareerOptions>
     {/* <FAQSection></FAQSection> */}
        <Footer />






        
        
     </>
    )
}

export default CourseDetail;