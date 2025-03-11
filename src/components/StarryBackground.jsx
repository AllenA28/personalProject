import { Canvas} from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Sparkles } from '@react-three/drei'
import NameText from './NameText'
import SpaceBackground from './SpaceBackground'
import { Comets } from './Comets'


const StarryBackground = ({isForeground = false}) => {
  return (
    <>

            <Canvas
                camera={{ position: [0, 0, 25], fov: 55 }}

                fog={{ near: 1, far: 20, color: '#000000' }}
                tabIndex="-1"
                style={isForeground ? { pointerEvents: 'auto' } : {pointerEvents:'none'}}
                
            >
                <ambientLight intensity={2.5} />
                <pointLight position={[10, 10, 10]} intensity={5.0} />
                <pointLight position={[-10, -10, -10]} color="blue" intensity={3} />
                <OrbitControls
                    enableZoom={true}
                    target={[0, 0, 0]} // Explicit center point
                />
                <Comets />
                <Sparkles
                    count={100}
                    scale={[35, 25, 1]}
                    size={4}
                    speed={1.5}
                    color="cyan"
                />


                <SpaceBackground />
                <OrbitControls enableZoom={true} />
            </Canvas>
        </>
  )
}

export default StarryBackground