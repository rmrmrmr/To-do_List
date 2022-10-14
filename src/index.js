import './style.css';
import Methods from './modules/functions.js';
import {
  listSection, addTaskBttn, clearBttn, renewBttn,
} from './modules/vars.js';

const tasksArr = new Methods();

window.addEventListener('DOMContentLoaded', () => {
  const hola = JSON.parse(localStorage.getItem('tasks'));
  if (hola !== null) {
    for (let i = 0; i < hola.length; i += 1) {
      tasksArr.pushi(hola[i]);
    }
  }
  tasksArr.createHTML();
});

addTaskBttn.addEventListener('submit', (evt) => {
  evt.preventDefault();
  listSection.innerHTML = '';
  const taskInput = document.getElementById('taskInput');
  tasksArr.getTaskName(taskInput);
  tasksArr.setIndex();
  tasksArr.createHTML();
  tasksArr.addToLocalStorage();
});

clearBttn.addEventListener('click', () => {
  tasksArr.clearTasks();
});

renewBttn.addEventListener('click', () => {
  localStorage.clear();
  listSection.innerHTML = '';
  tasksArr.deleteArr();
});