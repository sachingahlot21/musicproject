import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {


  
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonialCards/>
    <UpcomingWebinars />
    <Instructors />
    </main>
  );
}
