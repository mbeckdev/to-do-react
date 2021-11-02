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

  button {
    border-radius: 5px;
    padding: 3px 15px;
    /* font-family: sans-serif; */

    background-color: ${(props) => props.theme.colors.color3Green};
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
  let formIsHidden = props.formIsHidden;
  return (
    <WrapperManageTaskForm id="manage-task-form">
      <h2>Add Task</h2>
      <div className="form-row">
        <label htmlFor="task-title">Title</label>
        <input
          autoFocus
          name="task-title"
          type="text"
          placeholder="your task"
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          type="text"
          placeholder="your task description"
        />
      </div>
      <div className="form-row">
        <label htmlFor="task-due-date">Due Date</label>
        <input name="task-due-date" type="date" />
      </div>

      <button>OK</button>
    </WrapperManageTaskForm>
  );
}

export default ManageTaskForm;