import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const WrapperManageTaskForm = styled.form`
  box-shadow: 0 0 10px black;
  padding: 5px;
  position: absolute;
  top: 4em;
  left: 0;
  width: 80%;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  background-color: ${(props) => props.theme.colors.color5BlackLighter1};

  .hidden {
    visibility: hidden;
  }

  h2 {
    color: ${(props) => props.theme.colors.color4LightBlue};
  }

  .form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0.5rem;

    label {
      font-size: small;
      font-weight: bold;
      color: ${(props) => props.theme.colors.color4LightBlue};
    }

    input,
    textarea {
      font-family: inherit;
      font-weight: inherit;
      padding: 2px 5px;
      width: 100%;
      background-color: ${(props) => props.theme.colors.color5Black};
      border-radius: 5px;
      color: ${(props) => props.theme.colors.textColor1};
    }

    textarea {
      resize: none;
      height: 5rem;
    }
  }
`;

function ManageTaskForm(props) {
  let shortVersionOfDate;
  if (props.taskToEdit.dueDate) {
    shortVersionOfDate = format(props.taskToEdit.dueDate, 'yyyy-MM-dd');
  } else {
    shortVersionOfDate = '';
  }

  return (
    <WrapperManageTaskForm
      id="manage-task-form"
      onSubmit={props.handleOnSubmit}
    >
      <h2>{props.isEditing ? 'Edit Task' : 'Add Task'}</h2>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input
          autoFocus
          name="title"
          type="text"
          value={props.taskToEdit.title}
          onChange={props.handleOnChangeTaskInput}
        />
      </div>
      <div className="form-row">
        <label htmlFor="taskDescription">Description</label>
        <textarea
          name="taskDescription"
          type="text"
          placeholder="your task description"
          value={props.taskToEdit.taskDescription}
          onChange={props.handleOnChangeTaskInput}
        />
      </div>
      <div className="form-row">
        <label htmlFor="dueDate">Due Date</label>
        <input name="dueDate" type="date" defaultValue={shortVersionOfDate} />
      </div>
      <div className="form-row">
        <label htmlFor="project">Project</label>
        <input
          name="project"
          type="search"
          list="mylist"
          value={props.taskToEdit.project}
          onChange={props.handleOnChangeTaskInput}
        />
      </div>

      <button className="regular-button">OK</button>
    </WrapperManageTaskForm>
  );
}

export default ManageTaskForm;
