package br.com.fatec.stdgx.models.user;

public record RegisterDTO(String login, String password, UserRole role) {
}
