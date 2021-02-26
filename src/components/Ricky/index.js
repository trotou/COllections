import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToRickyThunk } from "../../store/modules/ricky/thunks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";
import { ButtonIcon, DivBorder, DivCard } from "./styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CustomizedMenus from "../../components/Menu/styles";

const Ricky = () => {
  const [listRicky, setListRicky] = useState(["", ""]);
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${counter}`
      );
      setListRicky(result.data.results);
    };
    fetchData();
  }, [counter]);

  const handleSub = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    }
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <CustomizedMenus />
      <DivBorder>
        {listRicky.map((item, i) => (
          <DivCard key={i} whileHover={{ scale: 1.1 }}>
            <img
              src={item.image}
              alt="nada"
              style={{ width: "auto", height: "auto" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{item.name}</p>
              <IconButton onClick={() => dispatch(addToRickyThunk(item))}>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </DivCard>
        ))}
      </DivBorder>
      {counter >= 2 && (
        <ButtonIcon onClick={handleSub}>
          <NavigateBeforeIcon />
        </ButtonIcon>
      )}
      {counter < 33 && (
        <ButtonIcon onClick={handleAdd}>
          <NavigateNextIcon />
        </ButtonIcon>
      )}
    </div>
  );
};

export default Ricky;
