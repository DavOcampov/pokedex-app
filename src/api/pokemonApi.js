import { API_HOST } from "../utils/constant" /* Importamos la constate de la api-host a consumir */

export async function getPokemonsApi(endPointUrl) { /* Peticion HTTP ascincrona para resolver */
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`; /* Construimos la url para traer la lista de a 20 items*/
        const response = await fetch(endPointUrl || url); /* Ejecutamos la peticion HTTP al servidor con un await usando fetch, si el endPoint no trae datos toma la url normal */
        const result = await response.json(); /* Recuperamos los datos en JSON */
        return result; /* Retornamos los datos */
    }
    catch (error) {
        throw error;
    }
}

export async function getPokemonsDetailsByUrlApi(url) { /* Peticion HTTP ascincronica para traer dellades desde la url */
    try{
        const response = await fetch(url)
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPkemonDetailsApi(id) {
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}