export const endpoints = {
  addTodo: '/api/todos',
  fetchTodos: '/api/todos',
  fetchActiveTodo: (id) => `/api/todos/${id}`,
  updateTodo: (id) => `/api/todos/${id}`,
  deleteTodo: (id) => `/api/todos/${id}`
};
