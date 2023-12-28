import hidePanel from './hidePannel';
import showPannel from './showPannel';

export default function removeTask(element, container, tasksNumber, status) {
  if (element) {
    const isChecked = element.classList.contains('checked');
    container.remove();
    tasksNumber.textContent = String(parseInt(tasksNumber.textContent, 10) - 1);

    if (isChecked) {
      status.textContent = String(parseInt(status.textContent, 10) - 1);
    }
  } else {
    throw new Error('Element is not defined');
  }

  if (parseInt(tasksNumber.textContent, 10) === 0) {
    showPannel();
  } else {
    hidePanel();
  }
}
