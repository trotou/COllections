import { Switch, Route, Redirect } from "react-router-dom";
import FavoritePage from "../pages/FavoritePage";
import PokemonFavPage from "../pages/PokemonFavPage";
import RickyFavPage from "../pages/RickyFavPage";
import RickyPage from "../pages/RickyPage";
import PokemonPage from "../pages/PokemonPage";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rickymorty" />
        </Route>
        <Route path="/pokemon">
          <PokemonPage />
        </Route>
        <Route path="/rickymorty">
          <RickyPage />
        </Route>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
        <Route path="/pokemonfav">
          <PokemonFavPage />
        </Route>
        <Route path="/rickyfav">
          <RickyFavPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
