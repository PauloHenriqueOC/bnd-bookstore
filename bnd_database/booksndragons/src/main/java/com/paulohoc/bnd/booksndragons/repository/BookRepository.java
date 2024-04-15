package com.paulohoc.bnd.booksndragons.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paulohoc.bnd.booksndragons.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> { }
