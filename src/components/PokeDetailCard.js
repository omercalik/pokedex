import React, { useState, useEffect } from "react";
import { StyledPokeDetailCard } from "../styles/StyledPokeDetailCard";
import PokeType from "../components/PokeType";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { pokeAdded } from "../store/dexSlice";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

const PokeDetailCard = ({ pokemon, info, character }) => {
  const themeState = useSelector((state) => state.theme);

  var Pokedex = require("pokedex-promise-v2");
  var P = new Pokedex();

  const [evolutionArray, setEvolutionArray] = useState([]);
  const [flavorText, setFlavorText] = useState("");
  const dispatch = useDispatch();
  const style = {
    display: "inline-block",
  };
  const redstate = useSelector((state) => state.dex);

  const handleClick = () => {
    const id = pokemon.id;
    const pokeName = pokemon.name;
    const pokeImage = pokemon.sprites.other["official-artwork"].front_default;
    const favorite = false;

    if (pokemon && !redstate.some((e) => e.id === pokemon.id)) {
      dispatch(pokeAdded({ id, pokeName, pokeImage, favorite }));
    }
  };

  useEffect(() => {
    if (info) {
      let str = info.flavor_text_entries[0].flavor_text.replace("", " ");
      setFlavorText(str);
      P.resource(info.evolution_chain.url)
        .then((response) => {
          if (response.chain.evolves_to.length === 0) {
            setEvolutionArray([]);
          } else if (response.chain.evolves_to[0].evolves_to.length === 0) {
            P.resource([
              response.chain.species.url,
              response.chain.evolves_to[0].species.url,
            ])
              .then((res) => {
                let tmpArray = [];
                res.forEach((poke) => {
                  tmpArray.push(poke);
                });
                setEvolutionArray(tmpArray);
              })
              .catch((err) => console.log(err));
          } else if (response.chain.evolves_to[0].evolves_to.length !== 0) {
            P.resource([
              response.chain.species.url,
              response.chain.evolves_to[0].species.url,
              response.chain.evolves_to[0].evolves_to[0].species.url,
            ])
              .then((res) => {
                let tmpArray = [];
                res.forEach((poke) => {
                  tmpArray.push(poke);
                });
                setEvolutionArray(tmpArray);
              })
              .catch((err) => console.log(err));
          }
        })

        .catch((err) => console.log(err));
    } else {
      return null;
    }
  }, [info]);

  if (!pokemon && !info) return <div></div>;

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledPokeDetailCard>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <div className="info">
          <div className="first-col">
            <div>
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>

            <p style={{ fontSize: "14px", fontStyle: "italic" }}>
              {flavorText}
            </p>

            <div style={{ paddingTop: "25%" }}>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3 style={{ clear: "both" }}>Evolution Chain</h3>
                {evolutionArray.length !== 0 ? (
                  evolutionArray.map((poke, i) => (
                    <Link
                      to={`/pokemons/${poke.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                      key={nanoid()}
                    >
                      <p
                        style={{ marginLeft: "10px", display: "inline-block" }}
                        key={nanoid()}
                        className="evol"
                      >
                        {evolutionArray.length === i + 1
                          ? poke.name
                          : poke.name + " >"}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p
                    style={{ marginLeft: "10px", display: "inline-block" }}
                    key={nanoid()}
                    className="evol"
                  >
                    This pokemon does not evolve.
                  </p>
                )}
              </div>

              <div className="arrow-container">
                <Link
                  to={
                    pokemon.id === 1
                      ? `/pokemons/898`
                      : `/pokemons/${pokemon.id - 1}`
                  }
                >
                  <FiChevronLeft className="arrow" />
                </Link>
                <button onClick={handleClick}>Add to dex</button>
                <Link
                  to={
                    pokemon.id === 898
                      ? `/pokemons/1`
                      : `/pokemons/${pokemon.id + 1}`
                  }
                >
                  <FiChevronRight className="arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div className="second-col">
            {character ? (
              <h5>
                Characteristic: <span>{character}</span>
              </h5>
            ) : (
              <h5>
                Characteristic: <span>Unknown</span>
              </h5>
            )}
            <h5>
              Height: <span>{pokemon.height}</span>
            </h5>
            <h5>
              Weight: <span>{pokemon.weight}</span>
            </h5>
            {pokemon.stats.map((ele, i) => (
              <h5 key={i}>
                {ele.stat.name + ": "}
                <span key={i}>{ele.base_stat}</span>
              </h5>
            ))}
            {pokemon.abilities.length > 1 ? (
              <h5>
                Abilities:
                {pokemon.abilities.map((ele, i) => (
                  <span key={i}>
                    {pokemon.abilities.length === i + 1
                      ? ele.ability.name
                      : ele.ability.name + ", "}
                  </span>
                ))}
              </h5>
            ) : (
              <h5>
                Ability: <span>{pokemon.abilities[0].ability.name}</span>{" "}
              </h5>
            )}
            <h4>Type</h4>
            <div style={style}>
              {pokemon.types.map((type) => (
                <PokeType key={nanoid()} type={type.type.name} />
              ))}
            </div>
          </div>
        </div>
      </StyledPokeDetailCard>
    </ThemeProvider>
  );
};

export default PokeDetailCard;
