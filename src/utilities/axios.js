import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/grandmas-meal/us-central1/api';
    baseURL: 'https://us-central1-grandmas-meal.cloudfunctions.net/api'
})

export default instance; 