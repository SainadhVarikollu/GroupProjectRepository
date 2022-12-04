package com.example.urbanc.controller;

import com.example.urbanc.dto.UserCredential;
import com.example.urbanc.model.User;
import com.example.urbanc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;
import java.util.HashMap;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/user/{email}/{password}", produces = "application/json")
    public ResponseEntity checkLogin(@PathVariable("email") String email, @PathVariable("password") String password){

        HashMap<Object, Object> map = new HashMap<>();
        User user = userService.checkLogin(email, password);
        if(user != null){
            map.put("userId",user.getId());
            map.put("status","Success");
        } else {
            map.put("status","Failure");
            map.put("message","Wrong email or password");
        }

        return new ResponseEntity(map, HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/user/login")
    public ResponseEntity checkCredentials(@RequestBody UserCredential userCredential){

        HashMap<Object, Object> map = new HashMap<>();
        User user = userService.checkLogin(userCredential.getEmail(), userCredential.getPassword());
        if(user != null){
            map.put("userId",user.getId());
            map.put("status","Success");
        } else {
            map.put("status","Failure");
            map.put("message","Wrong email or password");
        }

        return new ResponseEntity(map, HttpStatus.ACCEPTED);
    }


   @PostMapping(value = "/user/register",consumes = "application/json", produces = "application/json")
   public ResponseEntity registerUser(@RequestBody User user){
        HashMap<Object, Object> map = new HashMap<>();
        User user1 = userService.saveUser(user);
        map.put("status","Success");
        map.put("userId",user1.getId());
        return new ResponseEntity(map, HttpStatus.ACCEPTED);
   }

}
