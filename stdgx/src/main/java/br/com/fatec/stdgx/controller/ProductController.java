package br.com.fatec.stdgx.controller;

import br.com.fatec.stdgx.models.product.Product;
import br.com.fatec.stdgx.models.product.ProductRequestDTO;
import br.com.fatec.stdgx.models.product.ProductResponseDTO;
import br.com.fatec.stdgx.repository.ProductRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductRepository repository;

    @PostMapping
    public ResponseEntity postProduct(@RequestBody @Valid ProductRequestDTO body) {
        Product newProduct = new Product(body);

        this.repository.save(newProduct);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllProducts() {
        List<ProductResponseDTO> productList = this.repository.findAll().stream().map(ProductResponseDTO::new).toList();

        return ResponseEntity.ok(productList);
    }
}
