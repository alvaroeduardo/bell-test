import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";

import {
    Container,
    Form,
    Title,
    Description
} from './style';

import { useAuth } from "../../Context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const auth = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await auth.authenticate(data.email, data.password);

            navigate("/");
        } catch (error) {
            alert("Email ou senha inválidos")
        }
    };

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Entrar</Title>

                <Description>Insira seu e-mail: </Description>
                <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>

                <Description>Insira sua senha: </Description>
                <input type="password" {...register("password")} placeholder="Insira seu e-mail"/>

                <button type="submit" >Entrar</button>
            </Form>
        </Container>
    )
}