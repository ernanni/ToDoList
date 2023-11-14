import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todolist.trouw.com.br',
});

export default api;
