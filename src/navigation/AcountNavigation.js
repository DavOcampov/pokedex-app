import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AcountScreen from '../screens/Acount';

const Stack = createNativeStackNavigator();

export default function AcountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AcountN" component={AcountScreen} options={{title: "Mi cuenta"}}/>
    </Stack.Navigator>
  )
}