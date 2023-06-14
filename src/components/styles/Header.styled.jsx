import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 50px;
  color: black;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 21px 21px;
  }
`;

export const Logo = styled.img`
  margin: 0;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 170px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  padding: 180px 100px 0px;
  text-align: center;

  h1 {
    padding-bottom: 20px;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      padding-bottom: 30px;
      font-size: 1.5rem;
    }
  }

  p {
    padding: 0px 220px 20px;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0px 7px 30px;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 114px 30px 0px;
  }
`;
