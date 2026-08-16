import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL

const TITLE_FONTS = ["'EB Garamond', serif"]

export const LandingPage = ({ onDone }) => {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const hold = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 700)
    }, 3000)
    return () => clearTimeout(hold)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={`${base}cabo4.webp`}
          alt=""
          className="w-full h-full md:w-auto md:h-full md:max-w-7xl object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />


      <div
        className="absolute inset-0 flex flex-col items-center px-6 text-center"
        style={{ paddingTop: 'max(4rem, env(safe-area-inset-top, 0px) + 4rem)', paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 0px) + 2rem)' }}
      >
        <p
          className="font-prata italic text-[clamp(2rem,6vw,2.75rem)] text-gold-light tracking-[0.12em] uppercase mb-2 mt-12 md:mt-0"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}
        >
          <strong>You're Invited</strong>
        </p>
        <div className="flex-1" />
        <p
          className="font-prata font-light text-[clamp(1rem,3.5vw,1.5rem)] tracking-[0.15em] text-white/90 mb-1"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
        >
          Welcome to
        </p>
        <h1
          className="italic text-[clamp(2.8rem,13vw,5.25rem)] leading-none tracking-normal text-gold-light mb-4"
          style={{ fontFamily: TITLE_FONTS[0], textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}
        >
          Los Cabos
        </h1>
        <p
          className="font-prata font-light text-[clamp(0.85rem,2.5vw,0.85rem)] tracking-[0.2em] text-white/80"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
        >
          Ambika &amp; Sahil · June 2027
        </p>
      </div>
    </div>
  )
}
