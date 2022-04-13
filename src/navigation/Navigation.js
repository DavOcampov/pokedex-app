import React from 'react'
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteScreen from '../screens/Favorite'
import PokedexScreen from '../screens/Pokedex'
import AcountScreen from '../screens/Acount'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AcountNavigation from './AcountNavigation'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="favorite" component={FavoriteNavigation} options={{ tabBarLabel: "Favoritos", tabBarIcon: ({ color, size }) => (<Icon name='heart' color={color} size={size} />), headerTitle: "Favoritos", headerShown: false }} />
            <Tab.Screen name="pokedex" component={PokedexNavigation} options={{ tabBarLabel: "", tabBarIcon: () => renderPokeball(), headerTitle: "Pokedex", headerShown: false }} />
            <Tab.Screen name="Mi cuenta" component={AcountNavigation} options={{ tabBarLabel: "Mi cuenta", tabBarIcon: ({ color, size }) => (<Icon name='user' color={color} size={size} />), headerTitle: "Mi cuenta", headerShown: false }} />
        </Tab.Navigator>
    )
}

function renderPokeball() {
    return (
        <Image 
            source={require('../assets/pokeball.png')}
            style={{width: 75, height: 75, top: -15}}
        />
    )
}