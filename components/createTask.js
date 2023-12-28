import isChecked from './isChecked';
import keyup from './keyup';
import removeTask from './removeTask';
import capitalizeFirstLetter from '../script/utils';

export default function createTask() {
  const input = document.querySelector('#input');
  const submitButton = document.querySelector('#create-button');
  const numberOfTasks = document.querySelector('#tasks');
  const tasksCompleted = document.querySelector('#completed');

  keyup(input, submitButton);

  submitButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      const taskContainer = document.querySelector('#task-container');
      const yourTask = input.value;
      numberOfTasks.textContent = String(Number(numberOfTasks.textContent) + 1);
      const newTask = document.createElement('div');
      newTask.className = 'box';

      const checkbox = document.createElement('img');
      checkbox.className = 'checkbox';
      checkbox.src = require('../assets/blue-circle.svg');

      const mouseEnterHandler = function () {
        checkbox.src = require('../assets/dark-blue-circle.svg');
      };

      const mouseOutHandler = function () {
        checkbox.src = require('../assets/blue-circle.svg');
      };

      checkbox.addEventListener('mouseenter', mouseEnterHandler);
      checkbox.addEventListener('mouseout', mouseOutHandler);

      const task = document.createElement('p');
      task.className = 'task-description';
      task.textContent = capitalizeFirstLetter(yourTask);

      checkbox.onclick = () => {
        isChecked(checkbox, task, tasksCompleted);
        checkbox.removeEventListener('mouseenter', mouseEnterHandler);
        checkbox.removeEventListener('mouseout', mouseOutHandler);
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
        removeTask(task, newTask, numberOfTasks, tasksCompleted);
      };

      taskContainer.appendChild(newTask);
      newTask.appendChild(checkbox);
      newTask.appendChild(task);
      newTask.appendChild(trashbox);
      input.value = '';
    }
  });
}
