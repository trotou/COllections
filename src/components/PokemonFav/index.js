import { useSelector } from "react-redux";
import { CardDiv, DivOut } from "../Pokemon/styles";
import { useDispatch } from "react-redux";
import { removeFromPokemonThunk } from "../../store/modules/pokemon/thunks";
import { IconButton } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { useHistory } from "react-router-dom";
import { ButtonBack } from "./styles";

const PokemonFav = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();

  const send = (page) => {
    history.push(page);
  };

  return (
    <>
      <DivOut>
        {pokemon.map((item, i) => (
          <CardDiv
            key={i}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              style={{ height: "100px", width: "180px" }}
              alt={"unloaded"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
            ></img>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {item.name}
              <IconButton
                onClick={() => dispatch(removeFromPokemonThunk(item.id))}
              >
                <BlockIcon />
              </IconButton>
            </div>
          </CardDiv>
        ))}
      </DivOut>
      <ButtonBack style={{ margin: "3%" }} onClick={() => send("/pokemon")}>
        Voltar
      </ButtonBack>
    </>
  );
};

export default PokemonFav;
