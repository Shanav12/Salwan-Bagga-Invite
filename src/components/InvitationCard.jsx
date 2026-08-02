import ambikaSahil from "../assets/ambika-Sahil.png"
import roseBg from "../assets/rosegBg.jpg"
import { IoLocation } from "react-icons/io5";


export const InvitationCard = () => {
    return (
        <section className="relative flex items-start justify-center px-6 pt-20 pb-12 overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${roseBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }} />
            <div
                className="relative z-10 flex flex-col w-full max-w-[420px] px-[clamp(1.5rem,8vw,3rem)] pt-[clamp(3rem,7vw,4rem)] pb-[clamp(5rem,6vw,3.5rem)] text-left rounded-lg"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(184,151,74,0.25)',
                    boxShadow: '0 4px 6px rgba(74,10,10,0.06), 0 20px 60px rgba(74,10,10,0.14), 0 0 0 1px rgba(255,255,255,0.8) inset',
                }}
                >

                 <div className="flex justify-left mb-6">
                    <img 
                        src={ambikaSahil} 
                        alt="Ambika & Sahil"
                        className="w-full max-w-sm md:max-w-md h-auto object-contain"
                    />
                </div>

                <p className="font-prata font-light text-[clamp(0.6rem,2.2vw,0.625rem)] tracking-[0.18em] text-[#8B3535] uppercase mb-8">
                    invite you to celebrate their marriage
                </p>

                <div className="w-10 h-px bg-gold mb-7" />

                <p className="font-prata font-normal text-[clamp(0.7rem,2.6vw,0.75rem)] tracking-[0.12em] text-[#1a0505] mb-2.5">
                    June 3 – 5, 2027
                </p>

                <p className="font-prata font-light text-[clamp(0.65rem,2.4vw,0.6875rem)] tracking-[0.1em] text-[#8B3535] leading-7 mb-15">
                    Hard Rock Los Cabos<br />
                    <span className="inline-flex items-center gap-0.5">Cabo San Lucas, Mexico<IoLocation /></span>
                </p>

                <div className="text-right mt-auto">
                    <p className="font-prata font-normal text-[clamp(0.65rem,2.4vw,0.6875rem)] tracking-[0.15em] uppercase text-[#8B3535] mb-1">
                    Please RSVP by
                    </p>
                    <p className="font-serif font-normal text-[clamp(1rem,4vw,1.25rem)] tracking-wide text-gold-dark">
                    January 1st, 2027
                    </p>
                </div>
            </div>
        </section>
    )
}