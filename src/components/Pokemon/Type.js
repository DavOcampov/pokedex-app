import { StyleSheet, View, Text } from "react-native";
import React from "react";
import {
  map,
  capitalize,
} from "lodash"; /* map: para recorrer el array y retornar lo que necesitemos, capitalice: poner la primera letra en mayus */
import getColorByPokemonType from "../../utils/getColorByPokemonType"

export default function Type(props) {
  const { types } = props;
  return (
    <View style={styles.content}>
      {map(types, (item, index) => ( /* recorro el array y renderizo el view y le asigno el index para la key */
        <View key={index} style={{ backgroundColor: getColorByPokemonType(item.type.name), ...styles.pill}}>
            <Text style={{color: "#fff"}}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    marginHorizontal: 10,
  }
});
