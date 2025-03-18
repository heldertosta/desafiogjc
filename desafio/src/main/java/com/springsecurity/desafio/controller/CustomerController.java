package com.springsecurity.desafio.controller;

import com.springsecurity.desafio.dto.customer.CreateBusinessCustomerDto;
import com.springsecurity.desafio.dto.customer.CreateIndividualCustomerDto;
import com.springsecurity.desafio.dto.customer.UpdateCustomerDto;
import com.springsecurity.desafio.model.Customer;
import com.springsecurity.desafio.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/business")
    public ResponseEntity<UUID> createBusinessCustomer(@RequestBody CreateBusinessCustomerDto dto,
                                                       JwtAuthenticationToken token) {
        UUID authenticatedUserId = UUID.fromString(token.getName());
        UUID customerId = customerService.createBusinessCustomer(dto, authenticatedUserId);
        return ResponseEntity.ok(customerId);
    }

    @PostMapping("/individual")
    public ResponseEntity<UUID> createIndividualCustomer(@RequestBody CreateIndividualCustomerDto dto,
                                                         JwtAuthenticationToken token) {
        UUID authenticatedUserId = UUID.fromString(token.getName());
        UUID customerId = customerService.createIndividualCustomer(dto, authenticatedUserId);
        return ResponseEntity.ok(customerId);
    }

    @GetMapping
    public ResponseEntity<List<Customer>> listCustomers(JwtAuthenticationToken token) {
        UUID authenticatedUserId = UUID.fromString(token.getName());
        List<Customer> customers = customerService.listCustomers(authenticatedUserId);
        return ResponseEntity.ok(customers);
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Void> updateCustomer(@PathVariable UUID customerId,
                                               @RequestBody UpdateCustomerDto dto,
                                               JwtAuthenticationToken token) {
        UUID authenticatedUserId = UUID.fromString(token.getName());
        customerService.updateCustomer(customerId, dto, authenticatedUserId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{customerId}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable UUID customerId,
                                               JwtAuthenticationToken token) {
        UUID authenticatedUserId = UUID.fromString(token.getName());
        customerService.deleteCustomer(customerId, authenticatedUserId);
        return ResponseEntity.noContent().build();
    }
}
