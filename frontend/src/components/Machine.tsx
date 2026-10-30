import type{ EquipmentStatus } from "../types/equipment";

export type MachineProps = {
     position: [number, number, number];
     status: EquipmentStatus
}

export function Machine({position, status}: MachineProps) {

    const bodyHeight = 2;
    const cylinderHeight = 0.5;

    const statusColors: Record<EquipmentStatus, string> = {
        RUNNING: "#22c55e",
        STOPPED: "#64748b",
        WARNING: "#f59e0b",
    };

    const color = statusColors[status];

    return (
        <group position= {position}>
            <mesh position={[0, bodyHeight/2, 0]}>
                <boxGeometry args={[2, bodyHeight, 1]}/>
                <meshStandardMaterial color={color}/>
            </mesh>
            <mesh position={[0, bodyHeight+cylinderHeight/2, 0]}>
                <cylinderGeometry args={[0.3, 0.3, cylinderHeight, 32]}/>
                <meshStandardMaterial color="#f59e5b"/>
            </mesh>
        </group>
    );
}