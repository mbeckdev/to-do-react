import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const WrapperTask = styled.li`
  display: flex;
  align-items: flex-start;

  .task-title {
    text-align: left;
    margin-left: 10px;
    text-indent: -10px;
  }

  input {
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 5px;
  }

  .due-date {
    letter-spacing: -2px;

    /* don't grow, don't shrink, width stays at this */
    flex: 0 0 auto;
  }
`;

const getFormattedDueDate = (dueDate) => {
  if (isNaN(dueDate.getTime())) {
    // Date was not entered:
    return '';
  } else {
    return format(dueDate, 'MM-dd-yy');
  }
};

function Task(props) {
  // console.log(props.task);
  // let

  console.log('props.task.dueDate', props.task.dueDate);
  return (
    // <div className="task">
    <WrapperTask className="task">
      <DeleteButton
        task={props.task}
        handleDeleteTask={props.handleDeleteTask}
      />
      <EditButton />
      {/* <button>Edit</button> */}
      <div className="due-date">{getFormattedDueDate(props.task.dueDate)}</div>

      <input type="checkbox" />
      <div className="task-title">{props.task.text}</div>
    </WrapperTask>
    // </div>
  );
}

export default Task;
