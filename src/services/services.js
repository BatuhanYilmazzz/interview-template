import todoAPI from './api';
import { endpoints } from './endpoints';

export const services = {
  addTodo: (todo) => todoAPI.post(endpoints.addTodo, todo),
  fetchTodos: () => todoAPI.get(endpoints.fetchTodos),
  fetchActiveTodo: (id) => todoAPI.get(endpoints.fetchActiveTodo(id)),
  updateTodo: (id, newTodo) => todoAPI.put(endpoints.updateTodo(id), newTodo),
  deleteTodo: (id) => todoAPI.delete(endpoints.deleteTodo(id)),
};
