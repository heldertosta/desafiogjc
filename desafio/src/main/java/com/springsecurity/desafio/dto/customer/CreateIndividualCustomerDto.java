package com.springsecurity.desafio.dto.customer;

import java.time.LocalDate;

public record CreateIndividualCustomerDto(
        String phone,
        LocalDate birthDate,
        String cpf,
        String name
) {}
