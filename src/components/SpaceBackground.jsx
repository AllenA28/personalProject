import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'



const SpaceBackground = () => {
    const starsRef = useRef()
  useFrame(({ clock }) => {
    starsRef.current.rotation.x = clock.getElapsedTime() * 0.0001
    starsRef.current.rotation.y = clock.getElapsedTime() * 0.0001
  })
  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}

export default SpaceBackground