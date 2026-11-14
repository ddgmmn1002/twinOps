import "./App.css";
//data
import { equipmentData } from "./data/equipment";
//component
import { SummaryCard } from "./components/SummaryCard";
import { EquipmentCard } from "./components/EquipmentCard";
import { FactoryScene } from "./components/FactoryScene";
import { useState } from "react";

function App(){
  const totalEquipment = equipmentData.length;
  //설비 데이터 전체 길이 구하기
  const runningEquipment = equipmentData.filter((equipment) => (equipment.status === "RUNNING")).length;
  const stoppedEquipment = equipmentData.filter((equipment) => (equipment.status === "STOPPED")).length;
  const warningEquipment = equipmentData.filter((equipment) => (equipment.status === "WARNING")).length;
  //설비 각 상태 별 데이터 길이 구하기

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedEquipment = equipmentData.find((equipment) => equipment.id === selectedId);

  return (
    <div>
      <header className="header">
        <h1>TwinOps</h1>
        <p>Smart Factory Monitoring</p>
      </header>
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Menu</h2>
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
            <SummaryCard title="Stopped Equipment" value={stoppedEquipment} />
            <SummaryCard title="Warning Equipment" value={warningEquipment} />
          </div>
          <FactoryScene 
            equipments={equipmentData}
            onSelectEquipment={setSelectedId}/>
          {selectedEquipment &&
            (<div>                
                <h3>Seleceted Equipment</h3>
                <EquipmentCard equipment={selectedEquipment}/>
              </div>)}
          <h3>Equipment Status</h3>
          <div className="equipment-grid">
            {equipmentData.map((equipment) => (
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