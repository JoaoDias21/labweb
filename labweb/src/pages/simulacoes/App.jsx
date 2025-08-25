
import '../../styles/style.css';
import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function Recicla() {

  return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Simulações&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
                <div className='info'>
                    <h1>Simule operações de portas quânticas com uma Esfera de Bloch</h1>
                </div>
                <div className='sphereContainer'>
                    <Canvas camera={{position:[3,2,3], fov:45}}>
                        <OrbitControls />
                        <ambientLight intensity={0.2}></ambientLight>
                        <directionalLight insensity={3} position={[2, 5, 1]}></directionalLight>
                        <mesh position={[0,0,0]}>
                            <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
                            <meshStandardMaterial color="white" transparent={true} opacity={0.9} roughness={0.3}></meshStandardMaterial>
                        </mesh>
                    </Canvas>
                </div>


            </div>
        </div>
        </div>

  )
}

export default Recicla
