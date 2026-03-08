import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsGallery from "@/components/home/ProjectsGallery";
import QuickEnquiry from "@/components/home/QuickEnquiry";
import CostEstimator from "@/components/home/CostEstimator";
import BeforeAfter from "@/components/home/BeforeAfter";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <ProjectsGallery />
      <CostEstimator />
      <QuickEnquiry />
    </>
  );
}
