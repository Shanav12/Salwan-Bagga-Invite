export const Greeting = ({guestName}) => {
    return (
        <section className="bg-[#dbeafe] border-t border-gold/15 py-10 px-6 text-center">
            <p className="font-prata italic text-[clamp(1.125rem,4vw,1.375rem)] text-gold mb-3">To</p>
            <p className="font-prata font-normal text-[clamp(28px,6vw,42px)] tracking-wide text-[#1a0505]">
                {guestName ?? 'Our Dearest Guests'}
            </p>
        </section>
    )
}