const { json } = require('stream/consumers');
const { findTodos, createTodo, removeTodo, updateTodo } = require('../todos_storage');

// eslint-disable-next-line no-unused-vars
async function index(req, res) {
  const todos = await findTodos();
  return todos;
}

// eslint-disable-next-line no-unused-vars
async function create(req, res) {
  const todo = await createTodo(await json(req));
  return todo;
}

// eslint-disable-next-line no-unused-vars
async function remove(req, res) {
  const { id } = await json(req);
  const todo = await removeTodo(id);
  return todo;
}

async function update(req, res) {
  const { id, completed } = await json(req);
  const todo = await updateTodo({ id, completed });
  return todo;
}

module.exports = { index, create, remove, update };
