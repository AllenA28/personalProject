import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const SocialIcons = ({ className }) => (
    <div className={`${className} text-cyan-400`}>
        {[
            { icon: <FaGithub />, link: 'https://www.github.com/AllenA28' },
            { icon: <FaLinkedin />, link: 'https://linkedin.com/in/allen-a-thomas' },
            { icon: <FaEnvelope />, link: 'mailto:allen.t_a28@tamu.edu.com' }
        ].map((social, index) => (
            <a
                key={index}
                href={social.link}
                target = "_blank" 
                className="hover:text-yellow-400 transition-colors duration-750 p-2 hover:bg-cyan-900/20 rounded-lg"
            >
                <span className="text-xl">{social.icon}</span>
            </a>
        ))}
    </div>
)

export default SocialIcons