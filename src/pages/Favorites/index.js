import { Link } from "react-router-dom";

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
      <Link to="/pokemonfav">
        <img src={"./ball.png"} style={{ width: "200px" }} alt="Logo" />
      </Link>
      <Link to="/rickyfav">
        <img src={"./ricky.png"} style={{ width: "200px" }} alt="Logo" />
      </Link>
    </div>
  );
};

export default Favorite;
