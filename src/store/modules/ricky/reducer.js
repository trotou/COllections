export const rickyReducer = (
  state = JSON.parse(localStorage.getItem("ricky")) || [],
  action
) => {
  switch (action.type) {
    case "@ricky/ADD":
      const { fav } = action;
      return [...state, fav];

    case "@ricky/REMOVE":
      const { list } = action;
      return list;

    default:
      return state;
  }
};
