import RickyFav from "../../components/RickyFav";
import { motion } from "framer-motion";

const RickyFavPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <RickyFav />
    </motion.div>
  );
};

export default RickyFavPage;
