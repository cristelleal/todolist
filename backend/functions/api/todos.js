import { json } from 'node:stream/consumers';
import { findTodos, createTodo, removeTodo } from '../todos_storage.js';

export async function index(req, res) {
  const todos = await findTodos();
  return todos;
}

export async function create(req, res) {
  const todo = await createTodo(await json(req));
  return todo;
}

export async function remove(req, res) {
  const id = await json(req);
  const todo = await removeTodo(id);
  return todo;
}
