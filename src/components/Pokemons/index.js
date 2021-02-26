import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { CardDiv } from "../../pages/Pokemon/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addToPokemonThunk } from "../../store/modules/pokemon/thunks";

const Pokemons = () => {
  const search = useSelector((state) => state.pokeSearch);
  const dispatch = useDispatch();

  return (
    <div>
      {search !== undefined &&
        search.map((pokemon, index) => (
          <CardDiv key={index}>
            <img
              style={{ height: "100px", width: "150px" }}
              alt="unloaded"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
            <div>
              <p>{pokemon.name}</p>
              <IconButton
                onClick={() => dispatch(addToPokemonThunk(pokemon, pokemon.id))}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </CardDiv>
        ))}
    </div>
  );
};

export default Pokemons;
