import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import PokemonDetails from "./pages/PokemonDetails";
import DexPage from "./pages/DexPage";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

function App() {
  const themeState = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/pokemons/:id">
                <PokemonDetails />
              </Route>
              <Route path="/pokemons">
                <Pokemons />
              </Route>
              <Route path="/dex">
                <DexPage />
              </Route>

              <Route path="*">NOT FOUND</Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
