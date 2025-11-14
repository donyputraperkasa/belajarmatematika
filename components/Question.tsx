"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Bagaimana kualifikasi tutornya?",
        answer:
        "Tutor kami memiliki kualifikasi yang terjamin dengan pengalaman mengajar yang luas dan latar belakang pendidikan yang relevan.",
    },
    {
        question: "Bagaimana cara untuk daftar?",
        answer:
        "Anda dapat mendaftar melalui website kami dengan mengisi formulir pendaftaran yang tersedia.",
    },
    {
        question: "Apakah les bisa di kantor Belajar Matematika?",
        answer:
        "Ya, kami menyediakan opsi les di kantor Belajar Matematika sesuai dengan kebutuhan Anda.",
    },
    {
        question: "Apakah saya bisa menentukan jadwal les?",
        answer:
        "Tentu, Anda dapat menentukan jadwal les yang sesuai dengan waktu luang Anda bersama tutor.",
    },
    {
        question: "Kapan saya bisa dapat tutor?",
        answer:
        "Setelah pendaftaran dan konfirmasi, kami akan menghubungkan Anda dengan tutor dalam waktu 1-3 hari kerja.",
    },
];

const Question = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Pertanyaan yang Sering Diajukan
        </h2>
        <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
                <div
                key={index}
                className="cursor-pointer"
                onClick={() => toggleIndex(index)}
                >
                <div
                    className={`flex justify-between items-center px-6 py-4 transition-colors duration-300 ${
                    isOpen ? "bg-blue-50" : "hover:bg-gray-100"
                    }`}
                >
                    <h3 className="text-gray-700 font-medium text-lg">{faq.question}</h3>
                    <span className="text-blue-500 text-2xl select-none">
                    {isOpen ? "–" : "+"}
                    </span>
                </div>
                <div
                    className={`px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-96 py-4" : "max-h-0"
                    } text-gray-600 text-sm`}
                >
                    {isOpen && <p>{faq.answer}</p>}
                </div>
                </div>
            );
            })}
        </div>
        </div>
    );
};

export default Question;
