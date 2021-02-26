export const addToPokemon = (fav) => ({
  type: "@pokemon/ADD",
  fav,
});

export const removeFromPokemon = (list) => ({ type: "@pokemon/REMOVE", list });

// export const addPokemon = (pokemon) => ({ type: '@pokemon/ADD', pokemon });
