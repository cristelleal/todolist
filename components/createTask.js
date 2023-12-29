import keyup from './keyup';
import hidePanel from './hidePannel';
import createTaskOnServer from './createTaskOnServer';

export default function createTask() {
  const input = document.querySelector('#input');
  const submitButton = document.querySelector('#create-button');

  keyup(input, submitButton);

  submitButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      const yourTask = input.value;
      hidePanel();
      createTaskOnServer(yourTask);
    }
  });
}
