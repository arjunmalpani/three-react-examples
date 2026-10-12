import { Canvas } from "@react-three/fiber";
import Scene from "./components/scene";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

export default function GelatinousCube() {
    return (
        <>
            <Canvas
                shadows
                camera={{ position: [15, 0, 15], fov: 50 }}
                style={{ background: "#f0f0f0" }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
}
