package com.springsecurity.desafio.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "tb_individual_customer")
@Getter
@Setter
public class IndividualCustomer extends Customer {

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(unique = true, nullable = false)
    private String cpf;

    private String name;
}
