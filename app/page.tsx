"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plan from "@/components/plan";
import Testimonials from "@/components/testimonials";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import ScalingProgram from "@/components/scaling-program";
import BlogArchieve from "@/components/blog-archieve";
import PayoutProcess from "@/components/payout-process";
import About from "@/components/about";
import FAQSection from "@/components/feature-sec";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoSection from "@/components/logo-section";
import Earn from "@/components/earn";
import OurProviders from "@/components/our-providers";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <main className="">
        <HeroSection />
        <Plan />
        <Earn />
        {/* <Testimonials /> */}
        {/* <Features /> */}
        <HowItWorks />
        {/* <About /> */}
        {/* <PayoutProcess /> */}
        {/* <ScalingProgram /> */}
        {/* <BlogArchieve /> */}
        <OurProviders />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
