import React from "react";
import { StyledHeader, Nav, Logo, HeaderDiv } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/Image.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./src/assets/images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <HeaderDiv>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button
              bg="#fd53c0"
              color="white"
              fontweight="bold"
              hoverbg="##ff8ed6"
              hovercolor="#fff"
              hoverborder="##ff8ed6"
              pY="20px"
              pX="60px"
            >
              Get Started For Free
            </Button>
          </HeaderDiv>
          <Image src="./src/assets/images/screen-mockups.svg" alt=""></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
