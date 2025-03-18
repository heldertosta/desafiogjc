package com.springsecurity.desafio.controller;

import com.springsecurity.desafio.dto.customer.CreateBusinessCustomerDto;
import com.springsecurity.desafio.dto.customer.CreateIndividualCustomerDto;
import com.springsecurity.desafio.dto.customer.UpdateCustomerDto;
import com.springsecurity.desafio.model.Customer;
import com.springsecurity.desafio.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CustomerControllerTest {

    @Mock
    private CustomerService customerService;

    @InjectMocks
    private CustomerController customerController;

    private JwtAuthenticationToken mockToken;
    private UUID userId;

    @BeforeEach
    void setUp() {
        userId = UUID.randomUUID();
        mockToken = mock(JwtAuthenticationToken.class);
        when(mockToken.getName()).thenReturn(userId.toString());
    }

    @Test
    void createBusinessCustomer_ShouldReturnCustomerId() {
        CreateBusinessCustomerDto dto = new CreateBusinessCustomerDto("123456789", "1234567890001", "Empresa", "Empresa LTDA");
        UUID customerId = UUID.randomUUID();
        when(customerService.createBusinessCustomer(dto, userId)).thenReturn(customerId);

        ResponseEntity<UUID> response = customerController.createBusinessCustomer(dto, mockToken);

        assertNotNull(response.getBody());
        assertEquals(customerId, response.getBody());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void createIndividualCustomer_ShouldReturnCustomerId() {
        CreateIndividualCustomerDto dto = new CreateIndividualCustomerDto("123456789", LocalDate.of(2000, 10, 10 ), "00011122233", "João");
        UUID customerId = UUID.randomUUID();
        when(customerService.createIndividualCustomer(dto, userId)).thenReturn(customerId);

        ResponseEntity<UUID> response = customerController.createIndividualCustomer(dto, mockToken);

        assertNotNull(response.getBody());
        assertEquals(customerId, response.getBody());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void listCustomers_ShouldReturnListOfCustomers() {
        List<Customer> customers = Arrays.asList(new Customer(), new Customer());
        when(customerService.listCustomers(userId)).thenReturn(customers);

        ResponseEntity<List<Customer>> response = customerController.listCustomers(mockToken);

        assertNotNull(response.getBody());
        assertEquals(2, response.getBody().size());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void updateCustomer_ShouldReturnOkStatus() {
        UUID customerId = UUID.randomUUID();
        UpdateCustomerDto dto = new UpdateCustomerDto("123456789", "11222333000123", "Empresa", "Empresa LTDA", null, null, null);

        ResponseEntity<Void> response = customerController.updateCustomer(customerId, dto, mockToken);

        assertEquals(200, response.getStatusCodeValue());
        verify(customerService, times(1)).updateCustomer(customerId, dto, userId);
    }

    @Test
    void deleteCustomer_ShouldReturnNoContentStatus() {
        UUID customerId = UUID.randomUUID();

        ResponseEntity<Void> response = customerController.deleteCustomer(customerId, mockToken);

        assertEquals(204, response.getStatusCodeValue());
        verify(customerService, times(1)).deleteCustomer(customerId, userId);
    }
}
