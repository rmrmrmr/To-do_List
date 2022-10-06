import { tasksWrap } from './htmlElements.js';
import { tasksList } from './tasksList.js';

export function createHTML() {
  // console.log(tasksList[1]);
  for (let i = 0; i < tasksList.length; i += 1) {
    if (i === tasksList[i].index) {
      const desc = tasksList[i].description;
      const taskIndex = tasksList[i].index;

      // create taskWrap
      const indexWrap = document.createElement('div');
      indexWrap.classList.add('indexWrap');
      indexWrap.setAttribute('id', `task${taskIndex}`);

      // create checkbox and append it to wrap
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `checkbox${taskIndex}`);
      checkbox.classList.add('checkbox');
      indexWrap.append(checkbox);

      // create task text PH and append it to wrap
      const taskDesc = document.createElement('label');
      taskDesc.setAttribute('for', `checkbox${taskIndex}`);
      taskDesc.innerHTML = desc;
      taskDesc.classList.add('taskDesc');
      indexWrap.append(taskDesc);

      const threeDots = document.createElement('div');
      threeDots.innerHTML = '<span class="material-symbols-outlined">more_vert</span>';
      threeDots.classList.add('threeDots');
      indexWrap.append(threeDots);
      // append taskWrap to mainWrap
      tasksWrap.append(indexWrap);
    }
  }
}