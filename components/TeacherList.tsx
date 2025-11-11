import TeacherCard from "./TeacherCard";

export default function TeacherList() {
    const teachers = [
        {
        name: "Dony Putra Perkasa (owner)",
        university: "Universitas Sanata Dharma + REVOU",
        domicile: "Bantul",
        experience: "10 tahun mengajar matematika SD–SMA",
        description: "Mengajar dengan pendekatan logis dan menyenangkan agar siswa memahami konsep dengan baik.",
        image: "dony1.png",
        bgColor: "#8B0000",
        },
        {
        name: "Dhani Meilindra Suwarni",
        university: "Universitas Islam Negeri Sunan Kalijaga",
        domicile: "Bantul",
        experience: "7 tahun mengajar fisika dan matematika",
        description: "Mengajarkan konsep sains dengan logika dan contoh kehidupan nyata.",
        image: "dony1.png",
        bgColor: "#FF8C00",
        },
        {
        name: "Aurelia Dina Pratiwi",
        university: "Universitas Sanata Dharma",
        domicile: "Yogyakarta",
        experience: "4 tahun mengajar Bahasa Inggris",
        description: "Membantu siswa menguasai grammar dan speaking dengan metode interaktif.",
        image: "dony1.png",
        bgColor: "#800000",
        },
    ];

    return (
        <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold mb-4 text-[#8B0000]">
            Super Teacher Berkualitas
            </h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Siap membimbing belajarmu dengan metode yang menyenangkan dan efektif!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {teachers.map((teacher) => (
                <TeacherCard key={teacher.name} {...teacher} />
            ))}
            </div>
        </div>
        </section>
    );
}