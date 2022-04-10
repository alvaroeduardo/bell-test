import { Api } from "../../Services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u')

    if(!json){
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}

export async function LoginRequest(email: string, password: string){
    try {
        const request = await Api.post('/token', { email, password });
        return request.data;
    } catch (error) {
        return null;
    }
}

export async function userView() {
    try {
        const request = await Api.get('/user/list');

        return request.data.result;
    } catch (error) {
        return null;
    }
}

export async function savePhoto(data: any) {
    const config = {
        headers:{
            "Content-Type": "multipart/form-data"
        }
      };
    try {
        const request = await Api.post('/photo/save', data, config)

        return request;
    } catch (error) {
        return null;
    }
}

export async function updatePhoto(data: any) {
    const config = {
        headers:{
            "Content-Type": "multipart/form-data"
        }
      };
    try {
        const request = await Api.post('/photo/update', data, config)

        return request;
    } catch (error) {
        return null;
    }
}

export async function registerUse(data: any) {
    const config = {
        headers:{
            "Content-Type": "multipart/form-data"
        }
      };
    try {
        const request = await Api.post('/user/create', data, config)

        return request;
    } catch (error) {
        return null;
    }
}

export async function getOneUserView(params: any) {
    try {
        const request = await Api.get('/user/view/'+params);

        return request.data.result;
    } catch (error) {
        return null;
    }
}

export async function updateUser(data: any) {
    const config = {
        headers:{
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
        }
      };
    try {
        const request = await Api.post('/user/update', data, config)

        return request;
    } catch (error) {
        return null;
    }
}

export async function getPhoto(params: any) {
    try {
        const request = await Api.get('/photo/view/'+params).then(response => response.data).catch(error => error);

        return request;
    } catch (error) {
        return null;
    }
}