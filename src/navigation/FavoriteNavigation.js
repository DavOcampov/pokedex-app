import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favoriteN"
        component={FavoriteScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
