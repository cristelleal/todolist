import { json } from 'node:stream/consumers';
import { findTodos, createTodo, removeTodo } from '../todos_storage';

// eslint-disable-next-line no-unused-vars
export async function index(req, res) {
  const todos = await findTodos();
  return todos;
}

// eslint-disable-next-line no-unused-vars
export async function create(req, res) {
  const todo = await createTodo(await json(req));
  return todo;
}

// eslint-disable-next-line no-unused-vars
export async function remove(req, res) {
  const id = await json(req);
  const todo = await removeTodo(id);
  return todo;
}
