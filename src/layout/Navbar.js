import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledNavbar } from "../styles/StyledNavbar";
import { darkTheme, lightTheme } from "../styles/theme";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const handleClick = () => {
    dispatch(changeTheme());
  };
  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledNavbar>
        <h1>POKÉDEX</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokémons</Link>
          <Link to="/dex">My Déx</Link>
        </div>
        {themeState === "dark" ? (
          <BsMoon onClick={handleClick} className="mode" />
        ) : (
          <IoSunnyOutline onClick={handleClick} className="mode" />
        )}
      </StyledNavbar>
    </ThemeProvider>
  );
};

export default Navbar;
