package com.springsecurity.desafio.repository;

import com.springsecurity.desafio.model.BusinessCustomer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface BusinessCustomerRepository extends JpaRepository<BusinessCustomer, UUID> {
    Optional<BusinessCustomer> findByCnpj(String cnpj);
}
