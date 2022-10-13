import './style.css';
import {
  createHTML, getTaskName, setIndex, addToLocalStorage, clearTasks, parseLS,
} from './modules/functions.js';
import { listSection, addTaskBttn, clearBttn } from './modules/vars.js';

let tasksArr = [];

addTaskBttn.addEventListener('submit', (evt) => {
  evt.preventDefault();
  listSection.innerHTML = '';

  getTaskName(tasksArr);
  setIndex(tasksArr);
  createHTML(tasksArr);
  addToLocalStorage(tasksArr);
});

clearBttn.addEventListener('click', () => {
  clearTasks(tasksArr);
  tasksArr = clearTasks(tasksArr);
});

window.addEventListener('DOMContentLoaded', () => {
  parseLS(tasksArr);
  tasksArr = parseLS(tasksArr);
  createHTML(tasksArr);
});