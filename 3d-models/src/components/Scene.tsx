'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Scene() {
  return (
    <Canvas>
        <Model/>
    </Canvas>
  )
}

export default Scene