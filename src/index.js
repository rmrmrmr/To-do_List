/** * @jest-environment jsdom */

import './style.css';
import Methods from './modules/functions.js';
import {
  listSection, addTaskBttn, clearBttn, renewBttn,
} from './modules/vars.js';

const tasksArr = new Methods();

window.addEventListener('DOMContentLoaded', () => {
  tasksArr.parseLocalSt();
  tasksArr.createHTML();
});

addTaskBttn.addEventListener('submit', (evt) => {
  const taskInput = document.getElementById('taskInput');

  evt.preventDefault();
  listSection.innerHTML = '';
  tasksArr.getTaskName(taskInput);
  taskInput.value = '';
  tasksArr.setIndex();
  tasksArr.createHTML();
  tasksArr.addToLocalStorage();
});

clearBttn.addEventListener('click', () => {
  tasksArr.clearTasks();
});

renewBttn.addEventListener('click', () => {
  listSection.innerHTML = '';
  localStorage.clear();
  tasksArr.deleteArr();
});