type Equipment = {
  id: number;
  name: string;
  temperature: number;
  status: "RUNNING" | "STOPPED" | "WARNING";
};

type EquipmentCardProps = {
  equipment : Equipment;
};

function EquipmentCard({ equipment }: EquipmentCardProps ){
  return (
    <div>
      <h3>{equipment.name}</h3>
      <p>{equipment.temperature}</p>
      <p>{equipment.status}</p>
    </div>
  )
}

function App(){
  const equipments: Equipment[] = [
    { id: 1,
      name: "CNC-01",
      temperature: 72.4,
      status: "RUNNING"
    },
    {
      id: 2,
      name: "ROBOT-01",
      temperature: 84.2,
      status: "STOPPED"
    },
    { id: 3,
      name: "PRESS-01",
      temperature: 91.3,
      status: "WARNING"
    }
  ];
  return (
    <div>
      {equipments.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment}/>
      ))}
    </div>
  )
}
export default App