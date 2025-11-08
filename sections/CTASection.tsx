import React from "react";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-transparent backdrop-blur-[1px] relative overflow-hidden text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md animate-fade-in">
                    Siap Belajar Bersama?
                </h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto animate-fade-in delay-100 drop-shadow-md">
                    Jadikan belajar matematika lebih mudah dan menyenangkan bersama{" "}
                    <span className="font-semibold">guru privat berpengalaman</span>.
                </p>
                <a
                    href="https://wa.me/6282236343404?text=Halo%20kak%2C%20saya%20ingin%20booking%20les%20privat%20matematika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-100 transition-transform transform hover:scale-105 animate-bounce-slow"
                >
                    <MessageCircle className="w-5 h-5" />
                    Booking via WhatsApp
                </a>

                {/* Tombol Bagikan */}
                <div className="mt-8 text-center animate-fade-in delay-200">
                  <p className="text-white/90 mb-3 text-sm">Bagikan ke teman atau orang tua 📤</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="https://api.whatsapp.com/send?text=Cek%20les%20privat%20matematika%20di%20https://math-lesson-two.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-xs transition"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://math-lesson-two.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-xs transition"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://t.me/share/url?url=https://math-lesson-two.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-full text-xs transition"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
            </div>
        </section>
    );
}
