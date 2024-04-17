'use client'

import Cube from '@/components/cube/page';
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
    <main>
      {/* <Cube/> */}
      <Scene/>
    </main>
  )
}

export default page