import Ricky from "../../components/Ricky";
import { motion } from "framer-motion";

const RickyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Ricky />
    </motion.div>
  );
};

export default RickyPage;
