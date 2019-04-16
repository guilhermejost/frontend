import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jost-backend.herokuapp.com'
});

export default api;
