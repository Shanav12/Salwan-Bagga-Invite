import './App.css'
import { InvitationCard } from './components/InvitationCard'
import { Greeting } from './components/Greeting'
import { Info } from './components/Info'
import { Details } from './components/Details'



export default function App() {
  const guestName = new URLSearchParams(window.location.search).get('guest')
  return (
    <div className="min-h-screen flex flex-col bg-ivory font-prata text-[#2a2118]">
      <InvitationCard/>
      <Greeting guestName={guestName}/>
      <Info/>
      <Details/>
    </div>
  )
}
