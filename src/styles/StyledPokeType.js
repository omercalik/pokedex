import styled from "styled-components";

export const StyledPokeType = styled.div`
  background-color: ${(props) => props.theme[`${props.type}`]};
  color: white;
  width: 75px;
  height: 20px;
  display: inherit;
  margin-right: 10px;

  p {
    font-weight: 700;
    text-align: center;
    margin-top: auto;
  }
`;
