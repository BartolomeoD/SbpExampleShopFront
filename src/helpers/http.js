import axios from 'axios';

export const http = axios.create( {
    baseURL: 'https://sbp-example-shop.herokuapp.com'
})