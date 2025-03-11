import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Comets = ({ count = 30 }) => {
  const ref = useRef()

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const velocityArray = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 70
      positions[i + 1] = (Math.random() - 0.5) * 70
      positions[i + 2] = (Math.random() - 0.5) * 70
      
      velocityArray[i] = (Math.random() - 0.5) * 0.02
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.02
      velocityArray[i + 2] = (Math.random() * 0.1) - 0.05 // Mixed Z movement
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3))
    return geom
  }, [count])

  const vertexShader = `
    attribute vec3 velocity;
    uniform float time;
    
    void main() {
      vec3 newPosition = position + velocity * time * 50.0;
      if(newPosition.z < -35.0) newPosition.z = 35.0;
      if(newPosition.z > 35.0) newPosition.z = -35.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      gl_PointSize = 4.0;
      gl_PointSize *= (1.0 - smoothstep(-35.0, 35.0, newPosition.z));
    }
  `

  const fragmentShader = `
    void main() {
      float intensity = 1.0 - length(gl_PointCoord - vec2(0.5));
      gl_FragColor = vec4(0.8, 0.9, 1.0, intensity * 1.2);
    }
  `

  useFrame((state) => {
    ref.current.material.uniforms.time.value = state.clock.getElapsedTime()
  })

  return (
    <points ref={ref} geometry={geometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{ time: { value: 0 }}}
      />
    </points>
  )
}

