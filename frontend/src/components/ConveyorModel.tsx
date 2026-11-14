//gltf로 외부 모델링 파일 가져오기
import { Clone, useGLTF } from "@react-three/drei";
import type { EquipmentStatus } from "../types/equipment";

//컨베이어 모델의 타입 지정: 위치, 크기, 상태 전달
type ConveyorModelProps = {
    id: number;
    position?: [number, number, number];
    scale?: number;
    status: EquipmentStatus;
    onSelectEquipment: (id: number) => void;
}

//설비 상태 별 색상 지정
const statusColors: Record<EquipmentStatus, string> = {
    RUNNING: "#22c55e",
    STOPPED: "#64748b",
    WARNING: "#f59e0b",
};


export function ConveyorModel({
    id,
    position = [0, 0, 0], 
    scale = 1, 
    status,
    onSelectEquipment
}: ConveyorModelProps) {
    const gltf = useGLTF("/models/conveyor.glb");
     //외부 모델링 파일 가져오기 Hook.
    const color = statusColors[status];
    return (
        <Clone
            onClick={() => onSelectEquipment(id)}
            object={gltf.scene}
            position={position} 
            scale={scale}
            inject={<meshStandardMaterial color={color} />}
        />
        //JSX로 구성한 객체는 mesh 태그를, 이미 만들어진 객체는 primitive 태그를, 객체를 복제해서 사용할 때는 Clone 태그를 사용한다.
    );
}

