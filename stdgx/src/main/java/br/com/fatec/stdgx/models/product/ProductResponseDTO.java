package br.com.fatec.stdgx.models.product;

public record ProductResponseDTO(Integer id, String name, Integer price) {
    public ProductResponseDTO(Product product) {
        this(product.getId(), product.getName(), product.getPrice());
    }
}
