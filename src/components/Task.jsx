import React from 'react';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const WrapperTask = styled.li`
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
    margin-left: 10px;
    margin-right: 5px;
  }

  .due-date {
    letter-spacing: -2px;
  }
`;

function Task(props) {
  // console.log('props', props);
  // console.log('props.task', props.task);
  // console.log('props.task.text', props.task.text);
  // console.log(props);
  return (
    // <div className="task">
    <WrapperTask className="task">
      <DeleteButton
        task={props.task}
        handleDeleteTask={props.handleDeleteTask}
      />
      <EditButton />
      {/* <button>Edit</button> */}
      <div className="due-date">12-34-12</div>
      <input type="checkbox" />
      <div className="task-title">{props.task.text}</div>
    </WrapperTask>
    // </div>
  );
}

export default Task;
