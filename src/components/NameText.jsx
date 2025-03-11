

import {  Text3D} from '@react-three/drei'


const NameText = ({z = 0}) => {
  return (
    <>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1.5}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-4.0, 1.5, z]}
      >
        Howdy, I'm 
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
        />
      </Text3D>
        <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1.5}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-5.0, -1.5, z]}
      >
        Allen Thomas
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
        />
      </Text3D>
    </>
  )
}

export default NameText