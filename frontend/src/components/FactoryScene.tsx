import {Canvas} from "@react-three/fiber";
import type { Equipment } from "../types/equipment";
import { Machine } from "./Machine";

export type FactorySceneProps = {
    equipments: Equipment[];
}

export function FactoryScene({equipments}: FactorySceneProps) {
    return (
    <div style={{height: "360px", width: "100%"}}>
        <Canvas camera={{ position: [4, 3, 5], fov: 50}}>
            <color attach="background" args={["#e2e8f0"]} ></color>

            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 4]} intensity={2} />

            {equipments.map((equipment, index) => (
                <Machine
                    key={equipment.id} 
                    position={[(index-1.5)*2.5, 0, 0]} 
                    status={equipment.status}
                />
            ))}

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]}/>
                <meshStandardMaterial color="#94a3b8"/>
            </mesh>
        </Canvas>
    </div>
    ) ;
}

