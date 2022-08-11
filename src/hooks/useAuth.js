import react, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/* Custokm-hook para acceder a nuestro contexto, extraemos el value para devolverlo*/
export default () =>
  useContext(
    AuthContext
  ); /* Hook para que se ejecute y no nos de los valores directamente */
