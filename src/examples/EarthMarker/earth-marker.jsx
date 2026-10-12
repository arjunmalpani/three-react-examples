import { Canvas } from "@react-three/fiber";
import Scene from "./components/scene";
import { Loader } from "@react-three/drei";

export default function EarthMarker() {
    return (
        <>
            <Canvas
                camera={{ position: [5, 0, 0], fov: 50 }}
                style={{ background: "white" }}
            >
                <Scene />
            </Canvas>
            <Loader />
        </>
    );
}
