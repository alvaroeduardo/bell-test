import axios from 'axios';
import { getUserLocalStorage } from '../Context/AuthProvider/util';

export const Api = axios.create({
    baseURL: "https://cherry-custard-19143.herokuapp.com/api/v1"
});

Api.interceptors.request.use(
    (config: any) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = `Bearer ${user?.token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)