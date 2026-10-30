export type EquipmentStatus = "RUNNING" | "STOPPED" | "WARNING";

export interface Equipment  {
  id: number;
  name: string;
  status: EquipmentStatus;
  temperature: number;
}