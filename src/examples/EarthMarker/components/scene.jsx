import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Model from "./model";

export default function Scene() {
    // const body = useRef();
    // useFrame((_state, delta) => {
    //     body.current.rotation.y += delta;
    // });
    return (
        <>
            <ambientLight intensity={0.5 * Math.PI} />
            <Environment preset="city" />
            <ContactShadows
                frames={1}
                scale={5}
                position={[0, -1, 0]}
                far={1}
                blur={5}
                opacity={0.5}
                color="#204080"
            />
            {/* <mesh ref={body}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="royalblue" />
            </mesh>*/}
            <Model position={[0, 0.25, 0]} />
            <OrbitControls enablePan={false} />
        </>
    );
}
