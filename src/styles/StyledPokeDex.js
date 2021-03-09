import styled from "styled-components";

export const StyledPokeDex = styled.div`
  max-width: 500px;
  margin: 15px auto;
  padding: 10px 20px;
  min-height: 82vh;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: "Quicksand";
  color: ${({ theme }) => theme.text2};

  div {
    height: 200px;
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
    padding-top: 30px;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.text};
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  img {
    width: 30%;
  }

  h3 {
    margin-left: 45%;
    color: ${({ theme }) => theme.text2};
  }

  h4 {
    position: absolute;
    top: 20px;
    left: 50%;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    background-color: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.body};
    width: 30%;
    height: 30px;
    border-radius: 10px;
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    transition: all 0.4s;
  }

  .fav-icon {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 30px;
  }

  .fav-icon:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    h4 {
      font-size: 15px;
      margin-left: -20px;
    }
  }
`;
