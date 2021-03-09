import React from "react";
import { StyledPokeThumb } from "../styles/StyledPokeThumb";
import { Link } from "react-router-dom";

const PokeThumb = ({ image, poke }) => (
  <StyledPokeThumb>
    <Link to={`/pokemons/${poke.id}`}>
      <div>
        <img
          className="clickable img_self"
          src={image}
          alt="moviethumb"
          loading="lazy"
        />
        <h5>{poke.name.toUpperCase()}</h5>
      </div>
    </Link>
  </StyledPokeThumb>
);

export default PokeThumb;
