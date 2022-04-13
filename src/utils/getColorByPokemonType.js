import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"
import { POKEMON_TYPE_COLORS } from "./constant"

const getColorByPokemonType = (type)=> POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokemonType;