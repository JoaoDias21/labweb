import {Text, Billboard} from "@react-three/drei";

const FacedTxt = ({Position, Content}) => {
    return (
        <Billboard>
            <Text position={Position} scale={[0.5, 0.5, 0.5]}>{Content}</Text>
        </Billboard>
    )
}

export default FacedTxt;