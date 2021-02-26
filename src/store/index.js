import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { PokemonReducer } from "../store/modules/pokemon/reducer";
import { rickyReducer } from "../store/modules/ricky/reducer";

const reducers = combineReducers({
  ricky: rickyReducer,
  pokemon: PokemonReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
