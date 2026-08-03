import ambikaSahil from "../assets/ambika-Sahil.png"
import { IoLocation } from "react-icons/io5";
import ganeshJi from "../assets/lordGanesh.jpg"


export const InvitationCard = () => {
    return (
        <section className="relative flex items-start justify-center px-4 pb-10 overflow-hidden bg-[#dbeafe]">
            <div
                className="relative z-10 flex flex-col w-full max-w-[420px] px-6 sm:px-10 pt-10 pb-10 text-left rounded-lg"

                style={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    border: '1px solid rgba(184,151,74,0.25)',
                    boxShadow: '0 4px 6px rgba(74,10,10,0.06), 0 20px 60px rgba(74,10,10,0.14), 0 0 0 1px rgba(255,255,255,1) inset',
                }}
                >
                <img
                    src={ganeshJi}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-4 right-4 w-8 sm:w-10 mb-5 h-auto object-contain pointer-events-none opacity-50"
                />

                <p className="font-prata font-light text-center text-[0.625rem] sm:text-[0.625rem] tracking-[0.18em] text-gold uppercase mb-6 pr-8 sm:pr-10">
                    With the blessings of the almighty & our revered elders
                </p>

                <div className="flex justify-left mb-6">
                    <img
                        src={ambikaSahil}
                        alt="Ambika & Sahil"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <p className="font-prata font-light text-center text-[0.625rem] sm:text-[0.625rem] tracking-[0.18em] text-gold uppercase mb-8">
                    request your gracious presence for their wedding festivities
                </p>

                <div className="w-10 h-px bg-gold mb-6" />

                <p className="font-prata font-normal text-[0.8125rem] sm:text-[0.75rem] tracking-[0.12em] text-[#1a0505] mb-2">
                    June 3 – 5, 2027
                </p>

                <p className="font-prata italic inline-flex items-center gap-0.5 font-light text-[0.75rem] sm:text-[0.6875rem] tracking-[0.1em] text-gold leading-7 mb-10">
                    Hard Rock Los Cabos<IoLocation size={16} style={{ marginBottom: '7px' }} />
                    {/* <span className="inline-flex text-black items-center gap-0.5">Cabo San Lucas, Mexico<IoLocation /></span> */}
                </p>

                <div className="text-right mt-auto">
                    <p className="font-prata font-normal text-[0.75rem] sm:text-[0.6875rem] tracking-[0.15em] uppercase mb-1">
                        Please RSVP by
                    </p>
                    <p className="font-serif font-normal text-[1.125rem] sm:text-[1.25rem] tracking-wide text-gold-dark">
                        December 15th, 2026
                    </p>
                </div>
            </div>
        </section>
    )
}
