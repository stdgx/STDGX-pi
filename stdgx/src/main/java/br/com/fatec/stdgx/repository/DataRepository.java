package br.com.fatec.stdgx.repository;

import br.com.fatec.stdgx.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<User, Integer> {
    User findByLogin(String login);
}
