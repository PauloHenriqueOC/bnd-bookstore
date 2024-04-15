import { getBookListDB } from "../data/book_repository.js";

export async function getBookList() {
    return await getBookListDB()
}