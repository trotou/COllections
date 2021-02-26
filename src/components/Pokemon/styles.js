import styled from "styled-components";
import { motion } from "framer-motion";

export const CardDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  height: 250px;
  margin: 2%;
  background-color: whitesmoke;
  justify-content: center;
  color: black;
  padding: 1%;
  border-radius: 3%;
`;

export const DivOut = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;
  font-size: 1.5rem;
`;
