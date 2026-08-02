import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const photos = [
  // `${base}hr_cloudinary.jpg`,
  `${base}hr_flyby.jpg`,
  // `${base}hr_aerial1.jpg`,
  // `${base}hr_pool_beach.jpg`
]

const SLIDE_DURATION = 1750
const FLASH_DURATION = 50

const TITLE_FONTS = [
  "'EB Garamond', serif",
]


export const HeroSlideshow = ({ onDone }) => {
  const [current, setCurrent] = useState(0)
  const [flashing, setFlashing] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const totalSlides = photos.length
    let slide = 0
    let cancelled = false

    const next = () => {
      if (cancelled) return
      slide++
      if (slide >= totalSlides) {
        setTimeout(() => {
          if (cancelled) return
          setExiting(true)
          setTimeout(onDone, 400)
        }, SLIDE_DURATION)
        return
      }
      setFlashing(true)
      setTimeout(() => {
        if (cancelled) return
        setCurrent(slide)
        setTimeout(() => {
          if (cancelled) return
          setFlashing(false)
          setTimeout(next, SLIDE_DURATION)
        }, FLASH_DURATION)
      }, FLASH_DURATION)
    }

    const timer = setTimeout(next, SLIDE_DURATION)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <img
        key={current}
        src={photos[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
      />

      {/* dark overlay — heavier at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />

      {/* flash overlay */}
      <div
        className="absolute inset-0 bg-white pointer-events-none transition-opacity"
        style={{ opacity: flashing ? 1 : 0, transitionDuration: `${FLASH_DURATION}ms` }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-end px-6 text-center"
        style={{ paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 0px) + 2rem)' }}
      >
        <p
          className="font-prata text-[clamp(1rem,3.5vw,1.5rem)] text-gold-light tracking-[0.2em] uppercase mb-2"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
        >
          <strong>You're Invited</strong>
        </p>
        <p
          className="font-prata font-light text-[clamp(1rem,3.5vw,1.5rem)] tracking-[0.15em] text-white/90 mb-1"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
        >
          Welcome to
        </p>
        <h1
          className="italic text-[clamp(2.8rem,13vw,6.25rem)] leading-none tracking-normal text-gold-light mb-4 transition-all duration-300"
          style={{
            fontFamily: TITLE_FONTS[current % TITLE_FONTS.length],
            textShadow: '0 2px 16px rgba(0,0,0,0.6)',
          }}
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
