import { useSelector } from "react-redux";
import { CardDiv } from "../Pokemon/styles";
import { useDispatch } from "react-redux";
import { removeFromPokemonThunk } from "../../store/modules/pokemon/thunks";
import { IconButton } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { useHistory } from "react-router-dom";

const PokemonFav = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();

  const send = (page) => {
    history.push(page);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        {pokemon.map((item, i) => (
          <CardDiv key={i}>
            <img
              style={{ height: "100px", width: "150px" }}
              alt={"unloaded"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
            ></img>
            <div>{item.name}</div>
            <IconButton
              onClick={() => dispatch(removeFromPokemonThunk(item.id))}
            >
              <BlockIcon />
            </IconButton>
          </CardDiv>
        ))}
      </div>
      <button onClick={() => send("/pokemon")}>Voltar</button>
    </>
  );
};

export default PokemonFav;
