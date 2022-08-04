import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';

export default function Pokedex() {
  const [masterData, setMasterData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect((text) => {
    (async () => {
      await loadPokemons(text)
    })
  }, [])

  const loadPokemons = async (text) => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next)
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

        if (text) {
          const newData = pokemonsArray.filter((item) => {
            const itemData =
              item.name
                ? (item.name).toUpperCase()
                : "".toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setPokemons([...pokemons, ...newData]);
        } else {
          setPokemons([...pokemons, ...pokemonsArray]);
        }
      }
      
    } catch {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Buscar"
        onChangeText={(text) => loadPokemons(text)}
      />
      <PokemonList pokemonsL={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}