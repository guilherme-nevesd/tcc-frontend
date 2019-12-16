import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tcc-backend-energyadmin.herokuapp.com'
});

export default api;