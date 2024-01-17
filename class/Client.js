import manageTaskToUI from '../components/manageTaskToUI';

const URL_API = 'http://localhost:3000';

export default class Client {
  static async getTasks() {
    try {
      const response = await fetch(`${URL_API}/todos`);
      const tasks = await response.json();

      return tasks;
    } catch (error) {
      throw new Error('Error :', error);
    }
  }

  static async createTaskOnServer(title) {
    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      const newTask = await response.json();
      const { id } = newTask;

      manageTaskToUI(newTask.title, id);
    } catch (error) {
      throw new Error('Error :', error);
    }
  }

  static async removeTaskOnServer(id) {
    try {
      const response = await fetch(`${URL_API}/todos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateTaskOnServer(id, title, state) {
    try {
      await fetch(`${URL_API}/todos?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, state }),
      });
      const taskId = this.tasks.find((task) => task.id === id);
      taskId.title = title;
      taskId.state = state;
    } catch (error) {
      throw new Error('Error :', error);
    }
  }
}
