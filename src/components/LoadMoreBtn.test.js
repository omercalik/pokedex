import { render } from "@testing-library/react";
import LoadMoreBtn from "./LoadMoreBtn";
import ReactDOM from "react-dom";
import React from "react";

const handleClick = () => {
  return 1;
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadMoreBtn></LoadMoreBtn>, div);
});

it("renders button correctly", () => {
  render(<LoadMoreBtn onClick={handleClick}></LoadMoreBtn>);
});
