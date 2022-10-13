import { listSection, Task } from './vars.js';

export const parseLS = (tasksArr) => {
  tasksArr = JSON.parse(localStorage.getItem('tasks'));
  return tasksArr;
};

const editTask = (label, edBttn, dnBttn) => {
  edBttn.classList.replace('menuVis', 'menuHide');
  dnBttn.classList.replace('menuHide', 'menuVis');
  label.readOnly = false;
  label.select();
};

export const createHTML = (tasksArr) => {
  for (let i = 0; i < tasksArr.length; i += 1) {
    const taskDesc = tasksArr[i].description;
    const taskStatus = tasksArr[i].completed;
    const taskIndex = tasksArr[i].index;

    const taskWrap = document.createElement('div');
    taskWrap.setAttribute('id', taskStatus);
    taskWrap.classList.add('taskWrap');
    taskWrap.setAttribute('id', taskIndex);
    listSection.appendChild(taskWrap);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', `checkbox${taskIndex}`);
    checkbox.classList.add('checkbox');
    taskWrap.append(checkbox);

    const taskLabel = document.createElement('input');
    taskLabel.setAttribute('type', 'text');
    taskLabel.setAttribute('value', taskDesc);
    taskLabel.readOnly = true;
    taskLabel.classList.add('taskLabel');
    taskLabel.setAttribute('id', `text${taskIndex}`);
    taskLabel.innerHTML = taskDesc;
    taskWrap.append(taskLabel);

    const moreMenu = document.createElement('div');
    moreMenu.classList.add('menuHide');
    moreMenu.classList.add('moreMenu');
    const editBttn = document.createElement('span');
    editBttn.classList.add('material-symbols-outlined');
    editBttn.classList.add('menuVis');
    editBttn.innerHTML = 'edit';
    moreMenu.append(editBttn);
    const doneBttn = document.createElement('span');
    doneBttn.classList.add('material-symbols-outlined');
    doneBttn.classList.add('menuHide');
    doneBttn.innerHTML = 'done';
    moreMenu.append(doneBttn);
    const deleteBttn = document.createElement('span');
    deleteBttn.classList.add('material-symbols-outlined');
    deleteBttn.innerHTML = 'delete';
    moreMenu.append(deleteBttn);
    const closeMenu = document.createElement('span');
    closeMenu.classList.add('material-symbols-outlined');
    moreMenu.append(closeMenu);
    closeMenu.innerHTML = 'close';
    taskWrap.append(moreMenu);

    const moreBttn = document.createElement('span');
    moreBttn.classList.add('material-symbols-outlined');
    moreBttn.classList.add('moreBttn');
    moreBttn.classList.add('menuVis');
    moreBttn.innerHTML = 'chevron_left';

    editBttn.addEventListener('click', () => {
      editTask(taskLabel, editBttn, doneBttn);
    });
    doneBttn.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      editLocalSt(editBttn, doneBttn, taskLabel, taskWrap.id, tasksArr);
    });

    moreBttn.addEventListener('click', () => {
      moreMenu.classList.replace('menuHide', 'menuVis');
      moreBttn.classList.replace('menuVis', 'menuHide');
    });
    closeMenu.addEventListener('click', () => {
      moreBttn.classList.replace('menuHide', 'menuVis');
      moreMenu.classList.replace('menuVis', 'menuHide');
    });

    checkbox.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      taskStatusModifier(e, tasksArr);
    });

    deleteBttn.addEventListener('click', (e) => {
      // eslint-disable-next-line no-use-before-define
      deleteTask(e, tasksArr);
    });

    taskWrap.append(moreBttn);
  }
};

export const getTaskName = (tasksArr) => {
  const taskInput = document.getElementById('taskInput');
  const newTask = new Task(taskInput.value);
  tasksArr.push(newTask);
  taskInput.value = '';
};

export const addToLocalStorage = (tasksArr) => {
  const arrLocalStorage = JSON.stringify(tasksArr);
  localStorage.setItem('tasks', arrLocalStorage);
};

export const setIndex = (tasksArr) => {
  for (let i = 0; i < tasksArr.length; i += 1) {
    tasksArr[i].index = i + 1;
  }
};

const taskStatusModifier = (e, tasksArr) => {
  const box = e.target.checked;
  const div = e.target.parentNode.childNodes[1];
  const id = e.target.parentNode.id - 1;
  if (box === true) {
    div.classList.add('completed');
    tasksArr[id].completed = true;
    addToLocalStorage(tasksArr);
  }
  if (box === false) {
    div.classList.remove('completed');
    tasksArr[id].completed = false;
    addToLocalStorage(tasksArr);
  }
};

const editLocalSt = (edBttn, dnBttn, label, currentIndex, tasksArr) => {
  edBttn.classList.replace('menuHide', 'menuVis');
  dnBttn.classList.replace('menuVis', 'menuHide');
  label.readOnly = true;

  for (let i = 0; i < tasksArr.length; i += 1) {
    if ((currentIndex - 1) === i) {
      tasksArr[i].description = label.value;
    }
  }
  addToLocalStorage(tasksArr);
};

const deleteTask = (e, tasksArr) => {
  listSection.innerHTML = '';
  const taskID = e.target.parentNode.parentNode.id - 1;

  for (let i = 0; i < tasksArr.length; i += 1) {
    if (taskID === i) {
      tasksArr.splice(i, 1);
    }
  }

  setIndex(tasksArr);
  addToLocalStorage(tasksArr);
  createHTML(tasksArr);
};

const filterByStatus = (item) => {
  if (item.completed === true) {
    return false;
  }
  return true;
};

export const clearTasks = (tasksArr) => {
  listSection.innerHTML = '';
  tasksArr = tasksArr.filter(filterByStatus);
  setIndex(tasksArr);
  addToLocalStorage(tasksArr);
  createHTML(tasksArr);
  return tasksArr;
};