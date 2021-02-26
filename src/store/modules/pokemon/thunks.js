import { addToPokemon, removeFromPokemon } from "./actions";

export const addToPokemonThunk = (fav, id) => {
  return async (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("pokemon")) || [];
    list.push(fav);
    list[list.length - 1]["id"] = id;
    localStorage.setItem("pokemon", JSON.stringify(list));
    dispatch(addToPokemon(fav));
  };
};

export const removeFromPokemonThunk = (id) => (dispatch, getStore) => {
  const { pokemon } = getStore();
  const list = pokemon.filter((product) => product.id !== id);
  localStorage.setItem("pokemon", JSON.stringify(list));
  dispatch(removeFromPokemon(list));
};
