const { writeFile, readFile } = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const path = './backend/storage/todos.json';

async function findTodos() {
  try {
    const data = await readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    process.stderr.write(error);
    return [];
  }
}

async function createTodo({ title, completed = false }) {
  const todo = { title, completed, id: uuidv4() };
  const todos = [todo, ...(await findTodos())];
  await writeFile(path, JSON.stringify(todos));
  return todo;
}

async function removeTodo(id) {
  const todos = await findTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    await writeFile(path, JSON.stringify(todos));
  }
}

module.exports = { findTodos, createTodo, removeTodo };
