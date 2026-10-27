import "./App.css";

export type EquipmentStatus = "RUNNING" | "STOPPED" | "WARNING";

export type Equipment = {
  id: number;
  name: string;
  temperature: number;
  status: EquipmentStatus;
};

type EquipmentCardProps = {
  equipment : Equipment;
};

function EquipmentCard({ equipment }: EquipmentCardProps ){
  return (
    <div className="equipment-card">
      <h3 className="equipment-name">{equipment.name}</h3>
      <p className="equipemnt-temperature">Temperature: {equipment.temperature}°C</p>
      <p className={`equipment-status ${equipment.status.toLocaleLowerCase()}`}>{equipment.status}</p>
    </div>
  )
}

type SummaryCardProps = {
  title: string;
  value: number;
}

function SummaryCard({title, value}: SummaryCardProps){
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{value}</p>
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
    },
    { id: 4,
      name: "CONVEYOR-01",
      temperature: 45.2,
      status: "RUNNING"
    }
  ];

  const totalEquipment = equipments.length;
  const runningEquipment = equipments.filter((equipment) => (equipment.status === "RUNNING")).length;
  const stoppedEquipment = equipments.filter((equipment) => (equipment.status === "STOPPED")).length;
  const warningEquipment = equipments.filter((equipment) => (equipment.status === "WARNING")).length;

  return (
    <div>
      <header className="header">
        <h1>TwinOps</h1>
        <p>Smart Factory Monitoring</p>
      </header>
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Memu</h2>
          <nav className="sidebar-nav">
            <p>Dashboard</p>
            <p>Equipment</p>
            <p>Alerts</p>
          </nav>
        </aside>
        <main className="main-content">
          <div className="page-header">
            <h2>Dashboard</h2>
            <p>Factory Equipment Status</p>
          </div>

          <div className="summary-grid">
            <SummaryCard title="Total Equipment" value={totalEquipment} />
            <SummaryCard title="Running Equipment" value={runningEquipment} />
            <SummaryCard title="Stoppped Equipment" value={stoppedEquipment} />
            <SummaryCard title="Warning Equipment" value={warningEquipment} />
          </div>
            <h3>Equipment Status</h3>
          <div className="equipment-grid">
            {equipments.map((equipment) => (
                <EquipmentCard
                  key={equipment.id}
                  equipment={equipment}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}
export default App