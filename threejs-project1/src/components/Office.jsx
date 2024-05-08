import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';

const FLOOR_HEIGHT = 2.3;
const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb');
  const ref = useRef();
  const tl = useRef();
  const LibraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
        
        tl.current.to(
            ref.current.position, 
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
            },
            0
        );

        tl.current.from(
            LibraryRef.current.position, {
                duration: 0.5,
                
                x: -2,
            },
            0.5,
        );

    }, [])

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
        <group position={[0, 2.114, -2.23]}>
            <group ref={LibraryRef}>
                <mesh 
                    geometry={nodes['02_library'].geometry} 
                    material={materials['02']}  
                />
            </group>
        </group>
        <group position={[-1.97, 4.227, -2.199]}>
            <group ref={atticRef}>
                <mesh 
                    geometry={nodes['03_attic'].geometry} 
                    material={materials['03']}  
                />
            </group>
        </group>
    </group>
  )
}

useGLTF.preload('./models/WawaOffice.glb')