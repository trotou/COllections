export const PokemonReducer = (
  state = JSON.parse(localStorage.getItem("pokemon")) || [],
  action
) => {
  switch (action.type) {
    case "@pokemon/ADD":
      const { fav } = action;
      return [...state, fav];

    case "@pokemon/REMOVE":
      const { list } = action;
      return list;

    default:
      return state;
  }
};
