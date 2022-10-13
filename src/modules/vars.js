export const listSection = document.getElementById('listSect');
export const addTaskBttn = document.getElementById('inputForm');
export const clearBttn = document.getElementById('clearBttn');

export class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = undefined;
  }
}