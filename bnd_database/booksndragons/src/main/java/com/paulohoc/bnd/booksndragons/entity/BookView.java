package com.paulohoc.bnd.booksndragons.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BookView {

    @Id
    Long id;
    String title;
    String author;
    String nameCateg;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public String getNameCateg() {
        return nameCateg;
    }

    public void setNameCateg(String nameCateg) {
        this.nameCateg = nameCateg;
    }
}
    