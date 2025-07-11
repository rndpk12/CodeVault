package com.codevault.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        // Dummy logic: accept username=admin and password=1234
        if ("admin".equals(username) && "1234".equals(password)) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}
