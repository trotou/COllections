import { Switch, Route, Redirect } from "react-router-dom";
import Favorite from "../pages/Favorites";
import Pokemon from "../pages/Pokemon";
import PokemonFav from "../pages/PokemonFav";
import Ricky from "../pages/Ricky";
import RickyFav from "../pages/RickyFav";
import InputSearch from "../pages/Search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/rickymorty" />
      </Route>
      <Route path="/pokemon">
        <Pokemon />
      </Route>
      <Route path="/rickymorty">
        <Ricky />
      </Route>
      <Route path="/favorites">
        <Favorite />
      </Route>
      <Route path="/pokemonfav">
        <PokemonFav />
      </Route>
      <Route path="/rickyfav">
        <RickyFav />
      </Route>
      <Route path="/search">
        <InputSearch />
      </Route>
    </Switch>
  );
};

export default Routes;
