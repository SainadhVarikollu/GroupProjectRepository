package com.example.urbanc.service;

import com.example.urbanc.model.User;
import com.example.urbanc.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;


    public User checkLogin(String email, String password){
        User user = userRepo.findByEmailIgnoreCase(email);
        if(user != null && user.getPassword().equals(password)){
            return user;
        }
        return null;
    }

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public User findById(int userId) {
        return userRepo.findById(userId);
    }
}
