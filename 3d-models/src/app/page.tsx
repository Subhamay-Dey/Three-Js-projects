'use client'

import { Perfume } from '@/components/Perfume';
import Cube from '@/components/cube/page';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import React from 'react';
import { AmbientLight } from 'three';

const Scene = dynamic(
  () => import('@/components/Scene'),
  {
    ssr: false
  }
)

function page() {
  
  return (
    <div className='w-full h-screen flex flex-row'>
    <Canvas >
      <Environment preset="dawn"/>
      <OrbitControls/>
      <Perfume/>
    </Canvas>
    <Cube/>
    
    </div>
  )
}

export default page