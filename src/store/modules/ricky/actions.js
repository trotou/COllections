export const addToRicky = (fav) => ({
  type: "@ricky/ADD",
  fav,
});
export const removeFromRicky = (list) => ({ type: "@ricky/REMOVE", list });
