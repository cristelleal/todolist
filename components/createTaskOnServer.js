import addTaskToUI from './addTaskToUI';

export default async function createTaskOnServer(title) {
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    const newTask = await response.json();

    addTaskToUI(newTask.title, newTask.id);
  } catch (error) {
    throw new Error('Error :', error);
  }
}
