import React from 'react';

import styled from 'styled-components';
// import WrapperApp from '../styles/WrapperApp';

const WrapperHamburger = styled.div`
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  cursor: pointer;
  color: ${(props) => props.theme.colors.textColor1};

  .hamburger-line {
    position: relative;
    width: 20px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.color2Yellow};

    margin: 2px 0;
  }

  /* Hide hamburger button in desktop view */
  @media only screen and (min-width: 1400px) {
    /* display: none;
    border: 1px solid red; */
  }
`;

function Hamburger(props) {
  return (
    <WrapperHamburger id="hamburger" onClick={props.handleHamburgerClick}>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </WrapperHamburger>
  );
}

export default Hamburger;
