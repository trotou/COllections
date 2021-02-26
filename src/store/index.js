import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { PokemonReducer } from "../store/modules/pokemon/reducer";
import { rickyReducer } from "../store/modules/ricky/reducer";
import { PokemonsSearchReducer } from "../store/modules/pokemonSearch/reducer";

const reducers = combineReducers({
  pokeSearch: PokemonsSearchReducer,
  ricky: rickyReducer,
  pokemon: PokemonReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
