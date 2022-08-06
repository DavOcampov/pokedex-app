import { View } from 'react-native';
import React, { useState, useEffect } from 'react'; /* useEffect Se ejecuta cuando se monta el componente, useState guarda un estado y cuando se modifique se renderice en tiempo real */
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from '../api/pokemonApi'; /* Exportamos las funciones */
import PokemonList from '../components/PokemonList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()  /* Generamos funcion anonima autoejecutable */
  }, [])

  /* Funcion para traer la lista de pokemons */
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl); /* Pasamos url para traer nuevos pokemos */
      setNextUrl(response.next)
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url) /* Pasamos la url que cargara la informacion detallada del pokemon */

        /* Añadimos los nuevos datos seleccionados a arreglo */
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray]); /* (Expres Operator)) seteamos el nuevo arreglo con el arreglo antetior o actual */
    } catch {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemonsL={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}