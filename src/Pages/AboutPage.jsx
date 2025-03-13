import StarryBackground from "../components/StarryBackground"
import About from "../components/About"
import Carousel from "../components/Carousel"

const AboutPage = () => {
  return (
    <div className = 'relative  h-screen overflow-hidden z-0'>
        <StarryBackground  className = 'absolute z-10 w-full h-full '/>
        <div className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] z-20 w-4/5 h-4/5 opacity-85 bg-white/10  rounded-xl shadow-lg backdrop-blur-1xl p-8 overflow-hidden'>
            <About />
            <Carousel />
        </div>
    
    </div>
        

  )
}

export default AboutPage