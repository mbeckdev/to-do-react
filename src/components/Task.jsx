import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const WrapperTask = styled.li`
  width: 100%;

  .top-row {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .task-title {
    text-align: left;
    text-indent: -10px;
    padding-left: 15px;
    flex-grow: 11;
  }

  input {
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 4px;
  }

  input[type='checkbox'] {
    margin-right: 0;
  }

  .due-date {
    letter-spacing: -2px;

    /* don't grow, don't shrink, width stays at this */
    flex: 0 0 55px;
  }

  .description-section {
    text-align: left;
    padding: 0px 5px 10px 5px;
  }

  @media screen and (min-width: 500px) {
    .description-section {
      padding-left: 110px;
    }
  }
`;

const getFormattedDueDate = (dueDate) => {
  if (dueDate === '') {
    // Date was not entered:
    return '';
  } else {
    return format(dueDate, 'MM-dd-yy');
  }
};

function Task(props) {
  return (
    <WrapperTask className="task">
      <div className="top-row">
        <DeleteButton
          task={props.task}
          handleDeleteTask={props.handleDeleteTask}
        />
        <EditButton
          task={props.task}
          handleEditButtonClick={props.handleEditButtonClick}
        />
        <div className="due-date">
          {getFormattedDueDate(props.task.dueDate)}
        </div>

        <input
          type="checkbox"
          onClick={() => {
            props.handleCheckboxClick(props.task.id);
          }}
          defaultChecked={props.task.completed}
        />
        <div
          className="task-title"
          onClick={() => props.handleTaskTitleClick(props.task.id)}
        >
          {props.task.title}
        </div>
      </div>
      {props.task.descriptionIsShown && (
        <div
          className="description-section"
          onClick={() => props.handleTaskDescriptionClick(props.task.id)}
        >
          {props.task.taskDescription}
        </div>
      )}
    </WrapperTask>
  );
}

export default Task;
