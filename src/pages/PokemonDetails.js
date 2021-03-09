import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeDetailCard from "../components/PokeDetailCard";
import { darkTheme, lightTheme } from "../styles/theme";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
const Pokedex = require("pokedex-promise-v2");

const PokemonDetails = () => {
  const themeState = useSelector((state) => state.theme);

  const P = new Pokedex();
  let params = useParams();
  let id = params.id;

  const [pokemon, setPokemon] = useState(null);
  const [info, setInfo] = useState(null);
  const [character, setCharacter] = useState(null);

  let urlArray = [`/api/v2/pokemon/${id}`, `/api/v2/pokemon-species/${id}`];

  useEffect(() => {
    P.resource(urlArray)
      .then((response) => {
        setPokemon(response[0]);
        setInfo(response[1]);
      })
      .catch((err) => console.log(err));

    P.resource(`/api/v2/characteristic/${id}`)
      .then((response) => {
        setCharacter(response.descriptions[2].description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: themeState === "light" ? "white" : "black",
      }}
    >
      <PokeDetailCard pokemon={pokemon} info={info} character={character} />
    </div>
  );
};

export default PokemonDetails;
