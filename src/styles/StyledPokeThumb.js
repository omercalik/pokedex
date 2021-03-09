import styled from "styled-components";

export const StyledPokeThumb = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: "Quicksand";

  :hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  img {
    width: 60%;
    display: block;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
  }
`;
