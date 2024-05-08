import {OrbitControls, ScrollControls} from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={2}/>
        <OrbitControls enableZoom={false}/>
            {/* <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh> */}
            <ScrollControls pages={3} damping={0.25}>
            <Office/>
            <Overlay/>
            </ScrollControls>
        </>
    )
}