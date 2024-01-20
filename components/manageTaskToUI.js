import capitalizeFirstLetter from '../script/utils';
import isChecked from './isChecked';
import removeTask from './removeTask';
import Client from '../class/Client';

export default function manageTaskToUI(title, id, completed) {
  const input = document.querySelector('#input');
  const numberOfTasks = document.querySelector('#tasks');
  const tasksCompleted = document.querySelector('#completed');
  const taskContainer = document.querySelector('#task-container');
  numberOfTasks.textContent = String(Number(numberOfTasks.textContent) + 1);

  const newTask = document.createElement('div');
  newTask.className = 'box';

  const checkbox = document.createElement('img');
  checkbox.className = 'checkbox';
  checkbox.src = completed ? require('../assets/purple-check.svg') : require('../assets/blue-circle.svg');

  const mouseEnterHandler = () => {
    checkbox.src = require('../assets/dark-blue-circle.svg');
  };

  const mouseOutHandler = () => {
    checkbox.src = require('../assets/blue-circle.svg');
  };

  checkbox.addEventListener('mouseenter', mouseEnterHandler);
  checkbox.addEventListener('mouseout', mouseOutHandler);

  const taskElement = document.createElement('p');
  taskElement.className = 'task-description';
  taskElement.textContent = capitalizeFirstLetter(title);

  checkbox.onclick = () => {
    isChecked(checkbox, taskElement, tasksCompleted);
    checkbox.removeEventListener('mouseenter', mouseEnterHandler);
    checkbox.removeEventListener('mouseout', mouseOutHandler);
    Client.updateTaskOnServer(id, checkbox.checked);
  };

  const trashbox = document.createElement('img');
  trashbox.className = 'trashbox';
  trashbox.src = require('../assets/gray-trash.svg');

  trashbox.addEventListener('mouseover', () => {
    trashbox.src = require('../assets/danger-trash.svg');
  });

  trashbox.addEventListener('mouseout', () => {
    trashbox.src = require('../assets/gray-trash.svg');
  });

  trashbox.onclick = () => {
    removeTask(taskElement, newTask, numberOfTasks, tasksCompleted);
    Client.removeTaskOnServer(id);
  };

  newTask.appendChild(checkbox);
  newTask.appendChild(taskElement);
  newTask.appendChild(trashbox);

  taskContainer.appendChild(newTask);
  input.value = '';
}
