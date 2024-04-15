import { getBookByIDFromRepository } from "../data/book_repository.js";

export async function getBookByID(id) {
    return await getBookByIDFromRepository(id)
}