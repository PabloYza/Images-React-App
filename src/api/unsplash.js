// all the code related to configuration of AXIOS - gettin unsplash to accept our request

import axios from 'axios';

// this method will create an instance of the AXIOS client with some default properties
export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3683ba4db02aeb51d41a15fe49416e8c87fe677de3c6db500dd19127fa21187b'
     }
});