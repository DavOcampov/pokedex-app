import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemponCard from './PokemponCard';

export default function PokemonList(props) {
    const { pokemonsL, loadPokemons, isNext } = props;
    const loadMore = () => {
        loadPokemons();
    }
    return (
        <FlatList
            data={pokemonsL}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemponCard pokemonI={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator size={50} color="#AEAEAE" style={styles.spinner} />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 10 : 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 80 : 60,
    }
})