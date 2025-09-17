import React, {useEffect, useRef} from "react";
import * as THREE from "three";

function Arrow({direction}) {
    const arrowRef = useRef();
    useEffect(()=>{
        if (arrowRef.current){
            arrowRef.current.setDirection(direction.clone().normalize())
        }
    }, [direction])
    return (
        <arrowHelper
            ref={arrowRef}
            args={[direction.clone().normalize(), new THREE.Vector3(0, 0, 0), 1, '#FFA500']} />
    )
}
export default Arrow;