import './style.css';
import Methods from './modules/functions.js';
import { listSection, addTaskBttn, clearBttn } from './modules/vars.js';

// let tasksArr = new Methods();

addTaskBttn.addEventListener('submit', (evt, tasksArr) => {
  evt.preventDefault();
  listSection.innerHTML = '';

  Methods.getTaskName(tasksArr);
  Methods.setIndex(tasksArr);
  Methods.createHTML(tasksArr);
  Methods.addToLocalStorage(tasksArr);
});

clearBttn.addEventListener('click', (tasksArr) => {
  Methods.clearTasks(tasksArr);
  tasksArr = Methods.clearTasks(tasksArr);
});

window.addEventListener('DOMContentLoaded', () => {
  let tasksArr = new Methods();
  Methods.parseLS(tasksArr);
  tasksArr = Methods.parseLS(tasksArr);
  Methods.createHTML(tasksArr);
});