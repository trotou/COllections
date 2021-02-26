import Pokemon from "../../components/Pokemon";
import { motion } from "framer-motion";

const PokemonPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Pokemon />
    </motion.div>
  );
};

export default PokemonPage;
