export const Details = () => {
    return (
        <div className="">
            <section className="bg-[#dbeafe] border-t border-gold/12 py-16 px-6 text-center">
                <h2 className="font-prata text-[clamp(28px,5vw,40px)] tracking-wide mb-8">
                Details & Information
                </h2>
                <p className="font-prata font-light text-[clamp(0.8125rem,2.6vw,0.9375rem)] leading-[1.9] tracking-wide ">
                    Follow the link below to visit the wedding website and RSVP.
                </p>
                <p className="font-prata font-light text-[clamp(0.8125rem,2.6vw,0.9375rem)] leading-[1.9] tracking-wide mb-5">
                    If you have any questions regarding RSVPs, please reach out to{' '}
                    <a
                    href="mailto:support@shaadidestinations.com"
                    className="text-gold-light border-b border-gold-light/40 hover:border-gold-light transition-colors"
                    >
                    support@shaadidestinations.com
                    </a>
                    .
                </p>
                <div className="flex flex-col items-center gap-4 mb-5">
                    <a
                    href="https://www.salwanbaggashaadi.com/#/wedding-logistics"
                    className="font-prata font-normal text-[clamp(0.65rem,2.4vw,0.6875rem)] tracking-[0.2em] uppercase text-gold-dark pb-1.5 border-b border-gold-light hover:text-gold hover:border-gold transition-colors"
                    >
                    Please RSVP to our wedding
                    </a>
                </div>
                <p
                    className="font-prata font-normal text-[clamp(0.75rem,2.6vw,0.8125rem)] tracking-[0.2em]"
                >
                Password: ambikasahil
                </p>
            </section>

            <footer className="bg-[#1e3a5f] py-6 px-6 text-center font-normal text-gold-light font-prata text-xs tracking-[0.12em] uppercase">
                Ambika &amp; Sahil · June 2027 · Los Cabos
            </footer>
        </div>
    )
}