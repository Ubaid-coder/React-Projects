import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.fanta-section',
        start: '0% 95%',
        end: '50% 50%',
        scrub: true,
        markers: false
      }
    }, ['orange'])

    tl.to('#fanta', {
      marginTop: '100%',
      marginRight: '60%'
    })

    tl.to('#orange2', {
      marginTop: '70%',
      marginLeft: '-16%'
    }, ['orange'])

    tl.to('#orange', {
      marginTop: '65%',
      marginRight: '-25%'
    }, ['orange'])

    tl.to('#leaf', {
      marginTop: '54%',
      marginLeft: '57%'
    }, ['orange'])

    tl.to('#leaf2', {
      marginTop: '40%',
      marginLeft: '-40%'
    }, ['orange'])

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.details-section',
        start: '0% 95%',
        end: '50% 50%',
        scrub: true,
        markers: false
      }
    }, ['orange'])

    tl2.to('#fanta', {
      marginBottom:'-115%',
      marginLeft:'60%'
    },['fanta'])

    tl2.to('#orange2', {
      marginTop:'103%',
      marginLeft:'9%',
    },['fanta'])

    tl2.from('#cocacola-can', {
      rotate:'-90deg',
      marginLeft:'-7%',
      marginTop:'80%'
    },['cocacola'])

    tl2.from('.lemon1', {
      rotate:'-90deg',
      marginLeft:'-7%',
      marginTop:'80%'
    },['cocacola'])

    tl2.from('#pepsi-can', {
      rotate:'90deg',
      marginLeft:'7%',
      marginTop:'80%'
    },['cocacola'])

    tl2.from('.lemon2', {
      rotate:'90deg',
      marginLeft:'7%',
      marginTop:'80%'
    },['cocacola'])

  })
  return (
    <>
      <Navbar />
      <Main />
   
    </>
  )
}

export default App