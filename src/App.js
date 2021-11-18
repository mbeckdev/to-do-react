import './App.css';
import TestComponent from './components/TestComponent';
import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { format, parseISO } from 'date-fns';

// React components
import Task from './components/Task';
import ManageTaskForm from './components/ManageTaskForm';
import ProjectMenu from './components/ProjectMenu';
import Hamburger from './Hamburger';

// Styled components and colors imports
import { darkTheme, lightTheme } from './colors';

import WrapperApp from './styles/WrapperApp';

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
      project: 'Apples',
    },
    {
      isEditing: false,
      descriptionIsShown: true,
      id: uniqid(),
      title: 'Task2 text goesum dur haaa',
      taskDescription: 'longer2 descripn you click on it',
      dueDate: new Date('Feb 1 2001'),
      completed: true,
      project: 'Apples',
    },
    {
      isEditing: false,
      descriptionIsShown: false,
      id: uniqid(),
      title: 'Task3 text goes herur haaa',
      taskDescription: 'longer3 descriptionsf sd fws up when you click on it',
      dueDate: new Date('Mar 1 2003'),
      completed: false,
      project: 'Zebras',
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
      project: 'Bananas',
    },
  ]);

  const emptyTask = {
    isEditing: false,
    descriptionIsShown: false,
    id: uniqid(),
    title: '',
    taskDescription: '',
    // dueDate: new Date('Jan 1 2000'),
    // dueDate: 0,
    // dueDate: '',
    completed: false,
    project: '',
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
    let project = e.target.project.value;
    let dueDateValue = e.target.dueDate.value;

    let dueDate;
    if (dueDateValue) {
      dueDate = _getLongDate(dueDateValue);
    } else {
      console.log('***********duedate exists, but is = "" test', dueDate);
      dueDate = '';
    }

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
      project: project,
    };

    console.log('-----onsubmit before edit check isEditing', isEditing);
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

      //newTask should be used, not tasktoEdit

      let theIndex = findIndexFromId(taskToEdit.id);
      // newTask = taskToEdit;

      newTask.id = taskToEdit.id;
      newTask.descriptionIsShown = taskToEdit.descriptionIsShown;
      newTask.completed = taskToEdit.completed;
      newTask.project = taskToEdit.project;

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
    console.log('--handleOnChangeTaskInput--');
    let prevTaskToEdit = taskToEdit;

    if (e.target.name === 'dueDate') {
      // do nothing - we'll set the date onSubmit instead of onChange - see handleOnSubmit
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

  const handleCheckboxClick = (taskId) => {
    console.log('checkbox clicked');
    console.log('checkbox clicked taskId = ', taskId);

    // find the task
    // change the task
    // set the tasks
    let theIndex = findIndexFromId(taskId);
    let newTasks = tasks;
    newTasks[theIndex].completed = !newTasks[theIndex].completed;
    setTasks([...newTasks]);

    //what is this task in tasks list?
    //is the task.completed true? if so, make it false
  };

  const handleConsoleLogTasks = () => {
    console.log(tasks);
    console.log('taskToEdit', taskToEdit);
    console.log('sortedTasks', sortedTasks);
  };

  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const handleHamburgerClick = () => {
    openOrCloseMenu();
    //Show Project menu on top of screen for mobile view
  };

  const openOrCloseMenu = () => {
    console.log('hamburger click showmobilemenu=', showMobileMenu);
    setShowMobileMenu((prev) => !prev);
  };

  const [sortedTasks, setSortedTasks] = useState(tasks);

  const handleProjectClick = (e) => {
    console.log('e.target.innerText= ', e.target.innerText);
    // setStortingByTerm(e.target.innerText);

    let clickedProject = e.target.innerText;
    // like "Today" and "Week" and "Zebras"

    //show only those that match the project.
    let sortedListToShow = tasks.filter(
      (task) => task.project === clickedProject
    );
    console.log('sortedListToShow', sortedListToShow);
    setSortedTasks(sortedListToShow);
    console.log('sortedTasks', sortedTasks);

    // Close the project window - same things as what handleHamburgerclick does
    openOrCloseMenu();
  };

  // const [sortingByTerm, setSortingByTerm] = useState('');

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
      <WrapperApp>
        <div className="app">
          <header className="app-header">
            <h1>TO DO LIST</h1>
            <Hamburger handleHamburgerClick={handleHamburgerClick} />
          </header>

          <main>
            <div id="main-width-container">
              {/* {showMobileMenu && <ProjectMenu />} */}
              {/* {showMobileMenu ? (
                <ProjectMenu />
              ) : (
                <ProjectMenu className="menu-hidden" />
              )} */}
              <ProjectMenu
                showMobileMenu={showMobileMenu}
                handleProjectClick={handleProjectClick}
              />

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

              <button
                className="regular-button"
                onClick={handleConsoleLogTasks}
              >
                console.log all tasks - deletemeeee
              </button>

              <div>Project: {sortedTasks[0] && sortedTasks[0].project}</div>

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
                {/* {tasks.map((task) => ( */}
                {sortedTasks.map((task) => (
                  <Task
                    task={task}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    handleTaskTitleClick={handleTaskTitleClick}
                    handleTaskDescriptionClick={handleTaskDescriptionClick}
                    handleEditButtonClick={handleEditButtonClick}
                    handleCheckboxClick={handleCheckboxClick}
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
