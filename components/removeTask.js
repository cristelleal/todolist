export default function removeTask(element, container, tasksNumber, status) {
  if (element) {
    const isChecked = element.classList.contains('checked');
    container.remove();
    tasksNumber.textContent--;

    if (isChecked) {
      status.textContent--;
    }
  } else {
    throw new Error('Element is not defined');
  }
}
