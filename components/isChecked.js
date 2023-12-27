export default function isChecked(element, container, status) {
  let isChecked = false;

  isChecked = !isChecked;
  if (isChecked) {
    element.src = require('../assets/purple-check.svg');
    container.classList.add('checked');
    status.textContent++;
  } else {
    element.src = require('../assets/blue-circle.svg');
    container.classList.remove('checked');
    container.classList.add('task-description');
    status.textContent--;
  }
}
