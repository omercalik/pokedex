import React from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { StyledFooter } from "../styles/StyledFooter";
import { lightTheme, darkTheme } from "../styles/theme";

const Footer = () => {
  const themeState = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledFooter>
        <h4>Pokédex - by Ömer Berkan Çalık</h4>
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Footer;
