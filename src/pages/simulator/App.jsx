import '../../styles/style.css';
import React, {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Text, Billboard} from "@react-three/drei";
import BlochSphere from "../../components/simulator/BlochSphere.jsx";
import * as THREE from "three";
import {X_gate, Y_gate, Z_gate, H_gate} from "./qubitRotation.js"
import FacedTxt from '../../components/simulator/facedText.jsx';


function Simulator() {
    const [direction, setDirection] = useState(new THREE.Vector3(0,1,0).normalize());
    return (
        <div>
        <div className="container">
            <div className='content'>
                <h1 className={"upperText"}>&lt;labweb&#47;Simulador&gt;</h1>
            </div>
            <div className='wave'>
                <img id='wave' draggable='false' src='/wave.svg' alt={'Wave'}/>
            </div>
            <div className='secondBack'>
                <div className='info'>
                    <h1>Simule operações de portas quânticas com uma Esfera de Bloch</h1>
                </div>
                <div className='sphereContainer'>
                    <button className='XGateButton' onClick={() => X_gate(setDirection, direction)}>X</button>
                    <button className='YGateButton' onClick={() => Y_gate(setDirection, direction)}>Y</button>
                    <button className='ZGateButton' onClick={() => Z_gate(setDirection, direction)}>Z</button>
                    <button className='HGateButton' onClick={() => H_gate(setDirection, direction)}>H</button>
                    <Canvas camera={{position:[3,2,4], fov:45}}>
                        <FacedTxt Position={[0,1.5,0]} Content={"|0>"}></FacedTxt>
                        <FacedTxt Position={[0,-1.5,0]} Content={"|1>"}></FacedTxt>
                        <FacedTxt Position={[-1.3,0,0]} Content={"X"}></FacedTxt>
                        <FacedTxt Position={[1.3,0,0]} Content={"Y"}></FacedTxt>                       
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

export default Simulator
