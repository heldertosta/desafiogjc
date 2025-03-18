package com.springsecurity.desafio.dto.customer;

import java.time.LocalDate;

public record UpdateCustomerDto(
        String phone,
        String cnpj,
        String companyName,
        String tradeName,
        LocalDate birthDate,
        String cpf,
        String name
) {}
