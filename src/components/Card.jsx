import React from "react";
import {
  StyledCard,
  StyledCardBody,
  StyledCardImage,
} from "./styles/Card.styled";
import { CurvedSecTop, CurvedSecBottom } from "./styles/CurvedSec.styled";

import { desktopTopImg, mobileTopImg, mobileBottomImg, desktopBottomImg } from "./Curvedsec";

function Card({ item: { id, title, body, image } }) {
  return (
    <>
      <CurvedSecTop>
        <picture>
          <source
            media="(max-width: 875px)"
            srcSet={mobileTopImg(id)}
          />
          <img src={desktopTopImg(id)} />
        </picture>
      </CurvedSecTop>

      <StyledCard layout={id % 2 === 0 && "row-reverse"}>
        <StyledCardBody>
          <h2>{title}</h2>
          <p>{body}</p>
        </StyledCardBody>
        <StyledCardImage
          src={`./assets/images/${image}`}
          alt=""
        ></StyledCardImage>
      </StyledCard>

      <CurvedSecBottom>
        <picture>
          <source
            media="(max-width: 875px)"
            srcSet={mobileBottomImg(id)}
          />
          <img src={desktopBottomImg(id)} />
        </picture>
      </CurvedSecBottom>
    </>
  );
}

export default Card;
