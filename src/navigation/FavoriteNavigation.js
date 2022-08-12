import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favoriteN"
        component={FavoriteScreen}
        options={{ title: "Favoritos" }}
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
