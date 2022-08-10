import react, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/* Accedemos con el custokm-hook para acceder a nuestro contexto, extraemos el value y devolverlo*/
export default () =>
  useContext(
    AuthContext
  ); /* Ejecutamos Hook para que se ejecute y no nos de los valores directamente */
