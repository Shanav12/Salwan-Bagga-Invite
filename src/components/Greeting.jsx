export const Greeting = ({guestName}) => {
    return (
        <section className="bg-ivory border-t border-gold/15 py-20 px-6 text-center">
            <p className="font-prata italic text-[22px] text-[#6b5c3e] mb-3">to</p>
            <p className="font-prata font-normal text-[clamp(28px,6vw,42px)] tracking-wide text-[#2a2118] mb-6">
                {guestName ?? 'Our Dearest Guests'}
            </p>
            <p className="font-prata font-light text-[13px] tracking-[0.18em] text-[#6b5c3e] uppercase mb-3.5">
                Sahil &amp; Ambika&apos;s Wedding
            </p>
            {guestName && (
            <p className="font-prata italic text-base text-[#6b5c3e]">
                We are so excited to celebrate with you.
            </p>
            )}
      </section>
    )
}