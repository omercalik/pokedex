import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

import { useSelector } from "react-redux";

const SearchBar = ({ callback }) => {
  const themeState = useSelector((state) => state.theme);
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <input
            type="text"
            placeholder="Search Pokemon"
            onChange={doSearch}
            value={state}
          />
        </StyledSearchBarContent>
      </StyledSearchBar>
    </ThemeProvider>
  );
};

export default SearchBar;
