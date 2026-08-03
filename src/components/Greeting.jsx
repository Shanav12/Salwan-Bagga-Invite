import ganeshJi from "../assets/ganesh-Ji.png"


export const Greeting = ({guestName}) => {
    return (
        <section className="bg-[#dbeafe] border-t border-gold/15 py-10 px-6 text-center">
            {/* <img
                src={ganeshJi}
                alt=""
                aria-hidden="true"
                className="absolute top-3 right-3 w-12 sm:w-16 h-auto object-contain pointer-events-none opacity-30"
            /> */}
            <p className="font-prata  text-[clamp(1.125rem,4vw,1.375rem)] mb-3">To</p>
            <p className="font-prata italic font-normal text-gold-dark text-[clamp(28px,6vw,42px)] tracking-wide text-[#1a0505]">
                {guestName ?? 'Our Dearest Guests'}
            </p>
        </section>
    )
}