export const Greeting = ({guestName}) => {
    return (
        <section className="border-t border-gold/15 py-20 px-6 text-center">
            <p className="font-prata italic text-[22px] text-[#8B3535] mb-3">to</p>
            <p className="font-prata font-normal text-[clamp(28px,6vw,42px)] tracking-wide text-[#1a0505] mb-6">
                {guestName ?? 'Our Dearest Guests'}
            </p>
            <p className="font-prata font-light text-[13px] tracking-[0.18em] text-[#8B3535] uppercase mb-3.5">
                Sahil &amp; Ambika&apos;s Wedding
            </p>
            {guestName && (
            <p className="font-prata italic text-base text-[#8B3535]">
                We are so excited to celebrate with you.
            </p>
            )}
      </section>
    )
}