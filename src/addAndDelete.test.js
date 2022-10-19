/** * @jest-environment jsdom */
import Methods from './modules/functions.js';

document.body.innerHTML = '<section id="listSection></section>';

describe('addTask', () => {
  test('createArr', () => {
    const tasksArr = new Methods();
    expect(tasksArr).toBeDefined();
  });
  test('setName', () => {
    const tasksArr = new Methods();
    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('value', 'task1');
    tasksArr.getTaskName(taskName);
    expect(tasksArr.tasksArr[0].description).toBe(taskName.value);
  });
});

// ADD TASKS
// getTaskName
// setIndex
// createHTML
// addToLocalStorage

// deleteTask

// Mock
// HTML
