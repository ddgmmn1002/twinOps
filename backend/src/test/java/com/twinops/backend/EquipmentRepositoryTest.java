package com.twinops.backend;

import com.twinops.backend.entity.EquipmentEntity;
import com.twinops.backend.repository.EquipmentRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;

@SpringBootTest
class EquipmentRepositoryTest {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Test
    void saveEquipment(){
        EquipmentEntity equipment = new EquipmentEntity("Motor A", "NORMAL", 25.5);
        equipmentRepository.save(equipment);

    }

    @Test
    void findAllEquipment (){
        List<EquipmentEntity> equipments = equipmentRepository.findAll();
        Assertions.assertThat(equipments).isNotEmpty();
    }
}
