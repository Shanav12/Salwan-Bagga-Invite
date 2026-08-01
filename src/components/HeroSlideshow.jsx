import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const photos = [
  `${base}sahilambika0.webp`,
  `${base}sahilambika1.webp`,
  `${base}sahilambika2.webp`,
  `${base}sahilambika0.webp`,
  `${base}sahilambika1.webp`,
  `${base}sahilambika0.webp`,
  `${base}sahilambika1.webp`,
  `${base}sahilambika2.webp`,
  `${base}sahilambika0.webp`,
  `${base}sahilambika1.webp`,
  `${base}sahilambika0.webp`,
]

const SLIDE_DURATION = 500
const FLASH_DURATION = 20


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
          setTimeout(onDone, 700)
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
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-700 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* portrait photo frame */}
      <div className="relative h-full" style={{ aspectRatio: '9/16', maxWidth: '100%' }}>
        <img
          key={current}
          src={photos[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* flash overlay */}
        <div
          className="absolute inset-0 bg-white pointer-events-none transition-opacity"
          style={{ opacity: flashing ? 1 : 0, transitionDuration: `${FLASH_DURATION}ms` }}
        />

        {/* text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center">
          <p className="font-prata text-[clamp(0.65rem,2.4vw,0.75rem)] tracking-[0.25em] uppercase text-gold-light mb-2">
            You're Invited
          </p>
          <p className="font-prata font-light text-[clamp(15px,3vw,22px)] tracking-widest text-ivory/90 mb-1">
            Welcome to
          </p>
          <h1 className="font-prata italic text-[clamp(52px,12vw,96px)] leading-none tracking-wide text-gold-light mb-4">
            Cabo
          </h1>
          <p className="font-prata font-light text-[clamp(0.65rem,2.4vw,0.75rem)] tracking-[0.2em] text-ivory/60">
            Ambika &amp; Sahil · June 2027
          </p>
        </div>
      </div>
    </div>
  )
}
