import { API_HOST } from "../utils/constant"

export async function getPokemonsApi(endPointUrl) {
    try {
        const url = `${API_HOST}/pokemon?limit=15&offset=0`;
        const response = await fetch(endPointUrl || url);
        const result = await response.json();
        return result;
    }
    catch (error) {
        throw error;
    }
}

export async function getPokemonsDetailsByUrlApi(url) {
    try{
        const response = await fetch(url)
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}