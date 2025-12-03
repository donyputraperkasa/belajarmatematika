import { Promo } from "@/types/Promo"

interface InvoiceProps {
    promo: Promo
}

export default function Invoice({ promo }: InvoiceProps) {
    return (
        <div
            id="invoice-content"
            className="bg-white p-8 max-w-xl mx-auto font-mono text-gray-800"
        >
            <div className="border-b border-dashed pb-3 mb-4">
                <h2 className="text-lg font-semibold tracking-wide">
                INVOICE PEMBAYARAN
                </h2>
                <p className="text-xs text-gray-400">
                #{promo.id ?? "INV-001"}
                </p>
            </div>

            <div className="text-xs text-gray-500 font-mono mb-4 space-y-1">
                <div>
                    Tanggal booked:{" "}
                    {new Date().toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    })}
                </div>
                <div>Metode pembayaran: Transfer</div>
            </div>
            
            <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                    <span>Program</span>
                    <span>{promo.title}</span>
                </div>
                <div className="flex justify-between">
                    <span>Jenjang</span>
                    <span>{promo.level}</span>
                </div>
                <div className="flex justify-between">
                    <span>Mata Pelajaran</span>
                    <span>Matematika</span>
                </div>
                <div className="flex justify-between">
                    <span>Rombel</span>
                    <span>maksimal 3 student</span>
                </div>
            </div>


            <div className="text-xs font-mono text-gray-600 mb-5 border-t border-dashed pt-3">
                <div className="flex justify-between">
                    <span>Bank Tujuan</span>
                    <span>BCA</span>
                </div>
                <div className="flex justify-between">
                    <span>Nomor Rekening</span>
                    <span>0374555339</span>
                </div>
                <div className="flex justify-between">
                    <span>Atas Nama</span>
                    <span>ALBERTUS MAGNUS DONY PUTRA PERKASA</span>
                </div>
            </div>


            <div className="border-t border-dashed pt-3 flex justify-between">
                <span className="uppercase text-xs">Total</span>
                <span className="text-xl font-bold text-blue-700">
                {promo.price}
                </span>
            </div>

            <div>
                <p className="text-xs text-gray-400 mt-4">
                    Terima kasih atas pembayaran Anda 
                </p>
                <p className="text-xs text-blue-700 mt-2">
                    belajarmatematika
                </p>
            </div>
        </div>
    )
}