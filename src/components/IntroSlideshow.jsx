import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const photos = [
  `${base}cabo4.jpeg`,
  // `${base}cabo7.jpeg`,
  // `${base}cabo6.jpeg`,
  // `${base}cabo3.jpeg`,
  // `${base}cabo2.jpeg`,
  // `${base}cabo4.jpeg`,
  // `${base}cabo7.jpeg`,
  // `${base}cabo6.jpeg`,
  // `${base}cabo3.jpeg`,
  // `${base}cabo2.jpeg`
]

const SLIDE_DURATION = 2000
// close duration, then open duration
const SHUTTER_CLOSE = 160
const SHUTTER_OPEN = 160

const TITLE_FONTS = [
  "'EB Garamond', serif",
]

// shutter phase: 'idle' | 'closing' | 'closed' | 'opening'
export const HeroSlideshow = ({ onDone }) => {
  const [current, setCurrent] = useState(0)
  const [shutter, setShutter] = useState('idle')
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
      // close shutter
      setShutter('closing')
      setTimeout(() => {
        if (cancelled) return
        setShutter('closed')
        setCurrent(slide)
        // open shutter
        setTimeout(() => {
          if (cancelled) return
          setShutter('opening')
          setTimeout(() => {
            if (cancelled) return
            setShutter('idle')
            setTimeout(next, SLIDE_DURATION)
          }, SHUTTER_OPEN)
        }, 30)
      }, SHUTTER_CLOSE)
    }

    const timer = setTimeout(next, SLIDE_DURATION)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [onDone])

  // clip-path iris: circle(50% at center) fully open, circle(0%) fully closed
  const shutterClip = shutter === 'closed' || shutter === 'closing'
    ? 'circle(0% at 50% 50%)'
    : 'circle(75% at 50% 50%)'

  const shutterTransition = shutter === 'closing'
    ? `clip-path ${SHUTTER_CLOSE}ms cubic-bezier(0.4,0,0.6,1)`
    : shutter === 'opening'
    ? `clip-path ${SHUTTER_OPEN}ms cubic-bezier(0.4,0,0.6,1)`
    : 'none'

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <img
        key={current}
        src={photos[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          clipPath: shutterClip,
          transition: shutterTransition,
        }}
      />

      {/* dark overlay — heavier at bottom for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20"
        style={{
          clipPath: shutterClip,
          transition: shutterTransition,
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center px-6 text-center"
        style={{ paddingTop: 'max(2rem, env(safe-area-inset-top, 0px) + 6rem)', paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 0px) + 2rem)' }}
      >
        <p
          className="font-prata italic text-[clamp(2rem,6vw,3.5rem)] text-gold-light tracking-[0.2em] uppercase mb-2"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
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
