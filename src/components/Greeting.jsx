import { useEffect, useState } from "react"



export const Greeting = ({ guestName }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(t)
    }, [])

    return (
        <section
            className="relative py-14 px-6 text-center overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(184,151,74,0.10) 0%, transparent 80%)",
                }}
            />

            <p className="font-prata text-[12px] uppercase tracking-[0.25em] opacity-70 mb-4">
                <strong>To</strong>
            </p>

            <p
                className="font-prata italic font-normal text-[clamp(24px,7vw,48px)] tracking-wide text-gold-dark transition-all duration-1000 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(18px)",
                    textShadow: visible
                        ? "0 0 22px rgba(184,151,74,0.45), 0 2px 8px rgba(140,110,47,0.18)"
                        : "none",
                }}
            >
                {guestName ?? "Our Dearest Guests"}
            </p>

        </section>
    )
}
