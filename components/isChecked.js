export default function isChecked(checkbox, container, status) {
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    checkbox.src = require('../assets/purple-check.svg');
    container.classList.add('checked');
    status.textContent++;
  } else {
    checkbox.src = require('../assets/blue-circle.svg');
    container.classList.remove('checked');
    container.classList.add('task-description');
    status.textContent--;
  }
}

