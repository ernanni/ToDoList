import api from '../api';
import { Task, TaskListProps } from '../types/TaskListProps';

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

export const updateTask = async () => {};

export const deleteTask = async () => {};
