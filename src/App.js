import './App.css';
import TestComponent from './components/TestComponent';
import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import uniqid from 'uniqid';

import Task from './components/Task';
import ManageTaskForm from './components/ManageTaskForm';

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
    font-family: sans-serif;
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
  }

  main #main-width-container {
    max-width: 1000px;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  main #task-container {
    max-width: 500px;
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

  /* .hidden {
    visibility: hidden;
  } */
`;

function App() {
  let useLightTheme = false;

  const [tasks, setTasks] = useState([
    {
      isEditing: false,
      id: uniqid(),
      text: 'Task1 text goes hereeeeeee alskdjf blah ipsum dur haaa',
      taskDescription:
        'longer1 description is this part where it shows up when you click on it',
      dueDate: new Date('Dec 30 2000'),
      completed: false,
    },
    {
      isEditing: false,
      id: uniqid(),
      text: 'Task2 text goesum dur haaa',
      taskDescription:
        'longer2 description is this part where it shows up when you click on it',
      dueDate: new Date('Dec 30 2000'),
      completed: false,
    },
    {
      isEditing: false,
      id: uniqid(),
      text: 'Task3 text goes herur haaa',
      taskDescription:
        'longer3 description is this part where it shows up when you click on it',
      dueDate: new Date('Jan 1 2000'),
      completed: false,
    },
    {
      isEditing: false,
      id: uniqid(),
      text: 'Task4 text goes herur haaa',
      taskDescription:
        '4 description is this part where it shows up when you click on it',
      dueDate: new Date('Jan 1 2000'),
      completed: false,
    },
  ]);

  const [manageTaskFormIsHidden, setManageTaskFormIsHidden] = useState(true);

  // const findIndex = () => {};

  const handleAddTask = () => {
    console.log('handling add task');
    setManageTaskFormIsHidden(false);
  };

  const handleDeleteTask = (thisId) => {
    console.log('handling delete task', thisId);

    let newTasks = tasks.filter((item) => item.id !== thisId);
    setTasks(newTasks);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('on submit happening');
    // console.log('on submit e.target.title.value', e.target.title.value);
    // console.log('on submit e.target.taskTitle.value', e.target.taskTitle.value);

    let title = e.target.taskTitle.value;
    let description = e.target.taskDescription.value;
    let dueDateValue = e.target.taskDueDate.value;

    console.log('e.target.taskDueDate.value = ', e.target.taskDueDate.value);
    // 2021-11-02
    // let year = 2021;
    // let month = 10;
    // let day = 17;

    let year = Number(dueDateValue.slice(0, 4));
    let month = Number(dueDateValue.slice(5, 7)) - 1;
    let day = Number(dueDateValue.slice(-2));
    console.log('dueDateValue = ', dueDateValue);
    console.log('dueDateValue.slice(0,2) = ', dueDateValue.slice(0, 2));
    console.log('year', year);
    console.log('year month day ', year, ' ', month, ' ', day);

    // let dueDate = new Date(2021, 10, 5); //month 0 = Jan
    let dueDate = new Date(year, month, day);
    console.log('new Date(year, month, day);', new Date(year, month, day));
    console.log('new Date(2021, 10, 5);', new Date(2021, 10, 5));

    setManageTaskFormIsHidden(true);

    let newTask = {
      isEditing: false,
      id: uniqid(),
      text: title,
      taskDescription: description,
      dueDate: dueDate,
      // dueDate: new Date('Jan 2 2000'),
      completed: false,
    };
    // let newTask = {
    //   isEditing: false,
    //   id: uniqid(),
    //   text: 'Task4 text goes herur haarrra',
    //   taskDescription:
    //     '4 description is this part where it shows up when you click on it',
    //   dueDate: new Date('Jan 2 2000'),
    //   completed: false,
    // };
    let newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };

  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
      {/* <ThemeProvider theme={darkTheme}> */}
      <WrapperApp>
        <div className="app">
          <header className="app-header">
            <p>headdderrrrrr</p>
          </header>
          <main>
            <div id="main-width-container">
              {!manageTaskFormIsHidden && (
                <ManageTaskForm handleOnSubmit={handleOnSubmit} />
              )}

              <p>main stuff here</p>
              <button className="regular-button" onClick={handleAddTask}>
                ADD TASK
              </button>
              <ul id="task-container">
                {tasks.map((task) => (
                  <Task
                    task={task}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
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
