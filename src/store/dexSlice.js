import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dexSlice = createSlice({
  name: "dex",
  initialState,
  reducers: {
    pokeAdded(state, action) {
      state.push(action.payload);
    },
    pokeReleased(state, action) {
      state.splice(action.payload, 1);
    },
    pokeFavorite(state, action) {
      const { poke } = action.payload;
      const index = poke.i;
      console.log(index);
      state.map((item, i) => {
        if (i === index) {
          item.favorite = !item.favorite;
        }
      });
    },
  },
});

export const { pokeAdded, pokeReleased, pokeFavorite } = dexSlice.actions;

export default dexSlice.reducer;
