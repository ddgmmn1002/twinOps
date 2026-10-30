import type { Equipment } from "../types/equipment";

export const equipmentData: Equipment[] = [
    {
        id: 1,
        name: "CNC MACHINE 01",
        status: "RUNNING",
        temperature: 42.5
    },
    {
        id: 2,
        name: "ROBOT ARM 01",
        status: "WARNING",
        temperature: 68.2
    },
    {
        id: 3,
        name: "PRESS MACHINE 01",
        status: "STOPPED",
        temperature: 91.4
    },
    {
        id: 4,
        name: "CNC Machine 02",
        status: "RUNNING",
        temperature: 39.8,
    },
    {
        id: 5,
        name: "Robot Arm 02",
        status: "STOPPED",
        temperature: 45.1,
    },
    {
        id: 6,
        name: "Conveyor 01",
        status: "STOPPED",
        temperature: 37.6,
    },
]