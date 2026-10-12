import {
    AccumulativeShadows,
    Center,
    Environment,
    OrbitControls,
    RandomizedLight,
} from "@react-three/drei";
import OozeCube from "./ooze-cube";
import Skele from "./skele";
const dancingHallEnvironment = "/environments/dancing_hall.hdr";

export default function Scene() {
    const config = {
        transmissionSampler: false,
        backside: true,
        samples: 10,
        resolution: 1024,
        transmission: 1,
        roughness: 0,
        thickness: 1,
        ior: 1.5,
        chromaticAberration: 0.02,
        anisotropy: 0,
        distortion: 1,
        distortionScale: 0.2,
        temporalDistortion: 0.3,
        clearcoat: 1,
        attenuationDistance: 1,
        attenuationColor: "#ffffff",
        color: "#c9ffa1",
        bg: "#839681",
    };
    return (
        <>
            <ambientLight intensity={Math.PI} />
            <group position={[0, -2.5, 0]}>
                <Center top>
                    <OozeCube config={config}>
                        <Skele />
                    </OozeCube>
                </Center>
                <AccumulativeShadows
                    frames={40}
                    alphaTest={0.9}
                    color="#525252"
                    colorBlend={1}
                    opacity={0.8}
                    scale={20}
                >
                    <RandomizedLight
                        radius={10}
                        ambient={0.5}
                        intensity={Math.PI}
                        position={[2.5, 8, -2.5]}
                        bias={0.001}
                    />
                </AccumulativeShadows>
            </group>
            <Environment
                files={dancingHallEnvironment}
                // background
                // backgroundBlurriness={1}
            />

            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </>
    );
}
