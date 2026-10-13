import { MeshTransmissionMaterial, useFBO, useGLTF } from "@react-three/drei";
import { createPortal, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useState } from "react";
import { useRef } from "react";
import * as THREE from "three";

const lensModel = "/models/lens.glb";
export default function Lens({
    children,
    damping = 0.15,
    scale = 0.25,
    zDistance = 15,
    ...props
}) {
    const ref = useRef();

    const viewport = useThree((state) => state.viewport);
    const buffer = useFBO();

    const { nodes } = useGLTF(lensModel);

    const [scene] = useState(() => new THREE.Scene());

    useFrame((state, delta) => {
        const viewport = state.viewport.getCurrentViewport(state.camera, [
            0,
            0,
            zDistance,
        ]);
        // without ease
        // ref.current.position.x = (state.pointer.x * viewport.width) / 2;
        // ref.current.position.y = (state.pointer.y * viewport.height) / 2;
        // ref.current.position.z = zDistance;

        // with ease
        easing.damp3(
            ref.current.position,
            [
                (state.pointer.x * viewport.width) / 2,
                (state.pointer.y * viewport.height) / 2,
                zDistance,
            ],
            damping,
            delta,
        );
        state.gl.setRenderTarget(buffer);
        state.gl.setClearColor("#d8d7d7");
        state.gl.render(scene, state.camera);
        state.gl.setRenderTarget(null);
    });

    return (
        <>
            {createPortal(children, scene)}

            <mesh scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry />
                <meshBasicMaterial map={buffer.texture} />
            </mesh>
            <mesh
                ref={ref}
                scale={scale}
                rotation-x={Math.PI / 2}
                geometry={nodes.Cylinder.geometry}
                {...props}
            >
                <MeshTransmissionMaterial
                    buffer={buffer.texture}
                    ior={1.6}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    roughness={0.5}
                    transmission={1}
                    thickness={0.1}
                    anisotropy={0.1}
                    chromaticAberration={0.01}
                />
            </mesh>
        </>
    );
}
useGLTF.preload(lensModel);
