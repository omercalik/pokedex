import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledPokeType } from "../styles/StyledPokeType";

const theme = {
  normal: "#87906f",
  fighting: "#f72008",
  flying: "#20bddf",
  poison: "#13ec30",
  ground: "#cb6d34",
  rock: "#636365",
  bug: "#4cb34f",
  ghost: "#c0bfbf",
  steel: "#4a4a49",
  fire: "#e63f19",
  water: "#255eda",
  grass: "#23df20",
  electric: "#d2da25",
  psychic: "#8800ff",
  ice: "#00ebff",
  dragon: "#b86b47",
  dark: "black",
  fairy: "#ec13d3",
  unknown: "#a75870",
  shadow: "#030303",
};

const PokeType = ({ type }) => (
  <ThemeProvider theme={theme}>
    <StyledPokeType type={type}>
      <p>{type}</p>
    </StyledPokeType>
  </ThemeProvider>
);

export default PokeType;
