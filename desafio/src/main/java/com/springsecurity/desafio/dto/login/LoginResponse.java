package com.springsecurity.desafio.dto.login;

public record LoginResponse(String accessToken, Long expiresIn) {
}
