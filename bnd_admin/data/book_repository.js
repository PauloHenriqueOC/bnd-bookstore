import { getData, setData } from "./base_repository.js";

const url = 'book/'

export async function getBookListDB() {
    return getData(`${ url }all`)
}

export async function getBookByIdDB(id) {
    return getData(`${ url }${ id }`)
}

export async function setNewBookDB(data) {
    setData(`${ url }new`, data)
}