'use client';

import React, { useEffect, useRef } from 'react'
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import styles from "@/components/cube/style.module.scss"
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import {useMotionValue, useSpring} from 'framer-motion';


export default function index() {
  return (
    <div className={styles.main}>
        <Canvas>
          <ambientLight intensity={2}/>
          <directionalLight position={[2,1,1]}/>
          <OrbitControls enableZoom={false} enablePan={false}/>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {

  const mesh = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const manageMouseMove = (e:any) => {
    const {clientX, clientY} = e;
  }

  useEffect(() => {
    
    window.addEventListener("mousemove", manageMouseMove)
  
    return () => {
      window.removeEventListener("mouse", manageMouseMove)
    }
  }, [])
  

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += delta * 0.25;
  //   mesh.current.rotation.y += delta * 0.25;
  //   mesh.current.rotation.z += delta * 0.25;
  // })

  const texture_1 = useLoader(TextureLoader, "/images/pic1.avif")
  const texture_2= useLoader(TextureLoader, "/images/pic2.jpg")
  const texture_3 = useLoader(TextureLoader, "/images/pic3.avif")
  const texture_4 = useLoader(TextureLoader, "/images/pic4.jpg")
  const texture_5 = useLoader(TextureLoader, "/images/pic5.webp")
  const texture_6 = useLoader(TextureLoader, "/images/pic6.jpg")

  return (
    <mesh ref={mesh}>
        <boxGeometry args={[2.5, 2.5, 2.5]}/>
        <meshStandardMaterial map={texture_1} attach="material-0"/>
        <meshStandardMaterial map={texture_2} attach="material-1"/>
        <meshStandardMaterial map={texture_3} attach="material-2"/>
        <meshStandardMaterial map={texture_4} attach="material-3"/>
        <meshStandardMaterial map={texture_5} attach="material-4"/>
        <meshStandardMaterial map={texture_6} attach="material-5"/>
    </mesh>
  ) 
}