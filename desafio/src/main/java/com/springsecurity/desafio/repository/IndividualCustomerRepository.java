package com.springsecurity.desafio.repository;

import com.springsecurity.desafio.model.IndividualCustomer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface IndividualCustomerRepository extends JpaRepository<IndividualCustomer, UUID> {
    Optional<IndividualCustomer> findByCpf(String  cpf);
}
