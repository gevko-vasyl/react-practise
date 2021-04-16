import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const getProducts = () =>
  axios.get('/products').then(({ data }) => data);

export const addProducts = payload =>
  axios.post('/products', payload).then(({ data }) => data);

export const removeProducts = id =>
  axios.delete(`/products/${id}`).then(({ data }) => data);

export const getCart = () => axios.get('/cart').then(({ data }) => data);
