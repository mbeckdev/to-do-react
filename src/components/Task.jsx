import React from 'react';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const WrapperTask = styled.div`
  display: flex;
  align-items: center;

  button {
    /* border: 1px solid red; */
    /* border: none; */
  }

  .task-title {
    /* margin-left: 5px; */
  }

  input {
    margin: 3px;
  }
`;

function Task() {
  return (
    // <div className="task">
    <WrapperTask className="task">
      <DeleteButton />
      <EditButton />
      {/* <button>Edit</button> */}
      <div>12-12-12</div>
      <input type="checkbox" />
      <div className="task-title">Task title text hereeeeee e ee e e e</div>
    </WrapperTask>
    // </div>
  );
}

export default Task;
