import React from 'react';
import styled from 'styled-components';

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
  /* color: var(--main-text-color); */

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
      font-family: sans-serif;
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
  // console.log('managetaskform props.taskToEdit', props.taskToEdit);
  return (
    <WrapperManageTaskForm
      id="manage-task-form"
      // className={hiddenOrNot}
      onSubmit={props.handleOnSubmit}
    >
      <h2>Add Task</h2>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        {/* {!props.isEditing ? (
          <input autoFocus name="title" type="text" placeholder="your task" />
        ) : (
          <input
            autoFocus
            name="title"
            type="text"
            value={props.taskToEdit.title}
            onChange={props.handleOnChangeTaskInput}
          />
        )} */}
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
        <label htmlFor="taskDueDate">Due Date</label>
        <input
          name="taskDueDate"
          type="date"
          value={props.taskToEdit.dueDate}
          onChange={props.handleOnChangeTaskInput}
        />
      </div>

      <button className="regular-button">OK</button>
    </WrapperManageTaskForm>
  );
}

export default ManageTaskForm;
