import { useGLTF } from "@react-three/drei";
const SkeleModel = "/models/skeleton.glb";
export default function Skele() {
    const { nodes, materials } = useGLTF(SkeleModel);
    console.log(nodes, materials);
    return (
        <group>
            <mesh
                geometry={nodes.arrows.geometry}
                material={materials.weapons_mat}
            />
            <mesh
                geometry={nodes.skeleton_primitive0.geometry}
                material={materials.skele_mat}
            />
            <mesh
                    geometry={nodes.skeleton_primitive1.geometry}
                    material={materials.skele_mat}
                    // material-side={THREE.FrontSide}
                />
        </group>
    );
}
useGLTF.preload(SkeleModel);
