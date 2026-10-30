import type { Equipment } from "../types/equipment";

export type EquipmentCardProps = {
  equipment : Equipment;
};

export function EquipmentCard({ equipment }: EquipmentCardProps ){
  return (
    <div className="equipment-card">
      <h3 className="equipment-name">{equipment.name}</h3>
      <p className="equipemnt-temperature">Temperature: {equipment.temperature}°C</p>
      <p className={`equipment-status ${equipment.status.toLocaleLowerCase()}`}>{equipment.status}</p>
    </div>
  )
}