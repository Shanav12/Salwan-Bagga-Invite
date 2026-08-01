import { useState } from 'react'
import './App.css'
// import { HeroSlideshow } from './components/HeroSlideshow'
import { InvitationCard } from './components/InvitationCard'
import { Greeting } from './components/Greeting'
import { Info } from './components/Info'
import { Details } from './components/Details'


export default function App() {
  const guestName = new URLSearchParams(window.location.search).get('guest')
  // const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {/* {!introDone && <HeroSlideshow onDone={() => setIntroDone(true)} />} */}
      <div
        className={`min-h-screen flex flex-col bg-[#faf0e6] font-prata text-[#1a0505] transition-opacity duration-700 opacity-0'`}
      >
        <InvitationCard/>
        <Greeting guestName={guestName}/>
        <Info/>
        <Details/>
      </div>
    </>
  )
}
