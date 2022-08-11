import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-native-paper";

export default function userData() {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View>
        <View>
          <Text style={styles.title}>Bienvenido,</Text>
          <Text
            style={styles.title}
          >{`${auth.firstName} ${auth.lastName}`}</Text>
        </View>
        <View style={styles.dataContent}>
          <ItemMenu
            title={"Nombre"}
            text={`${auth.firstName} ${auth.lastName}`}
          ></ItemMenu>
          <ItemMenu title={"Username"} text={`${auth.username}`}></ItemMenu>
          <ItemMenu title={"Email"} text={`${auth.email}`}></ItemMenu>
          <ItemMenu title={"Total Favoritos"} text={`0 Pokemos`}></ItemMenu>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          icon="logout"
          mode="contained"
          style={styles.button}
          color="#2e68db"
          contentStyle={{ height: 50 }}
          onPress={logout}
        >
          Desconectarse
        </Button>
      </View>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlok: {
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  ItemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  button: {
    marginTop: 30,
    borderRadius: 50,
    width: "70%",
    height: 50,
    justifyContent: "center",
  },
});
