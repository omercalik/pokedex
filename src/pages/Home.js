import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Ash from "../images/ash.jpg";
import Pikachu from "../images/pikachu.jpg";
import { darkTheme, lightTheme } from "../styles/theme";
import { StyledHero } from "../styles/StyledHero";

const Home = () => {
  const themeState = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledHero>
        <div
          className="hero-container"
          style={{
            backgroundImage:
              themeState === "light"
                ? "url(" + Ash + ")"
                : "url(" + Pikachu + ")",
          }}
        >
          <div className="hero-content animate__animated animate__fadeInDown">
            <h1>WANNA CATCH SOME POKÉMONS?</h1>
            <Link to="/pokemons">
              <div className="hero-button">
                <h4>GO FIND SOME</h4>
              </div>
            </Link>
          </div>
        </div>
      </StyledHero>
    </ThemeProvider>
  );
};

export default Home;
