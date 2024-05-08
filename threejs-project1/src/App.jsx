import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {

  return (
    <>
      <Canvas>
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
