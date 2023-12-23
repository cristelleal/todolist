export default function createTask() {
  const input = document.querySelector('#input');
  const submitButton = document.querySelector('#create-button');

  submitButton.addEventListener('click', () => {
    const taskContainer = document.querySelector('#task-container');
    const yourTask = input.value;

    const newTask = document.createElement('div');
    newTask.className = 'box';
    const checkbox = document.createElement('img');
    checkbox.className = 'checkbox';
    checkbox.src = require('../assets/blue-circle.svg');

    const task = document.createElement('p');
    task.className = 'task-description';
    task.textContent = yourTask;

    const trashbox = document.createElement('img');
    trashbox.className = '.trashbox';
    trashbox.src = require('../assets/gray-trash.svg');

    taskContainer.appendChild(newTask);
    newTask.appendChild(checkbox);
    newTask.appendChild(task);
    newTask.appendChild(trashbox);
  });
}
