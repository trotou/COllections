import PokemonFav from "../../components/PokemonFav";
import { motion } from "framer-motion";

const PokemonFavPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PokemonFav />
    </motion.div>
  );
};

export default PokemonFavPage;
