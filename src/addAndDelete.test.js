/** * @jest-environment jsdom */
import Methods from './modules/functions.js';

const tasksArr = new Methods();

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
    const listSection = document.createElement('div');
    listSection.setAttribute('id', 'listSect');
    tasksArr.createHTML(listSection);
    const innerTxt = '<div id="1" class="taskWrap"><input type="checkbox" name="checkbox1" class="checkbox"><input type="text" value="task1" readonly="" class="taskLabel" id="text1"><div class="menuHide moreMenu"><span class="material-symbols-outlined menuVis">edit</span><span class="material-symbols-outlined menuHide">done</span><span class="material-symbols-outlined">delete</span><span class="material-symbols-outlined">close</span></div><span class="material-symbols-outlined moreBttn menuVis">chevron_left</span></div>';
    expect(listSection.innerHTML).toBe(innerTxt);
  });
});
