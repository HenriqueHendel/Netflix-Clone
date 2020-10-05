import axios from 'axios';

export const api_key = "f07a8ef834fe329c395643f03ebb3ade";

export const api = axios.create({
    "baseURL":"https://api.themoviedb.org/3"
})
