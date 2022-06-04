import axios from 'axios';
// 'https://adote-um-pet-multistack.herokuapp.com/api',
// 'http://localhost:8000/api'
export const ApiService = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})