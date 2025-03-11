import { Link } from "react-router-dom"
import Pdf from './Resume.pdf'

const NavLinks = ({ hamburger }) => {
    return (
        <ul className="md:flex  items-center gap-6">
            {['Home', 'About', 'Projects'].map((link) => (
                <li key={link}>

                    {/* <div className={` hover:text-cyan-300 transition-colors ${hamburger ? "hover:text-20px transition-all" : ""}`}> */}
                        <Link
                            to={`/${link}`} 

                            className="block py-2 px-3 text-cyan-400 hover:text-yellow-400 
                                     hover:bg-cyan-900/20 rounded-lg transition-all
                                       duration-300 group"
                        >

                            {link}

                            {!hamburger ? <div className="h-0.5 bg-cyan-400/0 group-hover:bg-cyan-300/30 mt-1 transition-all" /> : <></>}
                        </Link>
                    {/* </div> */}
                </li>
            ))}
            <li key='Resume'>

            {/* <div className={` hover:text-cyan-300 transition-colors ${hamburger ? "hover:text-20px transition-all" : ""}`}> */}
                <a
                    href= {Pdf}
                    target = '_blank'
                    rel="noopener noreferrer"
                    className="block py-2 px-3 text-cyan-400 hover:text-cyan-200 
                            hover:bg-cyan-900/20 rounded-lg transition-all
                            duration-300 group"
                >

                    Resume

                    {!hamburger ? <div className="h-0.5 bg-cyan-400/0 group-hover:bg-cyan-300/30 mt-1 transition-all" /> : <></>}
                </a>
            {/* </div> */}
            </li>
        </ul>
    )
}

export default NavLinks