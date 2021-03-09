import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
`;

export const StyledSearchBarContent = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 100% !important;
  }

  width: 30%;
  height: 55px;
  background: ${({ theme }) => theme.footer};
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: ${({ theme }) => theme.text};

  input {
    font-family: "Abel", sans-serif;
    font-size: 20px;
    position: absolute;

    left: 50px;
    margin: 8px 0;
    padding: 0 0 0 0px;
    border: none;
    width: 95%;
    background: transparent;
    height: 40px;
    box-sizing: border-box;

    :focus {
      outline: none;
      color: ${({ theme }) => theme.text};
    }

    :focus::placeholder {
      color: transparent;
    }

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;
