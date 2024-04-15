import { getCathegoryByIDFromRepository } from "../data/cathegory_repository.js";

export async function getCategByID(id) {
    return await getCathegoryByIDFromRepository(id)
}