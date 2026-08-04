export const Details = () => {
    return (
        <div className="">
            <section className="bg-[#dbeafe] border-t border-gold/12 py-12 px-6 text-center">
                <h2 className="font-prata text-[clamp(28px,5vw,40px)] tracking-wide">
                RSVP Information
                </h2>
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="h-px w-16 md:w-24 bg-[#8c6e2f]"></span>
                    <span className="text-gold text-2xl md:text-3xl">✦</span>
                    <span className="h-px w-16 md:w-24 bg-[#8c6e2f]"></span>
                </div>
                <p className="font-prata font-light text-[clamp(1rem,2.6vw,1rem)] mb-3 leading-[1.9] tracking-wide ">
                    Click the button below to visit the wedding website and RSVP.
                </p>
                <p className="font-prata font-light text-[clamp(0.8125rem,2.6vw,1rem)] mb-16 leading-[1.9] tracking-wide mb-5">
                    If you have any questions regarding RSVPs, please reach out to{' '}
                    <a
                    href="mailto:support@shaadidestinations.com"
                    className="text-gold border-b border-gold-light/40 hover:border-gold-light transition-colors"
                    >
                    support@shaadidestinations.com
                    </a>
                </p>
                <div className="flex flex-col items-center gap-4 mb-5">
                    <button
                        onClick={() => window.open("https://www.salwanbaggashaadi.com/#/wedding-logistics", "_blank")}
                        className="font-prata font-normal text-[clamp(0.8rem,2.4vw,0.8rem)] tracking-[0.2em] uppercase bg-[#8c6e2f] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-[#b8973b] transition-colors shadow-sm"
                    >
                    Please RSVP to our wedding
                    </button>
                </div>
                <p
                    className="font-prata font-normal text-[clamp(0.75rem,2.6vw,0.8125rem)] mb-25 tracking-[0.2em]"
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