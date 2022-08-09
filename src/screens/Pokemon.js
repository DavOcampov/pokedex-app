import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPkemonDetailsApi } from "../api/pokemonApi";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#FFF"
          size={20}
          style={{ marginLeft: 5 }}
          onPress={()=> navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPkemonDetailsApi(
          params.id
        ); /* Pasamos el id del pokemon para mostrar los datos correspondientes */
        setPokemon(response); /* Seteamos el resultado */
      } catch (error) {
        navigation.goBack(); /* En caso de error nos devuelve a la lista o pantalla anterior */
      }
    })();
  }, [params]); /* useEffect se ejecuta cada vez que params sea modificado */

  if (!pokemon)
    return null; /* Si pokemon tiene infomacion ejecutara o renderiza el componente*/

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
