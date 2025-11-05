import { Percent, BookOpen, Users, Laptop, Sparkles, Star } from "lucide-react";

export default function PromoSection() {
    const promos = [
        {
        title: "Paket 4x / Bulan",
        price: "Rp400.000",
        desc: "Kelas maksimal 3 orang, belajar efektif dan interaktif.",
        icon: Users,
        color: "orange",
        bgColor: "bg-orange-50",
        buttonColor: "bg-orange-500 hover:bg-orange-600",
        },
        {
        title: "Paket 8x / Bulan",
        price: "Rp700.000",
        desc: "Lebih sering belajar dengan maksimal 3 peserta per kelas.",
        icon: Sparkles,
        color: "emerald",
        bgColor: "bg-emerald-50",
        buttonColor: "bg-emerald-500 hover:bg-emerald-600",
        },
        {
        title: "Paket 4x / Bulan (Online)",
        price: "Rp300.000",
        desc: "Belajar online dengan maksimal 3 siswa per sesi.",
        icon: Laptop,
        color: "sky",
        bgColor: "bg-sky-50",
        buttonColor: "bg-sky-500 hover:bg-sky-600",
        },
        {
        title: "Paket 8x / Bulan (Online)",
        price: "Rp600.000",
        desc: "Sesi online intensif dengan maksimal 3 peserta.",
        icon: BookOpen,
        color: "violet",
        bgColor: "bg-violet-50",
        buttonColor: "bg-violet-500 hover:bg-violet-600",
        },
        {
        title: "Paket 4x / Bulan One-on-One",
        price: "Rp250.000",
        desc: "Kelas privat personal, online atau offline.",
        icon: Star,
        color: "amber",
        bgColor: "bg-amber-50",
        buttonColor: "bg-amber-500 hover:bg-amber-600",
        },
    ];

    return (
        <section className="py-20 bg-transparent backdrop-blur-[1px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-10">
            <Percent className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">✨ Pilih Paket Les Terbaikmu ✨</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {promos.map((promo, i) => {
                const Icon = promo.icon;
                return (
                <div
                key={i}
                className={`${promo.bgColor} border border-${promo.color}-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-${promo.color}-600 p-6 flex flex-col justify-between transition-all duration-300 flex-shrink-0 snap-center w-80 border-t-4 border-${promo.color}-400 hover:-translate-y-1`}
                >
                <div>
                    <Icon className={`w-10 h-10 text-${promo.color}-500 mx-auto mb-3`} />
                    <h3 className={`text-xl font-semibold text-${promo.color}-600 mb-2`}>
                    {promo.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{promo.desc}</p>
                </div>
                <div>
                    <p className={`text-2xl font-bold text-${promo.color}-700 mb-4`}>
                    {promo.price}
                    </p>
                    <a
                    href="https://wa.me/6282236343404?text=Halo%2C%20saya%20ingin%20daftar%20paket%20les%20privat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${promo.buttonColor} text-white font-bold px-5 py-2 rounded-lg transition`}
                    >
                    Booking Sekarang
                    </a>
                </div>
                </div>
                )
            })}
            </div>
        </div>
        </section>
    );
}