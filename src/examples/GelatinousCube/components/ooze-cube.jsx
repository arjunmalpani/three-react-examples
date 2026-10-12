import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const cubesModel = "/models/cubes.glb";
export default function OozeCube({ children, config, ...props }) {
    const { nodes, materials } = useGLTF(cubesModel);
    return (
        <group dispose={null} {...props}>
            <mesh
                geometry={nodes.cube1.geometry}
                position={[-0.56, 0.38, -0.11]}
            >
                <MeshTransmissionMaterial
                    background={new THREE.Color(config.bg)}
                    {...config}
                />
            </mesh>
            <mesh
                castShadow
                renderOrder={-100}
                geometry={nodes.cube2.geometry}
                material={materials.cube_mat}
                material-side={THREE.FrontSide}
                position={[-0.56, 0.38, -0.11]}
            />
            <mesh
                geometry={nodes.bubbles.geometry}
                material={materials.cube_bubbles_mat}
                position={[-0.56, 0.38, -0.11]}
            />
            <group position={[-0.56, 0.38, -0.41]}>{children}</group>
        </group>
    );
}
useGLTF.preload(cubesModel);
