import React, { useRef } from 'react'
import { easing } from 'maath'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Backdrop = () => {
  const shadows = useRef();



  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={120}
      alphaTest={0.85}
      scale={0, 0.05, 0.04}
      //opacity={18}
      rotation={[Math.PI / 60, 0, 0]}
      position={[0, 0, -0.14]}
      color='black'
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />

    </AccumulativeShadows>
  )
}

export default Backdrop