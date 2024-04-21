'use client'

import { Perfume } from '@/components/Perfume';
import Cube from '@/components/cube/page';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import React from 'react';

const Scene = dynamic(
  () => import('@/components/Scene'),
  {
    ssr: false
  }
)

function page() {
  
  return (
    <Canvas >
      <OrbitControls/>
      <Perfume/>
    </Canvas>
  )
}

export default page