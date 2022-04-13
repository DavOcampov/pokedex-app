import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next)
      console.log(response)
      const pokemonsArray = [];
      for await (const pokemon of response.results) {

        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })

      }

      setPokemons([...pokemons, ...pokemonsArray]);
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