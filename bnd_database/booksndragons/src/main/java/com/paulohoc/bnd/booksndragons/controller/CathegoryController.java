package com.paulohoc.bnd.booksndragons.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paulohoc.bnd.booksndragons.entity.Cathegory;
import com.paulohoc.bnd.booksndragons.service.CathegoryService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cathegory")
public class CathegoryController {
    CathegoryService service;

    public CathegoryController(CathegoryService service) {
        this.service = service;
    }

    // cathegory routes

    @GetMapping("/all")
    public List<Cathegory> getAllCathegory() {
        return service.getCathegoryList();
    }

    @GetMapping("/{id}")
    public Cathegory getCathegory(@PathVariable("id") Long id) {
        return service.getCathegory(id).orElse(null);
    }
    
}
