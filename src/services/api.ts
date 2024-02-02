import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'https://backend-lefome.onrender.com/'
})

export {api}