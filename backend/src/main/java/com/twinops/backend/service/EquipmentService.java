package com.twinops.backend.service;

import com.twinops.backend.model.Equipment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {

    public List<Equipment> getEquipments(){
        Equipment equipment1 = new Equipment(1L, "CNC Machine", "NORMAL", 36.5);
        Equipment equipment2 = new Equipment(2L, "Conveyor", "WARNING", 58.2);

        return List.of(equipment1, equipment2);
    }
}
