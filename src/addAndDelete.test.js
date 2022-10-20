/** * @jest-environment jsdom */
import Methods from './modules/functions.js';

const tasksArr = new Methods();
document.body.innerHTML = '<div id="listSect">'
+ '</div>';

describe('addTask', () => {
  test('createArr', () => {
    expect(tasksArr).toBeDefined();
  });
  test('setName', () => {
    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('value', 'task1');
    tasksArr.getTaskName(taskName);
    expect(tasksArr.tasksArr[0].description).toBe(taskName.value);
  });
  test('setIndex', () => {
    tasksArr.setIndex();
    expect(tasksArr.tasksArr[0].index).toBe(1);
  });
  test('addToLocalStorage', () => {
    tasksArr.addToLocalStorage();
    expect(localStorage.getItem('tasks') !== null).toBe(true);
  });
  test('createHTMl', () => {
    const listSection = document.querySelector('#listSect');
    tasksArr.createHTML(listSection);
    const tasksNodeList = document.querySelectorAll('.taskWrap');
    expect(tasksNodeList).toHaveLength(1);
  });
});

describe('add a Task', () => {
  test('delete a todo', () => {
    const tasksArr = new Methods();
    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('value', 'task1');
    tasksArr.getTaskName(taskName);
    tasksArr.deleteArr(0);
    expect(tasksArr.tasksArr.length).toBe(0);
  });
});

describe('editTask', () => {
  test('showMenu', () => {
    const moreBttn = document.querySelector('.moreBttn');
    const moreMenu = document.querySelector('.moreMenu');
    moreMenu.classList.replace('menuHide', 'menuVis');
    moreBttn.classList.replace('menuVis', 'menuHide');
    const hideBttn = moreBttn.classList.contains('menuHide');
    const show = moreMenu.classList.contains('menuVis');
    expect(hideBttn).toBe(true);
    expect(show).toBe(true);
  });
  test('openEdit', () => {
    const editBttn = document.querySelector('#editBttn');
    const doneBttn = document.querySelector('#doneBttn');
    const taskLabel = document.querySelector('.taskLabel');
    const readStatusTrue = taskLabel.hasAttribute('readonly');
    expect(readStatusTrue).toBe(true);
    Methods.editTask(taskLabel, editBttn, doneBttn);
    const checkEditVis = editBttn.classList.contains('menuHide');
    const doneBttnVis = doneBttn.classList.contains('menuVis');
    expect(checkEditVis).toBe(true);
    expect(doneBttnVis).toBe(true);
    const readStatusFalse = taskLabel.hasAttribute('readonly');
    expect(readStatusFalse).toBe(false);
  });
});