
const baseUrl = 'http://localhost:8080/'

export async function getData(url) {
    const response = await fetch(`${ baseUrl }${ url }`, {
        method: "GET",
        headers: { "Content-Type": "application/json"},
    }).catch((error) => console.log(`Erro ao fazer a requisição:`, error))
    
    console.log(response)
    return await response.json()
}

export async function setData(url, data) {
    const response = await fetch(`${ baseUrl }${ url }`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).catch((error) => console.log(`Erro ao fazer a requisição:`, error))
    
    console.log(response)
}