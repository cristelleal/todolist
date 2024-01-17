export default function isChecked(checkbox, container, status) {
  checkbox.checked = !checkbox.checked;

  try {
    if (checkbox.checked) {
      checkbox.src = require('../assets/purple-check.svg');
      container.classList.add('checked');
      status.textContent = String(parseInt(status.textContent, 10) + 1);
    } else {
      checkbox.src = require('../assets/blue-circle.svg');
      container.classList.remove('checked');
      container.classList.add('task-description');
      status.textContent = String(parseInt(status.textContent, 10) - 1);
    }
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
}
