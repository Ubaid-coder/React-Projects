import { useEffect, useState } from "react"
import Background from './components/Background/Background.jsx'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setheroCount(((prevState) => prevState===2?0:prevState+1 ))
    }, 3000)
  },[])
  
  return (
    <div>
      <Background
        playStatus={playStatus}
        heroCount={heroCount}
      />

      <Navbar />

      <Hero
        setplayStatus={setplayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
      />
    </div>
  )
}

export default App
