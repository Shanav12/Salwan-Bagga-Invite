export const InvitationCard = () => {
    return (
        <section className="relative min-h-svh flex items-center justify-center px-6 py-16 overflow-hidden">
            <div
            className="absolute inset-0"
            style={{
                background: `
                radial-gradient(ellipse at 20% 80%, rgba(139,53,53,0.10) 0%, transparent 55%),
                radial-gradient(ellipse at 80% 10%, rgba(184,151,74,0.08) 0%, transparent 50%),
                linear-gradient(160deg, #f5eaea 0%, #faf0f0 40%, #f0e0e0 100%)
                `,
            }}
            />
            <div
                className="relative z-10 flex flex-col w-full max-w-[420px] px-12 pt-14 pb-13 text-left"
                style={{
                    background: 'linear-gradient(160deg, #fefcf7 0%, #faf6ec 100%)',
                    border: '1px solid rgba(184,151,74,0.25)',
                    boxShadow: '0 4px 6px rgba(74,10,10,0.06), 0 20px 60px rgba(74,10,10,0.14), 0 0 0 1px rgba(255,255,255,0.8) inset',
                }}
                >
                <span className="text-gold text-lg tracking-[0.25em] mb-5">✦</span>

                <h1 className="font-prata italic font-light text-[clamp(52px,12vw,72px)] leading-none tracking-wide text-[#1a0505] mb-5">
                    SAHIL<br />and<br />AMBIKA
                </h1>

                <p className="font-prata font-light text-[10px] tracking-[0.18em] text-[#8B3535] uppercase mb-8">
                    invite you to celebrate their marriage
                </p>

                <div className="w-10 h-px bg-gold mb-7" />

                <p className="font-prata font-normal text-xs tracking-[0.12em] text-[#1a0505] mb-2.5">
                    June 3 – 5, 2027
                </p>

                <p className="font-prata font-light text-[11px] tracking-[0.1em] text-[#8B3535] leading-7 mb-10">
                    Hard Rock Los Cabos<br />
                    Los Cabos, Mexico
                </p>

                <div className="text-right mt-auto">
                    <p className="font-prata font-normal text-[11px] tracking-[0.15em] uppercase text-[#8B3535] mb-1">
                    Please RSVP by
                    </p>
                    <p className="font-serif font-normal text-xl tracking-wide text-gold-dark">
                    January 1st, 2027
                    </p>
                </div>
            </div>
        </section>
    )
}