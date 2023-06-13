import React from "react";
import Container from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { LastSection, HeaderDiv} from "./styles/LastSection.styled";

function Header() {
  return (
    <LastSection>
      <Container>
        <Flex>
          <HeaderDiv>
            <h1>Ready To Build Your Community?</h1>
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
        </Flex>
      </Container>
    </LastSection>
  );
}

export default Header;
