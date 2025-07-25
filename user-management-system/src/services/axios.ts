import axios from 'axios';

const API = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default API;
