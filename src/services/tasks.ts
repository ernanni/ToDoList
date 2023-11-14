import api from '../api';
import { Task, TaskList } from '../types/globalInterfaces';

export const getTasks = async () => {
  const response = await api.get('/todolist');
  return response.data;
};

export const addTask = async (task: Task) => {
  console.log('addTask', task);
  const response = await api.post('/todolist', task);
  console.log(response.data);
  return response.data;
};

export const updateTask = async (task: Task) => {
  const response = await api.put(`/todolist/${task.list_id}`, task);
  console.log(response.data);
  return response.data;
};

export const deleteTask = async (task: Task) => {
  const response = await api.delete(`/todolist/${task.list_id}`);
  return response.data;
};
