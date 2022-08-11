import { View, Text } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { getPokemonFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPkemonDetailsApi } from "../api/pokemonApi";
import PokemonList from "../components/PokemonList";
import { useFocusEffect } from "@react-navigation/native";

export default function Favorite(props) {
  const { router } = props;
  const [pokemonFav, setPokemonFav] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(()=>{
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonsArray = [];
  
          for await (const id of response) {
            const pokemonDetails = await getPkemonDetailsApi(
              id
            ); /* Pasamos la id que cargara la informacion detallada del pokemon */
            /* Añadimos los nuevos datos seleccionados a arreglo */
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemonFav(pokemonsArray);
        })();
      }
    }, [auth])
  )

  return !auth ? (
    <Text>Usuario no logeado</Text>
  ) : (
    <PokemonList pokemonsL={pokemonFav} />
  );
}
