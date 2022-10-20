/** * @jest-environment jsdom */

import { listSection, Task } from './vars.js';

export default class Methods {
  constructor() {
    this.tasksArr = [];
  }

  getTaskName(taskInput) {
    const { tasksArr } = this;
    const newTask = new Task(taskInput.value);
    tasksArr.push(newTask);
  }

  setIndex() {
    const { tasksArr } = this;
    for (let i = 0; i < tasksArr.length; i += 1) {
      tasksArr[i].index = i + 1;
    }
  }

  createHTML(listSection) {
    const { tasksArr } = this;
    for (let i = 0; i < tasksArr.length; i += 1) {
      const taskDesc = tasksArr[i].description;
      const taskStatus = tasksArr[i].completed;
      const taskIndex = tasksArr[i].index;

      const taskWrap = document.createElement('div');
      taskWrap.setAttribute('id', taskStatus);
      taskWrap.classList.add('taskWrap');
      taskWrap.setAttribute('id', taskIndex);
      listSection.append(taskWrap);

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
      editBttn.setAttribute('id', 'editBttn');
      editBttn.innerHTML = 'edit';
      moreMenu.append(editBttn);
      const doneBttn = document.createElement('span');
      doneBttn.classList.add('material-symbols-outlined');
      doneBttn.classList.add('menuHide');
      doneBttn.setAttribute('id', 'doneBttn');
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
        Methods.editTask(taskLabel, editBttn, doneBttn);
      });
      doneBttn.addEventListener('click', () => {
        this.editLocalSt(editBttn, doneBttn, taskLabel, taskWrap.id);
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
        const box = e.target.checked;
        const div = e.target.parentNode.childNodes[1];
        const id = e.target.parentNode.id - 1;
        this.taskStatusModifier(box, div, id);
      });

      deleteBttn.addEventListener('click', (e) => {
        this.deleteTask(e);
      });

      taskWrap.append(moreBttn);
    }
  }

  addToLocalStorage() {
    const { tasksArr } = this;
    const arrLocalStorage = JSON.stringify(tasksArr);
    localStorage.setItem('tasks', arrLocalStorage);
  }

  deleteTask(e) {
    const { tasksArr } = this;
    listSection.innerHTML = '';
    const taskID = e.target.parentNode.parentNode.id - 1;

    for (let i = 0; i < tasksArr.length; i += 1) {
      if (taskID === i) {
        tasksArr.splice(i, 1);
      }
    }

    this.setIndex();
    this.addToLocalStorage();
    this.createHTML(listSection);
  }

  static editTask(label, edBttn, dnBttn) {
    edBttn.classList.replace('menuVis', 'menuHide');
    dnBttn.classList.replace('menuHide', 'menuVis');
    label.readOnly = false;
    label.select();
  }

  editLocalSt(edBttn, dnBttn, label, currentIndex) {
    const { tasksArr } = this;
    edBttn.classList.replace('menuHide', 'menuVis');
    dnBttn.classList.replace('menuVis', 'menuHide');
    label.readOnly = true;

    for (let i = 0; i < tasksArr.length; i += 1) {
      if ((currentIndex - 1) === i) {
        tasksArr[i].description = label.value;
      }
    }
    this.addToLocalStorage();
  }

  taskStatusModifier(box, div, id) {
    const { tasksArr } = this;
    if (box === true) {
      div.classList.add('completed');
      tasksArr[id].completed = true;
      this.addToLocalStorage();
    }
    if (box === false) {
      div.classList.remove('completed');
      tasksArr[id].completed = false;
      this.addToLocalStorage();
    }
  }

  clearTasks() {
    const { tasksArr } = this;
    listSection.innerHTML = '';
    for (let i = 0; i < tasksArr.length; i += 1) {
      if (tasksArr[i].completed === true) {
        tasksArr.splice(i, 1);
        i -= 1;
      }
    }
    this.setIndex();
    this.addToLocalStorage();
    this.createHTML(listSection);
  }

  parseLocalSt() {
    const els = JSON.parse(localStorage.getItem('tasks'));
    if (els !== null) {
      for (let i = 0; i < els.length; i += 1) {
        this.tasksArr.push(els[i]);
      }
    }
  }

  deleteArr() {
    while (this.tasksArr.length > 0) {
      this.tasksArr.pop();
    }
    return this.tasksArr;
  }
}