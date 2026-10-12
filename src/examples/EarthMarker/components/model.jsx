import { useGLTF } from "@react-three/drei";
import Marker from "./marker";
import { FaMapMarkerAlt } from "react-icons/fa";

const earthModel = "/models/earth.gltf";
export default function Model(props) {
    const { nodes, materials } = useGLTF(earthModel);
    return (
        <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props}>
            <mesh
                geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
                material={materials.Lampd_Ice}
            />
            <mesh
                geometry={nodes["URF-Height_watr_0"].geometry}
                material={materials.watr}
                material-roughness={0}
            />
            <mesh
                geometry={nodes["URF-Height_Lampd_0"].geometry}
                material={materials.Lampd}
                material-color="lightgreen"
            />

            <Marker rotation={[0, Math.PI / 2, 0]} position={[0, 1.3, 0]}>
                <FaMapMarkerAlt color="red" />
            </Marker>
            <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
                <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
                    <div
                        style={{
                            position: "absolute",
                            fontSize: 10,
                            letterSpacing: -0.5,
                            left: 17.5,
                        }}
                    >
                        north
                    </div>
                    <FaMapMarkerAlt style={{ color: "steelblue" }} />
                </Marker>
            </group>
        </group>
    );
}

useGLTF.preload(earthModel);
