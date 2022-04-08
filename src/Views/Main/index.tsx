import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import MenuComponent from "../../Components/Menu";
import { registerUse, savePhoto, userView } from "../../Context/AuthProvider/util";
import { Container, ContainerData, Title, Table, THead, Th, Tr, TBody, Td, Photo, Form, Description } from "./style";

export default function Main(){
    const [data, setData] = useState(['']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false)
    const { register, handleSubmit } = useForm();

    const dataUsers = userView();

    useEffect(()=>{
        async function getData() {
            try {
                const dataArray = await dataUsers;
                setData(dataArray);
            } catch (error) {
                return error;
            }
        }

        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const response: any = data;   
    
    function handleOpenModal(){
        setModalIsOpen(true);
        
    }
    function handleCloseModal(){
        setModalIsOpen(false);
    }

    function handleRegisterModalOpen(){
        setRegisterOpen(true)
    }

    function handleRegisterModalClose(){
        setRegisterOpen(false)
    }

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        formData.append("file", data.file[0]);
        formData.append("user_id", data.user_id);

        try {
            console.log(formData);

            await savePhoto(formData);
        } catch (error) {
            return error;
        }
    };

    const onSubmitUser = async (data: any) => {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("mobile_phone", data.phone);

        try {
            console.log(formData);

            await registerUse(formData);
        } catch (error) {
            return error;
        }
    };

    return(
        <Container>
            <MenuComponent/>

            <ContainerData>
                <Title>Usuários Cadastrados</Title>
                <Table>
                    <THead>
                        <Th>Foto</Th>
                        <Th>ID</Th>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        <Th>Telefone</Th>
                        
                    </THead>

                    <TBody>
                        {
                            response.map((d: any)=>{

                                console.log(d.photo)
                                return(
                                    <>
                                    <Tr>
                                        <Td>{d.photo == null ? <button onClick={()=>handleOpenModal()}>+</button> : <Photo src={d.photo.photo} />}</Td>
                                        <Td>{d.id}</Td>
                                        <Td>{d.name}</Td>
                                        <Td>{d.email}</Td>
                                        <Td>{d.mobile_phone}</Td>
                                    </Tr>

                                    <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <input type="text" value={d.id} {...register("user_id")}/>

                                            <input type="file" {...register("file")}/>

                                            <button type="submit" >Enviar</button>
                                        </form>
                                    </Modal>
                                    </>
                            )
                        }) 
                        }

                    </TBody>
                </Table>

                <button onClick={()=>handleRegisterModalOpen()}>Cadastrar novo usuário</button>

                <Modal isOpen={registerOpen} onRequestClose={handleRegisterModalClose}>
                    <form onSubmit={handleSubmit(onSubmitUser)}>

                        <input type="text" placeholder="Insira seu nome" {...register("name")}/>
                        <input type="email" placeholder="Insira seu email" {...register("email")}/>
                        <input type="text" placeholder="Insira seu telefone" {...register("phone")}/>

                        <button type="submit" >Enviar</button>
                    </form>
                </Modal>
            </ContainerData>
        </Container>
    )
}