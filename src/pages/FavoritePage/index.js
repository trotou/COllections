import Favorite from "../../components/Favorites";
import { motion } from "framer-motion";

const FavoritePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Favorite />
    </motion.div>
  );
};

export default FavoritePage;
