import { addToRicky, removeFromRicky } from "./actions";

export const addToRickyThunk = (fav) => {
  return async (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("ricky")) || [];
    list.push(fav);
    localStorage.setItem("ricky", JSON.stringify(list));
    dispatch(addToRicky(fav));
  };
};

export const removeFromRickyThunk = (id) => (dispatch, getStore) => {
  const { ricky } = getStore();
  const list = ricky.filter((product) => product.id !== id);
  localStorage.setItem("ricky", JSON.stringify(list));
  dispatch(removeFromRicky(list));
};
