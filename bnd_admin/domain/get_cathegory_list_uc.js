import { getCathegoryListFromRepository } from "../data/cathegory_repository.js";

export async function getCategList() {
    return await getCathegoryListFromRepository()
}