import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import MenuComponent from "../../Components/Menu";
import { savePhoto, userView } from "../../Context/AuthProvider/util";
import { Container, ContainerData, Title, Table, THead, Th, Tr, TBody, Td, Photo, Form, Description } from "./style";

export default function Main(){
    const [data, setData] = useState(['']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
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

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        formData.append("file", "teste@gmail.com");
        formData.append("user_id", data.user_id);

        try {
            console.log(formData);

            await savePhoto(formData);
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

                                
                                return(
                                    <>
                                    <Tr>
                                        <Td>{d.photo == null ? <button onClick={()=>handleOpenModal()}>+</button> : d.photo}</Td>
                                        <Td>{d.id}</Td>
                                        <Td>{d.name}</Td>
                                        <Td>{d.email}</Td>
                                        <Td>{d.mobile_phone}</Td>
                                    </Tr>

                                    <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <input type="text" value={d.id} {...register("user_id")}/>

                                            <input type="text" {...register("file")}/>

                                            <button type="submit" >Enviar</button>
                                        </form>
                                    </Modal>
                                    </>
                            )
                        }) 
                        }

                    </TBody>
                </Table>

                
            </ContainerData>
        </Container>
    )
}