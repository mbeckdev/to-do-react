import './App.css';
import TestComponent from './components/TestComponent';
import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { format, parseISO } from 'date-fns';

import Task from './components/Task';
import ManageTaskForm from './components/ManageTaskForm';
// import { buildQueries } from '@testing-library/dom';

let darkTheme = {
  colors: {
    primary: `yellow`,
    secondary: `red`,
    color1Red: `#ffa69e`,
    color2Yellow: `#faf3dd`,
    color3Green: `#b8f2e6`,
    color4LightBlue: `#aed9e0`,
    color5Black: `#1c1d22`,
    color5BlackLighter1: `#2e3138`,
    // color5Black: `#4b4f5b`,
    // color5Black: `#5e6472`,
    // https://colorhex.net/5e6472 has great shades
  },
};
darkTheme.colors.textColor1 = darkTheme.colors.color2Yellow;
darkTheme.colors.textColor2 = darkTheme.colors.color1Red;
darkTheme.colors.iconColorPrimary = darkTheme.colors.color4LightBlue;
darkTheme.colors.iconColorSecondary = darkTheme.colors.color5Black;

let lightTheme = {
  colors: {
    primary: `lightyellow`,
    secondary: `lightred`,
    color1Red: `#11a69e`,
    color2Yellow: `#11f3dd`,
    color3Green: `#11f2e6`,
    color4LightBlue: `#11d9e0`,
    color5Black: `#111122`,
    color5BlackLighter1: `#2e3138`,
    // color5Black: `#4b4f5b`,
    // color5Black: `#5e6472`,
    // https://colorhex.net/5e6472 has great shades
  },
};
lightTheme.colors.textColor1 = lightTheme.colors.color2Yellow;
lightTheme.colors.textColor2 = lightTheme.colors.color1Red;
lightTheme.colors.iconColorPrimary = lightTheme.colors.color4LightBlue;
lightTheme.colors.iconColorSecondary = lightTheme.colors.color5Black;

const WrapperApp = styled.section`
  background: ${(props) => props.theme.colors.color5Black};
  color: ${(props) => props.theme.colors.textColor1};
  font-weight: 700;
  font-family: 'Lato', sans-serif;

  .app {
    text-align: center;
    min-height: 100vh;
    position: relative;
  }

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .regular-button {
    border-radius: 5px;
    padding: 3px 15px;
    /* font-family: sans-serif; */
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    background-color: ${(props) => props.theme.colors.color3Green};
  }

  header {
    background-color: #282c84;
    /* height: 100px; */
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }

  main #main-width-container {
    /* min-width: 900px; */
    max-width: 900px;
    width: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  @media screen and (min-width: 500px) {
    main #main-width-container {
      width: 80%px;
    }
  }

  main #task-container {
    /* max-width: 1500px; */
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */

    border: 1px solid red;
  }

  // extra space so the footer won't ever be shown over something
  main #extra-space {
    height: 1.6rem;
    border: 1px solid orange;
  }

  ul {
    list-style-type: none;
  }

  footer {
    height: 1.6rem;
    border: 1px solid yellow;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  #top-labels-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${(props) => props.theme.colors.color3Green};
    background-color: ${(props) => props.theme.colors.color5BlackLighter1};
    #due-date-label {
      width: 110px;
      text-align: end;
    }

    #task-label {
      flex: 1 1 auto;
    }

    #due-date-label:active,
    #task-label:active {
      color: ${(props) => props.theme.colors.color5Black};
    }
  }
`;

function App() {
  let useLightTheme = false;

  const [tasks, setTasks] = useState([
    {
      isEditing: false,
      descriptionIsShown: false,
      id: uniqid(),
      title: 'Task1 text goes hereeeeeee alskdjf blah ipsum dur haaa',
      taskDescription:
        'longer1 description description description description description description description description description description description description is this part where it shows up when you click on it',
      dueDate: new Date('Dec 30 2000'),
      completed: false,
    },
    {
      isEditing: false,
      descriptionIsShown: true,
      id: uniqid(),
      title: 'Task2 text goesum dur haaa',
      taskDescription: 'longer2 descripn you click on it',
      dueDate: new Date('Feb 1 2001'),
      completed: false,
    },
    {
      isEditing: false,
      descriptionIsShown: false,
      id: uniqid(),
      title: 'Task3 text goes herur haaa',
      taskDescription: 'longer3 descriptionsf sd fws up when you click on it',
      dueDate: new Date('Mar 1 2003'),
      completed: false,
    },
    {
      isEditing: false,
      descriptionIsShown: false,
      id: uniqid(),
      title: 'Task4 text goes herur haaa',
      taskDescription:
        '4 description is this part where it shows up when you click on it',
      dueDate: new Date('Nov 1 1999'),
      completed: false,
    },
  ]);

  const emptyTask = {
    isEditing: false,
    descriptionIsShown: false,
    id: uniqid(),
    title: '',
    taskDescription: '',
    // dueDate: new Date('Jan 1 2000'),
    dueDate: 0,
    completed: false,
  };

  const [manageTaskFormIsHidden, setManageTaskFormIsHidden] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(emptyTask);

  const handleAddTask = () => {
    setIsEditing(false);
    console.log('handling add task');
    setManageTaskFormIsHidden(false);
  };

  const handleDeleteTask = (thisId) => {
    console.log('handling delete task', thisId);

    let newTasks = tasks.filter((item) => item.id !== thisId);
    setTasks(newTasks);
  };

  const handleEditButtonClick = (thisId) => {
    setIsEditing(true);

    console.log('33333333333333333handle edit button click');
    const theIndex = findIndexFromId(thisId);

    let newTasks = tasks;

    setManageTaskFormIsHidden(false);
    let newTask = newTasks[theIndex];

    // newTask.dueDate = format(parseISO(newTask.dueDate), 'yyyy-MM-dd');
    console.log('newTask.dueDate', newTask.dueDate);
    setTaskToEdit(newTask);
    console.log('newTask', newTask);
    console.log('taskToEdit3333', taskToEdit);

    //put things in form    .value

    // newTasks[theIndex].descriptionIsShown =
    //   !newTasks[theIndex].descriptionIsShown;
    // setTasks([...newTasks]);
  };

  const _getLongDate = (dateAsAShortString) => {
    // console.log('e', e);
    // console.log('22222222222 dueDateValue from target', dueDateValue);
    // console.log('222222 e.target.dueDate', e.target.dueDate);
    // console.log('222222 e.target', e.target);

    // console.log('e.target.taskDueDate.value = ', e.target.taskDueDate.value);
    // 2021-11-02
    // let year = 2021;
    // let month = 10;
    // let day = 2;

    let year = Number(dateAsAShortString.slice(0, 4));
    let month = Number(dateAsAShortString.slice(5, 7)) - 1;
    let day = Number(dateAsAShortString.slice(-2));

    // let dueDate = new Date(2021, 10, 5); //month 0 = Jan
    let newDate = new Date(year, month, day);
    return newDate;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('on submit happening');

    let title = e.target.title.value;
    let description = e.target.taskDescription.value;
    let dueDateValue = e.target.dueDate.value;

    let dueDate = _getLongDate(dueDateValue);

    console.log('dueDate from value as new Date(...)', dueDate);
    setManageTaskFormIsHidden(true);

    let newTask = {
      isEditing: false,
      descriptionIsShown: false,
      id: uniqid(),
      title: title,
      taskDescription: description,
      dueDate: dueDate,
      // dueDate: new Date('Jan 2 2000'),
      completed: false,
    };

    console.log('onsubmit before edit check isEditing', isEditing);
    if (!isEditing) {
      // we are adding
      let newTasks = [...tasks, newTask];
      setTasks(newTasks);
    } else {
      // we are editing
      let newTasks = tasks;
      // replace a task
      // which index?
      console.log(
        "we're about to submit on an edit screen, taskToEdit starts as ",
        taskToEdit
      );
      let theIndex = findIndexFromId(taskToEdit.id);
      newTask = taskToEdit;
      newTasks[theIndex] = newTask;
      console.log('new task after editing = newTask = ', newTask);
      setTasks([...newTasks]);
    }

    // Clear taskToEdit so it's empty next time we open this form
    setTaskToEdit(emptyTask);
  };

  const findIndexFromId = (thisId) => {
    const theTask = tasks.find((aTask) => aTask.id === thisId);
    const theIndex = tasks.indexOf(theTask);

    return theIndex;
  };

  const handleTaskTitleClick = (thisId) => {
    console.log('handleTaskTitleClick');
    console.log('thisId', thisId);
    //if description is not shown, show description
    // else, hide description
    const theIndex = findIndexFromId(thisId);
    let newTasks = tasks;
    newTasks[theIndex].descriptionIsShown =
      !newTasks[theIndex].descriptionIsShown;
    setTasks([...newTasks]);
  };

  const handleTaskDescriptionClick = (thisId) => {
    console.log('handleDescriptionClick');

    // Hide the description
    // let theTask = tasks.find((aTask) => aTask.id === thisId);
    // let theIndex = tasks.indexOf(theTask);
    const theIndex = findIndexFromId(thisId);
    let newTasks = tasks;
    newTasks[theIndex].descriptionIsShown = false;
    setTasks([...newTasks]);
  };

  // *** onChange inputs ***
  const handleOnChangeTaskInput = (e) => {
    let prevTaskToEdit = taskToEdit;

    if (e.target.name === 'dueDate') {
      console.log('we tried to change dueDate');
      console.log(
        "format(dueDate, 'MM-dd-yy');",
        format(parseISO(e.target.value), 'MM-dd-yy')
      );
      let longDate = _getLongDate(e.target.value);

      // setTaskToEdit({
      //   ...prevTaskToEdit,
      //   [e.target.name]: longDate,
      // });
    } else {
      setTaskToEdit({
        ...prevTaskToEdit,
        [e.target.name]: e.target.value,
      });

      console.log('handleOnchangeTaskInput');
      console.log('e.target.name', e.target.name);
      console.log('e.target.value', e.target.value);
    }

    console.log('taskToEdit', taskToEdit);
  };

  // e.target.name = title,
  // task.title = e.target.value

  const handleCategoryLabelClick = (e, category) => {
    // category can be dueDate or something else later like
    console.log('due date label clicked');

    // pseudo code:
    // reorder tasks
    // get a date
    // sort where 0 is the earliest date, and the last item in the array... is the latest date
    // setTasks

    let newTasks = tasks;
    let swapped = true;

    for (let i = 0; i < tasks.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < tasks.length - 1; j++) {
        if (newTasks[j][category] > newTasks[j + 1][category]) {
          // swap the entire tasks
          let tempTask = newTasks[j];
          newTasks[j] = newTasks[j + 1];
          newTasks[j + 1] = tempTask;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    setTasks([...newTasks]);
  };

  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <WrapperApp>
        <div className="app">
          <header className="app-header">
            <h1>TO DO LIST</h1>
          </header>
          <main>
            <div id="main-width-container">
              {!manageTaskFormIsHidden && (
                <ManageTaskForm
                  handleOnSubmit={handleOnSubmit}
                  isEditing={isEditing}
                  taskToEdit={taskToEdit}
                  handleOnChangeTaskInput={handleOnChangeTaskInput}
                />
              )}

              <button className="regular-button" onClick={handleAddTask}>
                ADD TASK
              </button>

              <div id="top-labels-row">
                <div
                  id="due-date-label"
                  onClick={(e) => handleCategoryLabelClick(e, 'dueDate')}
                >
                  Due Date
                </div>
                <div id="task-label">Task</div>
              </div>

              <ul id="task-container">
                {tasks.map((task) => (
                  <Task
                    task={task}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    handleTaskTitleClick={handleTaskTitleClick}
                    handleTaskDescriptionClick={handleTaskDescriptionClick}
                    handleEditButtonClick={handleEditButtonClick}
                  />
                ))}
              </ul>

              <TestComponent />
              <div id="extra-space"></div>
            </div>
          </main>
          <footer>footer here</footer>
        </div>
      </WrapperApp>
    </ThemeProvider>
  );
}

export default App;
