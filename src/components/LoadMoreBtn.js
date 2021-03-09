import React from "react";

import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({ onClick }) => {
  return <StyledLoadMoreBtn onClick={onClick}>Load More</StyledLoadMoreBtn>;
};

export default LoadMoreBtn;
