import { Promo } from "@/types/Promo"
import Invoice from "./Invoice"

interface PromoModalProps {
    selectedPromo: Promo | null
    onClose: () => void
}

export default function PromoModal({
    selectedPromo,
    onClose,
}: PromoModalProps) {
    if (!selectedPromo) return null

    return (
        <div
        className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
        >
        <div
            className="w-full max-w-lg px-4"
            onClick={(e) => e.stopPropagation()}
        >
            {/* ✅ INVOICE DI LUAR MODAL VISUAL */}
            <Invoice promo={selectedPromo} />

            {/* ✅ ACTION BUTTON */}
            <div className="mt-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg flex gap-3">
            <a
                href={`https://wa.me/6282236343404?text=Halo,%20saya%20ingin%20mendaftar%20${encodeURIComponent(
                selectedPromo.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-5 py-3 rounded-xl font-semibold bg-green-500 hover:bg-green-600 text-white transition-all"
            >
                Lanjut ke WhatsApp
            </a>

            <button
            onClick={() => window.print()}
            className="print-hidden flex-1 px-5 py-3 rounded-xl font-mono text-sm border border-dashed bg-red-300 text-white hover:bg-red-400"
            >
            Export PDF
            </button>

            <button
                onClick={onClose}
                className="flex-1 px-5 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-300 transition-all"
            >
                Tutup
            </button>
            </div>
        </div>
        </div>
    )
}
