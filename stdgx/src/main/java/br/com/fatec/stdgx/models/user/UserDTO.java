package br.com.fatec.stdgx.models.user;

public record UserDTO(String login, UserRole role, String customerAttributeJSON) {
}
