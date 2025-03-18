package com.springsecurity.desafio.service;

import com.springsecurity.desafio.dto.customer.CreateBusinessCustomerDto;
import com.springsecurity.desafio.dto.customer.CreateIndividualCustomerDto;
import com.springsecurity.desafio.dto.customer.UpdateCustomerDto;
import com.springsecurity.desafio.model.BusinessCustomer;
import com.springsecurity.desafio.model.Customer;
import com.springsecurity.desafio.model.IndividualCustomer;
import com.springsecurity.desafio.model.Role;
import com.springsecurity.desafio.model.User;
import com.springsecurity.desafio.repository.BusinessCustomerRepository;
import com.springsecurity.desafio.repository.CustomerRepository;
import com.springsecurity.desafio.repository.IndividualCustomerRepository;
import com.springsecurity.desafio.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private BusinessCustomerRepository businessCustomerRepository;

    @Autowired
    private IndividualCustomerRepository individualCustomerRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public UUID createBusinessCustomer(CreateBusinessCustomerDto dto, UUID authenticatedUserId) {
        var existingCustomer = businessCustomerRepository.findByCnpj(dto.cnpj());
        if (existingCustomer.isPresent()) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CNPJ informado já existe na base de dados!");
        }

        User user = userRepository.findById(authenticatedUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));

        BusinessCustomer customer = new BusinessCustomer();
        customer.setPhone(dto.phone());
        customer.setUser(user);
        customer.setCnpj(dto.cnpj());
        customer.setCompanyName(dto.companyName());
        customer.setTradeName(dto.tradeName());

        return businessCustomerRepository.save(customer).getCustomerId();
    }

    @Transactional
    public UUID createIndividualCustomer(CreateIndividualCustomerDto dto, UUID authenticatedUserId) {
        var existingCustomer = individualCustomerRepository.findByCpf(dto.cpf());
        if (existingCustomer.isPresent()) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CPF informado já existe na base de dados!");
        }

        User user = userRepository.findById(authenticatedUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));

        IndividualCustomer customer = new IndividualCustomer();
        customer.setPhone(dto.phone());
        customer.setUser(user);
        customer.setBirthDate(dto.birthDate());
        customer.setCpf(dto.cpf());
        customer.setName(dto.name());

        return individualCustomerRepository.save(customer).getCustomerId();
    }

    public List<Customer> listCustomers(UUID authenticatedUserId) {
        userRepository.findById(authenticatedUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));

        return customerRepository.findAll();
    }

    @Transactional
    public void updateCustomer(UUID customerId, UpdateCustomerDto dto, UUID authenticatedUserId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));

        User user = userRepository.findById(authenticatedUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));

        boolean isAdmin = user.getRoles()
                .stream()
                .anyMatch(role -> role.getName().equalsIgnoreCase(Role.Values.ADMIN.name()));

        if (!isAdmin) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Apenas administradores podem alterar clientes");
        }

        if (dto.phone() != null && !dto.phone().isBlank()) {
            customer.setPhone(dto.phone());
        }

        if (customer instanceof BusinessCustomer businessCustomer) {
            if (dto.cnpj() != null && !dto.cnpj().isBlank()) {
                var existingCustomer = businessCustomerRepository.findByCnpj(dto.cnpj());
                if (existingCustomer.isPresent() && !existingCustomer.get().getCustomerId().equals(customerId)) {
                    throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CNPJ já existe na base de dados");
                }
                businessCustomer.setCnpj(dto.cnpj());
            }
            if (dto.companyName() != null && !dto.companyName().isBlank()) {
                businessCustomer.setCompanyName(dto.companyName());
            }
            if (dto.tradeName() != null && !dto.tradeName().isBlank()) {
                businessCustomer.setTradeName(dto.tradeName());
            }
        } else if (customer instanceof IndividualCustomer individualCustomer) {
            if (dto.cpf() != null && !dto.cpf().isBlank()) {
                var existingCustomer = individualCustomerRepository.findByCpf(dto.cpf());
                if (existingCustomer.isPresent() && !existingCustomer.get().getCustomerId().equals(customerId)) {
                    throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CPF já existe na base de dados");
                }
                individualCustomer.setCpf(dto.cpf());
            }
            if (dto.birthDate() != null) {
                individualCustomer.setBirthDate(dto.birthDate());
            }
            if (dto.name() != null && !dto.name().isBlank()) {
                individualCustomer.setName(dto.name());
            }
        }

        customerRepository.save(customer);
    }

    @Transactional
    public void deleteCustomer(UUID id, UUID authenticatedUserId) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado!"));

        User user = userRepository.findById(authenticatedUserId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));

        boolean isAdmin = user.getRoles()
                .stream()
                .anyMatch(role -> role.getName().equalsIgnoreCase(Role.Values.ADMIN.name()));

        if (!isAdmin) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Apenas administradores podem excluir clientes");
        }

        customerRepository.delete(customer);
    }
}
