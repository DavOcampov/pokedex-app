import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export default function NoLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver los favoritos tienes que estar logeado
      </Text>
      <Button
        mode="contained"
        style={styles.button}
        color="#2e68db"
        contentStyle={{ height: 50 }}
        onPress={() => navigation.navigate("account")}
      >
        Ir al login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    borderRadius: 50,
    width: "70%",
    height: 50,
  },
});
