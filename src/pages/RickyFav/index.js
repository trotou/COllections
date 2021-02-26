import { useSelector } from "react-redux";
import { DivCard, DivBorder } from "../Ricky/styles";
import { useDispatch } from "react-redux";
import { removeFromRickyThunk } from "../../store/modules/ricky/thunks";
import { IconButton } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { useHistory } from "react-router-dom";

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
          <DivCard key={i}>
            <img
              src={item.image}
              alt="nada"
              style={{ width: "auto", height: "auto" }}
            />
            <div>
              <p>{item.name}</p>
            </div>
            <IconButton onClick={() => dispatch(removeFromRickyThunk(item.id))}>
              <BlockIcon />
            </IconButton>
          </DivCard>
        ))}
      </DivBorder>
      <button onClick={() => send("/rickymorty")}>Voltar</button>
    </>
  );
};

export default RickyFav;
