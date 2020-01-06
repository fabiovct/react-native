import axios from 'axios';

const api= axios.create({
    baseUrl: 'http://exp://192.168.0.6:19000:3333',
});

export default api;