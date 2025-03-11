import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import NameText from "./NameText";
import SpaceBackground from "./SpaceBackground";
import BlurbText from "./BlurbText";
import { Comets } from "./Comets";
import { useState, useRef } from "react";
import { Vector3 } from "three";

// Component for handling camera zoom animation
const CameraZoom = ({ controlsRef }) => {
  const [zoomState, setZoomState] = useState(0); // Tracks zoom progression (0: first layer, 1: second layer)

  useFrame(({ camera }) => {
    let zoomInSpeed = 0.2;
    const zoomSpeed = 2; // Constant zoom speed
    const secondText = -120
    if (zoomState === 0) {
      // Zoom into the first layer (target slightly in front)
      if (camera.position.z > 30) {
        camera.position.z -= zoomInSpeed; // Move closer at a constant speed
        controlsRef.current.target.lerp(new Vector3(0, 0, 25), 0.1); // Focus slightly in front of first text
      } else {
        setZoomState(1); // Move to second layer when close enough
      }
    } else if (zoomState === 1) {
      // Zoom into the second layer (target slightly in front)
      if(camera.position.z < secondText +50){
        zoomInSpeed = 0.1
      }
      if (camera.position.z > secondText + 16) {
        camera.position.z -= zoomInSpeed; // Keep moving backward at a constant speed
        controlsRef.current.target.lerp(new Vector3(0, 0, secondText-20), 0.1); // Focus slightly in front of second text
      } else {
        setZoomState(2); // Reset zoom state when close enough
      }
    } else if (zoomState === 2) {
      zoomInSpeed = 0.2
      // Reset to initial position quickly
      if (camera.position.z < 50) {
        camera.position.z += zoomSpeed ; // Faster reset speed
        controlsRef.current.target.lerp(new Vector3(0, 0, -100), 0.1); // Focus back to initial position
      } else {
        setZoomState(0); // Start again from the first layer
      }
    }

    controlsRef.current.update(); // Update OrbitControls
  });

  return null; // This component doesn't render anything visually
};

const SceneTest = () => {
  const controlsRef = useRef(); // Reference to OrbitControls

  return (
    <Canvas camera={{ position: [0, 0, 60], fov: 55 }} style={{ height: "100vh", width: "100%", pointerEvents: 'none' } }>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} color="blue" intensity={3} />

      {/* OrbitControls */}
      <OrbitControls ref={controlsRef} enableZoom={false} />

      {/* Camera Zoom Logic */}
      <CameraZoom controlsRef={controlsRef} />

      {/* Scene Elements */}
      <Comets />
      <Sparkles count={100} scale={[20, 15, 10]} size={7} speed={0.5} color="cyan" />
      <NameText />
      <Sparkles count={100} scale={[30, 15, 10]} size={10} speed={0.5} color="cyan" position = {[0,0,-120]}/>
      <BlurbText z={-120}/>
      <SpaceBackground />
    </Canvas>
  );
};

export default SceneTest;
