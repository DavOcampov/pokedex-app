import React, { useState, createContext } from "react";

/* Creamos el contexto */
export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  /* Funcion para setear los datos del usuario */
  const login = (userData) => {
    setAuth(userData);
  };

  /* Funcion para limpiar el auth */
  const logout = () => {
    setAuth(undefined);
  };

  /* Value con los datos a devolver */
  const valueContext = {
    auth,
    login,
    logout,
  };
  
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
