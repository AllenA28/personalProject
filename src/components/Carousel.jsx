import { FaPython, FaReact, FaHtml5, FaCode, FaJs, FaCss3Alt, FaJava, FaGitAlt, FaCodeBranch, FaFileCode } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    }
    
    return (
        <div className="relative w-[90%] mx-auto mt-5 text-gray-300">
            <Slider {...settings} className = '' >
            <div className="pt-4 pl-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md opacity-90 h-[290px]">
                <h2 className="text-cyan-700 text-2xl font-bold mb-4">Coding Languages</h2>
                <ul className = 'text-lg ml-14 '>
                    <li className = 'group'>
                        <FaPython className = ' transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400 '>Python</p>
                    </li>
                    <li className = 'group'>
                        <FaJava className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>Java</p>
                    </li>
                     <li className = 'group'>
                     
                        <FaCode className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>C++</p>
                    </li>
                    <li className = 'group'>
                       
                        <FaJs className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>JavaScript</p>
                    </li>  
                    <li className = 'group'>
                        <FaHtml5 className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>HTML</p>
                    </li>
                    <li className = 'group'>
                        <FaCss3Alt className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>CSS</p>
                    </li>  
                </ul>
            </div>
            <div className="pt-4 pl-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md opacity-90 h-[290px]">
                <h2 className="text-cyan-700 text-3xl font-bold mb-4">Frameworks</h2>
                <ul className = 'text-lg ml-14 '>
                    <li className = 'group'>
                        <FaGitAlt className = ' transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400 '>Git</p>
                    </li>
                    <li className = 'group'>
                     
                        <FaCodeBranch className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>Vite.js</p>
                    </li>
                    <li className = 'group'>
                        <FaReact className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <p className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>React</p>
                    </li>
                    <li className = 'group'>
                        <FaFileCode className = 'transition-all duration-300 inline pr-2 text-3xl group-hover:text-4xl group-hover:text-yellow-400'/>
                        <span className = 'transition-all duration-300 inline group-hover:text-xl group-hover:text-yellow-400'>Tailwind CSS</span>
                    </li>  
 
                </ul> 
            </div>
            <div className="pt-4 pl-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md opacity-90 h-[290px]">
                <h2 className="text-cyan-700 text-3xl font-bold mb-4">Musician</h2>
                <p className="text-gray-300 text-sm">
                    Ever since I was a little kid I've enjoyed making music. The instrument that I love playing the most would be guitar, which I really got 
                    into while quarentined during the pandemic. Other than that I've tried out a few other instruments such as the french horn and piano. 
                    I even play a cultural drum called the chenda at church functions. One of my favorite songs to play right now would be Crazy Train by 
                    Ozzy Osbourne
                </p>

            </div>
            <div className="pt-4 pl-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md opacity-90 h-[290px] w-[20px]">
                <h2 className="text-cyan-700 text-3xl font-bold mb-4">Sports Lover</h2>
                <p className="text-gray-300 text-sm">
                    I've been playing sports since I discovered the basketball back in elementary school. I love to play team sports because it gives me an 
                    opportuntiy to have fun with my friends, and I love the feeling of being on a team. I'm pretty 
                    competitive and love to play almost every sport, with my favorites being basketball and volleyball. Outside of sports, I also really love to 
                    go to the gym.
                </p>
            </div>
            </Slider>
        </div>
    )
}

export default Carousel