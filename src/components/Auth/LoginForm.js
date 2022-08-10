import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "../../Hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [load, setload] = useState(false);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: (formValue) => {
      const { username, password } = formValue;
      if (username == user.username) {
        setload(true);
        setError("");
        if (password == user.password) {
          if (user.rol == "Admin") {
            if (user.status == 0) {
              console.log("Logeado...");
              console.log(userDetails);
              login(userDetails);
            } else {
              setload(false);
              setError("Usuario inactivo");
            }
          } else {
            setload(false);
            setError("No tiene permisos");
          }
        } else {
          setload(false);
          setError("Contraseña incorrecta");
        }
      } else {
        setload(false);
        setError("Usuario incorrecto");
      }
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Iniciar sesión</Text>
          {error != "" && (
            <View style={styles.toash}>
              <Ionicons name="warning" size={30} color="#fff" />
              <Text style={styles.errorToash}>{error}</Text>
            </View>
          )}
          <TextInput
            id="username"
            placeholder="Nombre de usuario"
            style={styles.input}
            autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
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
          {formik.touched.password && formik.errors.password ? (
            <Text style={styles.error}>{formik.errors.password}</Text>
          ) : null}
          <Button
            icon="lock"
            mode="contained"
            style={styles.button}
            color="#2e68db"
            contentStyle={{ height: 50 }}
            onPress={formik.handleSubmit}
            loading={load}
            disabled={load}
          >
            Entrar
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  container: {
    width: "100%",
  },
  inner: {
    paddingBottom: 35,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 45,
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
  toash: {
    backgroundColor: "#ff000095",
    borderRadius: 3,
    width: "60%",
    height: 40,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  errorToash: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
  },
});
