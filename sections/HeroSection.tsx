import WhatsappButton from "@/components/WhatsappButton";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col items-center justify-center text-center py-28 px-4 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/dony2.png')" }}
        >
            {/* Overlay gelap agar teks kontras */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                        Les Private Matematika SMP & SMA
                    </h1>
                </div>

                <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg leading-relaxed drop-shadow-md">
                    Belajar jadi lebih mudah dan menyenangkan bersama{" "}
                    <span className="font-semibold text-amber-300">guru privat berpengalaman </span>
                    di Kasihan, Bantul & Yogyakarta
                </p>

                <div className="animate-bounce-slow">
                    <WhatsappButton />
                </div>
            </div>
        </section>
    );
}