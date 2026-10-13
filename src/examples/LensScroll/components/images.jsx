import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
const img1 = "/images/lens-scroll/img1.jpg";
const img3 = "/images/lens-scroll/img3.jpg";
const img6 = "/images/lens-scroll/img6.jpg";
const img7 = "/images/lens-scroll/img7.jpg";
const img8 = "/images/lens-scroll/img8.jpg";

const trip2 = "/images/lens-scroll/trip2.jpg";
const trip4 = "/images/lens-scroll/trip4.jpg";

export default function Images() {
    const group = useRef();
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    useFrame((state, delta) => {
        group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[2].material.zoom =
            1 + data.range(1.15 / 3, 1 / 3) / 2;
        group.current.children[3].material.zoom =
            1 + data.range(1.15 / 3, 1 / 3) / 2;
        group.current.children[4].material.zoom =
            1 + data.range(1.15 / 3, 1 / 3) / 2;
        group.current.children[5].material.grayscale =
            1 - data.range(1.5 / 3, 1 / 3) / 3;
        group.current.children[6].material.zoom =
            1 + (1 - data.range(2 / 3, 1 / 3) / 3);
    });
    return (
        <group ref={group}>
            <Image position={[-2, 0, 0]} scale={[4, height, 1]} url={img1} />
            <Image position={[2, 0, 3]} scale={3} url={img6} />
            <Image
                position={[-2.05, -height, 6]}
                scale={[1, 3, 1]}
                url={trip2}
            />
            <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url={img8} />
            <Image position={[0.75, -height, 10.5]} scale={1.5} url={trip4} />
            <Image
                position={[0, -height * 1.5, 7.5]}
                scale={[1.5, 3, 1]}
                url={img3}
            />
            <Image
                position={[0, -height * 2 - height / 4, 0]}
                scale={[width, height / 1.1, 1]}
                url={img7}
            />
        </group>
    );
}
