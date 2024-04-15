CREATE TABLE CATHEGORY (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_categ VARCHAR(50) NOT NULL,
    description TEXT,
    register_date DATE
);

CREATE TABLE BOOK (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100),
    categ_id INT,
    FOREIGN KEY (categ_id) REFERENCES CATHEGORY(id)
);

CREATE VIEW BOOK_VIEW AS
SELECT
    BOOK.ID,
    BOOK.TITLE,
    BOOK.AUTHOR,
    CATHEGORY.NAME_CATEG
FROM
    BOOK,
    CATHEGORY
WHERE BOOK.CATEG_ID = CATHEGORY.ID;

INSERT INTO CATHEGORY (name_categ, description, register_date) VALUES
('Ficção Científica', 'Livros que exploram temas de ficção científica e futurismo.', '2024-04-14'),
('Fantasia', 'Livros que envolvem elementos de magia e mundos imaginários.', '2024-04-14'),
('Romance', 'Livros que exploram relacionamentos e emoções humanas.', '2024-04-14'),
('Suspense', 'Livros que mantêm o leitor tenso e ansioso pelo desenrolar da trama.', '2024-04-14'),
('Não Ficção', 'Livros baseados em fatos reais e informações verídicas.', '2024-04-14'),
('Aventura', 'Livros que envolvem viagens, descobertas e desafios emocionantes.', '2024-04-14'),
('Mistério', 'Livros que apresentam enigmas e situações intrigantes a serem desvendadas.', '2024-04-14'),
('Autoajuda', 'Livros que oferecem orientação e conselhos para o desenvolvimento pessoal.', '2024-04-14'),
('História', 'Livros que abordam eventos e narrativas históricas.', '2024-04-14'),
('Biografia', 'Livros que contam a história da vida de uma pessoa real.', '2024-04-14'),
('Ciências', 'Livros que exploram conceitos e descobertas científicas.', '2024-04-14'),
('Fantasia Épica', 'Livros que descrevem mundos épicos e reinos fantásticos.', '2024-04-14'),
('Poesia', 'Livros que apresentam poemas e versos artísticos.', '2024-04-14');

INSERT INTO BOOK (title, author, categ_id) VALUES
('Jogador Nº 1', 'Ernest Cline', 1),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 2),
('Orgulho e Preconceito', 'Jane Austen', 3),
('O Código Da Vinci', 'Dan Brown', 4),
('O Senhor dos Anéis', 'J.R.R. Tolkien', 2),
('Pai Rico, Pai Pobre', 'Robert Kiyosaki', 5),
('As Crônicas de Nárnia', 'C.S. Lewis', 3),
('Harry Potter e o Prisioneiro de Azkaban', 'J.K. Rowling', 2),
('O Ladrão de Raios', 'Rick Riordan', 2),
('O Poder do Hábito', 'Charles Duhigg', 5),
('Harry Potter e as Relíquias da Morte','J.K. Rowling', 2),
('A Culpa É das Estrelas', 'John Green', 3),
('1984', 'George Orwell', 1),
('Steve Jobs', 'Walter Isaacson', 2),
('Breve História do Tempo', 'Stephen Hawking', 3),
('O Hobbit', 'J.R.R. Tolkien', 4),
('O Menino do Pijama Listrado', 'John Boyne', 1),
('Uma Breve História da Humanidade', 'Yuval Noah Harari', 3),
('As Crônicas de Gelo e Fogo: A Guerra dos Tronos', 'George R.R. Martin', 4),
('A Revolução dos Bichos', 'George Orwell', 1);