import {
    OrbitControls,
    Preload,
    Scroll,
    ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lens from "./components/lens";
import Images from "./components/images";
import Texts from "./components/texts";

export default function LensScroll() {
    return (
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
            <ScrollControls damping={0.2} pages={3} distance={0.5}>
                <Lens scale={0.2}>
                    <Scroll>
                        <Texts />
                        <Images />
                    </Scroll>
                    <Preload />
                </Lens>
            </ScrollControls>
            {/* <OrbitControls enableRotate={false} />*/}
        </Canvas>
    );
}
