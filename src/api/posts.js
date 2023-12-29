import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3500"
    // baseURL: 'http://192.168.8.162:3500'
});