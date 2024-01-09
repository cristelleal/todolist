const { json } = require('stream/consumers');
const { findTodos, createTodo, removeTodo } = require('../todos_storage');

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
  const url = new URL(req.url, `http://${req.headers.host}`);
  const id = url.pathname.split('/').pop();
  const todo = await removeTodo(id);
  return todo;
}

module.exports = { index, create, remove };
