import { BookOpen } from "lucide-react";

export default function ProgramPage() {
    const programs = [
        {
        title: "Les Privat",
        desc: "Program pembelajaran one-on-one untuk setiap jenjang pendidikan.",
        levels: ["SD", "SMP", "SMA/K"],
        },
        {
        title: "Les Reguler",
        desc: "Kelas kelompok kecil dengan fokus pada pemahaman konsep dasar dan latihan soal.",
        levels: ["SD", "SMP", "SMA/K"],
        },
    ];

    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-orange-700">Program Les Matematika</h1>
            </div>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan kebutuhan belajar kamu. Setiap jenjang disusun dengan metode interaktif dan menyenangkan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-400 bg-white p-6 transition-all"
                >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.desc}</p>
                <ul className="text-gray-700">
                    {program.levels.map((level, j) => (
                    <li key={j} className="py-1">
                        • {level}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}