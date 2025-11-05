import HeroSection from "@/sections/HeroSection";
import ScheduleSection from "@/sections/ScheduleSection";
import PromoSection from "@/sections/PromoSection";
import AboutSection from "@/sections/AboutSection";
import ProgramSection from "@/sections/ProgramSection";
import ReviewSection from "@/sections/ReviewSection";
import TipsSection from "@/sections/TipsSection";
import CTASection from "@/sections/CTASection";

export default function HomePage() {
  return (
      <main
        className="relative bg-cover bg-center bg-fixed text-gray-800"
        style={{
          backgroundImage: "url('/dony1.png')",
        }}
      >
      {/* Overlay transparan agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* Efek gradient transparan di atas konten utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40 pointer-events-none" />

      {/* Konten utama */}
      <div className="relative z-10 ">
        <HeroSection />
        <div className="" />
        <ScheduleSection />
        <div className="" />
        <PromoSection />
        <div className="" />
        <AboutSection />
        <div className="" />
        <ProgramSection />
        <div className="" />
        <ReviewSection />
        <div className="" />
        <TipsSection />
        <div className="" />
        <CTASection />
      </div>
    </main>
  );
}