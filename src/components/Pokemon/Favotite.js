import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

export default function Favotite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckedFavorite = () => {
    /* Tecnica de interruptor para mostrar en tiempo real el cambio */
    setReloadCheck(
      (prev) => !prev
    ); /* Obtiene el valor ya seteado, si es false lo pasa a verdader y viseversa */
  };

  /* Funcion para agregar favoritos */
  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckedFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  /* Funcion para remover favoritos */
  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckedFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  );
}
