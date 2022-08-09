import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginFrom() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Formulario enviado...");
      console.log(formValue);
    },
  });

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        id="username"
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username ? (
        <Text style={styles.error}>{formik.errors.username}</Text>
      ) : null}

      <TextInput
        placeholder="Constraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Button
        icon="lock"
        mode="contained"
        style={styles.button}
        color="#2e68db"
        contentStyle={{ height: 50 }}
        onPress={formik.handleSubmit}
      >
        Entrar
      </Button>
    </View>
  );
}
/* Valores iniciales para la validacion del formulario */
function initialValues() {
  return {
    username: "",
    password: "",
  };
}

/* Funcion para validar los inputs */
function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginTop: 30,
    borderRadius: 50,
    width: "70%",
    height: 50,
    justifyContent: "center",
  },

  error: {
    textAlign: "center",
    color: "#f00",
    fontSize: 12,
  },
});
