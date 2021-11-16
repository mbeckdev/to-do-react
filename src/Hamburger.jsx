import React from 'react';

import styled from 'styled-components';
import WrapperApp from './styles/WrapperApp';

const WrapperHamburger = styled.section`
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

  @media only screen and (min-width: 700px) {
    /* h1 {
    margin-left: 10px;
  }

  nav {
    position: relative;
    top: 0;
  } */

    #hamburger {
      display: none;
    }
    /* 
  #nav-main-container {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .nav-is-left {
    transform: none;
  } */
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
