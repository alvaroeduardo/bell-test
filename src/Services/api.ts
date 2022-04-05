import axios from 'axios';

export const Api = axios.create({
    baseURL: "https://cherry-custard-19143.herokuapp.com/api/v1"
})