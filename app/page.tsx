import Plan from "@/components/plan"
import Testimonials from "@/components/testimonials"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import ScalingProgram from "@/components/scaling-program"
import BlogArchieve from "@/components/blog-archieve"
import PayoutProcess from "@/components/payout-process"
import About from "@/components/about"
import FAQSection from "@/components/feature-sec"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import LogoSection from "@/components/logo-section"
export default function Home() {
  return (
    <>
    <main className=" relative z-0">
    <HeroSection />
    <Plan />
    <Testimonials />
    <Features />
    <HowItWorks />
    <PayoutProcess />
    <ScalingProgram />
    <BlogArchieve />
    <About />
    <FAQSection />
    <CTASection />
    </main>
    </>
  )
}