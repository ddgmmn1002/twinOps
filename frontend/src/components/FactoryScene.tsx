import {Canvas} from "@react-three/fiber";
import type { Equipment } from "../types/equipment";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { ConveyorModel } from "./ConveyorModel";

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
            <OrbitControls
                target={[0, 0.8, 0]}
                minDistance={3}
                maxDistance={20}
                maxPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={null}>
                {equipments.map((equipment, index) => (
                    <ConveyorModel 
                        key={equipment.id}
                        position = {[
                            (index - (equipments.length - 1) / 2) * 2.5, 
                            0, 
                            0]}
                        scale={0.5}
                        status={equipment.status}
                    />
                ))}
            </Suspense>

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]}/>
                <meshStandardMaterial color="#94a3b8"/>
            </mesh>
        </Canvas>
    </div>
    ) ;
}

