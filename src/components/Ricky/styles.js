import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";

export const DivCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 3%;
  background-color: whitesmoke;
  color: black;
  padding: 1%;
  border-radius: 3%;
`;

export const DivBorder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3%;
  font-size: 1.5rem;
`;

export const ButtonIcon = styled(IconButton)`
  background-color: lightblue;
  margin: 1%;
`;
