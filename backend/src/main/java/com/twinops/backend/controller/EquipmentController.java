package com.twinops.backend.controller;

import com.twinops.backend.model.Equipment;
import com.twinops.backend.service.EquipmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class EquipmentController {

    private final EquipmentService equipmentService;

    @GetMapping("/api/equipments")
    public List<Equipment> getEquipments(){
        return equipmentService.getEquipments();
    }
}
