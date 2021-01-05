package com.springpro.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // restController test
public class testRestController {
    @GetMapping("/api/hello")
    public String hello(){
        return "hello";
    }
}
