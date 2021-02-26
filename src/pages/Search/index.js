import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemons from "../../components/Pokemons";
import { addPokemonsThunk } from "../../store/modules/pokemonSearch/thunks";

const InputSearch = () => {
  const [input, setInput] = useState(undefined);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const search = useSelector((state) => state.pokeSearch);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addPokemonsThunk(input, setError));
    setError(false);
    setInput("");
    setTimeout(() => {
      setShowResult(true);
    }, 1000);
  };
  console.log("search", search);
  console.log("error", error);

  return (
    <div>
      <div>
        <div>
          <input
            placeholder="Search your pokemon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>{error && <span>Pokémon não encontrado!</span>}</div>
        <div>
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
        {error === false && <Pokemons />}
      </div>
      <button>Ricky and Morty</button>
      <button>Pokemon</button>
    </div>
  );
};

export default InputSearch;
