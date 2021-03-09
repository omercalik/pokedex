import styled from "styled-components";

export const StyledPokeDetailCard = styled.div`
  font-family: "Quicksand";

  width: fit-content;
  margin: 0 auto;
  padding-top: 0;
  color: ${({ theme }) => theme.text2};
  background-color: ${({ theme }) => theme.footer};

  span {
    font-size: 14px;
  }

  h2 {
    margin-left: 40%;
  }

  h4 {
    margin-bottom: 5px;
  }

  span {
    color: ${({ theme }) => theme.text};
  }

  img {
    width: 25%;
    margin-left: 5%;
    float: left;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .first-col {
    position: relative;
    width: 85%;
    text-align: center;
  }
  .second-col {
    margin-left: 0;
    padding-right: 30px;
    border-left: 1px solid white;
    padding-left: 15px;
    padding-bottom: 15px;
  }

  .arrow-container {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .arrow-container a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  .arrow-container a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.text2};
    transition: all 0.3s;
  }

  .arrow {
    font-size: 70px;
  }

  .evol {
    color: ${({ theme }) => theme.text};
  }

  .evol:hover {
    color: ${({ theme }) => theme.text2};
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.body};
    width: 30%;
    height: 30px;
    border-radius: 10px;
    font-weight: 600;
    position: absolute;
    bottom: 10px;
    left: 35%;
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text2};
    transition: all 0.4s;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    .arrow {
      font-size: 30px;
    }
  }
`;
