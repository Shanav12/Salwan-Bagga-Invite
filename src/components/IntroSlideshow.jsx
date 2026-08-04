import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const photos = [
  // `${base}cabo4.jpeg`,
  // `${base}cabo7.jpeg`,
  // `${base}cabo6.jpeg`,
  // `${base}cabo3.jpeg`,
  // `${base}cabo2.jpeg`,
  // `${base}cabo4.jpeg`,
]

const BURST_DURATION = 300
const GIF_HOLD = 4000
const FADE_OUT = 700

const TITLE_FONTS = ["'EB Garamond', serif"]

export const HeroSlideshow = ({ onDone }) => {
  // 'photos' | 'gif' | 'exiting'
  const [phase, setPhase] = useState('photos')
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    photos.forEach(src => { new Image().src = src })
  }, [])

  useEffect(() => {
    let cancelled = false
    let slide = 0

    const showNext = () => {
      slide++
      if (cancelled) return
      if (slide >= photos.length) {
        setPhase('gif')
        setTimeout(() => {
          if (cancelled) return
          setPhase('exiting')
          setTimeout(onDone, FADE_OUT)
        }, GIF_HOLD)
        return
      }
      setCurrent(slide)
      setTimeout(showNext, BURST_DURATION)
    }

    const timer = setTimeout(showNext, 300)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${phase === 'exiting' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {phase === 'photos' ? (
        <img
          key={current}
          src={photos[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <>
          <video
            src={`${base}caboDrone.mp4`}
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />

          <div
            className="absolute inset-0 flex flex-col items-center px-6 text-center"
            style={{ paddingTop: 'max(2rem, env(safe-area-inset-top, 0px) + 6rem)', paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 0px) + 2rem)' }}
          >
            <p className="font-prata italic text-[clamp(2rem,6vw,3.5rem)] text-gold-light tracking-[0.2em] uppercase mb-2">
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
              className="italic text-[clamp(2.8rem,13vw,6.25rem)] leading-none tracking-normal text-gold-light mb-4"
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
        </>
      )}
    </div>
  )
}
