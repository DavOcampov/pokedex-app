import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemponCard from './PokemponCard';

export default function PokemonList(props) {
    const { pokemonsL, loadPokemons, isNext } = props;
    /* Funcion para cargar mas y nuevos pokemons a la lista */
    const loadMore = () => {
        loadPokemons();
    }
    return (
        <FlatList
            data={pokemonsL} /* Props array de los pokemons */
            numColumns={4} /* Numero de filas por pantalla */
            showsHorizontalScrollIndicator={false} /* Ocultar barra del scroll */
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)} /* ID del pokemon */
            renderItem={({ item }) => <PokemponCard pokemonI={item} />} /* Rendirizacion del componente */
            contentContainerStyle={styles.flatListContentContainer} /* Estilos del flat */
            onEndReached={isNext && loadMore} /* Cuando llege al final de la lista ejecuta la funcion, si no hay datos en isNext no se ejecutara */
            onEndReachedThreshold={0.1} /* Cuando este a punto de llegar al final de la lista se ejecuta el load */
            ListFooterComponent={
                /* Si ay datos en el isNext se renderiza el componente spinner */
                isNext && (
                    <ActivityIndicator size={40} color="red" style={styles.spinner} />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 20 : 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 80 : 60,
    }
})