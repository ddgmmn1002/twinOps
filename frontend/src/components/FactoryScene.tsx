import {Canvas} from "@react-three/fiber";
import type { Equipment } from "../types/equipment";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { ConveyorModel } from "./ConveyorModel";

export type FactorySceneProps = {
    equipments: Equipment[];
    onSelectEquipment: (id: number) => void;
}

export function FactoryScene({equipments, onSelectEquipment}: FactorySceneProps) {
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
                        id={equipment.id}
                        position = {[
                            (index - (equipments.length - 1) / 2) * 2.5, 
                            0, 
                            0]}
                        scale={0.5}
                        status={equipment.status}
                        onSelectEquipment={onSelectEquipment}
                    />
                ))}
            </Suspense>
            //Suspense 태그는 GLB 모델 파일을 읽고 준비하는 시간 동안 대신 표시할 내용을 기정하는 React 컴포넌트.

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]}/>
                <meshStandardMaterial color="#94a3b8"/>
            </mesh>
        </Canvas>
    </div>
    ) ;
}

