import { setNewBookDB } from "../data/book_repository.js";

export async function setNewBook(formTitle, formAuthor, formCateg) {
    const book = {
        title: formTitle,
        author: formAuthor,
        categId: formCateg
    }

    return await setNewBookDB(book)
}