import { getData } from "./base_repository.js";

const url = 'cathegory/'

export async function getCathegoryListFromRepository() {
    return await getData(`${ url }all`)
}

export async function getCathegoryByIDFromRepository(id) {
    return getData(`${ url }${ id }`)
}