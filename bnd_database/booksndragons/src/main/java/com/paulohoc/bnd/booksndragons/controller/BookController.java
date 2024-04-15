package com.paulohoc.bnd.booksndragons.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paulohoc.bnd.booksndragons.entity.Book;
import com.paulohoc.bnd.booksndragons.entity.BookView;
import com.paulohoc.bnd.booksndragons.service.BookService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/book")
public class BookController {
    BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    // book routes
    @GetMapping("/all")
    public List<BookView> getAllBooks() {
        return service.getBookList();
    }

    @GetMapping("/{id}")
    public BookView getBook(@PathVariable("id") Long id) {
        return service.getBook(id).orElse(null);
    }

    @PostMapping("/new")
    public void saveNewBook(@RequestBody Book book) {
        service.insertBook(book);
    }
}
