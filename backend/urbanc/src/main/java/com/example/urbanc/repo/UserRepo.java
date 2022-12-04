package com.example.urbanc.repo;

import com.example.urbanc.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
    public User findByEmailIgnoreCase(String email);
    public User findById(int id);

}
