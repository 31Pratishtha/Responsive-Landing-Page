import React from "react";
import { StyledFooter, StyledContact, StyledNewsletter, handleEmailSubmit, EmailInput, SubmitButton} from "./styles/Footer.styled";
import { desktopFooter, mobileFooter } from "./Curvedsec";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

function Footer() {
  return (
    <>
      <div>
        <picture>
          <source
            media="(max-width: 875px)"
            srcSet={mobileFooter()}
          />
          <img src={desktopFooter()} style={{translate: '0px 7px', width: '100%'}}/>
        </picture>
      </div>

      <StyledFooter>
        <StyledContact>
            <img src="./src/assets/images/logo_white.svg" alt="" className="whiteLogo"/>
            <p className="whiteLogo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ut officia sint, a architecto itaque?</p>
            <div className="contact">
              <img src="./src/assets/images/icon-phone.svg" alt=""/>
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="contact">
              <img src="./src/assets/images/icon-email.svg" alt=""/>
              <p>example@huddle.com</p>
            </div>
            <StyledSocialIcons>
              <a href="https://facebook.com" target="_blank"><FaFacebookSquare/></a>
              <a href="https://Instagram.com" target="_blank"><FaInstagram/></a>
              <a href="https://Twitter.com" target="_blank"><FaTwitterSquare/></a>
            </StyledSocialIcons>
        </StyledContact>

        <StyledNewsletter>
            <h1>NEWSLETTER</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae veritatis eveniet rerum quos architecto!</p>

            <form onSubmit={handleEmailSubmit}>
              <EmailInput type="email" placeholder="Enter Your Email"/>
              <SubmitButton type="submit" bg="#fd53c0"
              color="white"
              fontweight="bold"
              hoverbg="##ff8ed6"
              hovercolor="#fff"
              hoverborder="##ff8ed6">Subscribe</SubmitButton>
            </form>
        </StyledNewsletter> 
      </StyledFooter>

    </>
  );
}

export default Footer;
