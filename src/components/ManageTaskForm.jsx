import React from 'react';
import styled from 'styled-components';
import { format, isValid, parseISO } from 'date-fns';

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
  /* font-weight: 700; */

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
  console.log('--managetaskform props.taskToEdit', props.taskToEdit);

  console.log('props from managetaskform', props);
  console.log('props.taskToEdit', props.taskToEdit);
  console.log('props.taskToEdit.dueDate', props.taskToEdit.dueDate);

  // let shortVersionOfDate = format(
  //   parseISO(props.taskToEdit.dueDate),
  //   'yyyy-MM-dd'
  // );
  let dur = props.taskToEdit.dueDate;
  console.log('dur', dur);
  // let parsedDur = parse(dur);
  // let shortVersionOfDate = toString(
  //   format(props.taskToEdit.dueDate, 'yyyy-MM-dd')
  // );
  // let shortVersionOfDate = toString(
  //   format(props.taskToEdit.dueDate, 'yyyy-MM-dd')
  // );
  let shortVersionOfDate;
  if (props.taskToEdit.dueDate) {
    shortVersionOfDate = format(props.taskToEdit.dueDate, 'yyyy-MM-dd');
  } else {
    shortVersionOfDate = '';
  }
  // let shortVersionOfDate = '';  // to show no date

  console.log(
    'isValid(parseISO(shortVersionOfDate))',
    isValid(parseISO(shortVersionOfDate))
  );
  console.log('shortVersionOfDate.type', shortVersionOfDate.type);
  console.log('22222222222222shortVersionOfDate', shortVersionOfDate);

  // let x = 4;
  // function bar() {
  //   console.log(x);
  //   debugger;
  // }
  // bar();

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
        <label htmlFor="dueDate">Due Date</label>
        <input
          name="dueDate"
          type="date"
          // value={props.taskToEdit.dueDate}
          // value="2022-08-08"
          // value={shortVersionOfDate}
          // defaultValue="2022-08-08"
          defaultValue={shortVersionOfDate}
          // onChange={props.handleOnChangeTaskInput}
        />
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
