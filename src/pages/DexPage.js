import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StyledPokeDex } from "../styles/StyledPokeDex";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { pokeReleased, pokeFavorite } from "../store/dexSlice";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

const DexPage = () => {
  const themeState = useSelector((state) => state.theme);

  const dex = useSelector((state) => state.dex);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    if (dex.length > 0) {
      dispatch(pokeReleased(i));
    }
  };

  const handleFavorite = (poke, index) => {
    if (dex.length > 0) {
      dispatch(pokeFavorite({ poke, index }));
    }
  };

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledPokeDex dex={dex}>
        <h3>My Déx</h3>
        {dex &&
          dex.map((poke, i) => (
            <div key={poke.id}>
              <Link to={`/pokemons/${poke.id}`}>
                <img src={poke.pokeImage} alt="" />
                <h4>{i + 1 + ". " + poke.pokeName.toUpperCase()}</h4>
              </Link>

              {poke.favorite ? (
                <AiFillStar
                  className="fav-icon"
                  onClick={() => {
                    handleFavorite({ poke, i });
                  }}
                />
              ) : (
                <AiOutlineStar
                  className="fav-icon"
                  onClick={() => {
                    handleFavorite({ poke, i });
                  }}
                />
              )}

              <button onClick={() => handleClick(i)}>Release</button>
            </div>
          ))}
      </StyledPokeDex>
    </ThemeProvider>
  );
};

export default DexPage;
