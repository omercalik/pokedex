import styled from "styled-components";

export const StyledHero = styled.div`
  font-family: "Quicksand";
  h1 {
    color: #e2e2e2;
  }

  h4 {
    padding-top: 13px;
  }

  a {
    text-decoration: none;
  }

  .hero-button {
    color: #e6f4f1;
    background-color: ${({ theme }) => theme.heroButton};
    border-radius: 15px;
    width: 300px;
    height: 50px;
    text-align: center;
    margin-left: 110px;
  }

  .hero-button:hover {
    opacity: 0.9;
    transition: all 0.3s;
  }

  .hero-container {
    width: 100%;
    min-height: 82vh;

    background-repeat: no-repeat;
    position: relative;
  }

  .hero-content {
    position: absolute;
    left: 15%;
    top: 40%;
    --ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    h1 {
      font-size: 22px;
    }

    h4 {
      font-size: 10px;
      padding-top: 5px;
    }

    div {
      background-size: contain;
    }

    .hero-button {
      color: #e6f4f1;
      background-color: ${({ theme }) => theme.heroButton};
      border-radius: 15px;
      width: 100px;
      height: 25px;
      text-align: center;
      margin-left: 50px;
    }

    .hero-content {
      position: absolute;
      left: 25%;
      top: 40%;
      --ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .hero-content h1 {
      font-size: 10px;
      color: ${({ theme }) => theme.text};
    }
  }
`;
