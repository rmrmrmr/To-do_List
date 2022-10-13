import './style.css';
import { Methods } from './modules/functions.js';
import { listSection, addTaskBttn, clearBttn } from './modules/vars.js';

let tasksArr = [];

addTaskBttn.addEventListener('submit', (evt) => {
  evt.preventDefault();
  listSection.innerHTML = '';

  Methods.getTaskName(tasksArr);
  Methods.setIndex(tasksArr);
  Methods.createHTML(tasksArr);
  Methods.addToLocalStorage(tasksArr);
});

clearBttn.addEventListener('click', () => {
  Methods.clearTasks(tasksArr);
  tasksArr = Methods.clearTasks(tasksArr);
});

window.addEventListener('DOMContentLoaded', () => {
  Methods.parseLS(tasksArr);
  tasksArr = Methods.parseLS(tasksArr);
  Methods.createHTML(tasksArr);
});