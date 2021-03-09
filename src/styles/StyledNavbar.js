import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  font-family: "Quicksand";
  background-color: ${({ theme }) => theme.body};

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 28px;
    margin-left: 200px;
  }

  .links {
    position: relative;
    margin-top: 30px;
    margin-right: 400px;
  }

  .mode {
    position: absolute;
    right: 10%;
    top: 35px;
    font-size: 23px;
    color: ${({ theme }) => theme.text};
  }

  .mode:hover {
    cursor: pointer;
  }

  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    color: ${({ theme }) => theme.text};
  }

  a:hover {
    color: ${({ theme }) => theme.text2};
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 15px;
      margin-left: 10px;
    }

    .links {
      margin-right: 10%;
      font-size: 13px;
      margin-top: 12px;
    }

    .mode {
      position: absolute;
      right: 5px;
      top: 22px;
      font-size: 15px;
    }
  }
`;
