import { writeFile, readFile } from 'node:fs/promises';

const path = './backend/storage/todos.json';

export async function findTodos() {
  try {
    const data = await readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createTodo({ title, completed = false }) {
  const todo = { title, completed, id: Date.now() };
  const todos = [todo, ...(await findTodos())];
  await writeFile(path, JSON.stringify(todos));
  return todo;
}

export async function removeTodo(id) {
  const todos = await findTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    await writeFile(path, JSON.stringify(todos));
  }
  return { id };
}
