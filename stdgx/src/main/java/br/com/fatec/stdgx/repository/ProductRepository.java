package br.com.fatec.stdgx.repository;


import br.com.fatec.stdgx.models.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
