import React from 'react';

import styled from 'styled-components';
import WrapperApp from '../styles/WrapperApp';

const WrapperProjectMenu = styled.div`
  /* background-color: blue; */
  background: ${(props) => props.theme.colors.color5BlackLighter1};

  width: 250px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  transition: left 0.35s ease-in-out;

  text-align: left;
  /* padding: 5px; */
  /* border: 4px solid black; */
  box-shadow: 1px 1px 5px black;
  /* .menu-hidden {
    transition: left 0.35s ease-in-out;
    position: absolute;
    left: -50%;
    /* left: -250px; */
  /* background-color: green; */
  /* }  */
  .menu-header {
    /* border: 1px solid red; */
    /* background-color: darkblue; */
    background: ${(props) => props.theme.colors.color5Black};
    text-align: center;
  }
  .sortable {
    padding: 0 5px;
    border: 1px solid green;
    cursor: pointer;
    margin: 2px;
  }
  .sortable:last-of-type {
    padding-bottom: 5px;
  }
  .sortable:first-of-type {
    padding-top: 5px;
  }

  @media only screen and (min-width: 700px) {
    /* bigger than mobile view */
    background-color: red;
  }
`;

function ProjectMenu({ handleProjectClick, showMobileMenu }) {
  return (
    <WrapperProjectMenu
      id="project-menu"
      // className="menu-hidden"
      className={showMobileMenu && 'menu-hidden'}
    >
      {/* <div className={props.showMobileMenu && 'menu-hidden'}> */}
      <h2 className="menu-header">Projects</h2>
      <div className="sortable" onClick={handleProjectClick}>
        All
      </div>

      <h3 className="menu-header">By Date</h3>
      <ul>
        <li className="sortable" onClick={handleProjectClick}>
          Today
        </li>
        <li className="sortable" onClick={handleProjectClick}>
          Week
        </li>
        <li className="sortable" onClick={handleProjectClick}>
          Month
        </li>
      </ul>

      <h3 className="menu-header">Projects</h3>
      <ul>
        <li className="sortable" onClick={handleProjectClick}>
          Apples
        </li>
        <li className="sortable" onClick={handleProjectClick}>
          Zebras
        </li>
        <li className="sortable" onClick={handleProjectClick}>
          Carrots
        </li>
        <li className="sortable" onClick={handleProjectClick}>
          Bananas
        </li>
      </ul>
      {/* </div> */}
    </WrapperProjectMenu>
  );
}

export default ProjectMenu;
