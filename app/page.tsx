import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import HowItWorks from "@/components/HowItWorks";
import TravelPlans from "@/components/TravelPlans";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Destinations />
        <HowItWorks />
        <TravelPlans />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
