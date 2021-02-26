import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: 3%;
  background-color: whitesmoke;
  color: black;
  padding: 1%;
  border-radius: 3%;
`;

export const DivBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3%;
`;

export const ButtonIcon = styled(IconButton)`
  background-color: lightblue;
  margin: 1%;
`;
