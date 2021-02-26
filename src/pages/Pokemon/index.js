import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToPokemonThunk } from "../../store/modules/pokemon/thunks";
import { CardDiv } from "./styles";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { ButtonIcon } from "../Ricky/styles";
import CustomizedMenus from "../../components/Menu/styles";

const Pokemon = () => {
  const [listPokemon, setListPokemon] = useState(["", ""]);
  const [counter, setCounter] = useState(1);
  const [index, setIndex] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`
      );
      setListPokemon(result.data.results);
    };

    fetchData();
  }, [counter]);

  const handleAdd = () => {
    setCounter(counter + 20);
    setIndex(index + 20);
  };

  const handleSub = () => {
    setCounter(counter - 20);
    setIndex(index - 20);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <CustomizedMenus />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        {listPokemon.map((item, i) => (
          <CardDiv key={i}>
            <img
              style={{ height: "100px", width: "150px" }}
              alt="unloaded"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + i
              }.png`}
            />
            <div>
              <p>{item.name}</p>
              <IconButton
                onClick={() => dispatch(addToPokemonThunk(item, index + i))}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </CardDiv>
        ))}
      </div>
      <div style={{ width: "100%" }}>
        {counter > 1 && (
          <ButtonIcon onClick={handleSub}>
            <NavigateBeforeIcon />
          </ButtonIcon>
        )}
        {counter < 152 && (
          <ButtonIcon onClick={handleAdd}>
            <NavigateNextIcon />
          </ButtonIcon>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
