export interface Promo {
    title: string
    desc: string
    price: string
    id?: string

    level: "SMP" | "SMA" | string

    bookedDate: string
}