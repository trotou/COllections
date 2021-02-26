import { useSelector } from "react-redux";
import { DivCard, DivBorder } from "../Ricky/styles";
import { useDispatch } from "react-redux";
import { removeFromRickyThunk } from "../../store/modules/ricky/thunks";
import { IconButton } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { useHistory } from "react-router-dom";
import { ButtonBack } from "../PokemonFav/styles";

const RickyFav = () => {
  const rickyFav = useSelector((state) => state.ricky);
  const dispatch = useDispatch();
  const history = useHistory();

  const send = (path) => {
    history.push(path);
  };

  return (
    <>
      <DivBorder>
        {rickyFav.map((item, i) => (
          <DivCard key={i} whileHover={{ scale: 1.1 }}>
            <img
              src={item.image}
              alt="nada"
              style={{ width: "auto", height: "auto" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{item.name}</p>
              <IconButton
                onClick={() => dispatch(removeFromRickyThunk(item.id))}
              >
                <BlockIcon />
              </IconButton>
            </div>
          </DivCard>
        ))}
      </DivBorder>
      <ButtonBack style={{ margin: "5%" }} onClick={() => send("/rickymorty")}>
        Voltar
      </ButtonBack>
    </>
  );
};

export default RickyFav;
