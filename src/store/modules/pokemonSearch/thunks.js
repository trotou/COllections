import { addPokemonSearch } from "./actions";

import axios from "axios";

export const addPokemonsThunk = (pokemonName, setError) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(function (res) {
      if (res !== undefined) {
        dispatch(addPokemonSearch(res.data));
      }
    })
    .catch((error) => setError(error));
};
