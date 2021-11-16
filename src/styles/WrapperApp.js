import React from 'react';
import styled from 'styled-components';

const WrapperApp = styled.section`
  background: ${(props) => props.theme.colors.color5Black};
  color: ${(props) => props.theme.colors.textColor1};
  font-weight: 700;
  font-family: 'Lato', sans-serif;

  .app {
    text-align: center;
    min-height: 100vh;
    position: relative;
  }

  .app-header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .regular-button {
    border-radius: 5px;
    padding: 3px 15px;
    /* font-family: sans-serif; */
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    background-color: ${(props) => props.theme.colors.color3Green};
  }

  header {
    background-color: #282c84;
    background-color: ${(props) => props.theme.colors.color5BlackLighter1};
    /* height: 100px; */
    z-index: 45;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main #main-width-container {
    /* min-width: 900px; */
    max-width: 900px;
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 0.5rem;
  }

  @media screen and (min-width: 500px) {
    main #main-width-container {
      width: 80%px;
    }
  }

  main #task-container {
    /* max-width: 1500px; */
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */

    border: 1px solid red;
  }

  .menu-hidden {
    /* left: -50%; */
    left: -255px;
    /* background-color: green; */
  }

  /* // extra space so the footer won't ever be shown over something */
  main #extra-space {
    height: 1.6rem;
    border: 1px solid orange;
  }

  ul {
    list-style-type: none;
  }

  footer {
    height: 1.6rem;
    border: 1px solid yellow;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  #top-labels-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${(props) => props.theme.colors.color3Green};
    background-color: ${(props) => props.theme.colors.color5BlackLighter1};
    #due-date-label {
      width: 110px;
      text-align: end;
    }

    #task-label {
      flex: 1 1 auto;
    }

    #due-date-label:active,
    #task-label:active {
      color: ${(props) => props.theme.colors.color5Black};
    }
  }
`;

export default WrapperApp;
