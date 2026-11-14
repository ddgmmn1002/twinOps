package com.twinops.backend.model;

public record Equipment(
        Long id,
        String name,
        String status,
        double temperature
) { }
