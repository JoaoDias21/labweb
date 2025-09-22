import * as THREE from "three";

export function X_gate(setDirection, direction){
    if(direction.y === 1 || direction.y === -1){
        setDirection(new THREE.Vector3(direction.x, -direction.y, direction.z));
    }
}

export function Y_gate(setDirection, direction){
    if(direction.y === 1 || direction.y === -1){
        setDirection(new THREE.Vector3(direction.x, -direction.y, direction.z));
    }
    else if(direction.z === 1 || direction.z === -1){
        setDirection(new THREE.Vector3(direction.x, direction.y, -direction.z));
    }
}

export function Z_gate(setDirection, direction){
    if(direction.z === 1 || direction.z === -1){
        setDirection(new THREE.Vector3(direction.x, direction.y, -direction.z));
    }
}

export function H_gate(setDirection, direction){
    if(direction.y === 1){
        setDirection(new THREE.Vector3(0, 0, 1));
    }
    else if(direction.y === -1){
        setDirection(new THREE.Vector3(0, 0, -1));
    }
    else if(direction.z === 1){
        setDirection(new THREE.Vector3(0, 1, 0));
    }
    else if(direction.z === -1){
        setDirection(new THREE.Vector3(0, -1, 0));
    }
}