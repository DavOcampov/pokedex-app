import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constant";

/* Funcion para traer los datos de favoritos y retornarlos desde el storage */
export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]");
  } catch (error) {
    throw error;
  }
}

/* Funcion para guardar los datos de favoritos en en storage */
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.push(
      id
    ); /* añade uno o más elementos al final de un array y devuelve la nueva longitud del array. */
    await AsyncStorage.setItem(
      FAVORITE_STORAGE,
      JSON.stringify(favorites)
    ); /* Alamacenamos el arreglo comvirtiendolo en un sring */
  } catch (error) {
    throw Error;
  }
}

/* Funcion para verificar existencia de item en favoritos */
export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoriteApi();
    return includes(response, id) /* Buscamos el id dentro del array, si lo encuentra devulve true */
  } catch (error) {
    throw error;
  }
}

/* Funcion para eliminar item en favoritos */
export async function removePokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonFavoriteApi();
        const newFavorites = pull(favorites, id); /* Eliminamos item del array con pull */
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify(newFavorites)
          ); /* Alamacenamos el nuevo arreglo comvirtiendolo en un sring */
    } catch (error) {
        throw error;
    }
}