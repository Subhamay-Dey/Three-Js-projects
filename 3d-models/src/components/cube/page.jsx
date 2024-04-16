'use client';

import React from 'react'
import {Canvas} from "@react-three/fiber";
import styles from "@/components/cube/style.module.scss"

export default function index() {
  return (
    <div className={styles.main}>
        <Canvas>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {
  return (
    <mesh>
        <boxGeometry args={{2.5:any, 2.5:any, 2.5:any}}/>
    </mesh>
  )
}



