package com.paulohoc.bnd.booksndragons.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.paulohoc.bnd.booksndragons.entity.Book;
import com.paulohoc.bnd.booksndragons.entity.BookView;
import com.paulohoc.bnd.booksndragons.repository.BookRepository;
import com.paulohoc.bnd.booksndragons.repository.BookViewRepository;

@Service
public class BookService {
    BookRepository repository;
    BookViewRepository view;

    public BookService(BookRepository repository, BookViewRepository view) {
        this.repository = repository;
        this.view = view;
    }

    // serviços
    public List<BookView> getBookList() {
        return view.findAll();
    }

    public Optional<BookView> getBook(Long id) {
        return view.findById(id);
    }

    public void insertBook(Book entity) {
        repository.save(entity);
    }

    public void deleteBook(Long id) {
        repository.deleteById(id);
    }
}
