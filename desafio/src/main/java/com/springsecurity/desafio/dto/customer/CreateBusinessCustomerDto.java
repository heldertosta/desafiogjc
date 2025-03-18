package com.springsecurity.desafio.dto.customer;

public record CreateBusinessCustomerDto(
        String phone,
        String cnpj,
        String companyName,
        String tradeName
) {}
