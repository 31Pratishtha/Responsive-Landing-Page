import { styled } from "styled-components";

export const Image = styled.img`
  width: 700px;
  padding-top: 50px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 600px;
  }
`;
