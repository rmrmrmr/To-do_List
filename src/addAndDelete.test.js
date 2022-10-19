/** * @jest-environment jsdom */
import Methods from './modules/functions.js';

document.body.innerHTML = '<section id="listSection></section>';
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
});

// ADD TASKS
// setIndex
// createHTML
// addToLocalStorage

// deleteTask

// Mock
// HTML
