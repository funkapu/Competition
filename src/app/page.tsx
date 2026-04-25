import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingDestinations from "@/components/TrendingDestinations";
import PromotionalBanner from "@/components/PromotionalBanner";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />
      <main className="max-w-[1280px] mx-auto w-full pt-[65px]">
        <HeroSection />
        <WhyChooseUs />
        <TrendingDestinations />
        <PromotionalBanner />
        <NewsletterSection />
      </main>
      <div style={{ marginTop: "178px" }}>
        <Footer />
      </div>
    </div>
  );
}
