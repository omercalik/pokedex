import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  width: 300px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  margin: 25px auto 10px auto;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s;
  }
`;
