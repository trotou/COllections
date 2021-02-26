import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Favorite = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link to="/pokemonfav">
          <img src={"./ball.png"} style={{ width: "200px" }} alt="Logo" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Link to="/rickyfav">
          <img src={"./ricky.png"} style={{ width: "200px" }} alt="Logo" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Favorite;
