import React from 'react';

import styled from 'styled-components';
// import WrapperApp from '../styles/WrapperApp';

const WrapperProjectMenu = styled.div`
  background: ${(props) => props.theme.colors.color5BlackLighter1};
  width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  transition: left 0.35s ease-in-out;
  text-align: left;
  box-shadow: 1px 1px 5px black;

  .menu-header {
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

  /* bigger than mobile view */
  @media only screen and (min-width: 900px) {
    .menu-header {
      background-color: red;
    }
  }
`;

function ProjectMenu({ handleProjectClick, showMobileMenu, tasks }) {
  let projectList = [];
  let interimProjectList = tasks.map((task) => task.project);
  // ['b','a','b','c']
  projectList = interimProjectList.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  // ['b','a', 'c']
  projectList.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return (
    <WrapperProjectMenu
      id="project-menu"
      className={showMobileMenu && 'menu-hidden'}
    >
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

      {/* I'm using the name of the project as the key because 
      I know this will always be unique */}
      <ul>
        {projectList.map((project) => (
          <li className="sortable" key={project} onClick={handleProjectClick}>
            {project}
          </li>
        ))}
      </ul>
    </WrapperProjectMenu>
  );
}

export default ProjectMenu;
