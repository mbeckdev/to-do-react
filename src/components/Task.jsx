import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const WrapperTask = styled.li`
  /* margin-top: 1rem; */
  /* line-height: 2rem; */
  width: 100%;

  .top-row {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .task-title {
    text-align: left;
    /* margin-left: 10px; */
    text-indent: -10px;
    padding-left: 15px;
    flex-grow: 11;

    /* background-color: blue; */
  }

  input {
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 5px;
  }
  input[type='checkbox'] {
    margin-right: 0;
  }
  .due-date {
    letter-spacing: -2px;

    /* don't grow, don't shrink, width stays at this */
    flex: 0 0 auto;
  }

  .description-section {
    text-align: left;
    padding: 0px 5px 10px 5px;
    /* text-indent: 10px; */
    /* background-color: red; */
  }

  @media screen and (min-width: 500px) {
    .description-section {
      padding-left: 110px;
    }
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

  // console.log('props.task.dueDate', props.task.dueDate);
  // console.log('props.task.description', props.task.description);
  // console.log('props.task', props.task);
  // console.log('props.task.descriptionIsShown', props.task.descriptionIsShown);

  console.log('props.task.descriptionIsShown', props.task.descriptionIsShown);

  return (
    // <div className="task">
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

        <input type="checkbox" />
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
    // </div>
  );
}

export default Task;
