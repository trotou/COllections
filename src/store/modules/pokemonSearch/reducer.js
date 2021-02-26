export const PokemonsSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "@pokemons/ADD":
      const { fav } = action;
      return [...state, fav];

    default:
      return state;
  }
};
