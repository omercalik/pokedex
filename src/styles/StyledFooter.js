import styled from "styled-components";

export const StyledFooter = styled.div`
  text-align: center;
  font-family: "Quicksand";
  background-color: ${({ theme }) => theme.footer};
  padding-top: 10px;
  height: 73px;
  color: ${({ theme }) => theme.footerText};

  @media screen and (max-width: 768px) {
    height: 50px;

    h4 {
      margin-top: 10px;
    }
  }
`;
