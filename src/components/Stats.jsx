import React from 'react';
import { StyledStats } from './styles/Stats.styled';

function Stats() {
  return (
    <StyledStats>
        <div>
          <img src='./src/assets/images/icon-communities.svg' alt=''/>
          <h1>1.4k+</h1>
          <p>Communities Formed</p>
        </div>

        <div>
          <img src='./src/assets/images/icon-messages.svg' alt=''/>
          <h1>2.7m+</h1>
          <p>Messages Sent</p>
        </div>
    </StyledStats>
  );
}

export default Stats;
