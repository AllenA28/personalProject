
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavbarComponents/NavLinks';
import { useState, useEffect } from 'react'
import SocialIcons from './NavbarComponents/SocialIcons';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Fix issue 3: Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Match your md breakpoint
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])




    return (
        <nav className="bg-gray-950 backdrop-blur-md shadow-space-glow px-4 md:px-8 py-3 border-b border-cyan-800/30 z-10">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="font-bold text-2xl text-cyan-400 tracking-wider z-10">
                    Allen Thomas
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}

                    className="md:hidden hover:rotate-180 text-cyan-400 hover:text-cyan-200 transition-all z-10"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}

                </button>

                {/* Navigation Links - Fixed positioning and transitions */}
                <div className={` md:flex gap-8 transition-all 
                                    ${isOpen ?
                                        ' fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-space-dark px-4 py-3 space-y-4 overflow-auto z-20' 
                                    :
                                        'hidden md:flex'}
                                `}>

                    <NavLinks hamburger={isOpen} setIsOpen={setIsOpen} className = 'z-11'/>
                    <SocialIcons className="md:hidden flex justify-center gap-6 pt-4 z-10 transition-all" />
                </div>

                {/* Desktop Social Icons */}
                <SocialIcons className="hidden md:flex gap-6 z-12" />
            </div>
        </nav>
    )
}
export default Navbar


