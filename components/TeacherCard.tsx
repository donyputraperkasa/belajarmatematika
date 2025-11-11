"use client";
import Image from "next/image";

interface TeacherCardProps {
    name: string;
    university: string;
    domicile: string;
    experience: string;
    description: string;
    image?: string;
    bgColor: string;
}

export default function TeacherCard({
    name,
    university,
    domicile,
    experience,
    description,
    image,
    bgColor,
    }: TeacherCardProps) {
    const imagePath = `/${image || "dony1.png"}`;

    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full flex justify-center" style={{ backgroundColor: bgColor }}>
            <Image
            src={imagePath}
            alt={name || "Teacher photo"}
            width={200}
            height={200}
            className="rounded-full object-cover mt-6 shadow-md"
            />
        </div>
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-1">{name}</h2>
            <p className="text-[#8B0000] font-medium mb-1">{university}</p>
            <p className="text-gray-600 mb-2">{domicile}</p>
            <p className="text-sm text-gray-500 mb-3">{experience}</p>
            <p className="text-gray-400">{description}</p>
        </div>
        </div>
    );
}