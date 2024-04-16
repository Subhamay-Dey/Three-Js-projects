'use client';

import React, { useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import styles from "@/components/cube/style.module.scss"

export default function index() {
  return (
    <div className={styles.main}>
        <Canvas>
          <ambientLight intensity={1}/>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {

  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.z += delta * 0.1;
  })

  return (
    <mesh ref={mesh}>
        <boxGeometry args={[2.5, 2.5, 2.5]}/>
        <meshStandardMaterial color="orange"/>
    </mesh>
  )
}