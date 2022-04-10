import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import MenuComponent from "../../Components/Menu";
import UserProfile from "../../Image/user-pen-solid.svg";
import { registerUse, userView } from "../../Context/AuthProvider/util";
import { Container, ContainerData, Title, Table, THead, Th, Tr, TBody, Td, Photo, Form, Icon } from "./style";
import { Link } from "react-router-dom";

export default function Main(){
    const [data, setData] = useState(['']);
    const [registerOpen, setRegisterOpen] = useState(false);


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

    
    

    function handleRegisterModalOpen(){
        setRegisterOpen(true)
    }

    function handleRegisterModalClose(){
        setRegisterOpen(false)
    }

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


    function reload(){
        setTimeout(()=>{window.location.reload()}, 2000 );
    }

    return(
        <Container>
            <MenuComponent/>

            <ContainerData>
                <Title>Usuários Cadastrados</Title>
                <Table>
                    <THead>
                        <Tr>
                            <Th></Th>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Email</Th>
                            <Th>Telefone</Th>
                            <Th>Data de Cadastro</Th>
                            <Th></Th>
                        </Tr>
                    </THead>

                    <TBody>
                        {
                            response.map((d: any)=>{
                                const link="/profile?id=" + d.id;
                                const imageUser = d.photo;

                                function photoUser(){
                                    if(imageUser == null){
                                        return(
                                            <>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <Photo src={imageUser.photo} />
                                            </>
                                        )
                                    }
                                }

                                return(
                                    <>
                                        <Tr>
                                            <Td>{photoUser()}</Td>
                                            <Td>{d.id}</Td>
                                            <Td>{d.name}</Td>
                                            <Td>{d.email}</Td>
                                            <Td>{d.mobile_phone}</Td>
                                            <Td>{d.created_at}</Td>
                                            <Td><Link to={link}><Icon src={UserProfile}/></Link></Td>
                                        </Tr>
                                    </>
                                )
                            }) 
                        }

                    </TBody>
                </Table>

                <button onClick={()=>{handleRegisterModalOpen(); reload()}}>Cadastrar novo usuário</button>

                <Modal isOpen={registerOpen} ariaHideApp={false} onRequestClose={handleRegisterModalClose}>
                    <Form onSubmit={handleSubmit(onSubmitUser)}>

                        <input type="text" placeholder="Insira seu nome" {...register("name")}/>
                        <input type="email" placeholder="Insira seu email" {...register("email")}/>
                        <input type="text" placeholder="Insira seu telefone" {...register("phone")}/>

                        <button type="submit" >Enviar</button>
                    </Form>
                </Modal>


            </ContainerData>
        </Container>
    )
}