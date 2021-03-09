import { React, useState, useEffect } from "react";
import Grid from "../layout/Grid";
import PokeThumb from "../components/PokeThumb";
import SearchBar from "../components/SearchBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { useSelector } from "react-redux";
import LoadMoreBtn from "../components/LoadMoreBtn";

function Pokemons() {
  const Pokedex = require("pokedex-promise-v2");
  const themeState = useSelector((state) => state.theme);
  const fetchUrl = "/api/v2/pokemon/";

  const [pokeIndex, setPokeIndex] = useState(1);
  const [pokemonsNumber, setPokemonsNumber] = useState(20);
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(0);
  const [isPending, setisPending] = useState(false);

  const P = new Pokedex();
  let urlArray = [];

  const handleClick = () => {
    setPokeIndex(pokemonsNumber + 1);
    setPokemonsNumber(pokemonsNumber + 20);
    setLoadMore(loadMore + 1);
  };

  const searchPokemon = (search) => {
    if (search === "") {
      fetchPokemons();
    } else {
      P.getPokemonByName(search)
        .then((response) => {
          let tmpArray = [];
          tmpArray.push(response);
          setPokemons(tmpArray);
        })
        .catch((err) => console.log(err));
    }
  };

  const fetchPokemons = () => {
    for (let i = pokeIndex; i <= pokemonsNumber; i++) {
      let str = fetchUrl + i;
      urlArray.push(str);
    }
    setisPending(true);

    P.resource(urlArray).then(function (response) {
      if (loadMore === 0) {
        setPokemons(response);
      } else {
        let pokeArray = pokemons;
        let tmpArr = pokeArray.concat(response);
        setPokemons(tmpArr);
      }

      urlArray = [];
      setisPending(false);
    });
  };

  useEffect(() => {
    fetchPokemons();
  }, [loadMore]);

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <div
        style={{
          minHeight: "80vh",
          backgroundColor: themeState === "light" ? "white" : "black",
          textAlign: "center",
        }}
      >
        <SearchBar callback={searchPokemon} />
        {pokemons && (
          <Grid>
            {pokemons.map((pokemon) => (
              <PokeThumb
                key={pokemon.id}
                image={pokemon.sprites.other["official-artwork"].front_default}
                poke={pokemon}
              />
            ))}
          </Grid>
        )}

        <LoadMoreBtn onClick={handleClick} />
      </div>
    </ThemeProvider>
  );
}

export default Pokemons;
