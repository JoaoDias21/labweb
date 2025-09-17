import '../../styles/style.css';
import React, {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Text} from "@react-three/drei";
import BlochSphere from "../../components/simulator/BlochSphere.jsx";
import * as THREE from "three";

function Simulacoes() {
    const [direction, setDirection] = useState(new THREE.Vector3(0,1,0).normalize());
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
                    <button className='XGateButton' onClick={() => {setDirection(new THREE.Vector3(direction.x, -direction.y, direction.z))}}>X</button>
                    <button className='YGateButton' onClick={() => {setDirection(new THREE.Vector3(-direction.x, direction.y, direction.z))}}>Y</button>
                    <button className='ZGateButton' onClick={() => {setDirection(new THREE.Vector3(direction.x, direction.y, -direction.z))}}>Z</button>
                    <Canvas camera={{position:[5,0,0], fov:45}}>
                        <Text position={[0,1.5,0]} scale={[0.5, 0.5, 0.5]} rotation={[0,Math.PI/2,0]}>|0&#10217;</Text>
                        <Text position={[0,-1.5,0]} scale={[0.5, 0.5, 0.5]} rotation={[0,Math.PI/2,0]}>|1&#10217;</Text>
                        <OrbitControls />
                        <ambientLight intensity={3}></ambientLight>
                        <directionalLight insensity={3} position={[2, 5, 1]}></directionalLight>
                        <BlochSphere dir={direction}/>
                    </Canvas>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Simulacoes
