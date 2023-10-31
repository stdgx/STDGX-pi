package br.com.fatec.stdgx.controller;

import br.com.fatec.stdgx.models.user.UserDTO;
import br.com.fatec.stdgx.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("object")
public class DataController {

    @Autowired
    private DataRepository repository;

    @GetMapping("/data/{login}")
    public ResponseEntity getUserByLogin(@PathVariable("login") String login) {
        var data = repository.findByLogin(login);
        return ResponseEntity.ok(new UserDTO(data.getLogin(), data.getRole(), data.getCustomerAttributeJSON()));
    }
}
