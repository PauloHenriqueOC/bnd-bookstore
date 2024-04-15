package com.paulohoc.bnd.booksndragons.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.paulohoc.bnd.booksndragons.entity.Cathegory;
import com.paulohoc.bnd.booksndragons.repository.CathegoryRepository;

@Service
public class CathegoryService {
    CathegoryRepository repository;

    public CathegoryService(CathegoryRepository repository) {
        this.repository = repository;
    }
    
    // serviços
    public List<Cathegory> getCathegoryList() {
        return repository.findAll();
    }

    public Optional<Cathegory> getCathegory(Long id) {
        return repository.findById(id);
    }

    public void insertCathegory(Cathegory entity) {
        repository.save(entity);
    }

    public void deleteCathegory(Long id) {
        repository.deleteById(id);
    }
}
