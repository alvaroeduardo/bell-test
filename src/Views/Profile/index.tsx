import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import Modal from 'react-modal';

import MenuComponent from '../../Components/Menu';
import { updatePhoto, getOneUserView, updateUser } from '../../Context/AuthProvider/util';
import { Container, ContainerData, Form, Photo, Title } from './style';
import { useForm } from "react-hook-form";


export default function ProfileView(){
    const search = useLocation().search;
    const id: any = new URLSearchParams(search).get('id');

    const [registerOpen, setRegisterOpen] = useState(false);
    const [data, setData] = useState(['']);

    const { register, handleSubmit } = useForm();

    const dataUsers = getOneUserView(id);

    useEffect(()=>{
            const getData = async () => {
                try {        
                    const dataUser = await dataUsers;

                    setData(dataUser);
                } catch (error) {
                    return error;
                }
            };

        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onSubmitPhotoUpdate = async (data: any) => {
        const formData = new FormData();

        formData.append("file", data.file[0]);
        formData.append("user_id", id);

        try {
            console.log(formData);

            await updatePhoto(formData);

        } catch (error) {
            return error;
        }
    };

    const onSubmitUpdateUser = async (data: any) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("mobile_phone", data.mobile_phone);
        formData.append("user_id", id);

        try {
            console.log(formData);

            await updateUser(formData);

        } catch (error) {
            return error;
        }
    };



    const response: any = data;  

    const imageUser = response.photo;


    return(
        <Container>
            <MenuComponent/>

            <ContainerData>
                <Title>Perfil de {response.name}</Title>
                <Photo src={imageUser} />

                <Form onSubmit={handleSubmit(onSubmitPhotoUpdate)}>
                    <input type="file" {...register("file")}/>

                    <button type="submit">Atualizar foto</button>
                </Form>

                <Form onSubmit={handleSubmit(onSubmitUpdateUser)}>
                    <input type="text" defaultValue={response.name} {...register("name")}/>
                    <input type="email" defaultValue={response.email} {...register("email")}/>
                    <input type="text" defaultValue={response.mobile_phone} {...register("mobile_phone")}/>

                    <button type='submit'> Editar</button>
                </Form>

            </ContainerData>
        </Container>
    )
}