import { Canvas } from "@react-three/fiber";
import Scene from "./components/scene";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

export default function EarthMarker() {
    return (
        <>
            <Canvas
                camera={{ position: [5, 0, 0], fov: 50 }}
                style={{ background: "white" }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
}
