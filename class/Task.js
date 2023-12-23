export default class Task {
  constructor(taskDescription, state, id) {
    this.taskDescription = taskDescription;
    this.state = state;
    this.id = id;
  }

  getFullTask() {
    return `${this.taskDescription} ${this.state} ${this.id}`;
  }
}

