package com.springsecurity.desafio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TesteErro500Controller {

    @GetMapping("teste-erro")
    public String generateError() {
        int result = 10 / 0;
        return "Não será alcançado";
    }
}
