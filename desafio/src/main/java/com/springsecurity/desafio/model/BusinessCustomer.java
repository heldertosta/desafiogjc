package com.springsecurity.desafio.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_business_customer")
@Getter
@Setter
public class BusinessCustomer extends Customer {

    @Column(unique = true, nullable = false)
    private String cnpj;

    private String companyName;

    private String tradeName;
}
