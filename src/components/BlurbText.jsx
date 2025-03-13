

import {  Text3D} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {useState} from 'react';


const BlurbText = ({z = -90, visible}) => {
  const [opacity, setOpacity] = useState(0);
  //console.log(visible)
  useFrame(() => {
    if (visible && opacity < 1) {
      setOpacity(Math.min(opacity + 0.01, 1));
    } else if (!visible && opacity > 0) {
      setOpacity(Math.max(opacity - 0.01, 0));
    }
  });

  
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
        position={[-16.0, 3.2, z]}
      >
        I'm driven by innovation and strive 
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
          opacity = {opacity}
          transparent = {true}
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
        position={[-17.3, 1.6, z]}
      >
        to create a meaningful impact on the
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
          opacity = {opacity}
          transparent = {true}
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
        position={[-18, 0, z]}
      >
        world around me. As a student at Texas
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
          opacity = {opacity}
          transparent = {true}
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
        position={[-17.5, -1.65, z]}
      >
        A&M I'm passionate about creating to  
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
          opacity = {opacity}
          transparent = {true}
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
        position={[-13.0, -3.2, z]}
      >
        improve the world around me.
        <meshStandardMaterial 
          color="cyan" 
          metalness={0.7} 
          roughness={0.2} 
          envMapIntensity={0.5}
          opacity = {opacity}
          transparent = {true}
        />
      </Text3D>
      
    </>
  )
}

export default BlurbText