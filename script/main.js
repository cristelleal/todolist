import createTask from '../components/createTask';
import manageTaskToUI from '../components/manageTaskToUI';
import Client from '../class/Client';

async function displayTasks() {
  const tasks = await Client.getTasks();
  tasks.forEach((task) => {
    manageTaskToUI(task.title, task.id, task.completed);
  });
}

displayTasks();
createTask();
