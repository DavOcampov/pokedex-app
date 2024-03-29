import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pokedexN"
        component={PokedexScreen}
        options={{
          title: "Pokedex",
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="pokemonN"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
