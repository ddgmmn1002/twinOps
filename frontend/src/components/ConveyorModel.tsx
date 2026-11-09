import { Clone, useGLTF } from "@react-three/drei";
import type { EquipmentStatus } from "../types/equipment";

type ConveyorModelProps = {
    position?: [number, number, number];
    scale?: number;
    status: EquipmentStatus;
}

const statusColors: Record<EquipmentStatus, string> = {
    RUNNING: "#22c55e",
    STOPPED: "#64748b",
    WARNING: "#f59e0b",
};

export function ConveyorModel({
    position = [0, 0, 0], 
    scale = 1, 
    status
}: ConveyorModelProps) {
    const gltf = useGLTF("/models/conveyor.glb");
    const color = statusColors[status];
    return (
        <Clone 
            object={gltf.scene} 
            position={position} 
            scale={scale}
            inject={<meshStandardMaterial color={color} />}
        />
    );
}

