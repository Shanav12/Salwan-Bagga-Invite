export const Details = () => {
    return (
        <div className="">
            <section className="bg-[#faf0e6] border-t border-gold/12 py-16 px-6 text-center">
                <h2 className="font-prata text-[clamp(28px,5vw,40px)] tracking-wide mb-8">
                Details + Information
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <a
                    href="https://www.salwanbaggashaadi.com/"
                    className="font-prata font-normal text-[clamp(0.65rem,2.4vw,0.6875rem)] tracking-[0.2em] uppercase text-gold-dark pb-1.5 border-b border-gold-light hover:text-gold hover:border-gold transition-colors"
                    >
                    Wedding Website + RSVP
                    </a>
                </div>
            </section>

            <footer className="bg-warm-darker py-6 px-6 text-center font-normal text-gold-light font-prata text-xs tracking-[0.12em] uppercase">
                Ambika &amp; Sahil · June 2027 · Los Cabos
            </footer>
        </div>
    )
}