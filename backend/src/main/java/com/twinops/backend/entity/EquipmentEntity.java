package com.twinops.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "equipment")
public class EquipmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String status;
    private double temperature;

    protected EquipmentEntity() {}

    public EquipmentEntity(String name, String status, double temperature) {
        this.name = name;
        this.status = status;
        this.temperature = temperature;
    }

}
