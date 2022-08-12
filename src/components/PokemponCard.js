import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { useNavigation } from '@react-navigation/native';

export default function PokemponCard(props) {
    const { pokemonI } = props;
    const navigation = useNavigation();

    const pokemonColor = getColorByPokemonType(pokemonI.type) /* Ejecutamos la funcion enviado el tipo */
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}

    const goToPokemon = () => {
        navigation.navigate("pokemonN", {id: pokemonI.id})
    }
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemonI.id}`.padStart(3, 0) /* Muestra el nuemoro con 3 digitos */}</Text>
                        <Text style={styles.name}>{pokemonI.name}</Text>
                        <Image source={{ uri: pokemonI.image }} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number:{
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 10,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 10,
        paddingTop: 10,
        textTransform: 'capitalize'
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 70,
        height: 70
    },

})