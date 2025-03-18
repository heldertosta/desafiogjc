package com.springsecurity.desafio.service;

import com.springsecurity.desafio.dto.customer.CreateBusinessCustomerDto;
import com.springsecurity.desafio.dto.customer.CreateIndividualCustomerDto;
import com.springsecurity.desafio.dto.customer.UpdateCustomerDto;
import com.springsecurity.desafio.model.*;
import com.springsecurity.desafio.repository.BusinessCustomerRepository;
import com.springsecurity.desafio.repository.CustomerRepository;
import com.springsecurity.desafio.repository.IndividualCustomerRepository;
import com.springsecurity.desafio.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CustomerServiceTest {

    @InjectMocks
    private CustomerService customerService;

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private BusinessCustomerRepository businessCustomerRepository;

    @Mock
    private IndividualCustomerRepository individualCustomerRepository;

    @Mock
    private UserRepository userRepository;

    private UUID userId;
    private User user;
    private UUID customerId;
    private UpdateCustomerDto updateBusinessCustomerDto;
    private UpdateCustomerDto updateIndividualCustomerDto;

    @BeforeEach
    void setUp() {
        userId = UUID.randomUUID();
        user = new User();
        user.setUserId(userId);
        user.setRoles(Collections.singleton(new Role(Role.Values.ADMIN.name())));
        customerId = UUID.randomUUID();
        updateBusinessCustomerDto = new UpdateCustomerDto("newPhone", "newCnpj", "newCompany", "newTrade", null, null, null);
        updateIndividualCustomerDto = new UpdateCustomerDto("newPhone", null, null, null, LocalDate.of(2000, 1, 1), "12345678901", "João");
    }

    @Test
    void createBusinessCustomer_Success() {
        CreateBusinessCustomerDto dto = new CreateBusinessCustomerDto("12345678000199", "Empresa Teste", "Empresa LTDA", "11999999999");
        when(businessCustomerRepository.findByCnpj(dto.cnpj())).thenReturn(Optional.empty());
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(businessCustomerRepository.save(any())).thenAnswer(invocation -> {
            BusinessCustomer savedCustomer = invocation.getArgument(0);
            savedCustomer.setCustomerId(UUID.randomUUID());
            return savedCustomer;
        });

        UUID customerId = customerService.createBusinessCustomer(dto, userId);

        assertNotNull(customerId);
        verify(businessCustomerRepository).save(any());
    }

    @Test
    void createBusinessCustomer_CnpjAlreadyExists() {
        CreateBusinessCustomerDto dto = new CreateBusinessCustomerDto("12345678000199", "11222333000101", "Empresa LTDA", "Empresa");
        when(businessCustomerRepository.findByCnpj(dto.cnpj())).thenReturn(Optional.of(new BusinessCustomer()));

        assertThrows(ResponseStatusException.class, () -> customerService.createBusinessCustomer(dto, userId));
    }

    @Test
    void createIndividualCustomer_CpfAlreadyExists() {
        CreateIndividualCustomerDto dto = new CreateIndividualCustomerDto("12345678000199", LocalDate.of(2000, 1, 1), "12345678901", "Joao");
        when(individualCustomerRepository.findByCpf(dto.cpf())).thenReturn(Optional.of(new IndividualCustomer()));

        assertThrows(ResponseStatusException.class, () -> customerService.createIndividualCustomer(dto, userId));
    }

    @Test
    void createIndividualCustomer_Success() {
        CreateIndividualCustomerDto dto = new CreateIndividualCustomerDto("62999999999", LocalDate.of(2000, 1, 1), "12345678901",  "Joao");
        when(individualCustomerRepository.findByCpf(dto.cpf())).thenReturn(Optional.empty());
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(individualCustomerRepository.save(any())).thenAnswer(invocation -> {
            IndividualCustomer savedCustomer = invocation.getArgument(0);
            savedCustomer.setCustomerId(UUID.randomUUID());
            return savedCustomer;
        });

        UUID customerId = customerService.createIndividualCustomer(dto, userId);

        assertNotNull(customerId);
        verify(individualCustomerRepository).save(any());
    }

    @Test
    void listCustomers_Success() {
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(customerRepository.findAll()).thenReturn(List.of(new BusinessCustomer(), new IndividualCustomer()));

        List<Customer> customers = customerService.listCustomers(userId);

        assertEquals(2, customers.size());
    }

    @Test
    void shouldUpdateBusinessCustomerSuccessfully() {
        Customer customer = new BusinessCustomer();
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        customerService.updateCustomer(customerId, updateBusinessCustomerDto, userId);
        verify(customerRepository).save(customer);
    }

    @Test
    void shouldUpdateIndividualCustomerSuccessfully() {
        Customer customer = new IndividualCustomer();
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        customerService.updateCustomer(customerId, updateIndividualCustomerDto, userId);
        verify(customerRepository).save(customer);
    }

    @Test
    void shouldThrowExceptionWhenUpdatingCustomerNotFound() {
        when(customerRepository.findById(customerId)).thenReturn(Optional.empty());
        assertThrows(ResponseStatusException.class, () -> customerService.updateCustomer(customerId, updateBusinessCustomerDto, userId));
    }

    @Test
    void shouldThrowExceptionWhenUpdatingCustomerWithNonAdminUser() {
        User nonAdminUser = new User();
        nonAdminUser.setUserId(userId);
        nonAdminUser.setRoles(Collections.singleton(new Role(Role.Values.BASIC.name())));
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(new Customer() {}));
        when(userRepository.findById(userId)).thenReturn(Optional.of(nonAdminUser));
        assertThrows(ResponseStatusException.class, () -> customerService.updateCustomer(customerId, updateBusinessCustomerDto, userId));
    }

    @Test
    void deleteCustomer_NotAdmin() {
        User normalUser = new User();
        normalUser.setUserId(userId);
        normalUser.setRoles(Collections.singleton(new Role(Role.Values.BASIC.name())));

        UUID customerId = UUID.randomUUID();
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(new BusinessCustomer()));
        when(userRepository.findById(userId)).thenReturn(Optional.of(normalUser));

        assertThrows(ResponseStatusException.class, () -> customerService.deleteCustomer(customerId, userId));
    }

    @Test
    void shouldDeleteCustomerSuccessfully() {
        Customer customer = new BusinessCustomer();
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        customerService.deleteCustomer(customerId, userId);
        verify(customerRepository).delete(customer);
    }
}
