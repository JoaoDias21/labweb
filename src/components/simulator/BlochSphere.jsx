import React from "react";
import Arrow from "./arrow.jsx";


const BlochSphere = ({dir}) => {
    return (
        <mesh position={[0,0,0]}>
            <sphereGeometry args={[1, 12, 12]}></sphereGeometry>
            <meshStandardMaterial wireframe color="white" transparent={true} opacity={0.2} roughness={0.3}></meshStandardMaterial>
            <Arrow direction={dir}/>
        </mesh>
    )
}

export default BlochSphere;