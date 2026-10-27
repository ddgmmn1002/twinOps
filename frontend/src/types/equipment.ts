export type EquipmentStatus = "NORMAL" | "WARNING" | "ERROR";

export interface Equipment {
  id: number;
  name: string;
  status: EquipmentStatus;
  temperature: number;
}