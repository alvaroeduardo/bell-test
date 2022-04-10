import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import Modal from 'react-modal';

import MenuComponent from '../../Components/Menu';
import { updatePhoto, getOneUserView, updateUser, savePhoto } from '../../Context/AuthProvider/util';
import { Container, ContainerData, DataContainer, Divisoria, Form, Photo, PhotoContainer, Title } from './style';
import { useForm } from "react-hook-form";


export default function ProfileView(){
    const search = useLocation().search;
    const id: any = new URLSearchParams(search).get('id');

    const [data, setData] = useState(['']);
    const [modalPhoto, setModalPhoto] = useState(false);
    const [modalPhotoUpdate, setModalPhotoUpdate] = useState(false);

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

    function handleOpenModal(){
        setModalPhoto(true);

    }

    function handleCloseModal(){
        setModalPhoto(false);
    }

    function handleOpenModalUpdate(){
        setModalPhotoUpdate(true);

    }

    function handleCloseModalUpdate(){
        setModalPhotoUpdate(false);
    }

    function reload(){
        setTimeout(()=>{window.location.reload()}, 3000 );
    }

    const onSubmitPhotoUpdate = async (data: any) => {
        const formData = new FormData();

        formData.append("file", data.file[0]);
        formData.append("user_id", id);

        try {

            await updatePhoto(formData);

            reload();
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

            await updateUser(formData);

            reload();
        } catch (error) {
            return error;
        }
    };

    const onSubmitSavePhoto = async (data: any) => {
        const formData = new FormData();

        formData.append("file", data.file[0]);
        formData.append("user_id", id);

        try {

            await savePhoto(formData);

            reload();
        } catch (error) {
            return error;
        }
    };  



    const response: any = data;  

    const imageUser = response.photo;



    

    function photoUser(){
        if(imageUser == null){
            return(
                <>
                    <Title>Adicionar Foto</Title>
                    <button onClick={()=>handleOpenModal()}>+</button>
                </>
            )
        } else {
            return (
                <>
                    <Photo src={imageUser.photo} />
                    <button onClick={()=>{handleOpenModalUpdate();}}>Editar foto</button>
                </>
            )
        }
    }


    return(
        <Container>
            <MenuComponent/>

            <ContainerData>
                <PhotoContainer>
                    {photoUser()}
                </PhotoContainer>
                
                <DataContainer>

                    <Title>Atualizar dados</Title>

                    <Form onSubmit={handleSubmit(onSubmitUpdateUser)}>
                        <input type="text" defaultValue={response.name} {...register("name")}/>
                        <input type="email" defaultValue={response.email} {...register("email")}/>
                        <input type="text" defaultValue={response.mobile_phone} {...register("mobile_phone")}/>

                        <button type='submit'>Editar</button>
                    </Form>

                </DataContainer>

            </ContainerData>

            <Modal isOpen={modalPhoto} onRequestClose={handleCloseModal}>
                <Form onSubmit={handleSubmit(onSubmitSavePhoto)}>
                    <input type="file" {...register("file")}/>
                    <button type='submit'> Editar</button>
                </Form>
            </Modal>

            <Modal isOpen={modalPhotoUpdate} onRequestClose={handleCloseModalUpdate}>
                <Form onSubmit={handleSubmit(onSubmitPhotoUpdate)}>
                    <input type="file" {...register("file")}/>

                    <button type="submit">Atualizar foto</button>
                </Form>
            </Modal>
        </Container>
    )
}