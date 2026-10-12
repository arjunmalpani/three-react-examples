import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";
import * as THREE from "three";
export default function Marker({ children, ...props }) {
    const group = useRef();
    const [isInRange, setIsInRange] = useState();
    const [isOccluded, setIsOccluded] = useState();
    const isVisible = isInRange && !isOccluded;
    const position = new THREE.Vector3();
    useFrame((state, _delta) => {
        const range =
            state.camera.position.distanceTo(
                group.current.getWorldPosition(position),
            ) <= 10;

        if (range !== isInRange) {
            setIsInRange(range);
        }
    });

    return (
        <group ref={group}>
            <Html
                transform
                occlude
                onOcclude={setIsOccluded} // sets bool it the state
                style={{
                    transition: "all 0.25s",
                    opacity: isVisible ? 1 : 0,
                    transform: `scale(${isVisible ? 1 : 0.25})`,
                }}
                {...props}
            >
                {children}
            </Html>
        </group>
    );
}
